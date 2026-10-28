/* ============================================================
 * 生活手账 · 自建后端 SDK 兼容层（shim）
 * ------------------------------------------------------------
 * 作用：替换原来的 workbuddy sdk.index.global.js，
 *       对上暴露完全相同的 window.WorkBuddyCloud 接口。
 *       app.js 的 5776 行不需要任何修改。
 *
 * 对下：PostgREST（数据）+ 本地 auth 服务（鉴权）
 *
 * 接口清单（从 app.js 实际调用点反推，共 82 + 11 处）：
 *   database.from(t)
 *     .select(cols) .insert(obj) .update(obj) .delete()
 *     .eq .neq .gt .gte .lt .lte
 *     .order(col,{ascending}) .limit(n)
 *     .single() .maybeSingle()
 *   auth.getSession getUser refreshSession signInWithPassword
 *        sendOtp verifyOtp resetPasswordForEmail resetPasswordForOld
 *        getAccessToken signOut onAuthStateChange
 *
 * ⛔ 返回形状约定（照 PROJECT.md §16 的实测结论）：
 *   包装器统一返回 { data, error }，
 *   getSession → data 是 session 对象（有 .user）
 *   getUser    → data 就是用户对象本身（⚠ 没有 .user）
 * ============================================================ */
(function () {
  'use strict';

  /* ------------------------------------------------------------
   * 0. 常量
   * ------------------------------------------------------------ */
  // 前端与本 API 同域（Caddy 一个域名全包），用相对路径 ⇒ 零 CORS 问题。
  // ⛔ 不用 cfg.endpoint —— 那是 workbuddy 的域名，已经不存在了。
  var API_BASE = '';
  var REST_PREFIX = '/.cloud/database/rest';   // 与 app.js 里那处裸 fetch 保持一致
  var AUTH_PREFIX = '/auth/v1';
  var SESSION_KEY = 'lb_sess_v1';

  /* ------------------------------------------------------------
   * 1. 会话
   * ------------------------------------------------------------ */
  var session = null;
  var listeners = [];

  function loadSession() {
    try {
      var raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      if (!s || !s.access_token) return null;
      return s;
    } catch (e) { return null; }
  }

  function storeSession(s) {
    session = s;
    try {
      if (s) localStorage.setItem(SESSION_KEY, JSON.stringify(s));
      else localStorage.removeItem(SESSION_KEY);
    } catch (e) { /* 隐私模式写不进去，忽略 */ }
  }

  function emit(event) {
    listeners.forEach(function (cb) {
      try { cb(event, session); } catch (e) { /* 监听器自己炸了不能影响主流程 */ }
    });
  }

  session = loadSession();

  // access_token 过期了就先不管 —— PostgREST 会 401，
  // 由 app.js 的 tryRecoverSession 走 refresh 路径。

  /* ------------------------------------------------------------
   * 2. HTTP
   * ------------------------------------------------------------ */
  function netErr(msg) {
    return { message: msg || '网络不可用', code: 'NETWORK', details: null };
  }

  async function http(path, opts) {
    opts = opts || {};
    var headers = { 'Accept': 'application/json' };
    if (opts.body !== undefined) headers['Content-Type'] = 'application/json';
    if (opts.prefer) headers['Prefer'] = opts.prefer;
    if (session && session.access_token) {
      headers['Authorization'] = 'Bearer ' + session.access_token;
    }

    var res;
    try {
      res = await fetch(API_BASE + path, {
        method: opts.method || 'GET',
        headers: headers,
        body: opts.body === undefined ? undefined : JSON.stringify(opts.body),
        // 离线时不要挂很久
        signal: opts.signal
      });
    } catch (e) {
      return { ok: false, status: 0, netError: true, error: netErr(), data: null };
    }

    var text = await res.text();
    var data = null;
    if (text) {
      try { data = JSON.parse(text); } catch (e) { data = text; }
    }

    if (!res.ok) {
      var err = { message: '请求失败 (' + res.status + ')', code: String(res.status), details: null };
      if (data && typeof data === 'object') {
        err.message = data.message || data.msg || err.message;
        err.details = data.details || data.hint || null;
        err.code = data.code || err.code;
      } else if (typeof data === 'string' && data) {
        err.message = data.slice(0, 200);
      }
      return { ok: false, status: res.status, error: err, data: null };
    }

    return { ok: true, status: res.status, data: data, headers: res.headers };
  }

  /* ------------------------------------------------------------
   * 3. 查询构造器
   *    目标：形状对齐 supabase-js / PostgREST，且可 await
   * ------------------------------------------------------------ */
  var OPS = {
    eq: 'eq', neq: 'neq', gt: 'gt', gte: 'gte', lt: 'lt', lte: 'lte',
    like: 'like', ilike: 'ilike'
  };

  function Query(table) {
    this.table = table;
    this.mode = 'select';
    this.payload = null;
    this.cols = '*';
    this.filters = [];      // [{col, op, val}]
    this.orders = [];       // [{col, asc}]
    this.limitN = null;
    this.singleMode = null; // 'single' | 'maybeSingle'
    this.wantRows = false;  // insert/update/delete 后是否要回传行
  }

  Query.prototype.select = function (cols) {
    this.cols = cols || '*';
    // 写在 insert/update/delete 后面时，等同于 PostgREST 的 return=representation
    if (this.mode !== 'select') this.wantRows = true;
    return this;
  };
  Query.prototype.insert = function (obj) {
    this.mode = 'insert'; this.payload = obj; return this;
  };
  Query.prototype.update = function (obj) {
    this.mode = 'update'; this.payload = obj; return this;
  };
  Query.prototype['delete'] = function () {
    this.mode = 'delete'; return this;
  };

  Object.keys(OPS).forEach(function (m) {
    Query.prototype[m] = function (col, val) {
      this.filters.push({ col: col, op: OPS[m], val: val });
      return this;
    };
  });

  Query.prototype.order = function (col, opt) {
    var asc = !opt || opt.ascending !== false;
    this.orders.push({ col: col, asc: asc });
    return this;
  };
  Query.prototype.limit = function (n) { this.limitN = n; return this; };
  Query.prototype.single = function () { this.singleMode = 'single'; return this; };
  Query.prototype.maybeSingle = function () { this.singleMode = 'maybeSingle'; return this; };

  function enc(v) {
    if (v === null || v === undefined) return 'null';
    return encodeURIComponent(String(v));
  }

  Query.prototype._url = function () {
    var qs = [];
    // select
    if (this.cols && this.cols !== '*') qs.push('select=' + enc(this.cols));
    else if (this.mode !== 'select' && this.wantRows) qs.push('select=*');

    // filters
    this.filters.forEach(function (f) {
      qs.push(enc(f.col) + '=' + f.op + '.' + enc(f.val));
    });

    // 排序（多字段，逗号分隔；desc 要显式写）
    if (this.orders.length) {
      qs.push('order=' + this.orders.map(function (o) {
        return o.col + (o.asc ? '.asc' : '.desc');
      }).join(','));
    }

    if (this.limitN != null) qs.push('limit=' + this.limitN);

    return REST_PREFIX + '/' + encodeURIComponent(this.table)
      + (qs.length ? ('?' + qs.join('&')) : '');
  };

  /* 把 PostgREST 的数组结果收窄成 single / maybeSingle 期望的形状 */
  Query.prototype._shape = function (rows) {
    if (!this.singleMode) return rows;
    var arr = Array.isArray(rows) ? rows : (rows == null ? [] : [rows]);
    if (arr.length === 0) {
      return this.singleMode === 'maybeSingle' ? null : { __singleMiss: true };
    }
    return arr[0];
  };

  Query.prototype._exec = async function () {
    var method = 'GET', body, prefer;
    if (this.mode === 'insert') {
      method = 'POST';
      body = Array.isArray(this.payload) ? this.payload : [this.payload];
      if (this.wantRows) prefer = 'return=representation';
    } else if (this.mode === 'update') {
      method = 'PATCH';
      body = this.payload;
      if (this.wantRows) prefer = 'return=representation';
    } else if (this.mode === 'delete') {
      method = 'DELETE';
      if (this.wantRows) prefer = 'return=representation';
    }

    // ⛔ 写操作没有 filter 会打全表 —— 这是真事故，必须挡住
    if ((this.mode === 'update' || this.mode === 'delete') && this.filters.length === 0) {
      return { data: null, error: { message: '拒绝执行：' + this.mode + ' 没有过滤条件', code: 'GUARD' } };
    }

    var isWrite = this.mode !== 'select';

    // 已经知道没网：别等超时，直接入队
    if (isWrite && !navigator.onLine) {
      var p0 = Array.isArray(this.payload) ? this.payload[0] : this.payload;
      return enqueue(this.table, this.mode, p0, this.mode === 'insert' ? null : idFromFilters(this));
    }

    var r = await http(this._url(), { method: method, body: body, prefer: prefer });

    if (!r.ok) {
      /* ⛔ 只有「网络断了」和「服务端 5xx」才入队。
         4xx 是用户能修正的真实错误（金额非法、约束冲突），
         排进队列只会变成永远同步不上去的僵尸记录。 */
      if (isWrite && (r.netError || r.status >= 500)) {
        var p1 = Array.isArray(this.payload) ? this.payload[0] : this.payload;
        return enqueue(this.table, this.mode, p1, this.mode === 'insert' ? null : idFromFilters(this));
      }
      return { data: null, error: r.error };
    }

    var shaped = this._shape(r.data);
    if (shaped && shaped.__singleMiss) {
      return { data: null, error: { message: '期望一行，实际 0 行', code: 'PGRST116' } };
    }
    return { data: shaped, error: null };
  };

  // 让 Query 可以直接 await
  Query.prototype.then = function (onOk, onErr) {
    return this._exec().then(onOk, onErr);
  };
  Query.prototype.catch = function (fn) {
    return this._exec().catch(fn);
  };

  /* ------------------------------------------------------------
   * 4. auth
   * ------------------------------------------------------------ */
  function pickUserFrom(payload) {
    // 兼容多种返回形状：{user}, {session:{user}}, 或就是 user 本身
    if (!payload) return null;
    if (payload.session && payload.session.user) return payload.session.user;
    if (payload.user) return payload.user;
    if (payload.id) return payload;
    return null;
  }

  function makeSession(j) {
    if (!j) return null;
    var u = pickUserFrom(j);
    var at = j.access_token || (j.session && j.session.access_token) || null;
    if (!at) return null;
    return {
      access_token: at,
      refresh_token: j.refresh_token || (j.session && j.session.refresh_token) || null,
      expires_at: j.expires_at || (j.session && j.session.expires_at) || null,
      user: u
    };
  }

  var auth = {
    getSession: async function () {
      return { data: session || null, error: null };
    },

    getUser: async function () {
      if (!session || !session.access_token) return { data: null, error: null };
      var r = await http(AUTH_PREFIX + '/user');
      if (!r.ok) return { data: null, error: r.error };
      // ⛔ getUser 的 data 就是用户对象本身，没有 .user
      return { data: pickUserFrom(r.data), error: null };
    },

    getAccessToken: async function () {
      return session ? session.access_token : null;
    },

    signInWithPassword: async function (cred) {
      var r = await http(AUTH_PREFIX + '/token?grant_type=password', {
        method: 'POST',
        body: { email: cred.email, password: cred.password }
      });
      if (!r.ok) return { data: null, error: r.error };
      var s = makeSession(r.data);
      if (!s) return { data: null, error: { message: '登录响应格式不对', code: 'BAD_RESPONSE' } };
      storeSession(s);
      emit('SIGNED_IN');
      return { data: s, error: null };
    },

    refreshSession: async function () {
      if (!session || !session.refresh_token) return { data: null, error: { message: '没有 refresh_token' } };
      var r = await http(AUTH_PREFIX + '/token?grant_type=refresh_token', {
        method: 'POST',
        body: { refresh_token: session.refresh_token }
      });
      if (!r.ok) return { data: null, error: r.error };
      var s = makeSession(r.data);
      if (!s) return { data: null, error: { message: '刷新响应格式不对' } };
      storeSession(s);
      emit('TOKEN_REFRESHED');
      return { data: s, error: null };
    },

    signOut: async function () {
      // 先通知服务端作废 refresh_token（失败也无所谓），再清本地
      if (session && session.refresh_token) {
        await http(AUTH_PREFIX + '/logout', { method: 'POST', body: { refresh_token: session.refresh_token } });
      }
      storeSession(null);
      emit('SIGNED_OUT');
      return { data: null, error: null };
    },

    // 单用户自建场景：验证码 / 邮件找回都关了，只留密码。
    // ⛔ 返回明确的错误而不是假装成功 —— 假装成功会让用户对着空气等验证码。
    sendOtp: async function () {
      return { data: null, error: { message: '自建版已关闭邮箱验证码，请用密码登录', code: 'DISABLED' } };
    },
    verifyOtp: async function () {
      return { data: null, error: { message: '自建版已关闭邮箱验证码，请用密码登录', code: 'DISABLED' } };
    },
    resetPasswordForEmail: async function () {
      return { data: null, error: { message: '自建版不发找回邮件，请在服务器上用 psql 改密码', code: 'DISABLED' } };
    },
    resetPasswordForOld: async function (cred) {
      var r = await http(AUTH_PREFIX + '/password', {
        method: 'POST',
        body: { old_password: cred && cred.oldPassword, new_password: cred && cred.newPassword }
      });
      if (!r.ok) return { data: null, error: r.error };
      return { data: { ok: true }, error: null };
    },

    onAuthStateChange: function (cb) {
      listeners.push(cb);
      // 返回一个带 unsubscribe 的订阅对象
      return {
        data: {
          subscription: {
            unsubscribe: function () {
              var i = listeners.indexOf(cb);
              if (i > -1) listeners.splice(i, 1);
            }
          }
        }
      };
    }
  };

  /* ------------------------------------------------------------
   * 4.5 llm —— 周报的日记摘要
   * ------------------------------------------------------------
   * app.js 只用到两处（见 app.js:4784 / 4822）：
   *   cloud.llm.models.list(signal)            → 返回 [{id, ...}]
   *   cloud.llm.chat.completions.create(opts)  → 异步迭代 OpenAI 风格 chunk
   *
   * ⛔ 必须是 **async iterable**，不是 Promise。
   *    app.js 写的是 `for await (const chunk of ...)`。
   * ⛔ 必须真流式。攒完再一次性给会让界面一直停在
   *    「正在读原文，稍等…」，因为它是按 chunk 增量更新的。
   * ------------------------------------------------------------ */
  function llmHeaders() {
    var h = { 'Content-Type': 'application/json' };
    if (session && session.access_token) h['Authorization'] = 'Bearer ' + session.access_token;
    return h;
  }

  var llm = {
    models: {
      list: async function (signal) {
        var r = await fetch(API_BASE + '/llm/v1/models', {
          headers: llmHeaders(),
          signal: signal
        });
        if (!r.ok) throw new Error('models ' + r.status + ' ' + (await r.text()).slice(0, 160));
        var j = await r.json();
        // 上游可能是 {data:[...]}，也可能直接是数组
        return Array.isArray(j) ? j : ((j && j.data) || []);
      }
    },
    chat: {
      completions: {
        create: function (opts) {
          opts = opts || {};
          // 返回异步生成器：调用方用 for await 消费
          return (async function* () {
            // signal 不能进 body，它是 fetch 的参数
            var body = {};
            Object.keys(opts).forEach(function (k) {
              if (k !== 'signal') body[k] = opts[k];
            });

            var res = await fetch(API_BASE + '/llm/v1/chat/completions', {
              method: 'POST',
              headers: llmHeaders(),
              body: JSON.stringify(body),
              signal: opts.signal
            });

            if (!res.ok) {
              var t = '';
              try { t = await res.text(); } catch (e) {}
              throw new Error('llm ' + res.status + ' ' + String(t).slice(0, 200));
            }

            // 非流式（上游没给 body reader）就整体返回一个 chunk
            if (!res.body || typeof res.body.getReader !== 'function') {
              var whole = await res.json();
              yield whole;
              return;
            }

            var reader = res.body.getReader();
            var dec = new TextDecoder();
            var buf = '';

            while (true) {
              var step = await reader.read();
              if (step.done) break;
              buf += dec.decode(step.value, { stream: true });

              // SSE 以空行分隔事件
              var idx;
              while ((idx = buf.indexOf('\n\n')) >= 0) {
                var raw = buf.slice(0, idx);
                buf = buf.slice(idx + 2);

                var lines = raw.split('\n');
                for (var i = 0; i < lines.length; i++) {
                  var line = lines[i].trim();
                  if (line.indexOf('data:') !== 0) continue;
                  var payload = line.slice(5).trim();
                  if (payload === '[DONE]') return;      // 正常结束
                  if (!payload) continue;
                  var chunk;
                  try { chunk = JSON.parse(payload); } catch (e) { continue; }
                  yield chunk;
                }
              }
            }
          })();
        }
      }
    }
  };

  /* ------------------------------------------------------------
   * 4.6 离线队列
   * ------------------------------------------------------------
   * 目标：断网/后端不可达时，写入不丢；恢复后按顺序重放。
   *
   * 三个关键设计：
   *
   * 1) **客户端生成 UUIDv7 主键**
   *    离线时拿不到服务端自增值，所以 id 由浏览器生成并原样提交。
   *    服务端保留这个 id ⇒ 之后 app.js 的护栏（guardPending）、
   *    本地缓存（lcMerge）用的还是同一个 id，天然对得上。
   *
   * 2) **client_op_id 保证幂等**
   *    每笔写入带一个唯一 client_op_id，表上已有 UNIQUE 约束。
   *    重放时如果 409（唯一冲突）就当作「已经写过了」⇒ 成功。
   *    这样即使请求发出去了但响应丢了，也不会重复插入。
   *
   * 3) **只对「网络错误 / 5xx」入队**
   *    4xx 是真实的业务错误（校验失败等），必须原样抛给用户，
   *    否则会变成永远同步不上去的僵尸记录。
   * ------------------------------------------------------------ */

  var OFFLINE_DB = 'lifebook-sync';
  var OFFLINE_STORE = 'ops';
  var MAX_ATTEMPTS = 5;

  /* ---------- UUIDv7（浏览器端） ---------- */
  function uuidv7() {
    var b = new Uint8Array(16);
    crypto.getRandomValues(b);
    var ms = Date.now();
    b[0] = (ms / 0x10000000000) & 0xff;
    b[1] = (ms / 0x100000000) & 0xff;
    b[2] = (ms / 0x1000000) & 0xff;
    b[3] = (ms / 0x10000) & 0xff;
    b[4] = (ms / 0x100) & 0xff;
    b[5] = ms & 0xff;
    b[6] = (b[6] & 0x0f) | 0x70;   // version 7
    b[8] = (b[8] & 0x3f) | 0x80;   // variant
    var h = '';
    for (var i = 0; i < 16; i++) h += ('0' + b[i].toString(16)).slice(-2);
    return h.slice(0, 8) + '-' + h.slice(8, 12) + '-' + h.slice(12, 16) +
           '-' + h.slice(16, 20) + '-' + h.slice(20);
  }

  /* ---------- IndexedDB 薄封装 ---------- */
  function idbOpen() {
    return new Promise(function (resolve, reject) {
      if (!window.indexedDB) return reject(new Error('没有 IndexedDB'));
      var r = indexedDB.open(OFFLINE_DB, 1);
      r.onupgradeneeded = function () {
        var db = r.result;
        if (!db.objectStoreNames.contains(OFFLINE_STORE)) {
          var s = db.createObjectStore(OFFLINE_STORE, { keyPath: 'seq', autoIncrement: true });
          s.createIndex('status', 'status');
        }
      };
      r.onsuccess = function () { resolve(r.result); };
      r.onerror = function () { reject(r.error); };
    });
  }

  function idbAll() {
    return idbOpen().then(function (db) {
      return new Promise(function (res, rej) {
        var req = db.transaction(OFFLINE_STORE, 'readonly').objectStore(OFFLINE_STORE).getAll();
        req.onsuccess = function () { res(req.result || []); };
        req.onerror = function () { rej(req.error); };
      });
    });
  }

  function idbAdd(op) {
    return idbOpen().then(function (db) {
      return new Promise(function (res, rej) {
        var tx = db.transaction(OFFLINE_STORE, 'readwrite');
        var req = tx.objectStore(OFFLINE_STORE).add(op);
        req.onsuccess = function () { res(req.result); };
        req.onerror = function () { rej(req.error); };
      });
    });
  }

  function idbPut(op) {
    return idbOpen().then(function (db) {
      return new Promise(function (res, rej) {
        var tx = db.transaction(OFFLINE_STORE, 'readwrite');
        var req = tx.objectStore(OFFLINE_STORE).put(op);
        req.onsuccess = function () { res(req.result); };
        req.onerror = function () { rej(req.error); };
      });
    });
  }

  function idbDel(seq) {
    return idbOpen().then(function (db) {
      return new Promise(function (res, rej) {
        var tx = db.transaction(OFFLINE_STORE, 'readwrite');
        var req = tx.objectStore(OFFLINE_STORE)['delete'](seq);
        req.onsuccess = function () { res(); };
        req.onerror = function () { rej(req.error); };
      });
    });
  }

  /* ---------- 入队 ---------- */
  function currentSub() {
    return (session && session.user && session.user.id) || null;
  }

  async function enqueue(table, method, payload, rowId) {
    var id = rowId || uuidv7();
    var opId = uuidv7();
    var nowIso = new Date().toISOString();
    var op = {
      table: table,
      method: method,
      payload: payload || null,
      rowId: id,
      clientOpId: opId,
      at: Date.now(),
      status: 'pending',
      attempts: 0,
      lastError: ''
    };
    await idbAdd(op);
    updateBadge();

    if (method === 'insert') {
      // 造一行「看起来像服务端返回的」给 app.js 用
      return {
        data: [Object.assign({}, payload, {
          id: id,
          owner_id: currentSub(),
          created_at: nowIso,
          updated_at: nowIso,
          client_op_id: opId
        })],
        error: null,
        __queued: true
      };
    }
    if (method === 'update') {
      return {
        data: [Object.assign({ id: id }, payload, { updated_at: nowIso })],
        error: null,
        __queued: true
      };
    }
    return { data: null, error: null, __queued: true };
  }

  /* 从查询条件里取 id（update / delete 一定有） */
  function idFromFilters(q) {
    for (var i = 0; i < q.filters.length; i++) {
      var f = q.filters[i];
      if (f.col === 'id' && f.op === 'eq') return f.val;
    }
    return null;
  }

  /* ---------- 重放 ---------- */
  async function replayOne(op) {
    var base = REST_PREFIX + '/' + encodeURIComponent(op.table);
    var qid = '?id=eq.' + encodeURIComponent(op.rowId);

    if (op.method === 'insert') {
      var body = Object.assign({}, op.payload, {
        id: op.rowId,
        client_op_id: op.clientOpId,
        // ⛔ 必须带上入队时刻：否则离线记的东西按重放时刻算 created_at，
        //    在「按创建时间排序」的列表里会排到错误的位置。
        created_at: new Date(op.at).toISOString()
      });
      var r = await http(base, { method: 'POST', body: [body], prefer: 'return=representation' });
      if (r.ok) return { ok: true };
      // 409 = 唯一冲突 ⇒ 这笔之前已经写成功了，只是响应丢了
      if (r.status === 409) return { ok: true };
      return { retryable: r.netError || r.status >= 500, error: r.error };
    }

    if (op.method === 'update') {
      var r2 = await http(base + qid, { method: 'PATCH', body: op.payload, prefer: 'return=representation' });
      if (r2.ok) return { ok: true };
      return { retryable: r2.netError || r2.status >= 500, error: r2.error };
    }

    var r3 = await http(base + qid, { method: 'DELETE' });
    if (r3.ok) return { ok: true };
    return { retryable: r3.netError || r3.status >= 500, error: r3.error };
  }

  var syncing = false;

  async function syncNow() {
    if (syncing || !navigator.onLine || !session) return;
    syncing = true;
    try {
      var ops = await idbAll();
      ops.sort(function (a, b) { return a.seq - b.seq; });   // 严格按入队顺序
      for (var i = 0; i < ops.length; i++) {
        var op = ops[i];
        if (op.status === 'dead') continue;

        var r = await replayOne(op);
        if (r.ok) {
          await idbDel(op.seq);
          continue;
        }
        op.attempts = (op.attempts || 0) + 1;
        op.lastError = (r.error && r.error.message) || '未知错误';
        if (!r.retryable || op.attempts >= MAX_ATTEMPTS) {
          op.status = 'dead';
          await idbPut(op);
          continue;
        }
        await idbPut(op);
        // 网络还没恢复，后面的就别试了，等下一次
        break;
      }
    } catch (e) {
      /* IndexedDB 坏了也不能影响主流程 */
    } finally {
      syncing = false;
      updateBadge();
    }
  }

  /* ---------- 同步状态提示 ---------- */
  var badgeEl = null;

  function renderBadge(pending, dead) {
    if (!pending && !dead) {
      if (badgeEl) { badgeEl.remove(); badgeEl = null; }
      return;
    }
    if (!badgeEl) {
      badgeEl = document.createElement('div');
      badgeEl.id = 'lb-sync-badge';
      badgeEl.style.cssText = [
        'position:fixed', 'left:12px', 'bottom:76px', 'z-index:9999',
        'padding:5px 10px', 'border-radius:999px',
        'font:12px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
        'background:rgba(20,22,26,.92)', 'color:#E8C07A',
        'border:1px solid rgba(232,192,122,.35)',
        'box-shadow:0 2px 10px rgba(0,0,0,.4)',
        'pointer-events:none', 'letter-spacing:.02em'
      ].join(';');
      document.body.appendChild(badgeEl);
    }
    badgeEl.textContent = dead
      ? (pending ? pending + ' 条待同步 · ' + dead + ' 条失败' : dead + ' 条同步失败')
      : pending + ' 条待同步';
  }

  function updateBadge() {
    idbAll().then(function (ops) {
      var pending = 0, dead = 0;
      ops.forEach(function (o) { if (o.status === 'dead') dead++; else pending++; });
      renderBadge(pending, dead);
    }).catch(function () {});
  }

  function startSync() {
    // 页面打开、网络恢复、以及每 60 秒兜底
    window.addEventListener('online', function () { setTimeout(syncNow, 800); });
    window.addEventListener('load', function () {
      updateBadge();
      setTimeout(syncNow, 1200);
    });
    setInterval(function () { if (navigator.onLine) syncNow(); }, 60000);
  }
  startSync();

  /* ------------------------------------------------------------
   * 4.7 对象存储（头像）
   * ------------------------------------------------------------
   * app.js 只用到四个方法（见 app.js:308/327/401/444）：
   *   cloud.storage.userPath(uid, 'avatars/avatar.webp')
   *   cloud.storage.createSignedUrl(path, 3600) → {data:{signedUrl}}
   *   cloud.storage.upload(path, blob, {contentType, cacheControl, upsert})
   *   cloud.storage.remove([path])
   *
   * ⛔ 下载地址必须是「签名 URL」：头像是 <img src> 加载的，
   *    浏览器不会带 Authorization 头，所以靠签名 + 过期时间鉴权。
   * ------------------------------------------------------------ */
  function authHeaders(extra) {
    var h = Object.assign({}, extra || {});
    if (session && session.access_token) h['Authorization'] = 'Bearer ' + session.access_token;
    return h;
  }

  var storage = {
    userPath: function (uid, p) {
      return String(uid) + '/' + String(p || '').replace(/^\/+/, '');
    },

    upload: async function (key, blob, opts) {
      var ct = (opts && opts.contentType) || (blob && blob.type) || 'application/octet-stream';
      var r = await fetch(API_BASE + '/storage/upload?key=' + encodeURIComponent(key), {
        method: 'POST',
        headers: authHeaders({ 'Content-Type': ct }),
        body: blob
      });
      if (!r.ok) {
        var msg = '上传失败 (' + r.status + ')';
        try { var j = await r.json(); if (j && j.error) msg += '：' + j.error; } catch (e) {}
        return { data: null, error: { message: msg, code: String(r.status) } };
      }
      var out = null;
      try { out = await r.json(); } catch (e) { out = {}; }
      return { data: out, error: null };
    },

    createSignedUrl: async function (key, ttl) {
      var r = await fetch(API_BASE + '/storage/sign?key=' + encodeURIComponent(key) +
        '&ttl=' + (ttl || 3600), { headers: authHeaders() });
      if (!r.ok) return { data: null, error: { message: '签名失败 (' + r.status + ')' } };
      var j = await r.json();
      return { data: { signedUrl: API_BASE + j.url }, error: null };
    },

    remove: async function (keys) {
      var arr = Array.isArray(keys) ? keys : [keys];
      for (var i = 0; i < arr.length; i++) {
        if (!arr[i]) continue;
        await fetch(API_BASE + '/storage/remove?key=' + encodeURIComponent(arr[i]), {
          method: 'POST',
          headers: authHeaders()
        });
      }
      return { data: null, error: null };
    }
  };

  /* ------------------------------------------------------------
   * 5. 工厂 —— app.js 唯一的入口
   * ------------------------------------------------------------ */
  function createWorkBuddyCloud(cfg) {
    // cfg.endpoint / cfg.publishableKey 是有意的忽略项：
    // 那是 workbuddy 平台的地址和密钥，自建后不再需要。
    return {
      database: {
        from: function (table) { return new Query(table); }
      },
      auth: auth,
      llm: llm,
      storage: storage,
      // 少数 SDK 版本会把 app 级信息挂在 config 上
      config: cfg || {}
    };
  }

  window.WorkBuddyCloud = {
    createWorkBuddyCloud: createWorkBuddyCloud,
    __shim: true,
    __version: '1.0.0',
    // 给离线队列用的出口（后续阶段接入）
    __session: function () { return session; },
    __setSession: function (s) { storeSession(s); }
  };
})();
