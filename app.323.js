
/* ================= publicConfig ================= */
const publicConfig = {
  endpoint: "https://life-book-18142.app.workbuddy.host",
  publishableKey: "wbpk_rNbl7ifg3tiySQP4RmKgHZ_bxn8qSSVGoeSroeVoCVWnO800uIGLPy1"
};

/* ================= Icons ================= */
const S = (p) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>';
const ICONS = {
  home:    S('<path d="M3 10.4 12 3.2l9 7.2"/><path d="M5.5 9.2V20.5h13V9.2"/><path d="M10 20.5v-5h4v5"/>'),
  expense: S('<path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5z"/><path d="M3 10.5h18"/><circle cx="16.5" cy="14.6" r="1.2" fill="currentColor" stroke="none"/>'),
  diary:   S('<path d="M5 4.6A2.6 2.6 0 0 1 7.6 2H19.5v18H7.6A2.6 2.6 0 0 0 5 22.6z"/><path d="M5 19.2A2.6 2.6 0 0 1 7.6 16.6H19.5"/><path d="M9 6.5h6"/>'),
  life:    S('<path d="M12 2.8l2 5.4 5.4 2-5.4 2-2 5.4-2-5.4L4.6 10l5.4-2z"/><path d="M18.6 15.6l.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8z"/>'),
  sport:   S('<path d="M13.2 2.5 5 13.4h5.6L9.4 21.5 19 10.4h-5.8z"/>'),
  health:  S('<path d="M12 20.4S4.6 15.7 4.6 10.4A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7.4 2.4c0 5.3-7.4 10-7.4 10z"/>'),
  plus:    S('<path d="M12 5v14M5 12h14"/>'),
  image:   S('<rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="M4.5 17.5 9.5 13l3 2.6 3-2.4 4.5 3.6"/>'),
  lock:    S('<rect x="4.5" y="10.5" width="15" height="10" rx="3"/><path d="M8 10.5V7.6a4 4 0 0 1 8 0v2.9"/>'),
  mail:    S('<rect x="3" y="5.5" width="18" height="13" rx="3"/><path d="m3.8 7 7.3 5.4a1.6 1.6 0 0 0 1.9 0L20.2 7"/>'),
  shield:  S('<path d="M12 3 20 6v5.5c0 4.6-3.4 7.9-8 9.5-4.6-1.6-8-4.9-8-9.5V6z"/><path d="m9 12 2.2 2.2L15.3 10"/>'),
  out:     S('<path d="M15 4.5h2.5A2.5 2.5 0 0 1 20 7v10a2.5 2.5 0 0 1-2.5 2.5H15"/><path d="M11 8l-4 4 4 4"/><path d="M7 12h9"/>'),
  chart:   S('<path d="M4 20V9.5"/><path d="M10 20V4.5"/><path d="M16 20v-7"/><path d="M21 20H3.5"/>'),
  info:    S('<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><circle cx="12" cy="8" r="1" fill="currentColor" stroke="none"/>'),
  user:    S('<circle cx="12" cy="8.4" r="3.6"/><path d="M4.8 20.2a7.4 7.4 0 0 1 14.4 0"/>'),
  search:  S('<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>'),
  flame:   S('<path d="M12 3s4.6 3.4 4.6 7.4a4.6 4.6 0 0 1-9.2 0c0-1.3.5-2.4 1.1-3.3"/><path d="M12 21a6 6 0 0 0 6-6c0-1.6-.6-3-1.5-4.2"/><path d="M12 21a6 6 0 0 1-6-6c0-1.3.4-2.5 1.1-3.5"/>'),
  shoe:    S('<path d="M3 16.5V11l4.5-1.5 2.5 2 3-1 1.5-2.5 4 1.5c1 .4 1.6 1.3 1.6 2.3v4.7a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 3 16.5Z"/><path d="M8.5 9.5 10 6l2.5 1"/>'),
  list:    S('<path d="M8.5 6H20"/><path d="M8.5 12H20"/><path d="M8.5 18H20"/><circle cx="4" cy="6" r="1.1" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="4" cy="18" r="1.1" fill="currentColor" stroke="none"/>'),
  paw:     S('<circle cx="6.4" cy="9.6" r="1.9"/><circle cx="10.6" cy="6.3" r="1.9"/><circle cx="15.2" cy="6.4" r="1.9"/><circle cx="18.4" cy="9.8" r="1.9"/><path d="M12.2 11.6c2.8 0 4.7 2.1 4.7 4.2 0 2-1.7 3-3.3 2.5-.9-.3-2-.3-2.9 0-1.6.5-3.3-.5-3.3-2.5 0-2.1 1.9-4.2 4.8-4.2Z"/>'),
  sparkle: S('<path d="M11.4 3.4l1.8 4.9 4.9 1.8-4.9 1.8-1.8 4.9-1.8-4.9L4.7 10l4.9-1.8Z"/><path d="M18.2 14.4l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9Z"/>'),
  check:   S('<path d="M4.8 12.7 9.7 17.6 19.4 6.6"/>')
};

/* ================= State ================= */
let cloud = null;
let currentUser = null;
let activeTab = "home";
// v2.7：删掉了 pet / todayCheckin / checkinDays / streakNow / justChecked（宠物 + 签到经验整套下线）。
// 连续天数改由记录星环自己算（stStreak，读真实记录），不再依赖 checkin 表。
const state = { expense: [], diary: [], life: [], sport: [], health: [], steps: [], activeDays: null, diaryQ: '', expView: 'list', pendingSteps: null };

/* ================= Helpers ================= */
const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];
const pad2 = (n) => String(n).padStart(2, '0');
// 全部用本地时间，避免 UTC 在东八区凌晨算错日期
const localDateStr = (d = new Date()) => `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
const todayStr = () => localDateStr();
const monthStr = (d = new Date()) => `${d.getFullYear()}-${pad2(d.getMonth()+1)}`;
// 当月区间 [start, end)——用下月 1 号做开区间上界，避免 "-31" 在 30 天月份非法
function monthRange(d = new Date()) {
  const y = d.getFullYear(), m = d.getMonth();
  const next = new Date(y, m + 1, 1);
  return { start: `${y}-${pad2(m+1)}-01`, end: `${next.getFullYear()}-${pad2(next.getMonth()+1)}-01` };
}
const fmtMoney = (n) => { n = Number(n) || 0; return (n < 0 ? '-' : '') + Math.abs(n).toFixed(2); };
const fmtDate = (s) => {
  if (!s) return '';
  const p = String(s).slice(0,10).split('-');
  if (p.length !== 3) return String(s);
  return `${Number(p[1])}月${Number(p[2])}日`;
};
const escapeHtml = (s) => (s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const showMsg = (el, msg, kind='err') => { el.textContent = msg; el.className = 'msg show ' + kind; };
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const errMsg = (e) => (e && e.message) ? e.message : (e ? String(e) : '出错了');

/* ================= 图表 / 连续打卡 / 搜索（通用） ================= */
// 柱状图。rows: [{label, a, b?}]；dual=true 时 a/b 并排双色
// padTop：给顶部留白，最高那根柱子的数值标签才不会被切掉
function barChartSVG(rows, opt = {}) {
  const dual = !!opt.dual;
  const W = 340, H = opt.h || 118, padX = 8;
  const padTop = Math.max(0, opt.padTop || 0);
  const base = H - 26, avail = Math.max(4, base - padTop);
  const max = Math.max(1, ...rows.map(r => Math.max(Number(r.a) || 0, dual ? (Number(r.b) || 0) : 0)));
  const n = Math.max(1, rows.length);
  const slot = (W - padX * 2) / n;
  const bw = Math.min(dual ? 13 : 20, slot * (dual ? 0.36 : 0.5));
  const yOf = (v) => {
    const raw = (Math.max(0, Number(v) || 0) / max) * avail;
    const h = raw > 0 ? Math.max(2, raw) : 0;
    return { h, y: base - h };
  };
  let out = `<svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img">`;
  out += `<line x1="${padX}" y1="${base}" x2="${W - padX}" y2="${base}" stroke="rgba(245,240,232,.10)" stroke-width="1"/>`;
  rows.forEach((r, i) => {
    const cx = padX + slot * i + slot / 2;
    const A = yOf(r.a);
    if (dual) {
      const B = yOf(r.b);
      if (A.h) out += `<rect x="${(cx - bw - 1.5).toFixed(1)}" y="${A.y.toFixed(1)}" width="${bw.toFixed(1)}" height="${A.h.toFixed(1)}" rx="3" fill="var(--out)"/>`;
      if (B.h) out += `<rect x="${(cx + 1.5).toFixed(1)}" y="${B.y.toFixed(1)}" width="${bw.toFixed(1)}" height="${B.h.toFixed(1)}" rx="3" fill="var(--in)"/>`;
    } else if (A.h) {
      out += `<rect x="${(cx - bw / 2).toFixed(1)}" y="${A.y.toFixed(1)}" width="${bw.toFixed(1)}" height="${A.h.toFixed(1)}" rx="3" fill="${opt.color || 'var(--brand)'}"/>`;
    }
    out += `<text x="${cx.toFixed(1)}" y="${H - 8}" text-anchor="middle" font-size="9.5" fill="var(--text-3)">${escapeHtml(r.label)}</text>`;
    if (opt.showVal && Number(r.a) > 0) {
      out += `<text x="${(dual ? cx - bw / 2 - 1.5 : cx).toFixed(1)}" y="${(A.y - 3).toFixed(1)}" text-anchor="middle" font-size="8.5" fill="var(--text-3)">${escapeHtml(opt.fmt ? opt.fmt(r.a) : String(r.a))}</text>`;
    }
  });
  return out + '</svg>';
}

// 横向条形列表：rows [{label, v}]，右侧显示 fmt(v, pct)
function hbarList(rows, opt = {}) {
  const max = Math.max(1, ...rows.map(r => Number(r.v) || 0));
  const total = rows.reduce((s, r) => s + (Number(r.v) || 0), 0);
  return '<div class="bar-stack">' + rows.map(r => {
    const v = Math.max(0, Number(r.v) || 0);
    const pct = total ? (v / total * 100) : 0;
    return `<div class="bar-row">
      <span class="nm">${escapeHtml(r.label)}</span>
      <span class="bar-track"><span class="bar-fill" style="width:${(v / max * 100).toFixed(1)}%"></span></span>
      <span class="vl">${escapeHtml(opt.fmt ? opt.fmt(v, pct) : String(v))}</span>
    </div>`;
  }).join('') + '</div>';
}

function dayGap(a, b) {
  const pa = String(a).split('-').map(Number), pb = String(b).split('-').map(Number);
  return Math.round((new Date(pb[0], pb[1] - 1, pb[2]) - new Date(pa[0], pa[1] - 1, pa[2])) / 86400000);
}
// 当前连续天数：今天没记就从昨天算（今天仍有机会续上）
function currentStreak(set) {
  if (!set || !set.size) return 0;
  const d = new Date();
  if (!set.has(localDateStr(d))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (set.has(localDateStr(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function longestStreak(set) {
  const arr = [...(set || [])].sort();
  let best = 0, cur = 0, prev = null;
  arr.forEach(s => {
    cur = (prev && dayGap(prev, s) === 1) ? cur + 1 : 1;
    if (cur > best) best = cur;
    prev = s;
  });
  return best;
}
// longestStreak 仍被周报 / 月报用来算「最长连续记录」，保留。
// ⛔ MILESTONES（签到里程碑 3/7/14/30/100）随宠物一起下线：它统计的是 checkin 表，
// 而星环已经把「连续记录天数」讲清楚了，同一件事摆两处只会互相打架。

// 截取匹配位置附近的片段，让搜索结果看得见关键词上下文
function excerpt(text, q, len = 72) {
  const t = String(text || '');
  if (!q) return t.slice(0, len).replace(/\n/g, ' ');
  const i = t.toLowerCase().indexOf(String(q).toLowerCase());
  if (i < 0) return t.slice(0, len).replace(/\n/g, ' ');
  const s = Math.max(0, i - 18);
  return (s > 0 ? '…' : '') + t.slice(s, s + len).replace(/\n/g, ' ') + ((s + len) < t.length ? '…' : '');
}

// 搜索高亮：先转义再替换，避免注入
function highlight(text, q) {
  const t = escapeHtml(text || '');
  const k = (q || '').trim();
  if (!k) return t;
  const esc = escapeHtml(k).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  try { return t.replace(new RegExp(esc, 'gi'), m => `<mark>${m}</mark>`); } catch (e) { return t; }
}

// 汇总「哪些天有过记录」——用于连续打卡
async function fetchActiveDays() {
  const d = new Date(); d.setDate(d.getDate() - 120);
  const since = localDateStr(d);
  const names = ['expense', 'diary', 'life', 'sport', 'health', 'steps'];
  const res = await Promise.all(names.map(t =>
    cloud.database.from(t).select('record_date').gte('record_date', since).limit(5000)
      .then(r => ({ data: r.data, error: r.error }), e => ({ data: null, error: e }))
  ));
  const set = new Set();
  res.forEach(r => (r.data || []).forEach(x => { if (x && x.record_date) set.add(String(x.record_date).slice(0, 10)); }));
  return set;
}
/* ================= 自定义头像 ================= */
// 云端 profile.avatar 的值：'' 默认 | 'upload' 自己上传的图
// ⛔ 旧值还有 'skin:<皮肤id>'（借伙伴立绘当头像）。宠物已下线、pet/ 目录已删，
//    留着这个分支只会让老用户看到永久 404 的破图 ⇒ 读到就在 loadAvatar 里洗回默认。
let avatarVal = '';
let avatarURL = '';           // avatarVal==='upload' 时解析出的可显示地址（签名 URL）
let avatarBusy = false;

const avatarStoragePath = () => {
  const uid = (currentUser && (currentUser.id || currentUser.sub)) || '';
  return uid ? cloud.storage.userPath(uid, 'avatars/avatar.webp') : '';
};

// 头像内容：有自定义就用图，否则回退邮箱首字母 / 人形图标
function avatarInner(email) {
  if (avatarVal === 'upload' && avatarURL) return `<img class="av-img" src="${avatarURL}" alt="">`;
  const c = ((email || '').trim()[0] || '');
  return /[a-zA-Z]/.test(c) ? c.toUpperCase() : ICONS.user;
}
// 只重画两处头像容器，不整页重绘
function paintAvatar() {
  // ⛔ email 可能是空的（真实环境 session.user 不带 email）⇒ 拿 id 兜底，别显示空白
  const h = avatarInner((currentUser && (currentUser.email || (currentUser.id ? 'u' + currentUser.id : ''))) || '');
  const a = document.getElementById('btn-me'); if (a) a.innerHTML = h;
  const b = document.querySelector('.me-avatar'); if (b) b.innerHTML = h;
}
async function resolveAvatarURL() {
  avatarURL = '';
  try {
    const r = await cloud.storage.createSignedUrl(avatarStoragePath(), 3600);
    avatarURL = (r && r.data && r.data.signedUrl) || '';
  } catch (e) { avatarURL = ''; }
}
// 启动时：先用本机缓存秒出，再对齐云端
async function loadAvatar() {
  avatarVal = LS.get('avatar', '') || '';
  if (avatarVal === 'upload') await resolveAvatarURL();
  try {
    const r = await cloud.database.from('profile').select('avatar').limit(1).maybeSingle();
    if (r && !r.error && r.data) {
      let v = r.data.avatar || '';
      // 宠物立绘头像已下线：老用户的 skin:xxx 洗成默认，并顺手改回云端，别每次登录都再洗一遍
      if (v.indexOf('skin:') === 0) {
        v = '';
        try { await cloud.database.from('profile').update({ avatar: '' }).select(); } catch (e) {}
      }
      if (v !== avatarVal) {
        avatarVal = v;
        LS.set('avatar', v);
        if (v === 'upload') await resolveAvatarURL(); else avatarURL = '';
      }
    }
  } catch (e) { /* 表不可用时保持本机缓存 */ }
  paintAvatar();
}
async function setAvatar(v) {
  const prev = avatarVal;
  avatarVal = v;
  if (v === 'upload') await resolveAvatarURL(); else avatarURL = '';
  LS.set('avatar', v);
  const q = await cloud.database.from('profile').select('id').limit(1).maybeSingle();
  const row = (q && !q.error && q.data) || null;
  const res = row && row.id
    ? await cloud.database.from('profile').update({ avatar: v, updated_at: new Date().toISOString() }).eq('id', row.id).select()
    : await cloud.database.from('profile').insert({ avatar: v }).select();
  if (res.error) { avatarVal = prev; LS.set('avatar', prev); paintAvatar(); throw res.error; }
  paintAvatar();
}
// 居中裁成正方 + 缩小，避免把原图（可能几 MB）直接传上去
function squareBlob(file, size) {
  return new Promise((resolve, reject) => {
    const u = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      try {
        const s = Math.min(img.width, img.height);
        const sx = (img.width - s) / 2;
        const sy = Math.max(0, Math.min(img.height - s, (img.height - s) * 0.18)); // 略偏上，保住脸
        const cv = document.createElement('canvas');
        cv.width = cv.height = size;
        cv.getContext('2d').drawImage(img, sx, sy, s, s, 0, 0, size, size);
        cv.toBlob(b => { URL.revokeObjectURL(u); b ? resolve(b) : reject(new Error('图片处理失败')); }, 'image/webp', 0.92);
      } catch (e) { URL.revokeObjectURL(u); reject(e); }
    };
    img.onerror = () => { URL.revokeObjectURL(u); reject(new Error('图片读取失败，换一张试试')); };
    img.src = u;
  });
}
// 头像变了只刷新受影响的地方：顶栏/我的页头像就地重画。
// 不要用 renderApp()+switchTab() —— renderApp 内部的 renderHome() 是异步的，
// 会在之后完成并把 #view 覆盖掉，导致跳转失效（踩过）。
function afterAvatarChanged() {
  closeModal();
  paintAvatar();
  if (activeTab === 'me') renderProfile();
}
async function uploadAvatar(file) {
  if (avatarBusy) return;
  avatarBusy = true;
  try {
    if (!file || !/^image\//.test(file.type || '')) throw new Error('请选择图片文件');
    if (file.size > 12 * 1024 * 1024) throw new Error('图片太大，请选 12MB 以内的');
    const blob = await squareBlob(file, 256);
    const res = await cloud.storage.upload(avatarStoragePath(), blob, {
      contentType: blob.type || 'image/webp', cacheControl: '3600', upsert: true
    });
    if (res.error) throw res.error;
    await setAvatar('upload');
    afterAvatarChanged();
    toast('头像已更新', '已存到云端，换设备登录也在');
  } catch (e) {
    toastErr(e && e.message ? e.message : '上传失败，检查网络后重试');
    paintAvatar();
  } finally { avatarBusy = false; }
}
function openAvatarPicker() {
  const up = avatarVal === 'upload';
  const _uid = (currentUser && (currentUser.email || currentUser.id)) || '';
  const initial = _uid.trim()[0] || '';
  openModal(`
    <div class="av-grid">
      <label class="av-opt file-pick ${up ? 'on' : ''}" id="av-up">
        <div class="av-thumb">${up && avatarURL ? `<img src="${avatarURL}" alt="">` : ICONS.plus}</div>
        <div class="av-name">上传图片</div>
        <input type="file" id="av-file" accept="image/*">
      </label>
      <div class="av-opt ${up ? '' : 'on'}">
        <div class="av-thumb av-letter">${/[a-zA-Z]/.test(initial) ? initial.toUpperCase() : ICONS.user}</div>
        <div class="av-name">邮箱首字母</div>
      </div>
    </div>
    <div class="note" style="text-align:left;padding:12px 2px 8px">
      上传的图片会压成 256×256 存进云端文件（原图不上传），换设备登录也在；不上传就用邮箱首字母，不占空间。
    </div>
    ${avatarVal ? '<button class="btn-ghost danger" id="av-reset">恢复默认（邮箱首字母）</button>' : ''}`);
  setModalTitle('我的头像');
  // 这里不再用 $('#av-up').onclick = () => input.click()：
  // 铺满整块区域的透明 input 自己就会吃到点击，走的是浏览器原生激活路径，最稳。
  const avIn = $('#av-file');
  avIn.onchange = (e) => { const f = e.target.files && e.target.files[0]; if (f) uploadAvatar(f); };
  watchFilePick(avIn);
  const rs = $('#av-reset');
  if (rs) rs.onclick = async () => {
    try {
      const p = avatarStoragePath();
      await setAvatar('');
      if (p) { try { await cloud.storage.remove([p]); } catch (e) {} }
      afterAvatarChanged(); toast('已恢复默认头像');
    } catch (e) { toastErr(errMsg(e)); }
  };
}

/* ================= 本地个性化设置 ================= */
const LS = {
  get(k, d) { try { const v = localStorage.getItem('lb_' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('lb_' + k, JSON.stringify(v)); } catch (e) {} }
};

/* 6 套主题：c1 = 上半（--bg），c2 = 下半（--bg-2）。
   ⚠ 这两个值必须和 <style> 里 [data-theme=...] 声明的完全一致，
   改一处就要改两处 —— 色板圆点画的就是这两块底色本身。 */
const THEMES = [
  /* `dot` = 粒子气质偏色（RGB 三通道加减量，作用在琥珀 #FF9F1C 上）。
     v3.0 新增：背景设置里「粒子跟着主题走」开关打开后用它。
     ⚠ 这些是**肉眼调过的数值**，不是公式算的 —— 六套主题底色全是深色，
        按亮度做不出差别（实测前后完全同色），只能按「这套主题该有的气质」硬偏。
        改主题配色时顺手看一眼这几行，不合适就调。 */
  { id:'ink',  name:'墨黑', c1:'#0C0B0A', c2:'#15120E', dot:[  0,   0,   0] },  // 中性
  { id:'dawn',  name:'晨褐', c1:'#100C09', c2:'#1B1511', dot:[  6,   0, -10] },  // 暖 ⇒ 红加蓝减
  { id:'dusk', name:'夜紫', c1:'#0D0B10', c2:'#17141C', dot:[ -4, -10,  26] },  // 紫 ⇒ 蓝大力加
  { id:'sea',  name:'深青', c1:'#090D0F', c2:'#121A1D', dot:[-10,  -2,  20] },  // 青 ⇒ 蓝加绿微减
  { id:'clay', name:'陶土', c1:'#110D0A', c2:'#1C1712', dot:[ 12,  -6, -12] },  // 土 ⇒ 红加绿蓝减
  { id:'moss', name:'苔绿', c1:'#0A0D0A', c2:'#131712', dot:[-16,  14,  -4] }   // 绿 ⇒ 绿加红减
];

function applyTheme(id) {
  // 老用户 localStorage 里存的是 aurora/ocean/peach/... 这套旧 id，
  // 这里做一次映射，免得全部回落到墨黑、看着像设置被重置了
  const LEGACY = { aurora:'dusk', ocean:'sea', peach:'clay', forest:'moss', sunset:'dawn' };
  const want = (id && String(id).startsWith('l')) ? LEGACY[id] : id;
  document.documentElement.dataset.theme = THEMES.some(t => t.id === want) ? want : 'ink';
  // theme-color 要跟「底色」走，不是强调色 —— 状态栏染色用底色才不突兀
  const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta && bg) meta.setAttribute('content', bg);
  // v3.0：粒子开了「跟着主题走」之后，切主题必须重算粒子色，
  // 否则用户切完主题发现粒子没变 ⇒ 开关等于假的。
  // ⚠ 用 setTimeout(0)：dataset.theme 刚改，上面的 --bg 是新值，
  //    但 bgApplyDotColor 内部要再读一次 computed style，等样式表落地更稳。
  try { if (typeof bgApplyDotColor === 'function') setTimeout(bgApplyDotColor, 0); } catch (e) {}
}

/* ================= 背景系统 =================
   三层：#bg-photo（自定义底图）/ #bg-grain（颗粒）/ #bg-dots（粒子）。
   ⚠ 性能铁律：粒子**不跑 requestAnimationFrame**。单文件 App 常驻 WebView，
   每帧重绘 canvas 在低端机上会持续吃 GPU、滚动直接掉帧。做法是
   「JS 一次性生成随机点位 → 写成 DOM + CSS keyframes 漂移」，
   动画交给合成器线程（will-change:transform），主线程零参与。
   ⛔ 每个粒子必须给**负的 animation-delay** 打散相位，否则整片同起同落，
   看着像屏幕在呼吸而不是有粒子。 */

/* 4 档背景强度。level 越大粒子越多越亮；0 = 完全关闭（省电/低端机）。 */
const BG_LEVELS = [
  { id:0, name:'关闭', n:0,  a:0 },
  { id:1, name:'极简', n:10, a:.30 },
  { id:2, name:'适中', n:22, a:.48 },
  { id:3, name:'丰富', n:38, a:.66 }
];

/* ---- 底图：v3.0 起支持多张 ----
   ⛔ 容量账：localStorage 单域~5 MB，base64 比原图膨胀 33%。
      单张压到 560 宽 webp 约 40~70 KB ⇒ **最多存 4 张**，超了给用户明确提示。
      别改成 5 MB 上限，用户真存满了会变成 QuotaExceededError 且没有解释。*/
const BG_MAX_PHOTOS = 4;
const BG_PHOTO_W    = 560;      // 多图时比单图的 720 再压一点

// 底图：存 dataURL 数组（v3.0 前是单字符串）。旧的单张值自动迁移成数组。
let bgPhotos = [];
let bgPhotoIdx = 0;             // 当前显示第几张
let bgLevel = 2;
let bgBlur = 0;

/* 粒子颜色：主题色 × 时间色温。
   ⛔ 第 3 项（跟主题）和第 5 项（跟时间）是**两个独立开关**，不冲突：
      色相取自主题（第 3 项开时），明度和冷暖由时间微调（第 5 项开时）。
      两个都关就退回固定琥珀。 */
let bgDotFollowTheme = false;
let bgDotFollowTime  = false;

/* 时间 → 色温修正。深夜偏冷偏蓝、午后偏暖偏亮。
   ⚠ 只改 HSL 的 S/L 和一点点 H偏移，**不改主色相** —— 主色相是主题给的，
      时间只是「在它基础上调一调」，不然两套逻辑会打架。 */
function bgTimeTune() {
  /*⛔ 开关关闭时必须返回 l=1（不是 0）。l=0 会被当成「乘 0」把颜色全压成黑，
     实测过：`--bg-dot` 直接变成 `#000000` 那种畸形值。三个字段都是「乘数」，
     关掉 = 乘 1（等于不干预），不是乘 0。*/
  if (!bgDotFollowTime) return { h:0, s:1, l:1 };
  const hr = new Date().getHours();
  // 0~5 深夜：偏冷、压暗；6~11 早晨：偏暖、提亮；12~17 午后：最亮最暖；18~23 夜晚：回落
  let sMul = 1, lMul = 1, hShift = 0;
  if (hr < 6)       { sMul = 0.82; lMul = 0.72; hShift = -14; }
  else if (hr < 11) { sMul = 1.05; lMul = 1.10; hShift = +8;  }
  else if (hr < 18) { sMul = 1.10; lMul = 1.18; hShift = +14; }
  else              { sMul = 0.92; lMul = 0.84; hShift = -8;  }
  return { s:sMul, l:lMul, h:hShift };
}

/* 算粒子主色并写进 CSS 变量。
   ⚠ 主题强调色一律是琥珀（v2.7 起不变量），所以第 3 项实际不会改变色相，
      真正有观感差别的是**饱和度和亮度**跟主题底色走（浅色主题下粒子压暗一档）。 */
/* 降饱和度：把 RGB 往它的灰度值那边拉。t.s<1 变灰（深夜），
   t.s>1 变艳（白天）。⛔ 不用 `hsl(from …)` 相对色语法 ——
   部分 Android WebView 不认，认不出来的粒子会直接失去颜色变透明。 */
function desaturate(r, g, b, s) {
  const l = r * 0.299 + g * 0.587 + b * 0.114;
  const f = (x) => Math.max(0, Math.min(255, l + (x - l) * s));
  return [f(r), f(g), f(b)];
}

function bgApplyDotColor() {
  const base = getComputedStyle(document.documentElement).getPropertyValue('--brand').trim() || '#FF9F1C';
  const t = bgTimeTune();
  let r = 255, g = 159, b = 28;                    // #FF9F1C
  const m = base.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
  if (m) { r = parseInt(m[1],16); g = parseInt(m[2],16); b = parseInt(m[3],16); }
  // 第 3 项：跟主题底色走
  // ⛔ **不要按亮度算** —— 六套主题底色全是深色（#0C0B0A ~ #131712），亮度差不到 20，
  //    k 永远等于 1，开关等于假的（实测主题色前后一模一样）。
  //    ⇒ 直接给每套主题一个「粒子气质」偏色：按底色该有的气质往那边挪一点。
  //       墨黑=中性(0,0,0)、苔绿偏绿、深青偏蓝、夜紫偏紫。
  //       数值是**肉眼验过的偏移量**，不是公式推出来的，好调也好验证。
  if (bgDotFollowTheme) {
    const T = (typeof THEMES !== 'undefined' ? THEMES : []).find(t => t.id === document.documentElement.dataset.theme);
    const q = (T && T.dot) || null;
    if (q) {
      r = Math.max(0, Math.min(255, r + q[0]));
      g = Math.max(0, Math.min(255, g + q[1]));
      b = Math.max(0, Math.min(255, b + q[2]));
    }
  }
  // 第 5 项：时间色温（s 走饱和度、l 走亮度、h 走一点色相偏移）
  if (t.s !== 1) { const d = desaturate(r, g, b, t.s); r = d[0]; g = d[1]; b = d[2]; }
  r = Math.min(255, r * t.l);
  g = Math.min(255, g * (t.l * 0.98 + (t.h > 0 ? 0.02 : -0.02)));
  b = Math.min(255, b * (t.l * 0.92 + (t.h > 0 ? 0.08 : -0.04)));
  const hex = (x) => Math.round(x).toString(16).padStart(2,'0');
  const col = `#${hex(r)}${hex(g)}${hex(b)}`;
  document.documentElement.style.setProperty('--bg-dot', col);
  return { base, tune: t, col };
}

function bgInit() {
  bgLevel = Number(LS.get('bgLevel', 2));
  if (!BG_LEVELS.some(l => l.id === bgLevel)) bgLevel = 2;
  // ⛔ v3.0 迁移：v2.x 存的是单个 dataURL 字符串，v3.0 存数组。
  //    老用户不清掉的话会一直走「单张」分支，新功能对他们无效。
  const raw = LS.get('bgPhotos', null);
  if (Array.isArray(raw)) bgPhotos = raw.filter(Boolean).slice(0, BG_MAX_PHOTOS);
  else {
    const old = LS.get('bgPhoto', '') || '';
    bgPhotos = old ? [old] : [];
  }
  bgPhotoIdx = Math.min(Number(LS.get('bgPhotoIdx', 0)) || 0, Math.max(0, bgPhotos.length - 1));
  bgBlur = Math.max(0, Math.min(20, Number(LS.get('bgBlur', 0)) || 0));
  bgDotFollowTheme = !!LS.get('bgDotFollowTheme', false);
  bgDotFollowTime  = !!LS.get('bgDotFollowTime', false);
  bgPaint();
  // 系统开了「减少动效」就只画静态点，不给动画
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  bgBuildDots(reduce);
}

/* 把当前设置刷到 DOM（底图 / 索引 / 模糊 / 粒子色）。
   v3.0 原来这些散在 bgInit / bgSetPhoto / bgSetDim 里各写一遍，
   新增「切第几张」「改模糊」之后必然漏刷某一项 ⇒ 收口成一个函数。 */
function bgPaint() {
  const cur = bgPhotos[bgPhotoIdx] || '';
  const el = $('#bg-photo');
  if (el) el.style.backgroundImage = cur ? `url("${cur}")` : '';
  document.body.classList.toggle('has-bg', !!cur);
  const root = document.documentElement;
  root.style.setProperty('--bg-blur', bgBlur);
  const dim = Number(LS.get('bgDim', 42));
  root.style.setProperty('--bg-dim', (dim / 100).toFixed(2));
  const pos = LS.get('bgPos', '50% 50%');
  root.style.setProperty('--bg-pos', pos);
  bgApplyDotColor();
}

function bgBuildDots(reduce) {
  const host = $('#bg-dots');
  if (!host) return;
  const lv = BG_LEVELS.find(l => l.id === bgLevel) || BG_LEVELS[2];
  // 面积越大粒子越多，但设硬上限 —— 粒子是氛围，不是星空
  const vw = window.innerWidth, vh = window.innerHeight;
  const area = vw * vh;
  const n = Math.min(60, Math.round(lv.n * Math.max(.6, Math.min(1.8, area / 380000))));
  let html = '';
  for (let i = 0; i < n; i++) {
    // 用线性同余造伪随机，避免连续 Math.random 让某个 JS 引擎上分布不均
    const r1 = pseudo(i * 7919 + 13), r2 = pseudo(i * 6271 + 91), r3 = pseudo(i * 5171 + 47);
    const r4 = pseudo(i * 3313 + 29), r5 = pseudo(i * 2417 + 71);
    const size = (1 + r3 * 2.4).toFixed(2);          // 1 ~ 3.4px
    const left = (r1 * 100).toFixed(2), top = (r2 * 100).toFixed(2);
    const dx = ((r4 * 2 - 1) * 16).toFixed(1);       // 横向漂移 ±16px
    const dur = (9 + r5 * 12).toFixed(1);            // 9~21s 一轮，慢
    // 负 delay：让粒子在「过去某一刻」就出发，进页面即是稳定状态，不会集体闪一下
    const neg = (-(r3 * dur)).toFixed(2);
    const op = (lv.a * (0.5 + r4 * 0.5)).toFixed(3);
    // 每颗 hue 偏移 ±14°：全同色会像「一层噪点」，有一点点色差才像「一群星」
    const dh = ((r5 - 0.5) * 28).toFixed(1);
    html += `<i style="left:${left}%;top:${top}%;width:${size}px;height:${size}px;`
         +  `opacity:${op};--dx:${dx}px;--dh:${dh}deg;animation-duration:${dur}s;animation-delay:${neg}s"></i>`;
  }
  host.innerHTML = html;
  document.body.classList.toggle('no-motion', !!reduce);
}

// 确定性伪随机（mulberry32 简化版）：同一个 seed 永远同一串，
// 这样 resize 重建时粒子不会整片换位置
function pseudo(seed) {
  let t = (seed + 0x6D2B79F5) >>> 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

function bgSetLevel(v) {
  bgLevel = Number(v);
  if (!BG_LEVELS.some(l => l.id === bgLevel)) bgLevel = 0;
  LS.set('bgLevel', bgLevel);
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  bgBuildDots(reduce);
}

/* 上传自定义底图：压到 720 宽的 webp。
   ⛔ 必须压：不压的话一张手机照片 4~6 MB，dataURL 再 base64 膨胀 33%，
   localStorage 直接写爆（QuotaExceededError），而且首屏解析这张图要几百毫秒。 */
async function bgPickFile(file, maxW) {
  if (!file) return '';
  const W = maxW || 720;
  const bmp = await createImageBitmap(file).catch(async () => {
    // 老 WebView 没有 createImageBitmap，退回 <img> 解码
    const url = URL.createObjectURL(file);
    try {
      const img = await new Promise((res, rej) => {
        const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = url;
      });
      return img;
    } finally { setTimeout(() => URL.revokeObjectURL(url), 3000); }
  });
  const scale = Math.min(1, W / (bmp.width || W));
  const w = Math.round((bmp.width || W) * scale), h = Math.round((bmp.height || W) * scale);
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const cx = cv.getContext('2d');
  cx.drawImage(bmp, 0, 0, w, h);
  // 质量 0.72：肉眼在「压暗 42% + 有颗粒」的底图上看不出差别，但体积省一半
  const out = cv.toDataURL('image/webp', 0.72);
  // toDataURL 在极老 WebView 上可能退回 png，那就宁可降到 560 宽也别爆存储
  if (out.length > 1400000) {
    cv.width = Math.round(w * 0.7); cv.height = Math.round(h * 0.7);
    cx.drawImage(bmp, 0, 0, cv.width, cv.height);
    return cv.toDataURL('image/webp', 0.6);
  }
  return out;
}

async function bgSetPhoto(dataURL) {
  /* v3.0：单张接口保留（内部转成「替换当前张」），设置面板的新逻辑走
     bgAddPhoto / bgPickPhoto / bgDelPhoto。留这个是为了头像等旧调用点不用改。 */
  if (!dataURL) { bgPhotos = []; bgPhotoIdx = 0; LS.set('bgPhotos', []); LS.set('bgPhoto',''); }
  else { bgPhotos = [dataURL]; bgPhotoIdx = 0; LS.set('bgPhotos', bgPhotos); }
  bgPaint();
}

/* 加一张底图（追加，不替换）。
   ⛔ 存之前先估体积：4 张 × ~70 KB ≈ 280 KB，离 5 MB 还远，
      但用户若连续加而我们没拦，会在第 5 张直接 QuotaExceededError 且没有解释。
      ⇒ 硬上限 BG_MAX_PHOTOS，超了明确告诉用户。 */
async function bgAddPhoto(dataURL) {
  if (bgPhotos.length >= BG_MAX_PHOTOS) {
    toastErr(`最多 ${BG_MAX_PHOTOS} 张`, '先删掉一张再加 —— 手机浏览器存不了更多底图');
    return false;
  }
  // 先试着写一次，真爆了当场退回，别等用户切页面才发现底图全没了
  try {
    const next = bgPhotos.concat([dataURL]);
    LS.set('bgPhotos', next);
    bgPhotos = next;
    bgPhotoIdx = bgPhotos.length - 1;      // 新加的直接切过去看效果
    LS.set('bgPhotoIdx', bgPhotoIdx);
    bgPaint();
    return true;
  } catch (e) {
    toastErr('存储空间不够', '删掉一张底图再试');
    return false;
  }
}

function bgDelPhoto(i) {
  if (i < 0 || i >= bgPhotos.length) return;
  bgPhotos.splice(i, 1);
  if (bgPhotoIdx >= bgPhotos.length) bgPhotoIdx = Math.max(0, bgPhotos.length - 1);
  LS.set('bgPhotos', bgPhotos);
  LS.set('bgPhotoIdx', bgPhotoIdx);
  LS.set('bgPhoto', bgPhotos[bgPhotoIdx] || '');   // 兼容旧读法
  bgPaint();
}

function bgSetIdx(i) {
  if (i < 0 || i >= bgPhotos.length) return;
  bgPhotoIdx = i;
  LS.set('bgPhotoIdx', i);
  bgPaint();
}

function bgSetBlur(px) {
  const v = Math.max(0, Math.min(20, Number(px) || 0));
  bgBlur = v;
  LS.set('bgBlur', v);
  document.documentElement.style.setProperty('--bg-blur', v);
}

/* 底图定位：上下左右各挪一点。存百分比。
   ⛔ 为什么需要：图压成 560 宽后要 cover 铺满手机屏，构图必然被裁掉一截，
      主体很容易正好被裁没。 */
function bgNudge(dxPct, dyPct) {
  const cur = String(LS.get('bgPos', '50% 50%')).split(/\s+/);
  let x = parseFloat(cur[0]) || 50, y = parseFloat(cur[1]) || 50;
  x = Math.max(0, Math.min(100, x + dxPct));
  y = Math.max(0, Math.min(100, y + dyPct));
  const v = `${x.toFixed(0)}% ${y.toFixed(0)}%`;
  LS.set('bgPos', v);
  document.documentElement.style.setProperty('--bg-pos', v);
  return v;
}

function bgSetDim(pct) {
  const v = Math.max(0, Math.min(80, Number(pct) || 0));
  LS.set('bgDim', v);
  document.documentElement.style.setProperty('--bg-dim', (v / 100).toFixed(2));
}

/* 打开背景设置面板（v3.0：多张底图 + 模糊 + 定位 + 粒子颜色两项开关） */
function openBgSettings() {
  const lv = BG_LEVELS.find(l => l.id === bgLevel) || BG_LEVELS[2];
  const cur = bgPhotos[bgPhotoIdx] || '';
  const has = bgPhotos.length > 0;
  const dimV = Number(LS.get('bgDim', 42));
  const blurV = bgBlur;
  openModal(`
    <div class="st-sec" style="margin-top:2px"><span class="st-sec-i">BG</span><span class="st-sec-t">背景</span><span class="st-rule" style="flex:1"></span></div>
    <div class="cat-edit" style="gap:6px">
      ${BG_LEVELS.map(l => `<button class="cat-x" data-lv="${l.id}" style="${l.id === lv.id
        ? 'background:rgba(255,159,28,.16);border:1px solid rgba(255,159,28,.4);color:#FF9F1C' : ''}">${l.name}</button>`).join('')}
    </div>
    <div class="note" style="margin:2px 0 12px">粒子只做缓慢漂移，不占用处理器运算；系统开了「减少动效」时会自动静止。</div>

    <div class="st-sec"><span class="st-sec-i">DOT</span><span class="st-sec-t">粒子颜色</span><span class="st-rule" style="flex:1"></span>
      <span style="font-size:11px;color:var(--star-text-3)" id="bg-dot-now"></span></div>
    <!-- ⛔ 开态的 class 必须是两个 class（bg-sw + on）。
         ⛔⛔ 这段注释里**绝不能出现反引号** —— 它写在 openModal 的模板字符串内部，
         一个反引号就提前闭合模板，node --check 直接报 missing ) after argument list。
         写成 style="on" 是把 on 塞进内联 style，CSS 规则 .bg-sw.on 匹配不到
         ⇒ 开关逻辑生效但视觉永远是「关」（实测踩过）。 -->
    <label class="bg-sw${bgDotFollowTheme ? ' on' : ''}">
      <input type="checkbox" id="bg-dot-theme" ${bgDotFollowTheme ? 'checked' : ''}>
      <span class="bg-sw-b"></span>
      <span class="bg-sw-t">跟着主题走<em>浅色底自动压暗粒子，免得抢文字</em></span>
    </label>
    <label class="bg-sw${bgDotFollowTime ? ' on' : ''}">
      <input type="checkbox" id="bg-dot-time" ${bgDotFollowTime ? 'checked' : ''}>
      <span class="bg-sw-b"></span>
      <span class="bg-sw-t">跟着时间走<em>深夜偏冷偏暗，白天偏暖偏亮</em></span>
    </label>

    <div class="st-sec"><span class="st-sec-i">IMG</span><span class="st-sec-t">自定义底图</span><span class="st-rule" style="flex:1"></span>
      <span style="font-size:11.5px;color:var(--star-text-3)">${bgPhotos.length}/${BG_MAX_PHOTOS}</span></div>
    ${has ? `<div class="bg-picks" id="bg-picks">
      ${bgPhotos.map((p, i) => `<div class="bg-pick${i === bgPhotoIdx ? ' on' : ''}" data-pi="${i}" style="background-image:url(&quot;${p}&quot;)">
        <button class="bg-pick-del" data-del="${i}" aria-label="删除这张">×</button></div>`).join('')}
      ${bgPhotos.length < BG_MAX_PHOTOS ? `<label class="bg-pick add" id="bg-add2" for="bg-file" role="button" tabindex="0">
        <span>＋</span><small>再加一张</small></label>` : ''}
    </div>` : ''}
    <div class="bg-prev ${has ? 'set' : ''}" ${has ? `style="background-image:url(&quot;${cur}&quot;)"` : ''}>${has ? '第 ' + (bgPhotoIdx + 1) + ' 张' : '还没有设置'}</div>
    <!--⛔ label 必须写 for="bg-file"：只靠「包着 input」的隐式关联在部分 WebView
        （尤其 Android WebView 里 input 又带 pointer-events:none）点不动，
        用户会以为功能坏了。onclick 再兜一层，双保险。 -->
    <label class="st-btn st-btn-p" style="margin-top:10px;width:100%" id="bg-file-lb"
           for="bg-file" role="button" tabindex="0">${has ? '再加一张' : '选择图片'}</label>
    <input type="file" id="bg-file" accept="image/*">
    ${has ? `<div class="st-btns" style="margin-top:8px">
      <button class="st-btn" id="bg-prev">上一张</button>
      <button class="st-btn" id="bg-next">下一张</button>
    </div>
    <button class="btn-ghost danger" style="margin-top:8px" id="bg-clear">清空全部底图</button>` : ''}

    <div class="st-sec" id="bg-dim-sec"><span class="st-sec-i">DIM</span><span class="st-sec-t">明暗</span><span class="st-rule" style="flex:1"></span>
      <span style="font-size:11.5px;color:var(--star-text-3)" id="bg-dim-v">${dimV}%</span></div>
    <input type="range" id="bg-dim" min="0" max="80" step="5" value="${dimV}"
      style="width:100%;height:34px;accent-color:#FF9F1C" ${has ? '' : 'disabled'}>

    <div class="st-sec"><span class="st-sec-i">BLR</span><span class="st-sec-t">模糊</span><span class="st-rule" style="flex:1"></span>
      <span style="font-size:11.5px;color:var(--star-text-3)" id="bg-blur-v">${blurV}</span></div>
    <input type="range" id="bg-blur" min="0" max="20" step="1" value="${blurV}"
      style="width:100%;height:34px;accent-color:#FF9F1C" ${has ? '' : 'disabled'}>

    <div class="st-sec"><span class="st-sec-i">POS</span><span class="st-sec-t">位置</span><span class="st-rule" style="flex:1"></span>
      <span style="font-size:11.5px;color:var(--star-text-3)" id="bg-pos-v">${escapeHtml(LS.get('bgPos', '50% 50%'))}</span></div>
    <div class="st-btns" style="margin-top:4px">
      <button class="st-btn" data-nx="-8" data-ny="0">← 左</button>
      <button class="st-btn" data-nx="8" data-ny="0">右 →</button>
    </div>
    <div class="st-btns" style="margin-top:6px">
      <button class="st-btn" data-nx="0" data-ny="-8">↑ 上</button>
      <button class="st-btn" data-nx="0" data-ny="8">↓ 下</button>
      <button class="st-btn" data-nx="0" data-ny="0" id="bg-pos-reset">居中</button>
    </div>
  `);
  setModalTitle('背景');

  // 当前粒子色（让用户看得见开关有没有生效）
  const dn = $('#bg-dot-now');
  if (dn) dn.textContent = (document.documentElement.style.getPropertyValue('--bg-dot') || '#FF9F1C').trim();

  $$('[data-lv]').forEach(b => b.onclick = () => { bgSetLevel(b.dataset.lv); closeModal(); openBgSettings(); });

  const dt = $('#bg-dot-theme');
  if (dt) dt.onchange = () => { bgDotFollowTheme = dt.checked; LS.set('bgDotFollowTheme', bgDotFollowTheme); bgPaint();
    dt.parentNode.classList.toggle('on', dt.checked);
    const n2 = $('#bg-dot-now'); if (n2) n2.textContent = (document.documentElement.style.getPropertyValue('--bg-dot') || '#FF9F1C').trim(); };
  const dti = $('#bg-dot-time');
  if (dti) dti.onchange = () => { bgDotFollowTime = dti.checked; LS.set('bgDotFollowTime', bgDotFollowTime); bgPaint();
    dti.parentNode.classList.toggle('on', dti.checked);
    const n2 = $('#bg-dot-now'); if (n2) n2.textContent = (document.documentElement.style.getPropertyValue('--bg-dot') || '#FF9F1C').trim(); };

  const inp = $('#bg-file');
  //⛔ 兜底：label 的 for 在个别 WebView 上不触发 file 选择器（用户实测点不动），
  //   这里显式 onclick 再调一次 click()。两次都生效也无害（浏览器会忽略重复的第二次）。
  const lb = $('#bg-file-lb');
  if (lb) lb.onclick = (e) => { e.preventDefault(); inp.click(); };
  const lb2 = $('#bg-add2');
  if (lb2) lb2.onclick = (e) => { e.preventDefault(); inp.click(); };
  inp.onchange = async (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    try {
      // 多图并存 ⇒ 压到 560 宽（原单图是 720），四张才稳在 5 MB 以内
      const d = await bgPickFile(f, BG_PHOTO_W);
      const ok = has ? await bgAddPhoto(d) : (await bgSetPhoto(d), true);
      closeModal();
      if (ok) { openBgSettings(); toast(has ? '底图已添加' : '底图已设置'); }
    } catch (err) { toastErr('图片处理失败：' + (err && err.message ? err.message : err)); }
  };
  $$('[data-pi]').forEach(el => el.onclick = (e) => {
    if (e.target.closest('[data-del]')) return;
    bgSetIdx(Number(el.dataset.pi)); closeModal(); openBgSettings();
  });
  $$('[data-del]').forEach(b => b.onclick = (e) => {
    e.stopPropagation();
    bgDelPhoto(Number(b.dataset.del)); closeModal(); openBgSettings(); toast('已删除那张');
  });
  const pv = $('#bg-prev'), nx = $('#bg-next');
  if (pv) pv.onclick = () => { bgSetIdx((bgPhotoIdx - 1 + bgPhotos.length) % bgPhotos.length); closeModal(); openBgSettings(); };
  if (nx) nx.onclick = () => { bgSetIdx((bgPhotoIdx + 1) % bgPhotos.length); closeModal(); openBgSettings(); };
  const cl = $('#bg-clear');
  if (cl) cl.onclick = async () => { await bgSetPhoto(''); closeModal(); toast('底图已清空'); };

  const dim = $('#bg-dim');
  if (dim) dim.oninput = () => { $('#bg-dim-v').textContent = dim.value + '%'; bgSetDim(dim.value); };
  const bl = $('#bg-blur');
  if (bl) bl.oninput = () => { $('#bg-blur-v').textContent = bl.value; bgSetBlur(bl.value); };
  $$('[data-nx]').forEach(b => b.onclick = () => {
    const v = b.dataset.nx === '0' && b.dataset.ny === '0'
      ? (LS.set('bgPos', '50% 50%'), document.documentElement.style.setProperty('--bg-pos', '50% 50%'), '50% 50%')
      : bgNudge(Number(b.dataset.nx), Number(b.dataset.ny));
    const n3 = $('#bg-pos-v'); if (n3) n3.textContent = v;
  });
}

const getNick = () => (LS.get('nick', '') || '').trim();
const greeting = () => {
  const h = new Date().getHours();
  if (h < 6) return '夜深了'; if (h < 11) return '早上好';
  if (h < 14) return '中午好'; if (h < 18) return '下午好';
  if (h < 23) return '晚上好'; return '夜深了';
};
// 记账分类：内置 + 用户自定义追加
const BASE_CATS = ['餐饮','交通','购物','日用','住房','医疗','娱乐','学习','社交','人情','其他'];
const getCats = () => BASE_CATS.concat(LS.get('cats', []).filter(c => !BASE_CATS.includes(c)));

function countdown(btn) {
  let n = 60;
  const orig = btn.textContent;
  btn.disabled = true;
  const t = setInterval(() => {
    n--;
    btn.textContent = n + 's';
    if (n <= 0) { clearInterval(t); btn.disabled = false; btn.textContent = orig; }
  }, 1000);
}

/* ================= Init ================= */
function initCloud() {
  if (window.WorkBuddyCloud) {
    cloud = WorkBuddyCloud.createWorkBuddyCloud({
      endpoint: publicConfig.endpoint,
      publishableKey: publicConfig.publishableKey
    });
    return true;
  }
  return false;
}

async function boot() {
  applyTheme(LS.get('theme', 'ink'));
  bgInit();
  // 手机快捷指令带来的 ?steps=8321：先收下，等登录后自动落库
  const sp = readStepsParam();
  if (sp) { state.pendingSteps = sp; LS.set('pendingSteps', sp); clearStepsParam(); }
  let tries = 0;
  while (!initCloud() && tries < 50) { await sleep(100); tries++; }
  if (!cloud) {
    $('#root').innerHTML = '<div class="empty" style="padding-top:80px">SDK 加载失败，请检查网络后刷新</div>';
    return;
  }
  try {
    const { data: session } = await cloud.auth.getSession();
    logAuth('getSession', session && session.user
      ? '有对象 id=' + (session.user.id || '(无)') + ' email=' + (session.user.email || '(空)')
      : '空');
    if (session && session.user) { currentUser = session.user; renderApp(); return; }
  } catch(e) { console.warn('getSession', e); logAuth('getSession抛错', e.message); }

  /*⛔⛔⛔ 2026-10-20 17:09 的 App 诊断暴露的真根因（改完 pickUser 才真正生效）：
     App **每次打开都要重新登录**（诊断里 17:09:18 getSession 空 ⇒
     17:09:32 你才 SIGNED_IN，中间隔了 14 秒）。
     原因：`tryRecoverSession` 取错了 SDK 的返回结构 ⇒ 恢复永远失败
     ⇒ 只能把你丢回登录墙 ⇒ 打开时界面是空的、登录后才拉数据。

     现在 pickUser 修好了 ⇒ 这里的恢复能成功 ⇒ 不用再手动登录。 */
  const recoveredEarly = await tryRecoverSession();
  logAuth('早期恢复尝试', recoveredEarly
    ? '成功 id=' + (recoveredEarly.id || '(无)')
    : '失败（将走登录页）');
  if (recoveredEarly) {
    currentUser = recoveredEarly;
    renderApp();
    // 告诉用户「登录状态过期过、已自动续上」，免得他又以为数据丢了
    setTimeout(() => toast('登录状态已自动恢复', '刚才那下没反应是因为登录过期了'), 900);
    return;
  }

  /*⛔⛔⛔ 会话「半失效」的兜底（v3.10，2026-10-19 修）
     用户症状：写的数据云端都在（SQL 核实过），但界面「重开就是空的」。

     诊断定位（?diag=1 截图）：
       SDK session      (空)    ← SDK 认为没登录
       页面上是否登录墙  不在    ← 但界面是完整 App
       每表条数          3      ← 数据却读得到

     ⇒ **token 还有效（所以请求过得了 RLS），但 SDK 的会话记录坏了**。
     SDK 源码：`read(){ ... return Ot(t)?t:this.discard() }` ——
     格式校验不通过就 discard（清空并返回 null）。多半是刷新令牌过期，
     该走 refreshOnce() 但那次失败/abandon 了。

     ⇒ 原来的 bug：getSession() 返回空 ⇒ 走 renderLogin()，
       用户看到登录墙；可他明明"登录着"，于是反复重登、
       写的数据"又没了"（其实是界面没接上）。

     ⇒ 现在：getSession() 为空时依次尝试
       1) refreshSession() —— 用 refreshToken 换新的
       2) getUser()       —— 直接拿 token 换用户信息
     成功就照常进App；全失败才真的走登录墙。
     ⛔ 恢复尝试已经放在上面（早期恢复），这里不再重复调 —— 重复会多发两次网络请求。*/

  renderLogin();
  cloud.auth.onAuthStateChange((event, session) => {
    logAuth('auth事件', event + ' user=' + (session && session.user
      ? 'id=' + (session.user.id || '(无)') : '(无)'));
    if (event === 'SIGNED_OUT') {
      currentUser = null;
      ['expense','diary','life','sport','health'].forEach(k => state[k] = []);
      renderLogin();
    } else if (session && session.user) {
      currentUser = session.user;
      renderApp();
    }
  });
  logAuth('onAuthStateChange 已挂');
}

/* ⛔ 会话半失效时的恢复：先刷新、再用 getUser 兜底。
   返回用户对象；全失败返回 null（这时才该让人重新登录）。

   ⛔⛔⛔ 2026-10-19 19:14 诊断抓到根因：**不要用 `u.email` 判断用户对象是否有效**。
      真实环境的 `getSession()` 返回的 user 对象里 **email 是 undefined**
      （诊断日志 `getSession 有 undefined` 就是这个意思）——
      那是**会话对象存在、只是没带 email 字段**。
      ⇒ v3.10 那个 `if (u && u.email)` 因此永远判假 ⇒ 恢复功能形同虚设 ⇒
        界面还是被丢回登录墙 ⇒ 用户以为「数据没了」。
      ⇒ 判据改成：**有 id 就算有效**（RLS 认的是 owner_id，不是 email）。 */
const userOk = (u) => !!(u && (u.id || u.email || u.user_id));

/* ⛔⛔⛔ 2026-10-20 17:09 App 诊断抓到**真正的**根因：**取错了返回结构**。

   App 里的登录事件流（决定性证据）：
   ```
   17:09:18 getSession 空
   17:09:18 tryRecoverSession 失败   ← 恢复其实有戏，但被我判死了
   17:09:18 INITIAL_SESSION user=(无)
   17:09:32 SIGNED_IN              ← 14 秒后你才重新登录成功
   ```
   ⇒ App **每次打开都要重新登录** ⇒ 打开时界面是空的、登录后才拉数据
     ⇒ 表现为「一打开什么都没有」。

   根因在 SDK 的返回结构（读源码确认）：
   ```js
   function _(r){ return {data:r, error:null} }        // 包装器：data 是原值
   async getUser(){ ... return _(Re(t.data)) }            // ⇒ data **就是用户对象**
   async refreshSession(){ return _(await this.sessions.forceRefresh()) }
                                                            // ⇒ data 是 **session 对象**
   ```
   ⇒ `getUser()` 的 `r.data` = `{id, email, phone, isAnonymous, raw}`
     **没有 `.user` 属性** ⇒ 我写的 `r.data.user` 永远是 undefined
     ⇒ `userOk(undefined)` = false ⇒ **恢复永远失败**。
   ⇒ `refreshSession()` 的 `r.data` = session ⇒ 要取 `.user`（这步原来是对的）。

   修法：**两个 API 的取法不同，不能写成同一种。** */
function pickUser(r) {
  if (!r || !r.data) return null;
  const d = r.data;
  // refreshSession ⇒ data 是 session；getUser ⇒ data 本身就是用户
  return d.session ? (d.session.user || null)
       : (d.user || (d.id ? d : null));
}

async function tryRecoverSession() {
  if (!cloud || !cloud.auth) return null;
  // 1) 刷新一次（刷新令牌还在的话这一步就够）
  try {
    const r = await cloud.auth.refreshSession();
    const u = pickUser(r);
    if (userOk(u)) {
      if (u.email) LS.set('lastKnownEmail', u.email);
      return u;
    }
  } catch (e) { /* 继续试下一种 */ }
  // 2) 兜底：拿现有 token 换用户信息
  try {
    const r = await cloud.auth.getUser();
    const u = pickUser(r);
    if (userOk(u)) {
      if (u.email) LS.set('lastKnownEmail', u.email);
      return u;
    }
  } catch (e) { /* 真的没救了 */ }
  return null;
}

/* ================= Login ================= */
function renderLogin() {
  // 诊断模式：登录墙也弹一次（用户有时是在「被踢出登录」的状态下打开的，
  // 只在 renderApp 里触发就看不到真相了）
  if (/[?&]diag=1/.test(location.search) && !window.__diagOnLogin) {
    window.__diagOnLogin = 1; setTimeout(runDiag, 1200);
  }
  // 登录页的氛围更浓：粒子点亮 + 两团光晕游走（见 CSS .login-wrap::before/::after）
  document.body.classList.add('on-login');
  $('#root').innerHTML = `
    <div class="login-wrap">
      <div class="login-card">
        <div class="login-logo">${ICONS.plus}</div>
        <div class="login-title">生活<em>手账</em></div>
        <div class="login-sub">记账 · 日记 · 生活 · 运动 · 健康</div>
        <div class="login-tabs">
          <div class="login-tab active" data-tab="pwd">密码登录</div>
          <div class="login-tab" data-tab="otp">验证码</div>
          <div class="login-tab" data-tab="signup">注册</div>
        </div>
        <div id="pwd" class="pane">
          <div class="field"><label>邮箱</label><input id="pwd-email" type="email" placeholder="you@example.com" autocomplete="email"></div>
          <div class="field"><label>密码</label><input id="pwd-pass" type="password" placeholder="登录密码" autocomplete="current-password"></div>
          <button class="btn" id="pwd-submit">登录</button>
          <div style="text-align:center;margin-top:6px"><button class="btn-text" id="to-reset">忘记密码？</button></div>
        </div>
        <div id="otp" class="pane" style="display:none">
          <div class="field"><label>邮箱</label><input id="otp-email" type="email" placeholder="you@example.com" autocomplete="email"></div>
          <div class="field-row">
            <div class="field"><label>验证码</label><input id="otp-code" type="text" inputmode="numeric" placeholder="6 位数字"></div>
            <button type="button" class="btn-code" id="otp-send">获取验证码</button>
          </div>
          <button class="btn" id="otp-submit">登录</button>
          <div class="muted" style="font-size:12px;margin-top:12px;text-align:center;line-height:1.6">新邮箱请先到「注册」页设置密码<br>之后用密码登录，不用再收验证码</div>
        </div>
        <div id="signup" class="pane" style="display:none">
          <div class="field"><label>邮箱</label><input id="su-email" type="email" placeholder="you@example.com" autocomplete="email"></div>
          <div class="field-row">
            <div class="field"><label>验证码</label><input id="su-code" type="text" inputmode="numeric" placeholder="6 位数字"></div>
            <button type="button" class="btn-code" id="su-send">获取验证码</button>
          </div>
          <div class="field"><label>设置密码（至少 6 位）</label><input id="su-pass" type="password" placeholder="后面用它直接登录" autocomplete="new-password"></div>
          <button class="btn" id="su-submit">注册并登录</button>
        </div>
        <div id="reset-pane" class="pane" style="display:none">
          <div class="field"><label>邮箱</label><input id="rs-email" type="email" placeholder="you@example.com" autocomplete="email"></div>
          <div class="field-row">
            <div class="field"><label>验证码</label><input id="rs-code" type="text" inputmode="numeric" placeholder="6 位数字"></div>
            <button type="button" class="btn-code" id="rs-send">获取验证码</button>
          </div>
          <div class="field"><label>新密码</label><input id="rs-pass" type="password" placeholder="至少 6 位" autocomplete="new-password"></div>
          <button class="btn" id="rs-submit">重置密码并登录</button>
          <div style="text-align:center;margin-top:6px"><button class="btn-text" id="back-login">返回登录</button></div>
        </div>
        <div class="msg" id="login-msg"></div>
      </div>
    </div>`;
  const msg = $('#login-msg');
  const panes = {pwd:$('#pwd'), otp:$('#otp'), signup:$('#signup')};
  const switchPane = (key) => {
    $$('.login-tab').forEach(x => x.classList.toggle('active', x.dataset.tab === key));
    Object.keys(panes).forEach(k => panes[k].style.display = (k === key ? 'block' : 'none'));
    $('#reset-pane').style.display = 'none';
    msg.className = 'msg';
  };
  $$('.login-tab').forEach(t => t.onclick = () => switchPane(t.dataset.tab));

  $('#pwd-submit').onclick = async () => {
    const email = $('#pwd-email').value.trim();
    const pass = $('#pwd-pass').value;
    if (!email || !pass) { showMsg(msg, '请填邮箱和密码'); return; }
    const { data, error } = await cloud.auth.signInWithPassword({ email, password: pass });
    if (error) { showMsg(msg, errMsg(error)); return; }
    currentUser = data.user; logAuth('登录成功', data.user.email); renderApp();
  };
  $('#to-reset').onclick = () => {
    $$('.login-tab').forEach(x => x.classList.remove('active'));
    Object.values(panes).forEach(p => p.style.display = 'none');
    $('#reset-pane').style.display = 'block';
    msg.className = 'msg';
  };
  $('#back-login').onclick = () => switchPane('pwd');

  let pendingOtp = null;
  $('#otp-send').onclick = async (e) => {
    const email = $('#otp-email').value.trim();
    if (!email) { showMsg(msg, '请填邮箱'); return; }
    e.target.disabled = true;
    const sent = await cloud.auth.sendOtp({ email });
    e.target.disabled = false;
    if (sent.error) { showMsg(msg, errMsg(sent.error)); return; }
    pendingOtp = { email, verificationId: sent.data.verificationId, isExistingUser: sent.data.isExistingUser };
    showMsg(msg, '验证码已发送，注意查收', 'ok');
    countdown(e.target);
  };
  $('#otp-submit').onclick = async () => {
    const code = $('#otp-code').value.trim();
    if (!pendingOtp) { showMsg(msg, '请先获取验证码'); return; }
    if (!code) { showMsg(msg, '请填验证码'); return; }
    const r = await cloud.auth.verifyOtp({
      email: pendingOtp.email, verificationId: pendingOtp.verificationId,
      isExistingUser: pendingOtp.isExistingUser, token: code
    });
    if (r.error) { showMsg(msg, errMsg(r.error)); return; }
    currentUser = r.data.user; renderApp();
  };

  let pendingSu = null;
  $('#su-send').onclick = async (e) => {
    const email = $('#su-email').value.trim();
    if (!email) { showMsg(msg, '请填邮箱'); return; }
    e.target.disabled = true;
    const sent = await cloud.auth.sendOtp({ email });
    e.target.disabled = false;
    if (sent.error) { showMsg(msg, errMsg(sent.error)); return; }
    pendingSu = { email, verificationId: sent.data.verificationId, isExistingUser: sent.data.isExistingUser };
    if (sent.data.isExistingUser) showMsg(msg, '该邮箱已注册，请用密码或验证码登录', 'err');
    else showMsg(msg, '验证码已发送', 'ok');
    countdown(e.target);
  };
  $('#su-submit').onclick = async () => {
    const code = $('#su-code').value.trim();
    const pass = $('#su-pass').value;
    if (!pendingSu) { showMsg(msg, '请先获取验证码'); return; }
    if (!code || !pass) { showMsg(msg, '验证码和密码都要填'); return; }
    if (pass.length < 6) { showMsg(msg, '密码至少 6 位'); return; }
    if (pendingSu.isExistingUser) { showMsg(msg, '该邮箱已注册，请改用登录'); return; }
    const r = await cloud.auth.verifyOtp({
      email: pendingSu.email, verificationId: pendingSu.verificationId,
      isExistingUser: false, token: code, password: pass
    });
    if (r.error) { showMsg(msg, errMsg(r.error)); return; }
    currentUser = r.data.user; renderApp();
  };

  let pendingRs = null;
  $('#rs-send').onclick = async (e) => {
    const email = $('#rs-email').value.trim();
    if (!email) { showMsg(msg, '请填邮箱'); return; }
    e.target.disabled = true;
    const started = await cloud.auth.resetPasswordForEmail(email);
    e.target.disabled = false;
    if (started.error) { showMsg(msg, errMsg(started.error)); return; }
    pendingRs = { email, started };
    showMsg(msg, '验证码已发送', 'ok');
    countdown(e.target);
  };
  $('#rs-submit').onclick = async () => {
    const code = $('#rs-code').value.trim();
    const pass = $('#rs-pass').value;
    if (!pendingRs) { showMsg(msg, '请先获取验证码'); return; }
    if (!code || !pass) { showMsg(msg, '验证码和新密码都要填'); return; }
    if (pass.length < 6) { showMsg(msg, '新密码至少 6 位'); return; }
    const r = await pendingRs.started.data.updateUser({ nonce: code, password: pass });
    if (r.error) { showMsg(msg, errMsg(r.error)); return; }
    if (r.data && r.data.user) currentUser = r.data.user;
    renderApp();
  };
}

/* ================= App Shell ================= */
/* ================= 诊断模式（?diag=1）=================
   用户报「重开 App 数据全没了」，但数据库里数据真实存在（已用管理接口核实）。
   ⇒ 需要看**前端到底读到了什么**：每张表读了几条、record_date 是什么格式、
      有没有被 RLS 挡、当前用户是谁。
   ⛔ 这是临时排查用，不要删 —— 下次再出现「数据不见了」直接开它看。 */
/* ================= 诊断：登录事件追踪 ==================
   ⛔ 2026-10-19 晚。用户登录后诊断显示一组**自相矛盾**的读数：
       stData.waterRows = 6   ← 首页 fetchStData 读到 6 笔喝水（登录有效）
       stData.mood     = 😐   ← 心情也读到了
       同一时刻逐表 select 却 **全部 0 条、err=null**
   ⇒ 「刚登录成功过，之后会话就没了」是唯一解释。
   ⇒ 这里把 auth 事件流记下来：谁触发、什么事件、有没有 SIGNED_OUT。
*/
const authLog = [];
function logAuth(what, extra) {
  authLog.push(`${new Date().toLocaleTimeString('zh-CN')}  ${what}` + (extra ? '  ' + extra : ''));
  if (authLog.length > 40) authLog.shift();
}
async function runDiag() {
  const out = [];
  const log = (k, v) => out.push(`<div class="dg-row"><b>${k}</b><span>${v}</span></div>`);
  log('当前时间', new Date().toString());
  log('todayStr()', todayStr());
  log('currentUser变量', currentUser
    ? '存在 id=' + (currentUser.id || '(无)') + ' email=' + (currentUser.email || '(空)')
    : '(null)');
  try {
    const s = await cloud.auth.getSession();
    log('SDK session', s && s.data && s.data.session
      ? '有 user=' + (s.data.session.user && s.data.session.user.email)
      : '(空)');
  } catch (e) { log('SDK session', '抛错 ' + e.message); }
  log('页面上是否登录墙', document.body.classList.contains('on-login') ? '在登录页' : '不在');
  log('#root 长度', String(($('#root') || { innerHTML: '' }).innerHTML.length));

  /* ⛔⛔ 关键：SDK 的 resolveStorage() 会先探测 localStorage，
     探测失败就**退回内存 Map**（createMemoryStorage）⇒ session 关掉就没了。
     这就是「重开 App 数据全没了」的根因：token 在内存里，
     请求能过（RLS 放行），但下次启动读不到 ⇒ 看起来像"没登录/数据没了"。 */
  log('--- 存储探测 ---', '');
  try {
    localStorage.setItem('__probe__', '1');
    const v = localStorage.getItem('__probe__');
    localStorage.removeItem('__probe__');
    log('localStorage', v === '1' ? '可用 OK' : '异常：写进去读出来是 ' + JSON.stringify(v));
  } catch (e) { log('localStorage', '⛔不可用：' + e.message + '  ← SDK 会退回内存'); }
  log('sessionStorage', (() => {
    try { sessionStorage.setItem('__p__', '1'); const v = sessionStorage.getItem('__p__'); sessionStorage.removeItem('__p__'); return v === '1' ? '可用 OK' : '异常'; }
    catch (e) { return '不可用：' + e.message; }
  })());
  try {
    const c = document.cookie;
    log('document.cookie', c ? '有 ' + c.length + ' 字符' : '(空)');
  } catch (e) { log('document.cookie', '读不了：' + e.message); }
  log('localStorage 键数', (() => {
    try { return String(Object.keys(localStorage).length); } catch (e) { return '读不了'; }
  })());
  log('SDK 会话键', (() => {
    try { return Object.keys(localStorage).filter(k => k.indexOf('workbuddy-cloud') > -1).join(',') || '(没有!)'; }
    catch (e) { return '读不了'; }
  })());

  /* ⛔⛔⛔ 针对性诊断（2026-10-19 晚）
     用户报：3 元记账「填完还在，退出重进又没了」—— 但 SQL 直查那条真在库里
     （id=243, record_date=2026-10-19）。⇒ **写入没问题，是读取没显示**。
     ⇒ 这里直接把「记账页实际读到几条 / 卡片上画了几条 / 月份键是多少」打出来，
        一眼能分清是「查询范围不对」还是「画的时候被过滤了」。 */
  log('--- 登录事件流 ---', '');
  authLog.forEach(l => log('·', l));
  log('--- 记账页读取 ---', '');
  log('state.expYM', state.expYM || '(空)');
  log('monthStr()', monthStr());
  log('rangeOfYM', JSON.stringify(rangeOfYM(state.expYM || monthStr())));
  log('state.expense条数', String((state.expense || []).length));
  try {
    const r = await cloud.database.from('expense').select('id,record_date,amount')
      .gte('record_date', rangeOfYM(state.expYM || monthStr()).start)
      .lt('record_date', rangeOfYM(state.expYM || monthStr()).end)
      .order('record_date', { ascending: false });
    log('云端本月条数', String((r.data || []).length) + (r.error ? ' err=' + JSON.stringify(r.error).slice(0, 50) : ''));
    log('最近3条(本月)', (r.data || []).slice(0, 3).map(x => x.record_date + '/' + x.amount).join(' '));
    log('今天有几条', String((r.data || []).filter(x => String(x.record_date).slice(0, 10) === todayStr()).length));
  } catch (e) { log('云端查询抛错', e.message); }
  log('DOM里记账卡片数', String(document.querySelectorAll('#view .card').length));

  /* ⛔⛔⛔ 2026-10-20 03:57 专项：用户报「新增 123 重进就消失、删除闪一下又回来」，
     而 SQL 直查两条**都真在库里** ⇒ 前端重查拿不到它们。
     这里直接用**记账页那条一模一样的查询**去问云端，把原始返回值打出来：
       · 前端查得到、界面没画 ⇒ 画的问题
       · 前端也查不到     ⇒ SDK/会话/网络层的问题
     两者要靠这个区分。 */
  /* ⛔⛔⛔ 2026-10-23：**绕过 SDK，直接用 fetch 打数据面**，
     看原始响应体与响应头。
     背景：管理面（Supavisor 直连主库）能看到 id=250，
     但数据面 GET /.cloud/database/rest/expense 读不到；
     数据库侧已全部排除（无复制、无只读副本、read committed、
     RLS 用 authenticated+正确 sub 模拟能查到 90 条且含 id=250、
     网关无 Age/X-Cache、PostgREST 直通）。
     ⇒ 这一段能直接定性「数据面到底返回了什么」。 */
  log('--- 数据面原始响应 ---', '');
  try {
    const at = await cloud.auth.getAccessToken();
    log('拿到 accessToken', at ? '是（长度 ' + String(at).length + '）' : '⛔否');
    if (at) {
      const url = publicConfig.endpoint + '/.cloud/database/rest/expense'
        + '?select=id,amount,record_date,created_at&order=created_at.desc&limit=5';
      const r0 = await fetch(url, {
        headers: {
          'x-wb-webapp-access-key': publicConfig.publishableKey,
          'Authorization': 'Bearer ' + at
        }
      });
      const txt = await r0.text();
      log('HTTP状态', String(r0.status));
      log('content-range', r0.headers.get('content-range') || '(无)');
      log('x-request-id', r0.headers.get('x-request-id') || '(无)');
      log('upstream耗时', r0.headers.get('x-cloudbase-upstream-timecost') || '(无)');
      log('返回体(前600字)', txt.slice(0, 600));
      try {
        const j = JSON.parse(txt);
        if (Array.isArray(j)) {
          log('返回条数', String(j.length));
          log('最大id', String(j.reduce((a, x) => Math.max(a, Number(x.id) || 0), 0)));
          log('有 id=250 吗', j.some(x => String(x.id) === '250') ? '有 ✅' : '⛔没有');
        }
      } catch (e) { log('返回体不是JSON', ''); }
    }
  } catch (e) { log('数据面探测抛错', e.message); }

  log('--- 记账页原样查询 ---', '');
  try {
    const rg = rangeOfYM(state.expYM || monthStr());
    const q = await cloud.database.from('expense').select('*')
      .gte('record_date', rg.start).lt('record_date', rg.end)
      .order('record_date', { ascending: false }).order('created_at', { ascending: false });
    log('查询区间', rg.start + ' ~ ' + rg.end);
    log('查询报错', q.error ? JSON.stringify(q.error).slice(0, 80) : '无');
    log('查询返回条数', String((q.data || []).length));
    log('返回的日期', (q.data || []).slice(0, 6).map(x => String(x.record_date)).join(' '));
    log('有没有 123', (q.data || []).some(x => Number(x.amount) === 123) ? '有 ✅' : '⛔没有');
    log('有没有 11',  (q.data || []).some(x => Number(x.amount) === 11)  ? '有 ✅' : '没有');
  } catch (e) { log('查询抛错', e.message); }
  log('state.expense 里有没有 123', (state.expense || []).some(x => Number(x.amount) === 123) ? '有' : '没有');
  log('当前在哪个页签', typeof activeTab !== 'undefined' ? activeTab : '(未知)');

  /* ⛔ 记账页专项：把「state 里有几条」和「DOM 上画了几张卡片」摆在一起。
     之前只有 `DOM里记账卡片数`，没说明是哪个页面量的，容易误读。 */
  /* ⛔⛔ 日记页专项（2026-10-20）：用户「19/18 号的日记写完刷新就没了」，
     而 SQL 直查 id=49/50 **都在库里**（写入时间 05:06 / 05:09）。
     ⇒ 同样的套路：把「云端查到了几条」「state 里有几条」「画了几张卡」
        「搜索框里是不是有残留关键词」摆在一起。 */
  if (typeof activeTab !== 'undefined' && activeTab === 'diary') {
    const dom = document.querySelector('#view');
    log('【日记页】搜索关键词', JSON.stringify(state.diaryQ || '(空)'));
    log('【日记页】云端查到', String((q.data || []).length));
    log('【日记页】state 条数', String((state.diary || []).length));
    log('【日记页】画出的卡片', String(dom ? dom.querySelectorAll('.card').length : -1));
    log('【日记页】页面文字里有"润滑液"', (dom && /润滑液/.test(dom.textContent)) ? '有 ✅' : '⛔没有');
    log('【日记页】页面文字里有"连着打了"', (dom && /连着打了/.test(dom.textContent)) ? '有 ✅' : '⛔没有');
    log('【日记页】前5条日期', (q.data || []).slice(0, 5).map(x => String(x.record_date)).join(' '));
    log('【日记页】diarySig', state.diarySig ? ('有 ' + String(state.diarySig).slice(0, 20)) : '(空)');
    log('【日记页】搜索框在吗', (dom && dom.querySelector('#dq')) ? '在' : '不在');
  }

  if (typeof activeTab !== 'undefined' && activeTab === 'expense') {
    const dom = document.querySelector('#view');
    log('【记账页】state 条数', String((state.expense || []).length));
    log('【记账页】画出的卡片', String(dom ? dom.querySelectorAll('.card').length : -1));
    log('【记账页】expenseSig', state.expenseSig ? ('有 ' + String(state.expenseSig).slice(0, 24)) : '(空)');
    log('【记账页】expYM', state.expYM || '(空)');
    log('【记账页】state 里最新的3条',
      (state.expense || []).slice(0, 3).map(x => x.record_date + '/' + x.amount).join(' '));
    log('【记账页】页面文字里有123', (dom && /123/.test(dom.textContent)) ? '有' : '没有');
    log('【记账页】loading 中', (dom && /加载|⏳|spinner/i.test(dom.textContent)) ? '是' : '否');
  }
  for (const t of ['sport', 'water', 'mood', 'diary', 'life', 'expense', 'health', 'steps']) {
    try {
      const r = await cloud.database.from(t).select('*').limit(3);
      const rows = r.data || [];
      log(t, `err=${r.error ? JSON.stringify(r.error).slice(0, 60) : 'null'} 条数(≤3)=${rows.length}` +
        (rows.length ? ` 日期=${JSON.stringify(rows[0].record_date)} 类型=${typeof rows[0].record_date} 长度=${String(rows[0].record_date || '').length}` : ''));
    } catch (e) {
      log(t, '抛错：' + String(e.message).slice(0, 80));
    }
  }
  log('state.sport', String((state.sport || []).length));
  log('state.waterRows', String(((stData || {}).waterRows || []).length));
  log('stData.mood', (stData && stData.mood) || '(空)');
  /* ⛔ 重复调用时先撤掉旧面板，否则切几次页会叠出一堆（2026-10-20）*/
  const old = document.getElementById('diag-box');
  if (old) old.remove();
  const box = document.createElement('div');
  box.id = 'diag-box';
  box.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#000;color:#0f0;'
    + 'font:12px/1.6 monospace;padding:14px;overflow:auto';
  box.innerHTML = '<b>诊断（把这页截图发我）</b>'
    + out.map(s => '<div>' + s + '</div>').join('')
    + '<div style="margin-top:10px;display:flex;gap:10px;flex-wrap:wrap">'
    +   '<button id="dg-close" style="background:#0f0;color:#0f0;border:1px solid #0f0;padding:4px 10px">关闭</button>'
    +   '<button id="dg-fix" style="background:#0f0;color:#000;border:1px solid #0f0;padding:4px 10px">清除坏会话并重新登录</button>'
    + '</div>'
    + '<div style="margin-top:8px">不点「关闭」的话点空白处也能关</div>';
  box.onclick = (e) => { if (e.target === box || e.target.id === 'dg-close') box.remove(); };
  const fix = document.getElementById('dg-fix');
  if (fix) fix.onclick = async () => {
    fix.textContent = '正在清除…';
    try {
      // 把 SDK 认定失效的会话键整个删掉，逼它回到干净的登录态
      Object.keys(localStorage).filter(k => k.indexOf('workbuddy-cloud.session.') === 0)
        .forEach(k => localStorage.removeItem(k));
      if (cloud && cloud.auth && cloud.auth.signOut) { try { await cloud.auth.signOut(); } catch (e) {} }
    } catch (e) {}
    fix.textContent = '已清除，正在重新加载…';
    setTimeout(() => location.reload(), 600);
  };
  document.body.appendChild(box);
}

function renderApp() {
  // 诊断模式：登录后自动弹出读数面板
  if (/[?&]diag=1/.test(location.search)) setTimeout(runDiag, 800);
  const nick = getNick();
  document.body.classList.remove('on-login');
  $('#root').innerHTML = `
    <div class="hd">
      ${nick
        ? `<div class="brand hi"><span class="hi-t">${escapeHtml(greeting())}</span><em>${escapeHtml(nick)}</em></div>`
        : `<div class="brand">生活<em>手账</em></div>`}
      <div class="avatar" id="btn-me" title="我的">${avatarInner(currentUser && currentUser.email)}</div>
    </div>
    <main class="view" id="view"></main>
    <nav class="tab-bar">
      <button class="tab" data-tab="home"><span class="pill">${ICONS.home}</span>今日</button>
      <button class="tab" data-tab="expense"><span class="pill">${ICONS.expense}</span>记账</button>
      <button class="tab" data-tab="diary"><span class="pill">${ICONS.diary}</span>日记</button>
      <button class="tab" data-tab="life"><span class="pill">${ICONS.life}</span>生活</button>
      <button class="tab" data-tab="sport"><span class="pill">${ICONS.sport}</span>运动</button>
      <button class="tab" data-tab="health"><span class="pill">${ICONS.health}</span>健康</button>
    </nav>
    <button class="fab" id="fab">${ICONS.plus}</button>
    <div class="modal-bg" id="modal-bg"><div class="modal" id="modal"><div class="grab"></div></div></div>`;
  $$('.tab').forEach(t => t.onclick = () => switchTab(t.dataset.tab));
  $('#btn-me').onclick = () => switchTab('me');
  $('#fab').onclick = onFab;
  $('#modal-bg').onclick = (e) => { if (e.target.id === 'modal-bg') closeModal(); };
  switchTab('home');
  // 头像与「手机同步来的步数」都在后台补齐，不挡首屏
  loadAvatar().catch(() => {});
  flushPendingSteps().catch(() => {});
}

function switchTab(tab) {
  activeTab = tab;
  /*⛔⛔⛔ 诊断模式：切页后自动刷新面板（2026-10-20）
     之前只在 renderApp 里跑一次 ⇒ 面板永远显示的是**首页**的状态
     （截图里 `当前在哪个页签 home`、`state.expense条数 0`，
      害我以为"没进过记账页所以 state 是空的" —— 其实只是诊断跑早了）。
     ⇒ 切页 1.2 秒后重跑，用户在哪个页面看就是哪个页面的真实读数。*/
  if (/[?&]diag=1/.test(location.search) || window.__diagOn) {
    setTimeout(() => { try { runDiag(); } catch (e) {} }, 1200);
  }
  $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  const fab = $('#fab');
  if (fab) fab.style.display = (tab === 'me' || tab === 'weekly' || tab === 'monthly') ? 'none' : 'flex';
  if (tab === 'home') renderHome();
  else if (tab === 'expense') renderExpenseList();
  else if (tab === 'diary') renderDiaryList();
  else if (tab === 'life') renderLifeList();
  else if (tab === 'sport') renderSportList();
  else if (tab === 'health') renderHealthList();
  else if (tab === 'weekly') renderWeekly();
  else if (tab === 'monthly') renderMonthly();
  else if (tab === 'me') renderProfile();
}

function onFab() {
  if (activeTab === 'home') { switchTab('expense'); setTimeout(() => openExpenseForm(), 60); }
  else if (activeTab === 'expense') openExpenseForm();
  else if (activeTab === 'diary') openDiaryForm();
  else if (activeTab === 'life') openLifeForm();
  else if (activeTab === 'sport') openSportForm();
  else if (activeTab === 'health') openHealthForm();
}

async function confirmSignOut() {
  if (!confirm('确定要退出登录吗？数据仍在云端，下次登录即可继续。')) return;
  await cloud.auth.signOut();
}

/* ================= 弹窗/输入的小工具 ================= */

/* 手机键盘弹起来时，弹窗要跟着让位 —— 否则输入框正好被键盘盖住，
   写完看不到自己打了什么。visualViewport 是唯一能拿到键盘真实高度的接口。 */
(function bindKeyboardInset() {
  const vv = window.visualViewport;
  if (!vv) return;
  const fit = () => {
    const kb = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
    document.documentElement.style.setProperty('--kb', Math.round(kb) + 'px');
  };
  vv.addEventListener('resize', fit);
  vv.addEventListener('scroll', fit);
  fit();
})();

/* 正文框自动长高：内容多了自己往上撑，到半屏就停住改内部滚动 */
function bindAutoGrow(ta) {
  if (!ta) return;
  const cap = () => Math.round(window.innerHeight * 0.5);
  const fit = () => {
    ta.style.height = 'auto';
    ta.style.height = Math.min(ta.scrollHeight + 4, cap()) + 'px';
  };
  ta.addEventListener('input', fit);
  fit();
}

/* 「选择文件」点下去如果**系统选择器压根没弹**，页面会安静地停在原地，
   用户只能得出「点了没反应」这个结论。这里做一次探测并直说原因：
   2 秒内页面既没被切走、也没等到 change ⇒ 基本可以断定是 App 壳里
   没有实现 onShowFileChooser（低于 1.4 的版本就是这样）。 */
function watchFilePick(input) {
  if (!input) return;
  let changed = false, away = false;
  input.addEventListener('change', () => { changed = true; });
  window.addEventListener('blur', () => { away = true; }, { once: true });
  input.addEventListener('click', () => {
    changed = false; away = false;
    setTimeout(() => {
      if (changed || away || !document.hasFocus()) return;   // 有动静 = 正常
      if (input.files && input.files.length) return;
      if (LS.get('fileHint', 0)) return;                     // 只烦一次
      LS.set('fileHint', 1);
      showSyncBar('文件选择器没弹出来',
        '多半是 App 版本太旧 —— 在「关于」里重新下载安装包即可；网页版不受影响',
        9000, () => { switchTab('me'); setTimeout(() => { const v = $('#mi-ver'); if (v) v.scrollIntoView({ block: 'center' }); }, 400); });
    }, 2000);
  });
}

/* ================= Modal ================= */
function openModal(html) {
  $('#modal').innerHTML = `
    <div class="grab"></div>
    <div class="modal-head">
      <div class="modal-title" id="modal-title"></div>
      <button class="btn-close" id="modal-close">×</button>
    </div>
    <div id="modal-body">${html}</div>`;
  $('#modal-bg').classList.add('show');
  $('#modal-close').onclick = closeModal;
}
function closeModal() { $('#modal-bg').classList.remove('show'); }
function setModalTitle(t) { $('#modal-title').textContent = t; }

// 顶部轻提示
/* 顶部提示条（toast / 同步结果条）左右一划就移除，不用干等它自己消失。
   两处细节：① toast 会被反复重建、sync-bar 每次都是新元素，所以监听挂在 document 上，
   用 contains 判定手指落在谁身上；② 先判主方向，竖着划要留给页面滚动，别抢。 */
(function () {
  const targets = [
    { get: () => { const t = document.getElementById('toast'); return (t && t.classList.contains('show')) ? t : null; },
      at: (d) => `translate(calc(-50% + ${d}px),calc(var(--safe-top) + 66px))` },
    { get: () => document.querySelector('.sync-bar.show'),
      at: (d) => `translate(${d}px,0)` }
  ];
  let cur = null, x0 = 0, y0 = 0, dx = 0, axis = '', live = false;

  document.addEventListener('touchstart', (e) => {
    cur = null;
    for (const it of targets) {
      const el = it.get();
      if (el && el.contains(e.target)) { cur = { el, at: it.at }; break; }
    }
    if (!cur) return;
    x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
    dx = 0; axis = ''; live = true;
    cur.el.style.transition = 'none';
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!live || !cur) return;
    const cx = e.touches[0].clientX - x0, cy = e.touches[0].clientY - y0;
    if (!axis) {
      if (Math.abs(cx) < 8 && Math.abs(cy) < 8) return;      // 手指还没走够，先不定方向
      axis = Math.abs(cx) > Math.abs(cy) ? 'x' : 'y';
      if (axis === 'y') {                                    // 竖划 = 想滚页面，让开
        live = false; cur.el.style.transition = ''; cur = null; return;
      }
    }
    dx = cx;
    cur.el.style.transform = cur.at(dx);
    cur.el.style.opacity = String(Math.max(.2, 1 - Math.abs(dx) / 260));
  }, { passive: true });

  const finish = (cancelled) => {
    if (!live || !cur) { if (cur) cur.el.style.transition = ''; live = false; cur = null; return; }
    const el = cur.el, at = cur.at, d = dx;
    live = false; cur = null; dx = 0;
    el.style.opacity = '';
    if (!cancelled && Math.abs(d) > 56) {                    // 划过阈值 = 顺势滑出屏幕再摘掉
      el.style.transition = 'transform .2s ease, opacity .2s ease';
      el.style.transform = at(d > 0 ? 460 : -460);
      el.style.opacity = '0';
      el.classList.remove('show');
      setTimeout(() => { if (el.parentNode) el.remove(); }, 220);
    } else {                                                 // 没过阈值 = 回弹
      el.style.transition = '';
      el.style.transform = '';
    }
  };
  document.addEventListener('touchend', () => finish(false), { passive: true });
  document.addEventListener('touchcancel', () => finish(true), { passive: true });
})();

let toastTimer = null, toastGoneTimer = null;
// ⛔ 第 3 参别再加回来。旧签名是 (text, sub, img, kind)，img 走宠物立绘；
// 现在形态由 kind 唯一决定，kind 是第 3 参 —— 若保持旧位，调用方写 kind 会被当成 img 静默丢掉。
function toast(text, sub, kind) {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  const err = kind === 'err';
  el.classList.toggle('err', err);          // 用 classList 而不是重写 className，免得把正在显示的 .show 抹掉
  // 两种形态只差左边那个记号：正常 = 琥珀圆点，出错 = 红底叹号。
  // 原来这里塞的是宠物立绘，宠物下线后一律改成记号 —— 圆点比图片轻，
  // 也不会因为图片 404 在 toast 里留一个破图框。
  const mark = err
    ? `<span class="ti">!</span>`
    : `<span class="tdot"></span>`;
  el.innerHTML = mark +
    `<div class="tt">${escapeHtml(text)}${sub ? `<i>${escapeHtml(sub)}</i>` : ''}</div>`;
  el.style.transition = ''; el.style.transform = ''; el.style.opacity = '';   // 清掉上次左右滑动留下的内联位移
  requestAnimationFrame(() => el.classList.add('show'));
  clearTimeout(toastTimer); clearTimeout(toastGoneTimer);
  toastTimer = setTimeout(() => {
    el.classList.remove('show');
    // 收起动画跑完就从 DOM 里摘掉。别指望"靠定位把隐藏态挪出屏幕"——
    // 只要算差一点，屏幕顶端就会永远留一条小尾巴，只有刷新页面才消失。
    toastGoneTimer = setTimeout(() => {
      if (el.parentNode && !el.classList.contains('show')) el.remove();
    }, 380);
  }, 2800);
}

/* 出错提示：替换原生 alert。安卓 WebView 里的 alert 又丑又会卡住整个界面，
   而且样式和 App 完全不搭。 */
const toastErr = (text, sub) => toast(text, sub, 'err');

/* ---------- 列表页通用：秒开 / 静默刷新 / 失败重试 ---------- */

/* 列表一次拉多少条。个人使用量级（几百条）下绰绰有余。
   ⛔ 原来 life / sport 写死 limit(100)，diary 写死 500 —— 记录一多就**静默截断**，
   用户只会觉得"更早的记录不见了"，不会有任何报错。 */
const LIMIT_LIST = 2000;
/* 导出备份 / 导入判重需要全表，给一个足够大的上限 */
const LIMIT_ALL = 100000;

// 加载占位（六个页面共用一份，别再各写各的）
const loadingHTML = () => `<div class="empty"><span class="loader"></span><div style="margin-top:10px">加载中</div></div>`;

/* 失败块：一律带「点此重试」。
   以前只有首页有重试按钮，其他页失败后只能靠来回切 tab 碰运气。 */
function failHTML(what, e, retryCall) {
  return `<div class="empty"><div class="ico">!</div>${escapeHtml(what)}失败：${escapeHtml(errMsg(e))}`
    + `<br><br><button class="btn-text" onclick="${retryCall}">点此重试</button></div>`;
}

/* 行数据指纹：判断「这次拉回来的」和「上次画出来的」是不是同一批。
   数据就几百条，JSON 序列化比逐字段比对省事，速度也够。
   ⭐ 写操作（增删改）不用手动清缓存 —— 服务端数据一变指纹就变，自动会重画。 */
const rowsSig = (rows) => JSON.stringify(rows || []);

/* 屏幕上已经有旧数据时，刷新失败别把整页变成错误块，轻提示一句就好 */
function softFail(e) { toast('刷新失败 · 显示的是上次的数据', errMsg(e)); }

/* ---------- 网络状态：断网时顶部压一条，别让人对着转圈干等 ---------- */
(function bindNetStatus() {
  const bar = document.getElementById('net-bar');
  if (!bar) return;
  const apply = (off) => {
    bar.classList.toggle('on', off);
    // 先切 class 再量高度：display:none 的时候 offsetHeight 是 0
    document.documentElement.style.setProperty('--neth', off ? bar.offsetHeight + 'px' : '0px');
  };
  window.addEventListener('online',  () => { apply(false); toast('网络已恢复'); });
  window.addEventListener('offline', () => apply(true));
  window.addEventListener('resize',  () => apply(navigator.onLine === false));  // 横竖屏切换后安全区变了
  apply(navigator.onLine === false);
  // 真实 offline 事件在无头浏览器里造不出来，留个钩子给本地验证脚本用
  window.__netStatus = apply;
})();


async function renderHome() {
  const v = $('#view');
  v.innerHTML = loadingHTML();
  try {
    const today = todayStr();
    // 本月汇总原本是串行跟在后面单独 await 的 —— 白多一个网络往返，一起并行掉
    const { start: monthStart, end: monthEnd } = monthRange();
    const [exp, dia, sp, li, stepRes, monthExp] = await Promise.all([
      cloud.database.from('expense').select('*').eq('record_date', today),
      cloud.database.from('diary').select('*').eq('record_date', today).limit(1).maybeSingle(),
      cloud.database.from('sport').select('*').eq('record_date', today),
      cloud.database.from('life').select('*').eq('record_date', today),
      cloud.database.from('steps').select('*').eq('record_date', today).limit(1).maybeSingle(),
      cloud.database.from('expense').select('*').gte('record_date', monthStart).lt('record_date', monthEnd)
    ]);

    let todayOut = 0, todayIn = 0;
    if (exp.data) exp.data.forEach(r => { if (r.kind === 'out') todayOut += Number(r.amount); else todayIn += Number(r.amount); });
    let monthOut = 0, monthIn = 0;
    if (monthExp.data) monthExp.data.forEach(r => { if (r.kind === 'out') monthOut += Number(r.amount); else monthIn += Number(r.amount); });
    const hasDiary = !!(dia.data && dia.data.id);
    const sportCount = sp.data ? sp.data.length : 0;
    const lifeCount = li.data ? li.data.length : 0;
    const stepRec = (stepRes && !stepRes.error && stepRes.data) ? stepRes.data : null;
    const d = new Date();

    v.innerHTML = `
      <div class="hero">
        <div class="hero-label">今日支出 · ${d.getMonth()+1}月${d.getDate()}日</div>
        <div class="hero-num num">¥${fmtMoney(todayOut)}</div>
        <div class="hero-grid">
          <div><span class="k">今日收入</span><span class="v" style="color:var(--in)">+¥${fmtMoney(todayIn)}</span></div>
          <div><span class="k">本月支出</span><span class="v num">¥${fmtMoney(monthOut)}</span></div>
          <div><span class="k">本月收入</span><span class="v num" style="color:var(--in)">+¥${fmtMoney(monthIn)}</span></div>
          <div><span class="k">今日步数</span><span class="v num" style="color:var(--cyan)">${stepRec ? Number(stepRec.steps).toLocaleString('zh-CN') : '—'}</span></div>
        </div>
      </div>
      <div id="st-zone"></div>
      <div class="sec">今日打卡</div>
      <div class="check-grid">
        <div class="check ${hasDiary?'on':'off'}"><span class="ico">${ICONS.diary}</span><div class="t">日记</div><div class="v">${hasDiary?'已写':'未记'}</div></div>
        <div class="check ${sportCount>0?'on':'off'}"><span class="ico">${ICONS.sport}</span><div class="t">运动</div><div class="v">${sportCount>0?sportCount+' 次':'未动'}</div></div>
        <div class="check ${lifeCount>0?'on':'off'}"><span class="ico">${ICONS.life}</span><div class="t">生活</div><div class="v">${lifeCount>0?lifeCount+' 条':'未记'}</div></div>
      </div>
      <div class="sec">快速记录</div>
      <div class="quick-grid">
        <button class="quick" data-act="exp">${ICONS.expense}<span>记一笔</span></button>
        <button class="quick" data-act="dia">${ICONS.diary}<span>写日记</span></button>
        <button class="quick" data-act="sp">${ICONS.sport}<span>记运动</span></button>
        <button class="quick" data-act="he">${ICONS.health}<span>记健康</span></button>
      </div>`;
    $$('.quick').forEach(b => b.onclick = () => quickAdd(b.dataset.act));
    // 星环 / 喝水 / 每日一句 / 心情 —— 独立渲染并自带 try，
    // ⛔ 不和上面这堆 Promise 混在一起：它们失败时不该把整个首页拖成「加载失败」
    renderStZone();
  } catch(e) {
    v.innerHTML = failHTML('加载', e, 'renderHome()');
  }
}

function quickAdd(act) {
  if (act === 'exp') { switchTab('expense'); setTimeout(() => openExpenseForm(), 60); }
  else if (act === 'dia') { switchTab('diary'); setTimeout(() => openDiaryForm(), 60); }
  else if (act === 'sp') { switchTab('sport'); setTimeout(() => openSportForm(), 60); }
  else if (act === 'he') { switchTab('health'); setTimeout(() => openHealthForm(), 60); }
}

/* ================= 记录星环 · 喝水 · 每日一句 · 每日心情 =================
   2026-10-14 新增。设计上刻意把「宠物」换成这四块：
   宠物原来只是 20 张静态贴图（4 形态 × 5 皮肤），进化方式是「等级到了换图」，
   没有在场感；而星环直接读数据 —— 点亮 = 当天有记录，断签就是灰的缺口。
   ⛔ 命名一律 st- 前缀，且函数名都带 st 前缀，加函数前必须查重名
      （10-03 曾因月报 monthRange 覆盖同名函数、整页崩掉，见 skill）。 */

const ST_WATER_GOAL_DEFAULT = 2000;  // 每日饮水目标 ml（默认值，可改）
const ST_WATER_GOAL_MIN = 500, ST_WATER_GOAL_MAX = 5000;
/* v3.1：目标不再写死。
   ⛔ 所有读目标的地方必须走 stWaterGoal()，别直接用常量 —— 改了目标但
   星环弧长/百分比/文案还按 2000 算，就成了「显示的和实际的不一样」。
   存在 localStorage 不上云：饮水目标跟着这个人走，不该跟账号绑定（换设备重设一次即可）。*/
const stWaterGoal = () => {
  const v = Number(LS.get('waterGoal', ST_WATER_GOAL_DEFAULT));
  return (v >= ST_WATER_GOAL_MIN && v <= ST_WATER_GOAL_MAX) ? v : ST_WATER_GOAL_DEFAULT;
};
const ST_WATER_STEP = 100;           // 自定义步进
// ⛔ 心情只有一份清单。以前星环区用 ST_MOODS、日记表单用 MOODS，
//    两份内容还不一样（这份有 😌 那份有 😰）—— 同一件事两个口径。
//    MOODS 定义在文件下方，const 有 TDZ，所以这里用函数延迟取，不能直接赋值。
const ST_WEEK_LABELS = ['一','二','三','四','五','六','日'];
const stMoodList = () => (typeof MOOD_LIST !== 'undefined' ? MOOD_LIST
  : [{ f: '😊', l: '开心' }, { f: '😌', l: '平静' }, { f: '🥰', l: '心动' }]);
const stMoodLabel = (f) => (typeof moodLabel === 'function' ? moodLabel(f) : (f || ''));

/* ---- 每日一句：本地句子库 ----
   ⛔ 不用模型：模型每次输出都不同 ⇒ 同一天刷新看到的话不一样 ⇒ 用户以为 App 坏了；
      而且为每天一句短语烧 token 不划算。固定库按日期取，稳定、离线、零成本。
   ⛔ 全部为公版名言。中文首句不得重复（用户两天看到同一句会以为坏了）。 */
const QUOTE_LIB = [
  { z: '唯一安全的事，就是冒一次险。', e: 'The only safe thing is to take a chance.', a: 'Elaine May' },
  { z: '我们最大的光荣，不在于从不跌倒，而在于每次跌倒后都能爬起来。', e: 'Our greatest glory is not in never falling, but in rising every time we fall', a: '孔子 / Confucius' },
  { z: '生活不是等待暴风雨过去，而是学会在雨中起舞。', e: 'Life is not about waiting for the storm to pass, but learning to dance in the rain', a: '佚名' },
  { z: '你无法用旧的力气，去达成新的目标。', e: 'You cannot use old strengths to get to new goals', a: '佚名' },
  { z: '那些杀不死我的，使我更强大。', e: 'That which does not kill me makes me stronger', a: '尼采 / Nietzsche' },
  { z: '决定我们成为什么样的人的，不是我们的能力，而是我们的选择。', e: 'It is not our abilities that tell who we are, but our choices', a: '邓布利多 / Dumbledore' },
  { z: '你要做的事越多，能做好的就越少。', e: 'If you do too much, you will not do enough', a: '佚名' },
  { z: '种一棵树最好的时间是十年前，其次是现在。', e: 'The best time to plant a tree was ten years ago; the second best time is now', a: '谚语' },
  { z: '慢一点没关系，只要不停下来。', e: 'It does not matter how slowly you go as long as you do not stop', a: '孔子 / Confucius' },
  { z: '失败是成功之母，别把它当继母。', e: 'Failure is the mother of success, not her stepmother', a: '佚名' },
  { z: '真正的发现之旅不在于寻找新大陆，而在于拥有新眼光。', e: 'The real voyage of discovery consists not in seeking new lands, but in having new eyes', a: '普鲁斯特 / Proust' },
  { z: '我最大的奢侈是思考的时间。', e: 'My greatest luxury is the time to think', a: '佚名' },
  { z: '若想造一艘船，先教人渴望大海的永无止境。', e: 'If you want to build a ship, teach people to long for the endless immensity of the sea', a: '圣埃克苏佩里 / Saint-Exupéry' },
  { z: '重要的不是活得最久，而是活得最好。', e: 'The important thing is not to live longest, but to live best', a: '塞涅卡 / Seneca' },
  { z: '凡我不能创造的，我就不能理解。', e: 'What I cannot create, I do not understand', a: '费曼 / Feynman' },
  { z: '不是我们拥有多少时间，而是我们给予多少注意力。', e: 'It is not how much time we have, but how much attention we give it', a: '佚名' },
  { z: '把每一件平凡的事做好，就是不平凡。', e: 'Doing ordinary things extraordinarily well is extraordinary', a: '佚名' },
  { z: '静水流深，智者寡言。', e: 'Still waters run deep; the wise are sparing with words', a: '谚语' },
  { z: '成年人的崩溃是无声的，但成年人的坚持也是。', e: 'Adults break down silently, but adults also persist silently', a: '佚名' },
  { z: '登高才能望远。', e: 'To see far, one must stand high', a: '古训' },
  { z: '让今天胜过昨天，让明天胜过今天。', e: 'Let today surpass yesterday, and tomorrow surpass today', a: '佚名' },
  { z: '沉舟侧畔千帆过，病树前头万木春。', e: 'Past the sunken boat a thousand sails glide by; before the withered tree ten thousand trees put forth leaves', a: '刘禹锡' },
  { z: '路漫漫其修远兮，吾将上下而求索。', e: 'The road is long and winding; I will keep searching upward and downward', a: '屈原' },
  { z: '长风破浪会有时，直挂云帆济沧海。', e: 'The time will come to ride the wind and cleave the waves; I will hoist the cloud sail and cross the sea', a: '李白' },
  { z: '千里之行，始于足下。', e: 'A journey of a thousand miles begins with a single step', a: '老子' },
  { z: '天行健，君子以自强不息。', e: 'As heaven moves ever vigorously, so should one strive without ceasing', a: '周易' },
  { z: '业精于勤，荒于嬉；行成于思，毁于随。', e: 'Mastery grows from diligence and decays from idleness; conduct is formed by thought and ruined by drift', a: '韩愈' },
  { z: '博观而约取，厚积而薄发。', e: 'Read widely but select sparingly; accumulate deeply and release slowly', a: '苏轼' },
  { z: '苟日新，日日新，又日新。', e: 'If one day you are renewed, do it daily, and renew it again', a: '礼记' },
  { z: '士不可以不弘毅，任重而道远。', e: 'A scholar must be both broad and resolute, for the task is heavy and the road long', a: '论语' },
  { z: '天下难事，必作于易；天下大事，必作于细。', e: 'The hardest things are made easy by the easiest; the greatest things are made small by the smallest', a: '老子' },
  { z: '致广大而尽精微。', e: 'Be broad in vision and meticulous in detail', a: '中庸' },
  { z: '纸上得来终觉浅，绝知此事要躬行。', e: 'What you learn from books is ultimately shallow; to truly know, you must do', a: '陆游' },
  { z: '问渠那得清如许？为有源头活水来。', e: 'How can it be so clear? Because fresh water flows from its source', a: '朱熹' },
  { z: '山重水复疑无路，柳暗花明又一村。', e: 'Mountains overlap and waters double, I doubt there is a road; then willows darken and flowers brighten, another village', a: '陆游' },
  { z: '不畏浮云遮望眼，只缘身在最高层。', e: 'Not fearing floating clouds to block my view, for I stand at the highest level', a: '王安石' },
  { z: '宝剑锋从磨砺出，梅花香自苦寒来。', e: 'The sword’s edge comes from whetting; plum blossoms owe their fragrance to bitter cold', a: '古训' },
  { z: '千磨万击还坚劲，任尔东西南北风。', e: 'Ground a thousand times and struck ten thousand, still hard; let the winds blow from any direction', a: '郑板桥' },
  { z: '咬定青山不放松，立根原在破岩中。', e: 'Biting fast to the green mountain and never relaxing, its root stands in the broken rock', a: '郑板桥' },
  { z: '曾经沧海难为水，除却巫山不是云。', e: 'Once you have seen the ocean, nothing else compares; apart from Mount Wu, no clouds are clouds', a: '元稹' },
  { z: '莫愁前路无知己，天下谁人不识君。', e: 'Do not worry that no one knows you ahead; who in this world does not know you', a: '高适' },
  { z: '海内存知己，天涯若比邻。', e: 'If friends are kept in the heart, even the ends of the earth feel close', a: '王勃' },
  { z: '欲穷千里目，更上一层楼。', e: 'To see a thousand miles further, climb one more storey', a: '王之涣' },
  { z: '春江潮水连海平，海上明月共潮生。', e: 'The spring river tide meets the sea; the bright moon rises with the tide', a: '张若虚' },
  { z: '不以物喜，不以己悲。', e: 'Neither elated by things nor saddened by self', a: '范仲淹' },
  { z: '先天下之忧而忧，后天下之乐而乐。', e: 'I worry before the people and enjoy after them', a: '范仲淹' },
  { z: '穷则变，变则通，通则久。', e: 'In poverty, change; in change, open up; in openness, endure', a: '周易' },
  { z: '祸兮福之所倚，福兮祸之所伏。', e: 'Misfortune leans on fortune; fortune hides within misfortune', a: '老子' },
  { z: '合抱之木，生于毫末；九层之台，起于累土。', e: 'A tree of a thousand arms grows from a sprout; a tower of nine stories rises from clods of earth', a: '老子' },
  { z: '大方无隅，大器晚成，大音希声。', e: 'The greatest square has no corners; the greatest vessel takes long to finish; the greatest sound is faint', a: '老子' },
  { z: '善战者，求之于势，不责于人。', e: 'The skilled commander studies the momentum, not the men', a: '孙子' },
  { z: '知彼知己，百战不殆。', e: 'Know yourself and know your enemy, and a hundred battles are without peril', a: '孙子' },
  { z: '兵无常势，水无常形。', e: 'War has no fixed shape, just as water has no fixed form', a: '孙子' },
  { z: '地势坤，君子以厚德载物。', e: 'As earth is fertile, so should one be generous and carry all things', a: '周易' },
  { z: '三人行，必有我师焉。', e: 'Among three people walking, there is always one who can be my teacher', a: '论语' },
  { z: '择其善者而从之，其不善者而改之。', e: 'Choose the good and follow it; see the bad and correct it', a: '论语' },
  { z: '工欲善其事，必先利其器。', e: 'If the craftsman wishes to do good work, he must first sharpen his tools', a: '论语' },
  { z: '君子求诸己，小人求诸人。', e: 'The noble man seeks his faults in himself; the small man seeks faults in others', a: '论语' },
  { z: '己所不欲，勿施于人。', e: 'What you do not wish for yourself, do not do to others', a: '论语' },
  { z: '知者不惑，仁者不忧，勇者不惧。', e: 'The wise are not perplexed; the benevolent are not worried; the brave are not fearful', a: '论语' },
  { z: '岁寒，然后知松柏之后凋也。', e: 'Only in the cold of winter do we know that pine and cypress wither last', a: '论语' },
  { z: '逝者如斯夫，不舍昼夜。', e: 'The time flows away like this, never stopping, day or night', a: '论语' },
  { z: '朝闻道，夕死可矣。', e: 'If one hears the Way in the morning, dying in the evening would be enough', a: '论语' },
  { z: '岁岁重阳，今又重阳。', e: 'The Double Ninth returns year after year, and here we are again', a: '佚名' },
  { z: '学而时习之，不亦说乎。', e: 'Is it not a pleasure to learn and practice what one has learned', a: '论语' },
  { z: '盛年不重来，一日难再晨。', e: 'The prime years do not return, and a day does not dawn twice', a: '陶渊明' },
  { z: '及时当勉励，岁月不待人。', e: 'Seize the moment, for time waits for no one', a: '陶渊明' },
  { z: '大鹏一日同风起，扶摇直上九万里。', e: 'The great peng rises with the wind and soars ninety thousand li', a: '李白' },
  { z: '天生我材必有用。', e: 'Heaven has made me useful', a: '李白' },
  { z: '安得广厦千万间，大庇天下寒士俱欢颜。', e: 'If only I had a million grand houses to shelter all the poor under heaven', a: '杜甫' },
  { z: '读书破万卷，下笔如有神。', e: 'Read ten thousand volumes and your writing will be as if divinely inspired', a: '杜甫' },
  { z: '书山有路勤为径，学海无涯苦作舟。', e: 'The mountain of books has diligence as its path; the sea of learning is boundless and hardship is the boat', a: '韩愈' },
  { z: '锲而舍之，朽木不折；锲而不舍，金石可镂。', e: 'Stop and the rotten wood will not break; persist and metal and stone can be carved', a: '荀子' },
  { z: '青，取之于蓝，而青于蓝。', e: 'Indigo comes from blue, yet is bluer than the blue', a: '荀子' },
  { z: '天时不如地利，地利不如人和。', e: 'Timeliness is not as good as terrain; terrain is not as good as harmony', a: '孟子' },
  { z: '穷则独善其身，达则兼济天下。', e: 'In poverty I tend my own virtue alone; in success I share it with the world', a: '孟子' },
  { z: '生于忧患，死于安乐。', e: 'One is born into anxiety and dies of ease', a: '孟子' },
  { z: '得道者多助，失道者寡助。', e: 'Those who follow the Way have many helpers; those who lose it have few', a: '孟子' },
  { z: '富贵不能淫，贫贱不能移，威武不能屈。', e: 'Wealth cannot seduce me; poverty cannot move me; power cannot bend me', a: '孟子' },
  { z: '不患寡，而患不均；不患贫，而患不安。', e: 'Do not worry about being few but about inequality; not about poverty but about unrest', a: '论语' },
  { z: '己欲立而立人，己欲达而达人。', e: 'Let those who would stand for me stand; let those who would reach for me reach', a: '论语' },
  { z: '德不孤，必有邻。', e: 'Virtue is never alone; it always has neighbors', a: '论语' }
];
/* 按日期取：同一天永远同一句（刷新不变），跨天自动换。
   ⛔ 用 yyyymmdd 数值做哈希而不是日期字符串 —— 字符串在不同时区下可能算出不同结果。 */
function stQuoteOfDay(d) {
  const dt = d ? new Date(d) : new Date();
  const key = dt.getFullYear() * 10000 + (dt.getMonth() + 1) * 100 + dt.getDate();
  return QUOTE_LIB[Math.abs(key) % QUOTE_LIB.length];
}

/* 句子库自检。⛔ 这条是被真坑逼出来的：手工往页面里复制句子时漏过一条，
   而漏条/重复都不会报错、只会静默少一句或两天显示同一句。
   判据：条数够、三字段齐全、中文首句无重复。开发期断言会调它。 */
function stAssertQuoteLib() {
  if (!Array.isArray(QUOTE_LIB) || QUOTE_LIB.length < 30) return false;
  if (!QUOTE_LIB.every(q => q && q.z && q.e && q.a)) return false;
  const zs = QUOTE_LIB.map(q => q.z);
  return new Set(zs).size === zs.length;
}

/* ---- 数据层：星环 / 喝水 / 心情 ---- */
let stData = null, stDataAt = 0, stDataDay = '';   // 当天缓存，60s 内不重复拉

/* 哪些表算「当天有记录」——星环点亮条件。刻意不含 water/mood：
   喝水和心情是随手记的，权重比「写了日记」轻，不该和写日记同级点亮。 */
/* ⛔⛔ 必须定义在 fetchStData 之前 —— 它启动早期就会被调用，
   const 有 TDZ，放晚了会在「刚进 App 那一刻」直接抛 ReferenceError。 */
/* ================= 写入乐观更新（全站通用）=================
   ⛔⛔ 这套东西是因为一个真实的坑：云端「写入返回成功」≠「查询立刻看得到」。
   用户反馈：「保存后列表没东西，**点开 app 又加载出来了**」——
   保存后立刻重新查云端，写入还没对查询可见 ⇒ 查回旧数据 ⇒ 签名没变
   ⇒ 不重画 ⇒ 界面看着没生效；重开 App 时早就生效了。

   ⇒ 三件事一起做，缺一不可：
     1) applyLocalRow：写入成功立刻把返回行塞进 state[sigKey]，马上重画
     2) guardPending：重查时把「云端没有、但本地有、且刚写入」的行补回去
        （⛔ 缺这个，后台重查会立刻把乐观值冲掉，用户看着好好的过两秒又变空）
     3) refetchLater：延后 ~1.2s 再查权威数据，护栏过期后自动忘

   ⛔⛔ 护栏寿命从 3 秒改成 30 秒（v3.5 教训）：
      用户原话「**一段时间**后如果你填写了两个，只会显示后面填写的那个」、
      「刚刚点了两次 +500ml，再次进入就又回到了我没显示的」。
      3 秒太短 —— 用户点完表单、切个页面、想想再回来，早就过期了。
      30 秒足够覆盖一次完整的「保存 → 看一眼 → 切走 → 回来看」。
      真正的清理交给 keepPending：一旦云端能查到了就不再补，不会有残留。 */
const PENDING_TTL = 30000;                       // 护栏存活 30 秒
const pendingRows = {};                       // { 表名: Map(id -> 到期时间戳) }
function pendingSet(t) {
  if (!pendingRows[t]) pendingRows[t] = new Map();
  return pendingRows[t];
}
function guardPending(t, row, id) {
  const key = String((row && row.id) || id || '');
  if (!key || key === 'undefined') return;
  const m = pendingSet(t);
  m.set(key, Date.now() + PENDING_TTL);
  // 兜底清理：避免 Map 无限增长（真正判断在 keepPending 里做）
  setTimeout(() => {
    const s = pendingSet(t);
    const exp = s.get(key);
    if (exp && Date.now() >= exp) s.delete(key);
  }, PENDING_TTL + 500);
}
/* 只取「还没过期」的 pending id —— 过期的护栏不再生效 */
function livePendingIds(t) {
  const m = pendingRows[t];
  if (!m || !m.size) return null;
  const now = Date.now();
  let any = false;
  m.forEach((exp, k) => { if (now >= exp) m.delete(k); else any = true; });
  return any ? m : null;
}
const ST_RING_TABLES = ['expense','diary','life','sport','health','steps'];
const ST_DAY_LIMIT = 400;

async function fetchStData(force) {
  const today = todayStr();
  if (!force && stData && stDataDay === today && Date.now() - stDataAt < 60000) return stData;
  const monthStart = localDateStr(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  const res = await Promise.all([
    ...ST_RING_TABLES.map(t =>
      cloud.database.from(t).select('record_date').gte('record_date', monthStart)
        .lt('record_date', localDateStr(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)))
        .limit(ST_DAY_LIMIT).then(r => (r && r.data) || [], () => [])),
    cloud.database.from('water').select('*').eq('record_date', today).limit(20),
    cloud.database.from('mood').select('*').eq('record_date', today).limit(1).maybeSingle()
  ]);
  const out = { days: new Set(), waterRows: [], mood: '' };
  ST_RING_TABLES.forEach((t, i) => {
    (res[i] || []).forEach(r => { const d = ymdLite(r); if (d) out.days.add(d); });
  });
  let wrows = (res[ST_RING_TABLES.length] && res[ST_RING_TABLES.length].data) || [];
  /*⛔ 喝水的护栏：刚写入的那笔如果云端还查不到，别被这次重拉抹掉。
     用户报「喝水点了，后面进去又变成之前没改的」= 重拉时把乐观行覆盖了。 */
  const wps = pendingRows['water'];
  if (wps && wps.size && stData && stDataDay === today) {
    const wids = new Set(wrows.map(r => String(r.id)));
    const wmiss = (stData.waterRows || []).filter(r => !wids.has(String(r.id)) && wps.has(String(r.id)));
    if (wmiss.length) wrows = wmiss.concat(wrows);
  }
  out.waterRows = wrows;
  const m = res[ST_RING_TABLES.length + 1];
  /*⛔ 心情的护栏：用户报「选择了心情，再次进入又变回没显示的」。
     刚选完心情立刻重拉，云端若还查不到就会把心情清空。 */
  const mps = livePendingIds('mood');
  const stMoodPending = (mps && stData && stDataDay === today && stData.mood)
    ? stData.mood : '';
  out.mood = (m && !m.error && m.data && m.data.mood) || stMoodPending;
  // ⛔ 整条 mood 记录（含 id）要留着：改心情时靠 id 走 update，
  //    拿不到 id 就只能「删了再插」，那会丢掉 created_at
  out.moodRow = (m && !m.error && m.data && m.data.id) ? m.data : null;
  stData = out; stDataAt = Date.now(); stDataDay = today;
  return out;
}
const ymdLite = (r) => String((r && r.record_date) || '').slice(0, 10);

/* 今天喝了多少 ml：water 表按「每笔增量」存，求和即可 */
function stWaterTotal(data) {
  return (data.waterRows || []).reduce((s, r) => s + (Number(r.ml) || 0), 0);
}
/* 连续点亮天数：从今天往回数，缺一天就断（今天还没记不算断，从昨天算起） */
function stStreak(days, today) {
  const d = new Date();
  let n = 0;
  if (!days.has(today)) d.setDate(d.getDate() - 1);      // 今天还没记 → 从昨天开始数
  for (;;) {
    const k = localDateStr(d);
    if (!days.has(k)) break;
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}
/* 本月点亮 / 断签天数。当月天数按日历算，未来日期不参与（与月报口径一致） */
function stMonthDays(days) {
  const now = new Date();
  const total = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const passed = now.getDate();
  let lit = 0, missed = 0;
  for (let i = 1; i <= passed; i++) {
    const k = localDateStr(new Date(now.getFullYear(), now.getMonth(), i));
    if (days.has(k)) lit++; else missed++;
  }
  return { total, passed, lit, missed };
}

/* ---- 渲染：星环 31 段弧 ----
   ⛔ 分段用 stroke-dasharray 画在同一个 <circle> 上靠 dashoffset 错开，
   比画 31 个 <path> 便宜得多；rotate(-90deg) 让 1 号从正上方开始。 */
function stRingHTML(days, today) {
  const md = stMonthDays(days);
  const R = 122, C = 2 * Math.PI * R, N = 31, GAP = 3.2, L = C / N - GAP;
  let h = `<circle cx="160" cy="160" r="${R}" fill="none" stroke="rgba(245,240,232,.055)" stroke-width="3"/>`;
  for (let i = 0; i < N; i++) {
    const day = i + 1;
    let col, wid;
    if (day > md.passed) { col = 'rgba(245,240,232,.07)'; wid = 3; }
    else if (days.has(localDateStr(new Date(new Date().getFullYear(), new Date().getMonth(), day)))) { col = '#FF9F1C'; wid = day === md.passed ? 6 : 4.4; }
    else { col = 'rgba(245,240,232,.13)'; wid = 4.4; }
    h += `<circle class="st-seg" cx="160" cy="160" r="${R}" fill="none" stroke="${col}" stroke-width="${wid}" stroke-dasharray="${L.toFixed(2)} ${(C - L + 1).toFixed(2)}" stroke-dashoffset="${(-i * (C / N)).toFixed(2)}"/>`;
  }
  const streak = stStreak(days, today);
  return { svg: h, streak, ...md };
}

/* 喝水弧：同款 stroke-dasharray 画法 */
function stWaterArcHTML(pct) {
  const R = 42, C = 2 * Math.PI * R;
  const on = C * Math.max(0, Math.min(1, pct));
  return `<circle cx="50" cy="50" r="${R}" fill="none" stroke="rgba(245,240,232,.09)" stroke-width="6"/>` +
    `<circle id="st-water-arc" cx="50" cy="50" r="${R}" fill="none" stroke="#FF9F1C" stroke-width="6" stroke-linecap="round" stroke-dasharray="${on.toFixed(2)} ${(C - on).toFixed(2)}"/>`;
}

/* v2.9 起心情改成单张小卡片，本周七格（stMoodWeekHTML / .st-mood-week）
   已从渲染里移除 ⇒ 这里一并删掉，别留一个没人调的死函数。 */

/* ---- 主渲染：写进 #st-zone，并绑事件 ----
   ⛔ 自带 try/catch 且只影响自己那块 —— 星环挂掉不该让整个首页变「加载失败」。 */
async function renderStZone(force) {
  const zone = $('#st-zone');
  if (!zone) return;
  if (zone.dataset.state !== 'ok') zone.innerHTML = '<div class="st-rule"></div><div class="empty"><span class="loader"></span></div>';
  try {
    const data = await fetchStData(force);
    if (!zone.isConnected) return;              // 用户已经切走了，别往废弃节点里写
    const today = todayStr();
    const ring = stRingHTML(data.days, today);
    const ml = stWaterTotal(data);
    const q = stQuoteOfDay();
    const pct = Math.round(ml / stWaterGoal() * 100);
    const left = Math.max(0, stWaterGoal() - ml);

    zone.dataset.state = 'ok';
    zone.innerHTML = `
      <div class="st-ring-wrap">
        <div class="st-ring-box">
          <svg viewBox="0 0 320 320" role="img" aria-label="本月记录星环">${ring.svg}</svg>
          <div class="st-ring-c">
            <div class="st-ring-n">${ring.streak}</div>
            <div class="st-ring-u">天连续</div>
          </div>
        </div>
        <div class="st-ring-sub">本月已过 ${ring.passed} 天，记了 ${ring.lit} 天${ring.missed ? ` · 断签 ${ring.missed} 天` : ''}</div>
      </div>

      <div class="st-rule"></div>
      <div class="st-sec"><span class="st-sec-t">每日一句</span></div>
      <div class="st-quote">
        <div class="st-quote-z">${escapeHtml(q.z)}</div>
        <div class="st-quote-e">“${escapeHtml(q.e)}”</div>
        <div class="st-quote-a">— ${escapeHtml(q.a)}</div>
      </div>

      <div class="st-rule"></div>
      <div class="st-sec"><span class="st-sec-t">喝水量</span></div>
      <div class="st-card">
        <div class="st-water">
          <div class="st-water-arc">
            <svg viewBox="0 0 100 100" aria-label="饮水进度">${stWaterArcHTML(ml / stWaterGoal())}</svg>
            <div class="st-wm">${pct}</div>
          </div>
          <div class="st-water-info">
            <div class="st-water-n" id="st-water-n">${ml}<i>ml</i></div>
            <div class="st-water-goal">目标 <em id="st-water-goal-n">${stWaterGoal()}</em>ml · 还差 <b id="st-water-left">${left}ml</b></div>
          </div>
        </div>
        <div class="st-btns">
          <button class="st-btn st-btn-p" data-st-water="200">+ 200ml</button>
          <button class="st-btn st-btn-p" data-st-water="500">+ 500ml</button>
        </div>
        <div class="st-btns">
          <button class="st-btn" id="st-water-custom">自定义</button>
          <button class="st-btn" id="st-water-goal-btn">改目标</button>
          <button class="st-btn st-btn-undo" id="st-water-undo">撤销</button>
        </div>
      </div>

      <div class="st-rule"></div>
      <div class="st-sec"><span class="st-sec-t">每日心情</span></div>
      <button class="st-mood-card${data.mood ? ' on' : ''}" id="st-mood-card" aria-label="记录今天的心情">
        <span class="st-mc-face" id="st-mc-face">${moodFaceSVG(moodItemOrLegacy(data.mood) || { f:data.mood, l:data.mood, c:'calm' }, 'st-mc-svg')}</span>
        <span class="st-mc-txt">
          <span class="st-mc-t" id="st-mood-now">${data.mood
            ? escapeHtml(stMoodLabel(data.mood))
            : '今天还没记心情'}</span>
          <span class="st-mc-s" id="st-mood-sub">点这里挑一个</span>
        </span>
        <span class="st-mc-go">›</span>
      </button>
      <button class="st-mood-hist" id="st-mood-hist">本月心情 ›</button>`;
    bindStZone();
  } catch(e) {
    // 静默降级：留一条发丝线 + 一句可点重试，不惊动整页
    zone.dataset.state = 'fail';
    zone.innerHTML = `<div class="st-rule"></div><div class="empty"><div class="ico">·</div>星环加载失败<button class="btn-text" id="st-retry">点此重试</button></div>`;
    const rt = $('#st-retry'); if (rt) rt.onclick = () => renderStZone(true);
    console.warn('st zone', e);
  }
}

function bindStZone() {
  $$('[data-st-water]').forEach(b => b.onclick = () => addWater(Number(b.getAttribute('data-st-water'))));
  const cu = $('#st-water-custom'); if (cu) cu.onclick = openWaterCustom;
  const gb = $('#st-water-goal-btn'); if (gb) gb.onclick = openWaterGoal;
  const un = $('#st-water-undo'); if (un) un.onclick = undoWater;
  // 心情卡片 → 弹窗挑一个（v3.0：不再是行内展开那排小按钮）
  const mc = $('#st-mood-card'); if (mc) mc.onclick = openMoodPicker;
  // v3.1：历史入口。⛔ 单独一个按钮，不塞进卡片里 ——
  //   整张卡点一下已经是「改今天」，再叠一个「看历史」会让用户犹豫点哪。
  const mh = $('#st-mood-hist'); if (mh) mh.onclick = openMoodHistory;
}

/* 心情弹窗：大表情 + 中文标签，三列网格，底部「确定」。
   ⛔ 走既有 openModal，不自己造浮层 —— 统一有遮罩、Esc 关闭、标题栏。
   ⛔ 选完不立刻写库：先记在暂存里，点「确定」才提交。这样能「反悔」，
      也避免手滑点一个就写进去还得再去数据库删。 */
function openMoodPicker() {
  const cur = (stData && stData.mood) || '';
  let picked = cur;
  openModal(`
    <p class="mp-hint">选一个最接近今天的心情</p>
    <div class="mp-grid" id="mp-grid">
      ${stMoodList().map(m => `<button class="mp-opt${cur === m.f ? ' on' : ''}" data-mp="${m.f}" aria-label="${m.l}">
        <span class="mp-face">${moodFaceSVG(m, 'mp-svg')}</span>
        <span class="mp-l">${m.l}</span>
      </button>`).join('')}
    </div>
    <div class="mp-legend">
      ${[['joy','积极'],['calm','一般'],['low','低落'],['upset','不爽']].map(([k, t]) => {
        const s = MOOD_SKIN[k];
        return `<span class="mp-lg"><i style="background:${s.fill}"></i>${t}</span>`;
      }).join('')}
    </div>
    <button class="btn${cur ? ' ' : ' is-off'}" id="mp-ok"${cur ? '' : ' disabled'}>确定</button>`);
  setModalTitle('请选择心情');
  $$('[data-mp]').forEach(b => b.onclick = () => {
    picked = b.getAttribute('data-mp');
    $$('[data-mp]').forEach(x => x.classList.toggle('on', x === b));
    const ok = $('#mp-ok');
    if (ok) { ok.disabled = false; ok.classList.remove('is-off'); }
  });
  $('#mp-ok').onclick = async () => {
    closeModal();
    if (picked === cur) return;             // 没改就别白跑一次网络
    await setMood(picked);
  };
}

/* 只刷新喝水那一小块，不重画整页 —— 否则输入焦点和滚动位置都会丢 */
function paintStWater() {
  if (!stData) return;
  const ml = stWaterTotal(stData);
  const pct = Math.round(ml / stWaterGoal() * 100);
  const n = $('#st-water-n'), l = $('#st-water-left'), wm = document.querySelector('.st-wm');
  const gn = $('#st-water-goal-n');
  if (n) n.innerHTML = `${ml}<i>ml</i>`;
  if (l) l.textContent = Math.max(0, stWaterGoal() - ml) + 'ml';
  //⛔ 目标数字也要跟着改 —— 以前它直接写在文本里，paint 只刷了「还差」，
  //   于是改完目标会出现「目标 2000ml · 还差 3000ml」这种自相矛盾的行。
  if (gn) gn.textContent = stWaterGoal();
  if (wm) wm.textContent = pct;
  const arc = $('#st-water-arc');
  if (arc) {
    const C = 2 * Math.PI * 42;
    const on = C * Math.max(0, Math.min(1, ml / stWaterGoal()));
    arc.setAttribute('stroke-dasharray', `${on.toFixed(2)} ${(C - on).toFixed(2)}`);
  }
}

/* 喝水：按「每笔增量」存一行，不做累加更新 ——
   并发点两下按钮时累加更新会丢一笔，插多行则天然正确。撤销删最后一笔。 */
async function addWater(ml) {
  if (!ml || ml < 1) { toastErr('至少 1ml'); return; }
  const day = todayStr();
  /*⛔⛔ 必须 .select() 才拿得到插入后的整行（含 id）。
     以前写成 insert({ml, record_date:day}) 不带 .select() ⇒ 本地只缓存了 {ml}，
     于是 undoWater 里 `delete().eq('id', undefined)` 打不中任何行 ——
     表现是「撤销后数字动了，刷新一下又回来」，云端那行永远删不掉。*/
  const res = await cloud.database.from('water').insert({ ml, record_date: day }).select();
  if (res.error) { toastErr(errMsg(res.error)); return; }
  // 本地缓存先加上，避免等一次网络往返才看到数字动
  const row = (res.data && res.data[0]) || { ml };
  if (stData && stDataDay === day) stData.waterRows = (stData.waterRows || []).concat([row]);
  guardPending('water', row, row.id);     // ⛔ 护栏：别被下一次 fetchStData 冲掉
  paintStWater();
  toast(`+${ml}ml`, `今天 ${stWaterTotal(stData)}ml / ${stWaterGoal()}ml`);
}

async function undoWater() {
  const day = todayStr();
  if (!stData || stDataDay !== day || !(stData.waterRows || []).length) { toastErr('今天还没有记录'); return; }
  const rows = stData.waterRows;
  const last = rows[rows.length - 1];
  /*⛔ 拿不到 id 就**别假装删成功** —— 直接改本地会让「刷新后数字回来」，
     用户只会以为是 bug。给一句能行动的提示。*/
  if (!last || !last.id) {
    toastErr('这条记录对不上号，撤销不了');
    // 顺手把今天的行重新拉一遍，让本地缓存跟云端对齐（下一条就能正常撤销）
    try { await renderStZone(true); } catch (e) {}
    return;
  }
  const { error } = await cloud.database.from('water').delete().eq('id', last.id).select();
  if (error) { toastErr(errMsg(error)); return; }
  stData.waterRows = rows.slice(0, -1);
  if (last && last.id && pendingRows['water']) pendingRows['water'].delete(String(last.id));
  paintStWater();
  toast(`已撤销 ${Number(last.ml) || 0}ml`);
  setTimeout(() => { try { fetchStData(true).then(paintStWater); } catch (e) {} }, 1200);
}

/* 自定义水量：走既有 openModal，⛔ 不用 prompt() —— 部分 WebView 里 prompt 直接返回 null */
function openWaterCustom() {
  openModal(`
    <div class="field"><label>这次喝了多少（ml）</label>
      <input id="st-custom-ml" type="number" inputmode="numeric" min="1" step="50" value="${ST_WATER_STEP}"></div>
    <div class="msg" id="st-custom-msg"></div>
    <button class="btn" id="st-custom-save">保存</button>`);
  setModalTitle('记录饮水');
  $('#st-custom-save').onclick = async () => {
    const v = parseInt($('#st-custom-ml').value, 10);
    if (!v || v < 1) { showMsg($('#st-custom-msg'), '填一个大于 0 的数字', 'err'); return; }
    closeModal();
    await addWater(v);
  };
}

/* 改每日饮水目标（v3.1：目标不再写死 2000）
   走预设档位 + 自由输入：多数人选档位就够，偶尔要精确填。 */
function openWaterGoal() {
  const cur = stWaterGoal();
  const preset = [1500, 2000, 2500, 3000];
  openModal(`
    <p class="mp-hint">选一个，或者直接填数字</p>
    <div class="st-btns" style="margin-bottom:12px">
      ${preset.map(v => `<button class="st-btn${v === cur ? ' st-btn-p' : ''}" data-wg="${v}">${v}ml</button>`).join('')}
    </div>
    <div class="field"><label>每日目标（ml）</label>
      <input id="wg-ml" type="number" inputmode="numeric" min="${ST_WATER_GOAL_MIN}" max="${ST_WATER_GOAL_MAX}" step="100" value="${cur}"></div>
    <div class="msg" id="wg-msg"></div>
    <div class="st-btns" style="margin-top:8px">
      <button class="st-btn" id="wg-reset">恢复默认 ${ST_WATER_GOAL_DEFAULT}ml</button>
    </div>
    <button class="btn" id="wg-save">保存</button>`);
  setModalTitle('每日饮水目标');
  const msg = $('#wg-msg'), inp = $('#wg-ml');
  $$('[data-wg]').forEach(b => b.onclick = () => {
    inp.value = b.getAttribute('data-wg');
    $$('[data-wg]').forEach(x => x.classList.toggle('st-btn-p', x === b));
  });
  inp.oninput = () => $$('[data-wg]').forEach(x => x.classList.remove('st-btn-p'));
  $('#wg-reset').onclick = () => { inp.value = ST_WATER_GOAL_DEFAULT; inp.oninput(); };
  $('#wg-save').onclick = () => {
    const v = parseInt(inp.value, 10);
    if (!isFinite(v)) { showMsg(msg, '填一个数字', 'err'); return; }
    if (v < ST_WATER_GOAL_MIN || v > ST_WATER_GOAL_MAX) {
      showMsg(msg, `范围 ${ST_WATER_GOAL_MIN}~${ST_WATER_GOAL_MAX}ml`, 'err'); return;
    }
    LS.set('waterGoal', v);
    closeModal();
    //⛔ 只刷喝水这一小块，别重画整页 —— 会丢掉滚动位置
    paintStWater();
    toast('目标已改为 ' + v + 'ml');
  };
}

/* 心情历史（v3.1）
   ⛔ 动机：心情一直存着云端 mood 表（按 record_date），但界面上只看得到今天 ——
      「昨天记的今天还在」这件事没法查，等于没记录。这条补上历史视图。
   ⛔ 只读+可补记：格子点一下能改那天的（错记了要能改），但不做删除（心情本来无所谓）。 */
/* 打开本月心情月历。
   ⛔ optimisticDay/optimisticMood：刚改完某一天时传进来 ——
   云端写入到「查询可见」之间有几百毫秒，直接重查会拿到旧值，
   月历刷出来还是没改成功的样子（用户报「改完还是原来那个」）。
   ⇒ 先用乐观值盖上去，让用户马上看到结果；云端返回后再自然覆盖。 */
async function openMoodHistory(optimisticDay, optimisticMood) {
  const cur = todayStr();
  const { start, end } = monthRange();
  openModal(`<div class="mh-loading">正在读这个月的心情…</div>`);
  setModalTitle('心情历史');
  const res = await cloud.database.from('mood').select('*')
    .gte('record_date', start).lt('record_date', end).limit(40);
  if (res.error) { closeModal(); toastErr(errMsg(res.error)); return; }
  const rows = res.data || [];
  const byDay = {};
  rows.forEach(r => { if (r && r.record_date) byDay[r.record_date] = r.mood; });
  // 乐观值盖在云端结果之上（optimisticMood 为 null 表示「清除了那天」）
  if (optimisticDay) {
    if (optimisticMood) byDay[optimisticDay] = optimisticMood;
    else delete byDay[optimisticDay];
  }

  const y = new Date().getFullYear(), m = new Date().getMonth();
  const first = new Date(y, m, 1).getDay();      // 0=周日
  const days = new Date(y, m + 1, 0).getDate();
  const lead = (first === 0 ? 7 : first);       // 让周一排第一
  let cells = '';
  for (let i = 0; i < lead; i++) cells += '<div class="mh-cell pad"></div>';
  let n = 0;
  for (let d = 1; d <= days; d++) {
    const ds = `${y}-${pad2(m+1)}-${pad2(d)}`;
    const f = byDay[ds];
    if (f) n++;
    const isToday = ds === cur;
    const isFuture = ds > cur;
    cells += `<button class="mh-cell${isToday ? ' today' : ''}${isFuture ? ' fut' : ''}"
      data-mh-day="${ds}" ${isFuture ? 'disabled' : ''} aria-label="${d}日 ${f ? moodLabel(f) : '未记'}">
      ${f ? moodFaceSVG(moodItemOrLegacy(f) || { f:f, l:f, c:'calm' }, 'mh-svg') : `<span class="mh-dot">${d}</span>`}
      <em>${d}</em></button>`;
  }
  const total = days;
  const rate = Math.round(n / total * 100);
  openModal(`
    <p class="mp-hint">这个月记了 <b>${n}</b> 天 · 共 ${total} 天</p>
    <div class="mh-wk">${['一','二','三','四','五','六','日'].map(x => `<span>${x}</span>`).join('')}</div>
    <div class="mh-grid" id="mh-grid">${cells}</div>
    <div class="mh-bar"><i style="width:${rate}%"></i></div>
    <p class="mh-note">点某一天可以补记或改掉 · 没记的是空格子</p>`);
  setModalTitle('心情历史');
  $$('[data-mh-day]').forEach(el => el.onclick = async () => {
    const ds = el.getAttribute('data-mh-day');
    const old = byDay[ds] || '';
    const dNum = Number(ds.slice(8, 10));
    const picked = await pickMoodOne(old, `${Number(ds.slice(5, 7))} 月 ${dNum} 日`);
    if (!picked) return;                                  // 用户取消

    if (picked === '__CLEAR__') {
      if (!old) { toastErr('那天本来就没有心情'); return; }
      const { error } = await cloud.database.from('mood').delete().eq('record_date', ds).select();
      if (error) { toastErr(errMsg(error)); return; }
      toast(`${dNum} 日的心情已清除`);
    } else if (picked === old) {
      toast(`${dNum} 日没变`);          // 选了和原来一样的，别白跑一次网络
      return;
    } else {
      /*⛔ 不用 .upsert() —— 本文件 setMood 里明确写着「不依赖 upsert 语法
        （各 SDK 支持不一）」。补记走「先按日期查有没有，有就 update 没有就 insert」。*/
      const q = await cloud.database.from('mood').select('id').eq('record_date', ds).limit(1);
      if (q.error) { toastErr(errMsg(q.error)); return; }
      const has = q.data && q.data[0];
      const r = has
        ? await cloud.database.from('mood').update({ mood: picked }).eq('id', has.id).select()
        : await cloud.database.from('mood').insert({ mood: picked, record_date: ds }).select();
      if (r.error) { toastErr(errMsg(r.error)); return; }
      toast(`${Number(ds.slice(8,10))} 日记为 ${moodLabel(picked)}`);
    }
    // ⛔ 这里不要 closeModal —— pickMoodOne 内部已经关了。
    //   多调一次会把紧随其后重开的月历立刻关掉，用户看到的是「点一下什么都没发生」。
    //
    // ⛔⛔ 原来这里 setTimeout(openMoodHistory, 120) —— 120ms 后重查云端，
    //    但写入还没对查询可见 ⇒ 月历刷出来还是旧值。用户报「改完了还是原来那个，
    //    重开 App 才对」= 同一个云端写入延迟问题。
    // ⇒ 把乐观值传下去，月历先按它画；云端结果到达后再覆盖。
    const optimistic = (picked === '__CLEAR__') ? null : picked;
    if (ds === cur) {
      try {
        if (stData) {
          stData.mood = optimistic || '';
          stData.moodRow = optimistic ? { id: (stData.moodRow || {}).id, mood: optimistic } : null;
        }
        await renderStZone(true);
      } catch (e) {}
    }
    setTimeout(() => openMoodHistory(null, optimistic, ds), 150);
  });
}

/* 单选一个心情（复用弹窗里的网格，但换成「点完就走」的即时模式） */
function pickMoodOne(preselect, dayLabel) {
  /* ⛔⛔ 这函数第一版有两个致命问题，用户直接报了出来：
     1) 靠 setTimeout 自动 click 第一张脸来「给个默认值」
        ⇒ 打开历史里某一天时，会**默认继承第一项（开心）**。
           用户以为「改成了开心」，其实是打开时就选好了。
     2) 点完脸立刻 resolve 走人，底部只剩一个「返回」
        ⇒ 用户看见的界面**没有任何保存入口**，点了像是没反应。

     ⇒ 现在：默认**不预选**（不点就没选），底部三个按钮
       「清除那天」「取消」「保存」。保存前先校验有没有选。
     - preselect 只用于「取消后重开时保持」，不作为默认选中。
  */
  return new Promise(resolve => {
    openModal(`
      ${dayLabel ? `<p class="mp-hint">${escapeHtml(dayLabel)}原来记的是「${escapeHtml(preselect ? (moodItemOrLegacy(preselect) || {}).l || '' : '没记')}」</p>` : ''}
      <div class="mp-grid" id="mo-grid">
        ${stMoodList().map(m => `<button class="mp-opt${preselect === m.f ? ' on' : ''}" data-mo="${m.f}" aria-label="${m.l}">
          <span class="mp-face">${moodFaceSVG(m, 'mp-svg')}</span>
          <span class="mp-l">${m.l}</span>
        </button>`).join('')}
      </div>
      <div class="st-btns" style="margin:12px 0 8px">
        ${preselect ? '<button class="st-btn st-btn-undo" id="mo-clear">清除那天</button>' : ''}
      </div>
      <button class="btn${preselect === undefined ? '' : ' is-off'}" id="mo-save" disabled>保存</button>
      <button class="btn" id="mo-cancel" style="margin-top:8px">返回</button>`);
    setModalTitle(dayLabel || '选心情');

    let picked = '';          // ⛔ 初始空 —— 不继承、不预选
    const save = $('#mo-save');
    const sync = () => {
      if (save) {
        save.disabled = !picked;
        save.classList.toggle('is-off', !picked);
      }
    };
    $$('[data-mo]').forEach(b => b.onclick = () => {
      picked = b.getAttribute('data-mo');
      $$('[data-mo]').forEach(x => x.classList.toggle('on', x === b));
      sync();
    });
    sync();

    if (save) save.onclick = () => {
      if (!picked) { toastErr('先选一个心情'); return; }
      closeModal();
      resolve(picked);
    };
    const clr = $('#mo-clear');
    if (clr) clr.onclick = () => { closeModal(); resolve('__CLEAR__'); };
    $('#mo-cancel').onclick = () => { closeModal(); resolve(null); };
    // 点遮罩关闭 = 取消（不是「保存」）
    const bg = $('#modal-bg');
    bg.onclick = (e) => {
      if (e.target.id === 'modal-bg') { closeModal(); resolve(null); }
    };
  });
}

/* 心情：一天一条，重复点同一个 = 清除 */
async function setMood(m) {
  const day = todayStr();
  const cur = (stData && stData.mood) || '';
  const next = cur === m ? '' : m;
  if (next) {
    // 已有行就 update，没有就 insert —— 不依赖 upsert 语法（各 SDK 支持不一）
    const exist = (stData && stData.moodRow && stData.moodRow.id) || 0;
    const res = exist
      ? await cloud.database.from('mood').update({ mood: next }).eq('id', exist).select()
      : await cloud.database.from('mood').insert({ mood: next, record_date: day }).select();
    if (res.error) { toastErr(errMsg(res.error)); return; }
    if (!exist && res.data && res.data[0]) stData.moodRow = res.data[0];
  } else {
    const exist = (stData && stData.moodRow && stData.moodRow.id) || 0;
    if (!exist) { toastErr('今天还没记心情'); return; }
    const { error } = await cloud.database.from('mood').delete().eq('id', exist).select();
    if (error) { toastErr(errMsg(error)); return; }
    stData.moodRow = null;
  }
  stData.mood = next;
  /*⛔ 心情护栏：刚选的心情在云端可见之前，重拉不要把它冲掉。
     用户原话：「选择了心情，再次进入就又回到了我没显示的」。 */
  if (next) guardPending('mood', { id: next }, next);
  else if (stData.moodRow && stData.moodRow.id) unguardPending('mood', stData.moodRow.id);
  const label = $('#st-mood-now');
  //⛔ 显示中文标签而不是 emoji ——「今天记为 😊」没人知道什么意思，
  //   「今天记为 平静」才读得懂。emoji 只留在表情盘里。
  if (label) label.textContent = next ? stMoodLabel(next) : '今天还没记心情';
  const face = $('#st-mc-face');
  //⛔ 这里原来用 textContent 塞 emoji —— 现在是 SVG，必须整体替换 innerHTML。
  //   塞文本会把 <svg> 标签当纯文本显示成一堆尖括号。
  if (face) face.innerHTML = moodFaceSVG(moodItemOrLegacy(next) || { f:next, l:next, c:'calm' }, 'st-mc-svg');
  const card = $('#st-mood-card');
  if (card) card.classList.toggle('on', !!next);
  //⛔ 这里原来接着调 renderDiaryList() 想让日记列表同步心情 —— 不能调：
  //   ① 记心情时人在首页，renderDiaryList 会切走 / 清掉 #st-zone，
  //      喝水量那一整块跟着消失（实测 BTN=0 就是这么来的）；
  //   ② state.silent 这个字段根本不存在。
  //   日记列表下次进「日记」页时自然会读当天心情，不用在这里推。
  toast(next ? `心情记为 ${stMoodLabel(next)}` : '已清除今天的心情');
}

/* ================= Expense ================= */
// 'YYYY-MM' → [本月1号, 下月1号) 开区间，任何月份都不会拼出非法日期
function rangeOfYM(ym) {
  const [y, m] = String(ym).split('-').map(Number);
  const next = new Date(y, m, 1); // m 为 1-based，Date 自动进位到下月 1 号
  return { start: `${pad2(y)}-${pad2(m)}-01`, end: `${next.getFullYear()}-${pad2(next.getMonth()+1)}-01` };
}
// 通用月份切换条：kind 决定它操作哪个模块
function ymBar(kind, ym) {
  const nowYM = monthStr();
  return `
    <div class="month-bar">
      <button class="month-nav" data-ym="${kind}" data-step="-1" aria-label="上个月">‹</button>
      <div class="month-cur num">${ym.slice(0,4)} 年 ${Number(ym.slice(5))} 月${ym === nowYM ? ' · 本月' : ''}</div>
      <button class="month-nav" data-ym="${kind}" data-step="1" aria-label="下个月"${ym >= nowYM ? ' disabled' : ''}>›</button>
    </div>`;
}
function monthBar(ym, mOut, mIn, outCnt, inCnt) {
  return ymBar('expense', ym) + `
    <div class="stat-grid">
      <div class="stat"><div class="label">支出</div><div class="value amt-out num">-¥${fmtMoney(mOut)}</div><div class="sub">${outCnt} 笔</div></div>
      <div class="stat"><div class="label">收入</div><div class="value amt-in num">+¥${fmtMoney(mIn)}</div><div class="sub">${inCnt} 笔</div></div>
    </div>`;
}
function shiftYM(ym, d) {
  let [y, m] = String(ym).split('-').map(Number);
  m += d;
  if (m < 1) { m = 12; y -= 1; } else if (m > 12) { m = 1; y += 1; }
  return `${y}-${pad2(m)}`;
}
/* ================= 写入乐观更新（全站通用）=================
   ⛔⛔ 这套东西是因为一个真实的坑：云端「写入返回成功」≠「查询立刻看得到」。
   用户反馈：「保存后列表没东西，**点开 app 又加载出来了**」——
   保存后立刻重新查云端，写入还没对查询可见 ⇒ 查回旧数据 ⇒ 签名没变
   ⇒ 不重画 ⇒ 界面看着没生效；重开 App 时早就生效了。

   ⇒ 三件事一起做，缺一不可：
     1) applyLocalRow：写入成功立刻把返回行塞进 state[sigKey]，马上重画
     2) guardPending：重查时把「云端没有、但本地有、且刚写入」的行补回去
        （⛔ 缺这个，后台重查会立刻把乐观值冲掉，用户看着好好的过两秒又变空）
     3) refetchLater：延后 ~1.2s 再查权威数据，3s 后 forgetPending

   ⚠️ v3.4 只给记账接了这套，生活/日记/运动/健康还全都是「保存后直接重查」，
   所以用户接着报「生活加了没反应」「日记写了列表没东西」。 */

/* 把一行塞进（或更新）state[stateKey]，并保持列表倒序 */
function applyLocalRow(t, stateKey, id, row, payload, sortKey) {
  if (!Array.isArray(state[stateKey])) state[stateKey] = [];
  const list = state[stateKey];
  if (id) {
    const i = list.findIndex(x => String(x.id) === String(id));
    if (i > -1) list[i] = row ? Object.assign({}, list[i], row)
                              : Object.assign({}, list[i], payload || {});
  } else if (row) {
    list.unshift(row);
  }
  const k = sortKey || 'record_date';
  list.sort((a, b) => {
    const d = String(b[k] || '').localeCompare(String(a[k] || ''));
    return d || String(b.created_at || '').localeCompare(String(a.created_at || ''));
  });
  state[stateKey + 'Sig'] = '';              // 让后台重查能重新填满
  guardPending(t, row, id);
}
/* 后台重查时，把「云端还没有、但本地刚写入」的行补回去 */
function keepPending(t, stateKey, cloudList, ym) {
  //⛔ 只取「还没过期」的护栏 —— 过了 30 秒就当没有，
  //   否则一条早就写进云端的记录会被永远护着，真删了也删不掉。
  const ps = livePendingIds(t);
  if (!ps || !Array.isArray(state[stateKey])) return cloudList;
  if (ym && state[stateKey + 'YM'] !== ym) return cloudList;
  const ids = new Set(cloudList.map(r => String(r.id)));
  const extra = state[stateKey].filter(r => !ids.has(String(r.id)) && ps.has(String(r.id)));
  return extra.length ? extra.concat(cloudList) : cloudList;
}
/* 从护栏里移除（删除操作要调，否则刚删的行会被补回来） */
function unguardPending(t, id) {
  const m = pendingRows[t];
  if (m) m.delete(String(id));
}
/* 统一入口：写入成功后调它。repaint 是重画函数，t 是表名。 */
/* ⛔⛔⛔ 写入后的「重画」必须**只画本地、绝不立刻查云端**（2026-10-20）
   用户报：「新增当时显示，**再次进入就不显示**」「删除无效，闪一下还是原来的」。

   而 SQL 直查显示：新增那条**真在库里**、删掉那条**真不在了**
   ⇒ **写和删都是成功的，是显示被云端的旧数据抢回去了。**

   原因：`renderXxxList()` 是「先画本地、然后**立刻**发云端查询」，
   查询回来若还没生效，`state.xxx = list` 就把刚写进去/刚删掉的行
   覆盖掉 ⇒ 新增看着"没生效"、删除看着"没删掉"。
   这是 v3.4~v3.6 治过的同一个病，只是这次落在**重画的第一下**。

   ⇒ 解法：`afterWrite` / `finishDelete` 的「立即重画」那一步，
     **只 paint 不 render**（render 会查云端，paint 不会）；
     1.2 秒后那次后台核对才 render。 */
function afterWrite(t, stateKey, id, res, payload, repaint, sortKey) {
  const back = (res && res.data && res.data[0]) || null;
  applyLocalRow(t, stateKey, id, back, payload, sortKey);
  try { repaint(); } catch (e) {}
  setTimeout(() => { try { repaint(true); } catch (e) {} }, 1200);
}

/* 只画本地、不碰云端。paint = 各模块已有的「只画」函数。 */
function paintOnly(paintFn) {
  return (force) => { if (force) return; try { paintFn(); } catch (e) {} };
}

const YM_KEY = { expense: 'expYM', health: 'heYM' };
function bindYM() {
  $$('[data-ym]').forEach(b => {
    if (b.disabled) return;
    b.onclick = () => {
      const kind = b.dataset.ym, key = YM_KEY[kind];
      const next = shiftYM(state[key] || monthStr(), Number(b.dataset.step));
      if (next > monthStr()) return; // 不允许翻到未来
      state[key] = next;
      if (kind === 'health') renderHealthList(); else renderExpenseList();
    };
  });
}

// 明细 / 图表 分段控件
const expSegHTML = () => `<div class="seg">
  <button id="seg-list" class="${state.expView === 'list' ? 'on' : ''}">${ICONS.list}明细</button>
  <button id="seg-chart" class="${state.expView === 'chart' ? 'on' : ''}">${ICONS.chart}图表</button>
</div>`;
function bindExpSeg() {
  const a = $('#seg-list'), b = $('#seg-chart');
  if (a) a.onclick = () => { state.expView = 'list'; renderExpenseList(); };
  if (b) b.onclick = () => { state.expView = 'chart'; renderExpenseList(); };
}

async function renderExpenseList(force) {
  const v = $('#view');
  if (state.expView === 'chart') return renderExpenseChart();
  if (!state.expYM) state.expYM = monthStr();
  const ym = state.expYM;

  // 这个月的旧数据已经画过 ⇒ 先把旧的摆上去（秒开），再后台拉最新的
  const cached = state.expenseSig && state.expenseYM === ym ? state.expense : null;
  if (cached) paintExpenseList();
  else v.innerHTML = loadingHTML();

  try {
    const { start, end } = rangeOfYM(ym);
    const { data, error } = await cloud.database.from('expense').select('*').gte('record_date', start).lt('record_date', end).order('record_date', { ascending: false }).order('created_at', { ascending: false });
    if (error) throw error;
    let list = data || [];
    /*⛔ 刚写入但云端还查不到的行，别被这次重查抹掉（乐观更新的护栏）。 */
    list = keepPending('expense', 'expense', list, ym);
    const sig = rowsSig(list);
    const same = sig === state.expenseSig && state.expenseYM === ym;
    state.expense = list; state.expenseSig = sig; state.expenseYM = ym;
    if (force || !same) paintExpenseList();     // 数据没变就别重画，免得打断正在看列表的人
  } catch(e) {
    if (cached) softFail(e);
    else v.innerHTML = failHTML('加载', e, 'renderExpenseList()');
  }
}

/* 只负责画（数据取 state.expense）—— 秒开和刷新完成后都走它 */
function paintExpenseList() {
  const v = $('#view');
  const ym = state.expYM;
  let mOut = 0, mIn = 0;
  state.expense.forEach(r => { if (r.kind === 'out') mOut += Number(r.amount); else mIn += Number(r.amount); });
  if (!state.expense.length) {
    v.innerHTML = expSegHTML() + monthBar(ym, 0, 0, 0, 0) +
      `<div class="empty"><div class="ico">💰</div>${Number(ym.slice(5))} 月还没有记录<br>点右下角 + 记一笔</div>`;
    bindExpSeg(); bindYM();
    return;
  }
  const groups = {};
  state.expense.forEach(r => { const k = r.record_date; (groups[k] = groups[k] || []).push(r); });
  const sortedDays = Object.keys(groups).sort((a,b) => a < b ? 1 : -1);
  let html = expSegHTML() + monthBar(ym, mOut, mIn, state.expense.filter(r=>r.kind==='out').length, state.expense.filter(r=>r.kind==='in').length) + `<div class="sec">明细</div>`;
  sortedDays.forEach(day => {
    let dayOut = 0;
    groups[day].forEach(r => { if (r.kind === 'out') dayOut += Number(r.amount); });
    html += `<div class="card">
      <div class="row-between" style="margin-bottom:10px">
        <span class="dim" style="font-size:13px;font-weight:600">${fmtDate(day)}</span>
        <span class="muted" style="font-size:12px">${groups[day].length} 笔 · 支出 ¥${fmtMoney(dayOut)}</span>
      </div>`;
    groups[day].forEach(r => {
      const sign = r.kind === 'out' ? '-' : '+';
      const cls = r.kind === 'out' ? 'amt-out' : 'amt-in';
      html += `
        <div class="row card-tap" data-edit="expense" data-id="${r.id}" style="padding:8px 0">
          <span class="grow">
            <span class="dim">${escapeHtml(r.category||'-')}</span>
            ${r.note ? `<div class="muted" style="font-size:12px;margin-top:2px">${escapeHtml(r.note)}</div>` : ''}
          </span>
          <span class="${cls} num">${sign}¥${fmtMoney(r.amount)}</span>
          <button class="btn-close" data-del="expense" data-id="${r.id}" style="font-size:13px;width:26px;height:26px">×</button>
        </div>`;
    });
    html += `</div>`;
  });
  v.innerHTML = html;
  bindExpSeg(); bindYM();
  $$('[data-edit="expense"]').forEach(el => el.onclick = (e) => {
    if (e.target.dataset.del) return;
    openExpenseForm(el.dataset.id);
  });
  $$('[data-del="expense"]').forEach(b => b.onclick = (e) => { e.stopPropagation(); delExpense(b.dataset.id); });
}

/* ---- 记账图表：6 月趋势 + 分类构成 + 30 天节奏 ---- */
async function renderExpenseChart() {
  const v = $('#view');
  v.innerHTML = loadingHTML();
  try {
    const now = new Date();
    const months = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const nx = new Date(d.getFullYear(), d.getMonth() + 1, 1);
      months.push({
        ym: monthStr(d), label: (d.getMonth() + 1) + '月',
        start: `${d.getFullYear()}-${pad2(d.getMonth()+1)}-01`,
        end: `${nx.getFullYear()}-${pad2(nx.getMonth()+1)}-01`
      });
    }
    const { data, error } = await cloud.database.from('expense').select('*')
      .gte('record_date', months[0].start).lt('record_date', months[months.length-1].end);
    if (error) throw error;
    const all = data || [];
    const inRange = (r, s, e) => String(r.record_date) >= s && String(r.record_date) < e;

    if (!all.length) {
      v.innerHTML = expSegHTML() + `<div class="empty"><div class="ico">📊</div>近半年还没有记账<br>记几笔就能看到趋势了</div>`;
      bindExpSeg();
      return;
    }

    // 1) 近 6 个月收支
    const rows = months.map(m => {
      const list = all.filter(r => inRange(r, m.start, m.end));
      let o = 0, i = 0;
      list.forEach(r => { if (r.kind === 'out') o += Number(r.amount); else i += Number(r.amount); });
      return { label: m.label, a: o, b: i, list, ym: m.ym };
    });

    // 2) 当前月份分类构成（只看支出）
    const curM = months[months.length - 1];
    const curList = all.filter(r => inRange(r, curM.start, curM.end) && r.kind === 'out');
    const catMap = {};
    curList.forEach(r => { const k = r.category || '未分类'; catMap[k] = (catMap[k] || 0) + Number(r.amount); });
    const catRows = Object.keys(catMap).map(k => ({ label: k, v: catMap[k] })).sort((a,b) => b.v - a.v);

    // 3) 近 30 天每日支出
    const d30 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 29);
    const dayRows = [];
    for (let i = 0; i < 30; i++) {
      const d = new Date(d30.getFullYear(), d30.getMonth(), d30.getDate() + i);
      const s = localDateStr(d);
      const sum = all.filter(r => String(r.record_date) === s && r.kind === 'out').reduce((a,r)=>a+Number(r.amount),0);
      dayRows.push({ label: (i % 5 === 0 || i === 29) ? (d.getMonth()+1) + '/' + d.getDate() : '', a: sum });
    }

    const totOut = curList.reduce((s,r)=>s+Number(r.amount),0);
    let html = expSegHTML();
    html += `<div class="chart-wrap">
      <div class="chart-title">近 6 个月 · 支出 vs 收入</div>
      ${barChartSVG(rows, { dual: true, h: 130 })}
      <div class="chart-legend"><span><i style="background:var(--out)"></i>支出</span><span><i style="background:var(--in)"></i>收入</span></div>
    </div>`;
    html += `<div class="sec">${Number(curM.ym.slice(5))} 月支出构成 · 共 ¥${fmtMoney(totOut)}</div>`;
    html += catRows.length
      ? `<div class="chart-wrap"><div class="chart-title">占比 Top ${Math.min(catRows.length, 8)}</div>${hbarList(catRows.slice(0, 8), { fmt: (v, p) => `¥${fmtMoney(v)} · ${p.toFixed(0)}%` })}</div>`
      : `<div class="chart-wrap"><div class="dim" style="font-size:12px;padding:4px">本月还没有支出记录</div></div>`;
    html += `<div class="sec">近 30 天每日支出</div>
      <div class="chart-wrap">
        <div class="chart-title">日均 ¥${fmtMoney(totOut ? dayRows.reduce((s,r)=>s+r.a,0) / 30 : 0)}</div>
        ${barChartSVG(dayRows, { h: 110, color: 'var(--brand)' })}
      </div>`;

    v.innerHTML = html;
    bindExpSeg();
  } catch(e) {
    v.innerHTML = failHTML('加载', e, 'renderExpenseChart()');
  }
}


function openExpenseForm(id) {
  const r = id ? state.expense.find(x => String(x.id) === String(id)) : null;
  openModal(`
    <div class="field"><label>金额</label><input id="f-amount" type="number" step="0.01" min="0" placeholder="0.00" value="${r ? r.amount : ''}"></div>
    <div class="field-row">
      <div class="field"><label>类型</label><select id="f-kind"><option value="out" ${!r||r.kind==='out'?'selected':''}>支出</option><option value="in" ${r&&r.kind==='in'?'selected':''}>收入</option></select></div>
      <div class="field"><label>日期</label><input id="f-date" type="date" value="${r ? r.record_date : todayStr()}"></div>
    </div>
    <div class="field"><label>分类</label>
      <select id="f-category">
        ${getCats().map(c=>`<option value="${c}" ${r&&r.category===c?'selected':''}>${c}</option>`).join('')}
        ${r && r.category && !getCats().includes(r.category) ? `<option value="${escapeHtml(r.category)}" selected>${escapeHtml(r.category)}</option>` : ''}
      </select>
    </div>
    <div class="field"><label>备注</label><input id="f-note" type="text" placeholder="可选" value="${r ? escapeHtml(r.note||'') : ''}"></div>
    <button class="btn" id="f-save">保存</button>`);
  setModalTitle(r ? '编辑收支' : '记一笔');
  $('#f-save').onclick = () => saveExpense(id);
}

async function saveExpense(id) {
  const amount = parseFloat($('#f-amount').value);
  if (!amount || amount <= 0) { toastErr('请填正确金额'); return; }
  const payload = {
    amount, kind: $('#f-kind').value, category: $('#f-category').value,
    note: $('#f-note').value.trim(), record_date: $('#f-date').value
  };
  const res = id
    ? await cloud.database.from('expense').update(payload).eq('id', id).select()
    : await cloud.database.from('expense').insert(payload).select();
  if (res.error) { toastErr(errMsg(res.error)); return; }
  closeModal();

  // 记到别的月份时自动跟过去，避免「保存完看不到」
  const ym = payload.record_date ? payload.record_date.slice(0,7) : null;
  if (ym && ym !== state.expYM && ym <= monthStr()) state.expYM = ym;
  state.expenseYM = state.expYM;

  /*⛔⛔ 乐观更新（统一入口）。详见文件里「写入乐观更新（全站通用）」那段说明。
     保存后只重查云端 ⇒ 写入还没对查询可见 ⇒ 查回旧数据 ⇒ 界面看着没生效。
     用户原话：「保存后列表没东西，点开 app 又加载出来了」。*/
  // ⛔⛔ force=false 时只 paint（不查云端），否则刚加的乐观行会被旧查询覆盖
  afterWrite('expense', 'expense', id, res, payload,
    (f) => { if (f) renderExpenseList(true); else paintExpenseList(); });
}

async function delExpense(id) {
  if (!confirm('删除这条记录？')) return;
  const { error } = await cloud.database.from('expense').delete().eq('id', id).select();
  if (error) { toastErr(errMsg(error)); return; }
  // ⛔⛔ 删除后**只画本地**（paintExpenseList 不查云端）。
  //    原来直接 renderExpenseList() 会立刻发查询，写入延迟窗口内
  //    `state.expense = list` 把刚删的行又塞回来 ⇒ 「闪一下还是原来的」。
  await finishDelete('expense', 'expense', id,
    (f) => { if (f) renderExpenseList(true); else paintExpenseList(); });
}

/* ================= Diary ================= */
/* ========== 心情（13 个手绘 SVG 圆脸）==============
   唯一一份清单：emoji 字符 f 存进云端 mood 表（历史数据靠它读），
   e/m/b/d 只决定画法，历史上同一个 f 改画法照样能读。
   ⛔ 别换掉 f —— 云端 mood 表里存的就是它，换了老记录全部读不出来。
   ⛔ 别用 emoji 渲染：emoji 是系统字体渲染的，安卓/iOS 长相完全不同，
      而且给不出「黄=积极/绿=中性/蓝=消极/粉=不满」这层颜色分组。
   源文件：_lifebook_dev/_dev/mood_faces.js（改完跑 mood_preview.py 出预览图）。
   ⛔ 改完必须先看预览图再进页面 —— 五官比例凭想象调不出来。 */

const MOOD_SKIN = {
  joy:  { fill:'#FFD85E', ink:'#5A3B12', blush:'#FF9E7A' },   // 黄·积极
  calm: { fill:'#B8E6A0', ink:'#2F4A1E', blush:'#8FCF78' },   // 绿·中性
  low:  { fill:'#A8D8F0', ink:'#173D52', blush:'#7FBEE0' },   // 蓝·消极
  upset:{ fill:'#FFB0C0', ink:'#5A1E2C', blush:'#FF8FA5' }    // 粉·不满
};

/* 五官零件库。全部返回 SVG 片段，统一 ink 颜色。
   ⛔ 脸心 (24,24) 半径 20 ⇒ 脸内可用区大致 x∈[6,42]、y∈[6,42]。
      装饰要放在**脸缘**（r 18~20 那一圈）才看得见 ——
      第一版把汗滴放(35,12)，那在脸外，看不见；
      音符放 (36,15) 也一样，整体白画。*/
const MOOD_PARTS = {
  /* 眼睛。t = 类型 */
  eye(ink, t) {
    switch (t) {
      // 弯弯的笑眼（∪ 形）
      case 'happy':  return `<path d="M13 22q4.5-6 9 0M26 22q4.5-6 9 0" fill="none" stroke="${ink}" stroke-width="2.8" stroke-linecap="round"/>`;
      // 眯眼（更弯更深 = 笑得更开心）
      case 'squint': return `<path d="M13 23q4.5-8 9 0M26 23q4.5-8 9 0" fill="none" stroke="${ink}" stroke-width="2.8" stroke-linecap="round"/>`;
      // 圆睁眼
      case 'open':   return `<ellipse cx="17.5" cy="22.5" rx="2.6" ry="3.2" fill="${ink}"/><ellipse cx="30.5" cy="22.5" rx="2.6" ry="3.2" fill="${ink}"/>`;
      // 一高一低（不安）
      case 'worry':  return `<ellipse cx="17.5" cy="24" rx="2.5" ry="3.1" fill="${ink}"/><ellipse cx="30.5" cy="21.5" rx="2.5" ry="3.1" fill="${ink}"/>`;
      // 上斜（生气）
      case 'angry':  return `<ellipse cx="17.5" cy="24" rx="2.5" ry="3" fill="${ink}"/><ellipse cx="30.5" cy="24" rx="2.5" ry="3" fill="${ink}"/>`;
      // 闭眼（一条横线）
      case 'closed': return `<path d="M13.5 23h8M26.5 23h8" stroke="${ink}" stroke-width="2.8" stroke-linecap="round" fill="none"/>`;
      // 下垂眼睑（困/睡）
      case 'droop':  return `<path d="M13 20.5q4.5 2 9 0M26 20.5q4.5 2 9 0" stroke="${ink}" stroke-width="2.6" stroke-linecap="round" fill="none"/>
                            <path d="M13.5 24q4.5 4.5 9 0M26.5 24q4.5 4.5 9 0" stroke="${ink}" stroke-width="2.4" stroke-linecap="round" fill="none"/>`;
      // 无神（半闭的扁椭圆）
      case 'blank':  return `<ellipse cx="17.5" cy="23" rx="2.4" ry="1.9" fill="${ink}"/><ellipse cx="30.5" cy="23" rx="2.4" ry="1.9" fill="${ink}"/>`;
      // 泪眼（睁大 + 上睫毛）
      case 'cry':    return `<ellipse cx="17.5" cy="22" rx="2.7" ry="3.4" fill="${ink}"/><ellipse cx="30.5" cy="22" rx="2.7" ry="3.4" fill="${ink}"/>`;
      // 仰视（难过时眼睛朝上）
      case 'up':     return `<ellipse cx="17.5" cy="23.5" rx="2.5" ry="3" fill="${ink}"/><ellipse cx="30.5" cy="23.5" rx="2.5" ry="3" fill="${ink}"/>
                            <path d="M13.5 19.5q4 2 8 0M26.5 19.5q4 2 8 0" stroke="${ink}" stroke-width="2" stroke-linecap="round" fill="none"/>`;
      default:       return MOOD_PARTS.eye(ink, 'open');
    }
  },
  /* 嘴巴 */
  mouth(ink, t) {
    switch (t) {
      case 'grin':   return `<path d="M14.5 29q9.5 9 19 0z" fill="${ink}"/>`;                    // 露齿大笑
      case 'teeth':  return `<path d="M14.5 29.5q9.5 9 19 0z" fill="${ink}"/>
                            <path d="M16.5 31.2q7.5 3 15 0" stroke="#fff" stroke-width="1.6" fill="none" opacity=".55"/>`;
      case 'smile':  return `<path d="M16.5 29.5q7.5 6.5 15 0" fill="none" stroke="${ink}" stroke-width="2.8" stroke-linecap="round"/>`;
      case 'small':  return `<path d="M18.5 30.5q5.5 4 11 0" fill="none" stroke="${ink}" stroke-width="2.6" stroke-linecap="round"/>`;
      case 'flat':   return `<path d="M17.5 31h13" stroke="${ink}" stroke-width="2.8" stroke-linecap="round" fill="none"/>`;
      case 'frown':  return `<path d="M16.5 34q7.5-6.5 15 0" fill="none" stroke="${ink}" stroke-width="2.8" stroke-linecap="round"/>`;
      case 'wavy':   return `<path d="M14.5 32q3.5-4 7 0t7 0 7 0" fill="none" stroke="${ink}" stroke-width="2.6" stroke-linecap="round"/>`;
      case 'open':   return `<ellipse cx="24" cy="31.5" rx="4.6" ry="5.2" fill="${ink}"/>
                            <ellipse cx="24" cy="34.2" rx="2.4" ry="1.8" fill="#E4708A"/>`;      // 惊/激动
      case 'yawn':   return `<ellipse cx="24" cy="32" rx="4" ry="4.8" fill="${ink}"/>`;
      case 'wave':   return `<path d="M14 32q3.5-4.5 7 0t7 0 7 0" fill="none" stroke="${ink}" stroke-width="2.6" stroke-linecap="round"/>`;
      case 'talk':   return `<ellipse cx="24" cy="32.5" rx="3.6" ry="4.4" fill="${ink}"/>`;
      default:       return MOOD_PARTS.mouth(ink, 'flat');
    }
  },
  /* 眉毛（压低一点，别挤到眼睛） */
  brow(ink, t) {
    switch (t) {
      case 'angry':  return `<path d="M12.5 16.5l9 4M35.5 16.5l-9 4" stroke="${ink}" stroke-width="2.8" stroke-linecap="round" fill="none"/>`;
      case 'sad':    return `<path d="M13.5 17.5q4.5-3 9-.5M26.5 17.5q4.5-3 9-.5" fill="none" stroke="${ink}" stroke-width="2" stroke-linecap="round" opacity=".8"/>`;
      case 'worry':  return `<path d="M13.5 16.5q4.5-3 9-.5M26.5 18q4.5-2.5 9 0" fill="none" stroke="${ink}" stroke-width="2" stroke-linecap="round" opacity=".8"/>`;
      default:       return '';
    }
  },
  /* 装饰 —— ⛔ 全部落在 r∈[17,20] 的脸缘上，放脸上就是看不见。 */
  deco(t, skin) {
    switch (t) {
      // 泪：眼睛外下方一点点（脸内、贴脸缘）
      case 'tear':   return `<path d="M9.5 26q-3 4.8 0 6t3.2-4.2z" fill="#4FB8EC"/>`;
      case 'tear2':  return `<path d="M9.5 26q-3 4.8 0 6t3.2-4.2zM38.5 26q3 4.8 0 6t-3.2-4.2z" fill="#4FB8EC"/>`;
      // 汗：右脸颊缘，一滴
      case 'sweat':  return `<path d="M38.5 15.5q4 5.6 0 7.2t-4.3-4.9z" fill="#57BEE4"/>`;
      // 音符：右上脸缘
      case 'note':   return `<g fill="#7A5AD8"><ellipse cx="38.5" cy="17" rx="3.6" ry="2.8" transform="rotate(-20 38.5 17)"/><rect x="41" y="7.5" width="2" height="10" rx=".8" transform="rotate(-16 41 15)"/></g>`;
      // 蒸汽：左上 + 右上，两道
      case 'steam':  return `<g fill="none" stroke="#C9556B" stroke-width="2.2" stroke-linecap="round"><path d="M10 12q3.5-4 0-7.5"/><path d="M38 12q3.5-4 0-7.5"</g>`;
      // 红心：右上脸缘
      case 'heart':  return `<path d="M38 7c-2.9 0-4.7 2.3-4.7 4.1 0 2.7 4.7 6.2 4.7 6.2s4.7-3.5 4.7-6.2c0-1.8-1.8-4.1-4.7-4.1z" fill="#FF6B8A"/>`;
      // 问号：右上脸缘
      case 'query':  return `<g fill="none" stroke="#3A7CA5" stroke-width="2.4" stroke-linecap="round"><path d="M33.5 9.5a3.8 3.8 0 0 1 3.8 3.8c0 2.1-3.4 2.6-3.4 4.5"/></g><circle cx="33.9" cy="21.5" r="1.8" fill="#3A7CA5"/>`;
      // 闪电：右上脸缘
      case 'bolt':   return `<path d="M39 5.5l-6.5 8.8h4.3l-2.3 7.7 7.1-9.7h-4.4z" fill="#FFA61E"/>`;
      // 星星：右上脸缘
      case 'spark':  return `<path d="M38.5 6.5l1.8 3.8 4.2.6-3 3 .7 4.2-3.7-1.9-3.7 1.9.7-4.2-3-3 4.2-.6z" fill="#FF9E1E"/>`;
      // 汗+抖（疲惫）
      case 'tired':  return `<path d="M38.5 15.5q4 5.6 0 7.2t-4.3-4.9z" fill="#57BEE4"/>
                            <g stroke="${skin.ink}" stroke-width="2" stroke-linecap="round" fill="none" opacity=".6"><path d="M9 20v4M7 22h4"/></g>`;
      default:       return '';
    }
  }
};

/* 生成一个心情脸的 SVG（不含外层 button，方便复用到卡片等处）
   ⛔ 传空/半截对象不能崩 —— 首页卡片在「还没记心情」时就是空的，
      这里必须给一个灰色空脸占位，而不是 throw。*/
function moodFaceSVG(m, cls) {
  m = m || {};
  const s = MOOD_SKIN[m.c] || null;
  const fill = s ? s.fill : 'rgba(245,240,232,.10)';
  const ink = s ? s.ink : 'rgba(245,240,232,.28)';
  const hasFace = !!(m.e && m.m);
  return `<svg class="${cls || 'mp-svg'}" viewBox="0 0 48 48" aria-hidden="true">
  <circle cx="24" cy="24" r="20" fill="${fill}"/>
  ${hasFace && m.b ? MOOD_PARTS.brow(ink, m.b) : ''}
  ${hasFace ? MOOD_PARTS.eye(ink, m.e) : ''}
  ${hasFace ? MOOD_PARTS.mouth(ink, m.m) : ''}
  ${hasFace && m.d ? MOOD_PARTS.deco(m.d, s || {ink}) : ''}
</svg>`;
}

/* 13 个心情。按情绪极性分四色：
   黄=积极 / 绿=中性 / 蓝=消极 / 粉=不满。
   ⛔ `f`（表情字符）保留 —— 云端 mood 表存的是它，改了会让历史数据读不出来。
   ⛔ `e/m/b/d` 只影响画法，历史上同一个 f 改了画法也照样能读。*/
const MOOD_LIST = [
  // 黄 · 积极
  { f:'😊', l:'开心',   c:'joy',   e:'happy',  m:'grin'   },
  { f:'😋', l:'美滋滋', c:'joy',   e:'squint', m:'teeth',  d:'spark' },
  { f:'🥰', l:'心动',   c:'joy',   e:'happy',  m:'smile',  d:'heart' },
  { f:'🤩', l:'激动',   c:'joy',   e:'open',   m:'open',   d:'note'  },
  // 绿 · 中性
  { f:'😐', l:'平静',   c:'calm',  e:'flat',   m:'flat'              },
  { f:'😰', l:'焦虑',   c:'calm',  e:'worry',  m:'wave',   b:'worry', d:'sweat' },
  { f:'😩', l:'疲惫',   c:'calm',  e:'droop',  m:'frown',  d:'tired' },
  { f:'😴', l:'犯困',   c:'calm',  e:'closed', m:'yawn'              },
  // 蓝 · 消极
  { f:'😢', l:'难过',   c:'low',   e:'up',     m:'frown',  b:'sad', d:'tear'  },
  { f:'🥱', l:'疲惫不堪', c:'low', e:'droop',  m:'wave',   d:'tear2' },
  { f:'🫤', l:'说不清', c:'low',   e:'worry',  m:'wavy',   b:'worry', d:'query' },
  // 粉 · 不满
  { f:'😭', l:'委屈',   c:'upset', e:'cry',    m:'wavy',   b:'sad', d:'tear2' },
  { f:'😡', l:'生气',   c:'upset', e:'angry',  m:'frown',  b:'angry', d:'steam' }
];
const MOODS = MOOD_LIST.map(m => m.f);
const moodLabel = (f) => { const m = MOOD_LIST.find(x => x.f === f); return m ? m.l : (f || ''); };
const moodItem = (f) => MOOD_LIST.find(x => x.f === f) || null;
/* v3.1 兜底：云端 mood 表里可能有**老清单的表情**（v2.9 之前是
   😌 🤔 💪 🎉 这几个，代码里已经删了，但历史数据还在）。
   ⇒ 不认识的脸不能显示成「空格子」—— 那看着像「那天没记心情」，
      而实际上记了。给一张问号脸 + 原字符，label 显示原字符本身。*/
const MOOD_LEGACY = {
  '😌': '平静', '🤔': '沉思', '💪': '有劲', '🎉': '庆祝',
  '😮': '孤独', '🙃': '还行'
};
const moodItemOrLegacy = (f) => {
  const m = moodItem(f);
  if (m) return m;
  const lbl = MOOD_LEGACY[f];
  // e/m 都是「不确定」的类型：一高一低的眼睛 + 波浪嘴，视觉上就是"说不清"
  return lbl ? { f, l: lbl, c: 'low', e: 'worry', m: 'wave', d: 'query', b: 'worry' } : null;
};

async function renderDiaryList(force) {
  const v = $('#view');
  // 有旧数据就先把旧的摆上去（秒开），再后台拉最新的。
  // ⛔ 已经站在日记页、搜索框也建好了 ⇒ 绝不能走 paintDiaryAll ——
  //    它会重建整个 #view（连输入框一起换掉），正在拼的中文就没落点了。
  //    #dq 不存在只可能是"刚从别的 tab 切过来"（各 tab 共用 #view，DOM 早被冲了）。
  const cached = state.diarySig ? state.diary : null;
  if (cached) { if (state.diary.length && $('#dq')) paintDiaryList(); else paintDiaryAll(); }
  else v.innerHTML = loadingHTML();

  try {
    const { data, error } = await cloud.database.from('diary').select('*').order('record_date', { ascending: false }).order('created_at', { ascending: false }).limit(LIMIT_LIST);
    if (error) throw error;
    let list = data || [];
    list = keepPending('diary', 'diary', list);     // 乐观更新的护栏
    const sig = rowsSig(list);
    const same = sig === state.diarySig;
    state.diary = list; state.diarySig = sig;
    if (force || !same) {
      // ⛔ 搜索框已经建好就只重画列表。重建整个 #view 会把正在拼的中文打断
      //    （「打出来只有字母、上不了屏」那个老 bug 就是这么来的）
      if (state.diary.length && $('#dq')) paintDiaryList();
      else paintDiaryAll();
    }
  } catch(e) {
    if (cached) softFail(e);
    else v.innerHTML = failHTML('加载', e, 'renderDiaryList()');
  }
}

/* 建搜索框 + 列表。只在「第一次进来」和「列表变空」时跑，
   之后一律只调 paintDiaryList()，别再重建输入框。 */
function paintDiaryAll() {
  const v = $('#view');
  if (!state.diary.length) {
    v.innerHTML = `<div class="empty"><div class="ico">📖</div>还没有日记<br>点右下角 + 写第一篇</div>`;
    return;
  }
  /* 搜索框只建这一次，之后打字只重画下面的 #dq-list。
     ⛔ 以前是「每次输入都重建整个 #view」—— 连输入框本身一起换掉，
     中文输入法正在拼的那串拼音就没了落点，表现成「打出来只有字母、上不了屏」。
     另外 type="search" 在部分安卓输入法下会吃回车/候选键，换成 text + inputmode。 */
  v.innerHTML = `<div class="search">
    <span class="si">${ICONS.search}</span>
    <input id="dq" type="text" inputmode="search" enterkeyhint="search" autocomplete="off"
           placeholder="搜标题 / 正文 / 心情 / 日期" value="${escapeHtml(state.diaryQ || '')}">
    <span class="clr" id="dq-clr" style="${state.diaryQ ? '' : 'display:none'}">×</span>
  </div>
  <div id="dq-list"></div>`;

  const dq = $('#dq');
  let composing = false;                       // 输入法拼字中，先别动 DOM
  dq.addEventListener('compositionstart', () => { composing = true; });
  dq.addEventListener('compositionend', (e) => { composing = false; state.diaryQ = e.target.value; paintDiaryList(); });
  dq.addEventListener('input', (e) => {
    state.diaryQ = e.target.value;
    $('#dq-clr').style.display = state.diaryQ ? '' : 'none';
    if (composing || e.isComposing) return;
    paintDiaryList();
  });
  $('#dq-clr').onclick = () => {
    state.diaryQ = ''; dq.value = '';
    $('#dq-clr').style.display = 'none';
    paintDiaryList(); dq.focus();
  };
  paintDiaryList();
}

/* 只重画搜索结果区，输入框原地不动 */
function paintDiaryList() {
  const box = $('#dq-list');
  if (!box) return;
  const q = (state.diaryQ || '').trim();
  const lq = q.toLowerCase();
  const list = q
    // ⛔ 搜索要带上心情的**中文标签**：存的是 emoji，用户搜「难过」命中不了「😭」。
    //   emoji 和标签都拼上 —— 复制粘贴一个表情进来也能搜到。
    ? state.diary.filter(r => (String(r.title||'') + String(r.content||'') + String(r.mood||'')
        + (r.mood ? stMoodLabel(r.mood) + r.mood : '') + String(r.record_date||'')).toLowerCase().includes(lq))
    : state.diary;
  let html = '';
  if (q && !list.length) {
    html = `<div class="empty"><div class="ico">🔍</div>没有含「${escapeHtml(q)}」的日记</div>`;
  } else {
    html = `<div class="sec">${q ? `搜到 ${list.length} 篇` : `共 ${list.length} 篇`}</div>`;
    list.forEach(r => {
      const preview = excerpt(r.content, q, 72);
      html += `<div class="card card-tap" data-edit="diary" data-id="${r.id}">
        <div class="row-between">
          <span class="mood">${r.mood ? escapeHtml(r.mood) + '<em>' + escapeHtml(moodItemOrLegacy(r.mood) ? moodItemOrLegacy(r.mood).l : r.mood) + '</em>' : ''}</span>
          <div style="display:flex;align-items:center;gap:6px">
            <span class="muted" style="font-size:12px">${highlight(fmtDate(r.record_date), q)}</span>
            <!--⛔⛔ 2026-10-20 补：日记卡片**一直没有删除按钮**。
                 delDiary() 函数一直存在但没人调用 ⇒ 用户想删日记根本删不掉，
                 只能进编辑页。是 v317 测试报"日记没有删除按钮"才发现的。-->
            <button class="btn-close" data-del="diary" data-id="${r.id}" style="font-size:13px;width:26px;height:26px">×</button>
          </div>
        </div>
        ${r.title ? `<div style="margin-top:4px;font-weight:600">${highlight(r.title, q)}</div>` : ''}
        <div class="dim" style="margin-top:4px;font-size:13px">${highlight(preview, q)}</div>
      </div>`;
    });
  }
  box.innerHTML = html;
  $$('[data-edit="diary"]').forEach(el => el.onclick = (e) => {
    if (e.target.dataset.del) return;          // 点的是删除，别顺手打开编辑
    openDiaryForm(el.dataset.id);
  });
  $$('[data-del="diary"]').forEach(b => b.onclick = (e) => { e.stopPropagation(); delDiary(b.dataset.id); });
}

function openDiaryForm(id) {
  const r = id ? state.diary.find(x => String(x.id) === String(id)) : null;
  // ⛔ 这里原来还有一个「心情」下拉，和首页星环区那个重复了 ——
  //    两处都能写、写的还不是一张表（这个存 diary.mood，那边存 mood 表），
  //    结果「我记了心情，日记里却看不到」。v2.9 起心情只有星环区一个入口。
  openModal(`
    <div class="field"><label>日期</label><input id="d-date" type="date" value="${r ? r.record_date : todayStr()}"></div>
    <div class="field"><label>标题（可选）</label><input id="d-title" type="text" value="${r ? escapeHtml(r.title||'') : ''}"></div>
    <div class="field"><label>正文</label><textarea id="d-content" class="grow" placeholder="今天都发生了什么">${r ? escapeHtml(r.content||'') : ''}</textarea></div>
    <div class="note" style="text-align:left;padding:10px 2px 0">心情在首页「每日心情」那张小卡片上记，记完这里和星环会一起变。</div>
    <button class="btn" id="d-save">保存</button>
    ${id ? '<button class="btn-ghost danger" id="d-del">删除这篇日记</button>' : ''}`);
  setModalTitle(r ? '编辑日记' : '写日记');
  bindAutoGrow($('#d-content'));
  $('#d-save').onclick = () => saveDiary(id);
  if (id) $('#d-del').onclick = () => { closeModal(); delDiary(id); };
}

async function saveDiary(id) {
  const content = $('#d-content').value.trim();
  if (!content) { toastErr('正文不能空'); return; }
  // 心情不再手填，但 diary.mood 列留着：① 老日记已有值不能丢，
  // ② 日记列表那行小表情还靠它。写入时取「这天的 mood 表」，
  // 有就跟着，没有就沿用原来的值（编辑老日记时别把它抹成空）。
  let moodVal = id ? ((state.diary.find(x => String(x.id) === String(id)) || {}).mood || '') : '';
  const dateVal = $('#d-date').value;
  if (dateVal === todayStr() && stData && stData.mood) moodVal = stData.mood;
  const payload = { title: $('#d-title').value.trim(), content, mood: moodVal, record_date: dateVal };
  const res = id
    ? await cloud.database.from('diary').update(payload).eq('id', id).select()
    : await cloud.database.from('diary').insert(payload).select();
  if (res.error) { toastErr(errMsg(res.error)); return; }
  closeModal();
  /*⛔⛔ 乐观更新：原来只 renderDiaryList() 重查云端，撞上写入延迟
     就「写了但列表没东西」—— 用户原话：「日记我写了但列表里面没东西，
     昨天和前天都写了，列表只有前天的」。*/
  // ⛔⛔ 同上：force=false 只 paint
  afterWrite('diary', 'diary', id, res, payload, (f) => {
    if (f) return renderDiaryList(true);
    const n = (state.diary || []).length;
    if (n && $('#dq')) paintDiaryList(); else paintDiaryAll();
  });
}

async function delDiary(id) {
  if (!confirm('删除这篇日记？')) return;
  const { error } = await cloud.database.from('diary').delete().eq('id', id).select();
  if (error) { toastErr(errMsg(error)); return; }
  // ⛔⛔ 同上：先只画本地（paintDiaryList/paintDiaryAll），别立刻重查云端
  await finishDelete('diary', 'diary', id, (f) => {
    if (f) renderDiaryList(true);
    else { const g = (state.diary || []).length; if (g && $('#dq')) paintDiaryList(); else paintDiaryAll(); }
  });
}

/* ================= Life ================= */

/* 标签池 = 自己加过的（存本地） → 历史用过的（按出现次数） → 预设常用。
   做成点选的 chips：手机上打「逗号」本身就很别扭，而且打出来的词每次还不一样。 */
const LIFE_TAG_PRESETS = ['朋友','家人','工作','学习','日记','美食','旅行','游戏','心情','护肤','早起','练枪'];
const LIFE_TAG_KEY = 'lifeTags';
/* 「管理」里删掉的标签记在这里。
   ⛔ 不能只从 lifeTags 里删：历史记录里用过的词会被 freq 分支重新捞回候选池，
      所以必须有一份"黑名单"，在最后统一过滤（池子和筛选条都过一遍）。 */
const LIFE_TAG_HIDE_KEY = 'lifeTagsHidden';

function lifeTagHidden() {
  const a = LS.get(LIFE_TAG_HIDE_KEY, []);
  return Array.isArray(a) ? a.map(String) : [];
}
function hideLifeTag(t) {
  const list = lifeTagHidden();
  if (!list.includes(t)) { list.unshift(t); LS.set(LIFE_TAG_HIDE_KEY, list.slice(0, 200)); }
  const custom = (LS.get(LIFE_TAG_KEY, []) || []).map(String).filter(x => x !== t);
  LS.set(LIFE_TAG_KEY, custom);
}
function unhideLifeTag(t) {
  const list = lifeTagHidden();
  if (list.includes(t)) LS.set(LIFE_TAG_HIDE_KEY, list.filter(x => x !== t));
}

function lifeTagPool() {
  const hidden = lifeTagHidden();
  const custom = (LS.get(LIFE_TAG_KEY, []) || []).map(String);
  const freq = {};
  (state.life || []).forEach(r => (r.tags || []).forEach(t => {
    const s = String(t).trim(); if (s) freq[s] = (freq[s] || 0) + 1;
  }));
  const used = Object.keys(freq).sort((a, b) => freq[b] - freq[a]).slice(0, 18);
  const out = [];
  custom.concat(used, LIFE_TAG_PRESETS).forEach(t => {
    const s = String(t).trim();
    if (s && s.length <= 12 && !out.includes(s) && !hidden.includes(s)) out.push(s);
  });
  return out.slice(0, 36);
}

/* 已隐藏的标签随时能捞回来 —— 删错了不至于没救（这才是敢让人点 × 的前提） */
function openHiddenTags() {
  const hid = lifeTagHidden();
  openModal(`
    <div class="note" style="text-align:left;margin-bottom:12px">
      这些标签从候选里移除了，<b>历史记录本身没动</b>。点一下就能放回去。
    </div>
    <div class="tagpick">
      ${hid.map(t => `<button type="button" class="tchip" data-back="${escapeHtml(t)}">${escapeHtml(t)}<span style="color:var(--in);margin-left:5px">＋</span></button>`).join('')}
    </div>
    <div class="taghint show" style="margin-bottom:12px">没有要找的？直接在「＋ 添加标签」里重新加一遍也一样。</div>
    <button class="btn-ghost" id="ht-clear">全部恢复（${hid.length} 个）</button>
    <button class="btn" id="ht-done">好</button>`);
  setModalTitle('已隐藏的标签');
  $$('[data-back]').forEach(b => b.onclick = () => {
    unhideLifeTag(b.dataset.back);
    b.remove();
    toast('已恢复', b.dataset.back);
  });
  $('#ht-clear').onclick = () => { LS.set(LIFE_TAG_HIDE_KEY, []); closeModal(); toast('已全部恢复'); };
  $('#ht-done').onclick = closeModal;
}

async function renderLifeList(force) {
  const v = $('#view');
  // 有旧数据就先把旧的摆上去（秒开），再后台拉最新的
  const cached = state.lifeSig ? state.life : null;
  if (cached) paintLifeList();
  else v.innerHTML = loadingHTML();

  try {
    const { data, error } = await cloud.database.from('life').select('*').order('record_date', { ascending: false }).order('created_at', { ascending: false }).limit(LIMIT_LIST);
    if (error) throw error;
    let list = data || [];
    list = keepPending('life', 'life', list);      // 乐观更新的护栏
    const sig = rowsSig(list);
    const same = sig === state.lifeSig;
    state.life = list; state.lifeSig = sig;
    if (force || !same) paintLifeList();
  } catch(e) {
    if (cached) softFail(e);
    else v.innerHTML = failHTML('加载', e, 'renderLifeList()');
  }
}

/* 只负责画（数据取 state.life） */
function paintLifeList() {
  const v = $('#view');
  if (!state.life.length) {
    v.innerHTML = `<div class="empty"><div class="ico">✨</div>还没有随手记<br>点右下角 + 记一条</div>`;
    return;
  }
  // 顶部标签筛选条（按用到的次数排）—— 在「管理」里删掉的标签这里也不再出现
  const freq = {};
  state.life.forEach(r => (r.tags || []).forEach(t => { const s = String(t).trim(); if (s) freq[s] = (freq[s] || 0) + 1; }));
  const hiddenTags = lifeTagHidden();
  const names = Object.keys(freq).filter(t => !hiddenTags.includes(t)).sort((a, b) => freq[b] - freq[a]).slice(0, 24);
  const cur = state.lifeTagQ || '';
  const list = cur ? state.life.filter(r => (r.tags || []).some(t => String(t) === cur)) : state.life;

  let html = '';
  if (names.length) {
    html += `<div class="tagbar">
      <button class="filter ${cur ? '' : 'on'}" data-tagf="">全部</button>
      ${names.map(t => `<button class="filter ${cur === t ? 'on' : ''}" data-tagf="${escapeHtml(t)}">${escapeHtml(t)}</button>`).join('')}
    </div>`;
  }
  html += `<div class="sec">${cur ? `「${escapeHtml(cur)}」${list.length} 条` : `共 ${list.length} 条`}</div>`;
  list.forEach(r => {
    const tags = (r.tags||[]).map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('');
    html += `<div class="card card-tap" data-edit="life" data-id="${r.id}">
      <div class="row-between">
        <span class="muted" style="font-size:12px">${fmtDate(r.record_date)}</span>
        <button class="btn-close" data-del="life" data-id="${r.id}" style="font-size:13px;width:26px;height:26px">×</button>
      </div>
      <div style="margin-top:6px;white-space:pre-wrap">${escapeHtml(r.content)}</div>
      ${tags ? `<div style="margin-top:7px">${tags}</div>` : ''}
    </div>`;
  });
  v.innerHTML = html;
  // ⭐ 点标签只是换个筛选条件，数据没变 —— 只重画，不再重新请求（原来每次都要走一遍网络）
  $$('[data-tagf]').forEach(b => b.onclick = () => { state.lifeTagQ = b.dataset.tagf; paintLifeList(); });
  $$('[data-edit="life"]').forEach(el => el.onclick = (e) => {
    if (e.target.dataset.del) return;
    openLifeForm(el.dataset.id);
  });
  $$('[data-del="life"]').forEach(b => b.onclick = (e) => { e.stopPropagation(); delLife(b.dataset.id); });
}

function openLifeForm(id) {
  const r = id ? state.life.find(x => String(x.id) === String(id)) : null;
  const sel = new Set((r && r.tags) || []);
  openModal(`
    <div class="field"><label>日期</label><input id="l-date" type="date" value="${r ? r.record_date : todayStr()}"></div>
    <div class="field"><label>内容</label><textarea id="l-content" placeholder="今天发生了什么想记下来的">${r ? escapeHtml(r.content||'') : ''}</textarea></div>
    <div class="field">
      <label>标签（点一下选中，可多选）</label>
      <div class="tagpick" id="l-chips">${lifeTagPool().map(t => `<button type="button" class="tchip${sel.has(t) ? ' on' : ''}" data-tag="${escapeHtml(t)}">${escapeHtml(t)}<i class="tx">×</i></button>`).join('')}<button type="button" class="tchip add" id="l-tag-add">＋ 添加标签</button><button type="button" class="tchip mgr" id="l-tag-mgr">管理</button></div>
      <div class="taghint" id="l-tag-hint">
        点标签上的 <b style="color:var(--out)">×</b> 从候选里去掉（只影响以后写东西时能不能点到，<b>历史记录不动</b>）。<br>
        <button type="button" class="btn-text" id="l-tag-back" style="padding:0;font-size:11.5px;color:var(--cyan)">删错了？看已隐藏的标签 ›</button>
      </div>
      <div class="tagnew" id="l-tag-new">
        <input id="l-newtag" type="text" maxlength="12" placeholder="新标签（最多 12 字）">
        <button type="button" id="l-newtag-ok">加上</button>
      </div>
    </div>
    <button class="btn" id="l-save">保存</button>`);
  setModalTitle(r ? '编辑记录' : '随手记');

  const chips = $('#l-chips');
  const hint = $('#l-tag-hint');
  const mgrBtn = $('#l-tag-mgr');
  let managing = false;
  const findChip = (val) => Array.prototype.find.call(chips.querySelectorAll('.tchip'), x => x.dataset.tag === val);
  const setManaging = (on) => {
    managing = on;
    chips.classList.toggle('mgr', on);
    hint.classList.toggle('show', on);
    mgrBtn.classList.toggle('on', on);
    mgrBtn.textContent = on ? '完成' : '管理';
  };
  mgrBtn.onclick = () => setManaging(!managing);
  $('#l-tag-back').onclick = openHiddenTags;

  chips.onclick = (e) => {
    const cut = e.target.closest && e.target.closest('.tx');
    if (cut) {                                  // 管理态里的 ×：从候选池移除
      const t = cut.parentElement.dataset.tag;
      hideLifeTag(t);
      cut.parentElement.remove();
      sel.delete(t);
      return;
    }
    const b = e.target.closest && e.target.closest('.tchip');
    if (!b || b.classList.contains('add') || b.classList.contains('mgr')) return;
    if (managing) return;                       // 管理态只管删，避免手滑把选中的标签点没了
    if (b.classList.contains('on')) { b.classList.remove('on'); sel.delete(b.dataset.tag); }
    else { b.classList.add('on'); sel.add(b.dataset.tag); }
  };
  const newBox = $('#l-tag-new');
  $('#l-tag-add').onclick = () => { newBox.classList.add('show'); $('#l-newtag').focus(); };
  const addTag = () => {
    const val = ($('#l-newtag').value || '').trim().slice(0, 12);
    if (!val) return;
    const custom = (LS.get(LIFE_TAG_KEY, []) || []).map(String);
    if (!custom.includes(val)) { custom.unshift(val); LS.set(LIFE_TAG_KEY, custom.slice(0, 30)); }
    unhideLifeTag(val);                          // 被 × 掉过的，重新加一遍就等于恢复
    let b = findChip(val);
    if (!b) {
      b = document.createElement('button');
      b.type = 'button'; b.className = 'tchip'; b.dataset.tag = val;
      b.innerHTML = escapeHtml(val) + '<i class="tx">×</i>';
      chips.insertBefore(b, $('#l-tag-add'));
    }
    b.classList.add('on');
    sel.add(val);
    $('#l-newtag').value = '';
    newBox.classList.remove('show');
  };
  $('#l-newtag-ok').onclick = addTag;
  $('#l-newtag').onkeydown = (e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } };

  $('#l-save').onclick = () => saveLife(id, sel);
}

async function saveLife(id, sel) {
  const content = $('#l-content').value.trim();
  if (!content) { toastErr('内容不能空'); return; }
  const tags = sel
    ? Array.from(sel).map(x => String(x).trim()).filter(Boolean)
    : ($('#l-tags') ? $('#l-tags').value.trim().split(/[,，]/).map(x => x.trim()).filter(Boolean) : []);
  const payload = { content, tags, record_date: $('#l-date').value };
  const res = id
    ? await cloud.database.from('life').update(payload).eq('id', id).select()
    : await cloud.database.from('life').insert(payload).select();
  if (res.error) { toastErr(errMsg(res.error)); return; }
  closeModal();
  /*⛔⛔ 乐观更新：原来只重查云端，撞上写入延迟就「加了没反应」（用户原话）。 */
  // ⛔⛔ 同上：force=false 只 paint
  afterWrite('life', 'life', id, res, payload, (f) => { if (f) renderLifeList(true); else paintLifeList(); });
}

async function delLife(id) {
  if (!confirm('删除这条记录？')) return;
  const { error } = await cloud.database.from('life').delete().eq('id', id).select();
  if (error) { toastErr(errMsg(error)); return; }
  // ⛔⛔ 同上：先只画本地（paintLifeList）
  await finishDelete('life', 'life', id, (f) => { if (f) renderLifeList(true); else paintLifeList(); });
}

/* ================= Sport ================= */
const SPORT_TYPES = ['跑步','散步','力量','瑜伽','骑行','球类','游泳','健身操','其他'];

/* ---- 步数折算（距离 / 消耗）------------------------------------------------
   手机只肯把「步数」交给 App（TYPE_STEP_COUNTER）。距离、消耗、爬楼、心率
   都是手机自带健康 App 的私有数据，普通 App 读不到（要厂商签名级权限，
   或走系统的 Health Connect 授权——那个得看你手机支不支持）。
   所以这里只能按步数折算，默认值取自常见经验：步幅 0.8 米、每步每公斤约
   0.00053 千卡（72 公斤的人约 0.038 千卡/步，与手机健康 App 的量级一致）。
   ⛔ 界面上必须写清「估算」，别让用户以为这是手机量出来的。                 */
function stepStrideM() { const v = Number(LS.get('stepStride', 0.8)); return (v > 0.3 && v < 1.6) ? v : 0.8; }
function stepWeightKg() { const v = Number(LS.get('bodyWeight', 72)); return (v > 20 && v < 200) ? v : 72; }
function stepSpm() { const v = Number(LS.get('stepSpm', 100)); return (v >= 60 && v <= 160) ? v : 100; }
function stepMetrics(steps) {
  const s = Math.max(0, Number(steps) || 0);
  return { km: s * stepStrideM() / 1000, kcal: Math.round(s * stepWeightKg() * 0.00053) };
}
// 步数 → 步行时长（分）。散步步频约 100 步/分，可在「调整折算」里改。
function stepMinutes(steps) { return Math.round(Math.max(0, Number(steps) || 0) / stepSpm()); }

/* ---- 运动量口径：手记优先，步数折算兜底 --------------------------------
   散步这类日常活动用户懒得填时长/距离/消耗（也确实没必要填），所以周汇总
   不能只看手记字段，否则永远是三个「未记录」。这里按「天」合并：
     某天手记填了 → 用那天手记的值；那天没填 → 用那天的步数折算。
   ⛔ 同一天只用一种来源，不做相加，避免手记和折算重复计算。
   ⛔ 折算出来的值必须标「估算」，不能和手记实测混为一谈。 */
function dayLoad(sportRows, stepRows) {
  const d = {};
  const slot = (k) => d[k] || (d[k] = { mKm: 0, mKcal: 0, mMin: 0, steps: 0 });
  (sportRows || []).forEach(r => {
    const o = slot(ymd(r));
    o.mKm += Number(r.distance_km) || 0;
    o.mKcal += Number(r.calories) || 0;
    o.mMin += Number(r.duration_min) || 0;
  });
  (stepRows || []).forEach(r => { slot(ymd(r)).steps = Number(r.steps) || 0; });

  const keys = Object.keys(d).sort();
  keys.forEach(k => {
    const o = d[k], e = stepMetrics(o.steps);
    const pick = (m) => m > 0 ? 'm' : (o.steps > 0 ? 'e' : null);
    o.km = o.mKm > 0 ? o.mKm : e.km;
    o.kcal = o.mKcal > 0 ? o.mKcal : e.kcal;
    o.min = o.mMin > 0 ? o.mMin : stepMinutes(o.steps);
    o.src = { km: pick(o.mKm), kcal: pick(o.mKcal), min: pick(o.mMin) };
  });
  return d;
}
// 周合计 + 来源判定：'manual' 全是手记 / 'est' 全是步数估算 / 'mix' 两种都有 / 'none' 两样都没有
function loadSum(dayMap) {
  const days = Object.keys(dayMap).map(k => dayMap[k]);
  const tot = { km: 0, kcal: 0, min: 0 };
  days.forEach(o => { tot.km += o.km; tot.kcal += o.kcal; tot.min += o.min; });
  const src = {};
  ['km', 'kcal', 'min'].forEach(f => {
    const s = new Set(days.map(o => o.src[f]).filter(Boolean));
    src[f] = !s.size ? 'none' : (s.size > 1 ? 'mix' : [...s][0]);
  });
  return { ...tot, src, estDays: days.filter(o => o.src.km === 'e').length, days: days.length };
}
function stepExtraHTML(stepNow) {
  const m = stepMetrics(stepNow);
  return `<div class="step-extra">
    <span class="m"><i>距离 · 估算</i><b>${m.km.toFixed(2)}<em>km</em></b></span>
    <span class="m"><i>消耗 · 估算</i><b>${m.kcal}<em>千卡</em></b></span>
    <span class="adj"><button class="btn-text" id="step-metrics">调整折算 ›</button></span>
  </div>`;
}

/* 手机数据区（今日步数 + 近 14 天）。原来长在「健康」页，现在归「运动」——
   步数和运动记录本来就是一件事，分在两个页面看才叫重复。 */
function stepSectionHTML() {
  const today = todayStr();
  const list = state.steps || [];
  const stepToday = list.find(r => String(r.record_date) === today) || null;
  const goal = Number(stepToday && stepToday.goal) || Number(LS.get('stepGoal', 8000)) || 8000;
  const stepNow = stepToday ? Number(stepToday.steps) : 0;
  const pct = goal ? Math.min(100, stepNow / goal * 100) : 0;
  const rows = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const s = localDateStr(d);
    const rec = list.find(r => String(r.record_date) === s);
    rows.push({ label: (i % 2 === 0) ? (d.getMonth()+1) + '/' + d.getDate() : '', a: rec ? Number(rec.steps) : 0 });
  }
  const hitDays = rows.filter(r => r.a >= goal).length;
  const avgStep = Math.round(rows.reduce((s,r)=>s+r.a,0) / 14);
  return `
      <div class="sec">手机数据 · 自动同步</div>
      <div class="step-hero" id="step-hero">
        <div class="step-top">
          <div>
            <div class="hero-label">今日步数</div>
            <div class="step-num num">${stepNow.toLocaleString('zh-CN')}</div>
          </div>
          <div style="text-align:right">
            <div class="hero-label">每日目标</div>
            <div class="num" style="font-size:15px;font-weight:700;color:var(--text-2)">${goal.toLocaleString('zh-CN')}</div>
          </div>
        </div>
        <div class="step-track"><span class="step-fill" style="width:${pct.toFixed(1)}%"></span></div>
        <div class="step-hint">${stepNow >= goal ? `已达标 · 超出 ${(stepNow-goal).toLocaleString('zh-CN')} 步` : `还差 ${(goal-stepNow).toLocaleString('zh-CN')} 步达标`} · 点这里录入</div>
        ${stepExtraHTML(stepNow)}
        ${isInApp() ? `<div class="step-calib"><button class="btn-text" id="step-calib">自动同步的数字不对？校准今日步数 ›</button></div>` : ''}
      </div>
      <div class="sec">近 14 天步数</div>
      <div class="chart-wrap">
        <div class="chart-title">日均 ${avgStep.toLocaleString('zh-CN')} 步 · 达标 ${hitDays} 天</div>
        ${barChartSVG(rows, { h: 108, color: 'var(--cyan)' })}
      </div>`;
}

async function renderSportList(force) {
  const v = $('#view');
  // 有旧数据就先把旧的摆上去（秒开），再后台拉最新的
  const cached = state.sportSig ? true : null;
  if (cached) paintSportList();
  else v.innerHTML = loadingHTML();

  try {
    const d14 = new Date(); d14.setDate(d14.getDate() - 13);
    const [sp, st] = await Promise.all([
      cloud.database.from('sport').select('*').order('record_date', { ascending: false }).order('created_at', { ascending: false }).limit(LIMIT_LIST),
      cloud.database.from('steps').select('*').gte('record_date', localDateStr(d14))
    ]);
    if (sp.error) throw sp.error;
    if (st.error) throw st.error;
    state.sport = keepPending('sport', 'sport', sp.data || []);   // 乐观更新的护栏
    state.steps = (st.data || []).slice().sort((a,b) => String(a.record_date) < String(b.record_date) ? 1 : -1);
    // 这一页同时吃 sport 和 steps 两份数据，指纹要一起算
    const sig = rowsSig(state.sport) + '\u0001' + rowsSig(state.steps);
    const same = sig === state.sportSig;
    state.sportSig = sig;
    if (force || !same) paintSportList();
  } catch(e) {
    if (cached) softFail(e);
    else v.innerHTML = failHTML('加载', e, 'renderSportList()');
  }
}

/* 只负责画（数据取 state.sport / state.steps） */
function paintSportList() {
  const v = $('#view');
  const now = new Date();
  const weekStartStr = localDateStr(mondayOf(now));   // 周一为一周起点，跟周报对齐
  const week = state.sport.filter(r => r.record_date >= weekStartStr);
  // 近 14 天每日时长
  const d14b = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 13);
  const dayRows = [];
  let tot14 = 0;
  for (let i = 0; i < 14; i++) {
    const d = new Date(d14b.getFullYear(), d14b.getMonth(), d14b.getDate() + i);
    const s = localDateStr(d);
    const m = state.sport.filter(r => String(r.record_date) === s).reduce((a,r)=>a+Number(r.duration_min||0),0);
    tot14 += m;
    dayRows.push({ label: (i % 2 === 0) ? (d.getMonth()+1) + '/' + d.getDate() : '', a: m });
  }
  const sportDays = dayRows.filter(r => r.a > 0).length;
  // 运动量：手记优先、步数折算兜底（散步不用手填，具体见 dayLoad 注释）
  const load = loadSum(dayLoad(week, (state.steps || []).filter(r => String(r.record_date) >= weekStartStr)));
  const SRC_TXT = { m: '手记', e: '步数估算', mix: '手记 + 估算' };
  const cell = (label, v, unit, fix, key) => {
    const has = v > 0;
    const txt = has ? (fix === 2 ? v.toFixed(2) : Math.round(v).toLocaleString('zh-CN')) : '—';
    const u = has ? `<span style="font-size:12px;color:var(--text-3)"> ${unit}</span>` : '';
    return `<div class="stat"><div class="label">${label}</div><div class="value num">${txt}${u}</div>`
      + `<div class="sub">${has ? SRC_TXT[load.src[key]] : '无记录'}</div></div>`;
  };
  const loadNote = load.estDays
    ? `时长 / 距离 / 消耗没手填的按步数折算，本周覆盖 ${load.estDays} 天（步幅 ${stepStrideM()} 米、体重 ${stepWeightKg()} 公斤、步频 ${stepSpm()} 步/分）· 点「调整折算」可改`
    : (week.length ? '本周运动量全部来自手记明细' : '');

  let html = stepSectionHTML();
  html += `
    <div class="sec">本周汇总</div>
    <div class="stat-grid">
      ${cell('总时长', load.min, '分', 0, 'min')}
      ${cell('总距离', load.km, 'km', 2, 'km')}
      ${cell('总消耗', load.kcal, '千卡', 0, 'kcal')}
      <div class="stat"><div class="label">总次数</div><div class="value num">${week.length}<span style="font-size:12px;color:var(--text-3)"> 次</span></div><div class="sub">手记次数</div></div>
    </div>
    ${loadNote ? `<div class="muted" style="font-size:11.5px;line-height:1.85;margin:9px 2px 0">${escapeHtml(loadNote)}</div>` : ''}`;

  if (!state.sport.length) {
    html += `<div class="sec">运动记录</div>
      <div class="empty"><div class="ico">🏃</div>还没有手记的运动<br>点右下角 + 记一次<br>
      <span style="color:var(--text-3);font-size:11.5px;line-height:1.9">散步这种日常活动不用手填明细，上面的距离 / 消耗 / 时长按步数折算</span></div>`;
    v.innerHTML = html;
    bindStep();
    return;
  }
  html += `
    <div class="sec">近 14 天时长</div>
    <div class="chart-wrap">
      <div class="chart-title">有 ${sportDays} 天动了 · 日均 ${Math.round(tot14 / 14)} 分</div>
      ${barChartSVG(dayRows, { h: 108 })}
    </div>
    <div class="sec">明细</div>`;
  state.sport.forEach(r => {
    const bits = [];
    if (r.duration_min) bits.push(r.duration_min + ' 分');
    if (r.distance_km) bits.push(r.distance_km + ' km');
    if (r.calories) bits.push(r.calories + ' 千卡');
    html += `<div class="card">
      <div class="row-between">
        <span><span style="font-weight:600">${escapeHtml(r.kind)}</span> <span class="muted" style="font-size:12px;margin-left:8px">${fmtDate(r.record_date)}</span></span>
        <div style="display:flex;gap:6px">
          <button class="btn-close" data-edit="sport" data-id="${r.id}" style="font-size:12px;width:28px;height:28px">✎</button>
          <button class="btn-close" data-del="sport" data-id="${r.id}" style="font-size:13px;width:28px;height:28px">×</button>
        </div>
      </div>
      ${bits.length ? `<div class="dim" style="margin-top:6px;font-size:13px">${bits.join(' · ')}</div>` : ''}
      ${r.note?`<div class="muted" style="margin-top:4px;font-size:12px">${escapeHtml(r.note)}</div>`:''}
    </div>`;
  });
  v.innerHTML = html;
  bindStep();
  $$('[data-edit="sport"]').forEach(b => b.onclick = () => openSportForm(b.dataset.id));
  $$('[data-del="sport"]').forEach(b => b.onclick = () => delSport(b.dataset.id));
}

function openSportForm(id) {
  const r = id ? state.sport.find(x => String(x.id) === String(id)) : null;
  openModal(`
    <div class="field-row">
      <div class="field"><label>类型</label>
        <select id="s-kind">${SPORT_TYPES.map(k=>`<option value="${k}" ${r&&r.kind===k?'selected':''}>${k}</option>`).join('')}</select>
      </div>
      <div class="field"><label>日期</label><input id="s-date" type="date" value="${r ? r.record_date : todayStr()}"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>时长（分）</label><input id="s-dur" type="number" min="0" placeholder="0" value="${r ? r.duration_min||'' : ''}"></div>
      <div class="field"><label>距离（km）</label><input id="s-dist" type="number" step="0.01" min="0" placeholder="0.00" value="${r ? r.distance_km||'' : ''}"></div>
    </div>
    <div class="field"><label>消耗（千卡）</label><input id="s-cal" type="number" min="0" placeholder="0" value="${r ? r.calories||'' : ''}"></div>
    <div class="field"><label>备注</label><input id="s-note" type="text" placeholder="可选" value="${r ? escapeHtml(r.note||'') : ''}"></div>
    <p class="sy-p" style="color:var(--text-3)">散步这类日常活动可以留空不填 —— 空着的项会按当天的步数折算（步幅 / 体重 / 步频在「调整折算」里设）。</p>
    <button class="btn" id="s-save">保存</button>`);
  setModalTitle(r ? '编辑运动' : '记运动');
  $('#s-save').onclick = () => saveSport(id);
}

async function saveSport(id) {
  const payload = {
    kind: $('#s-kind').value,
    duration_min: parseInt($('#s-dur').value) || null,
    distance_km: parseFloat($('#s-dist').value) || null,
    calories: parseInt($('#s-cal').value) || null,
    note: $('#s-note').value.trim(),
    record_date: $('#s-date').value
  };
  const res = id
    ? await cloud.database.from('sport').update(payload).eq('id', id).select()
    : await cloud.database.from('sport').insert(payload).select();
  if (res.error) { toastErr(errMsg(res.error)); return; }
  closeModal();
  /*⛔⛔ 乐观更新：原来只重查云端，撞上写入延迟就「记了没反应」。 */
  // ⛔⛔ 同上：force=false 只 paint
  afterWrite('sport', 'sport', id, res, payload, (f) => { if (f) renderSportList(true); else paintSportList(); });
}

/* ⛔⛔⛔ 删除的统一收尾（v3.11）
   用户报「删除18号的散步无效，闪一下还是有个散步」——
   乐观更新让界面消失了一下，但 1.2 秒后的重查又把它画回来了。

   ⛔ 光乐观更新不算「删掉了」。真正可靠的是**删完回查那一条还在不在**：
     · 云端还有 ⇒ 这次没删掉 ⇒ 如实告诉用户，别让他以为删成功了
     · 云端没了 ⇒ 才算数
   调用顺序很重要：必须先 unguardPending，否则复查时 keepPending 会把刚删的补回来。*/
async function finishDelete(tbl, stateKey, id, repaint) {
  unguardPending(tbl, id);
  if (Array.isArray(state[stateKey])) {
    state[stateKey] = state[stateKey].filter(x => String(x.id) !== String(id));
  }
  state[stateKey + 'Sig'] = '';
  repaint();                                   // 先让界面上消失，别让人干等
  try {
    const chk = await cloud.database.from(tbl).select('id').eq('id', id).limit(1);
    if (chk.error) throw new Error('chk');
    if (chk.data && chk.data.length) {
      // 云端还在：这次删除没生效。宁可说实话，也不要让用户以为删掉了。
      toast('没能删掉', '这条还在服务器上，过一会儿再试一次');
    }
  } catch (e) {
    // 复查本身失败（断网等）—— 不下结论，按已删处理
  }
  setTimeout(() => { try { repaint(true); } catch (e) {} }, 1200);
}

/* ⛔⛔⛔ 删除后的「重画」必须**只画本地、绝不立刻查云端**（2026-10-20）
   用户报：「删除无效，闪一下还是原来的」——
   而 SQL 直查那条**其实已经删掉了** ⇒ 删除成功，是**显示被抢回去了**。

   原因：`renderExpenseList()` 是**先画本地、然后立刻发云端查询**，
   查询回来若还没生效（写入延迟窗口内），`state.expense = list`
   就把刚 filter 掉的行又塞回去 ⇒ 用户看到「闪一下又回来了」。
   这跟 v3.4~v3.6 修的是同一个病，只是这次发生在**删除**路径上。

   ⇒ 解法：删除后**只 paint，不 render**（不触发云端查询）；
     1.2 秒后那次后台核对才 render。
   这里统一包一层：把 repaint 换成「只画」的版本。 */
function localOnlyRepaint(stateKey, paintFn) {
  return (force) => {
    if (force) { /* 后台核对时才真查 */ return paintFn(true); }
    try { paintFn(false); } catch (e) {}
  };
}

async function delSport(id) {
  if (!confirm('删除这条记录？')) return;
  const { error } = await cloud.database.from('sport').delete().eq('id', id).select();
  if (error) { toastErr(errMsg(error)); return; }
  // ⛔⛔ 同上：先只画本地（paintSportList）
  await finishDelete('sport', 'sport', id, (f) => { if (f) renderSportList(true); else paintSportList(); });
}

/* ================= Health ================= */
async function renderHealthList(force) {
  const v = $('#view');
  if (!state.heYM) state.heYM = monthStr();
  const ym = state.heYM;

  // 这个月的旧数据已经画过 ⇒ 先把旧的摆上去（秒开），再后台拉最新的
  const cached = state.healthSig && state.healthYM === ym ? true : null;
  if (cached) paintHealthList();
  else v.innerHTML = loadingHTML();

  try {
    const curR = rangeOfYM(ym);
    const prvR = rangeOfYM(shiftYM(ym, -1));
    const [cur, prv] = await Promise.all([
      cloud.database.from('health').select('*').gte('record_date', curR.start).lt('record_date', curR.end).order('record_date', { ascending: false }).order('created_at', { ascending: false }),
      cloud.database.from('health').select('*').gte('record_date', prvR.start).lt('record_date', prvR.end)
    ]);
    if (cur.error) throw cur.error;
    state.health = keepPending('health', 'health', cur.data || [], ym);   // 乐观更新的护栏
    // 环比要用到上个月的合计，一起缓存下来 —— 否则秒开时这一格会先显示 0
    state.healthPrvTimes = (prv.data || []).reduce((s,r)=>s+Number(r.times||0),0);
    const sig = rowsSig(state.health) + '\u0001' + state.healthPrvTimes;
    const same = sig === state.healthSig && state.healthYM === ym;
    state.healthSig = sig; state.healthYM = ym;
    if (force || !same) paintHealthList();
  } catch(e) {
    if (cached) softFail(e);
    else v.innerHTML = failHTML('加载', e, 'renderHealthList()');
  }
}

/* 只负责画（数据取 state.health / state.healthPrvTimes） */
function paintHealthList() {
  const v = $('#view');
  const ym = state.heYM;
  const lm = shiftYM(ym, -1);
  // ⛔ 「今日步数」原来长在这一页，已经搬去「运动」页了（步数和运动记录是一件事）。
  //    这里只留「健康」本来的记录（自慰次数 / 备注）。
  const monthTimes = state.health.reduce((s,r)=>s+Number(r.times||0),0);
  const monthDays = new Set(state.health.map(r=>r.record_date)).size;
  const lastMonthTimes = state.healthPrvTimes || 0;
  const diff = monthTimes - lastMonthTimes;
  const head = ymBar('health', ym) + `
    <div class="stat-grid">
      <div class="stat"><div class="label">${Number(ym.slice(5))} 月次数</div><div class="value num" style="color:var(--pink)">${monthTimes}</div><div class="sub">${monthDays} 天有记录</div></div>
      <div class="stat"><div class="label">上月 ${Number(lm.slice(5))} 月</div><div class="value num" style="color:var(--pink)">${lastMonthTimes}</div><div class="sub">${diff > 0 ? '比上月多 ' + diff + ' 次' : diff < 0 ? '比上月少 ' + (-diff) + ' 次' : '与上月持平'}</div></div>
    </div>`;

  if (!state.health.length) {
    v.innerHTML = head + `<div class="empty"><div class="ico">♥</div>${Number(ym.slice(5))} 月还没有记录<br>点右下角 + 记一次</div>`;
    bindYM();
    return;
  }
  let html = head + `<div class="sec">明细</div>`;
  state.health.forEach(r => {
    html += `<div class="card card-tap" data-edit="health" data-id="${r.id}">
      <div class="row-between">
        <span><span style="color:var(--pink);font-weight:700">${r.times} 次</span> <span class="muted" style="font-size:12px;margin-left:8px">${fmtDate(r.record_date)}</span></span>
        <button class="btn-close" data-del="health" data-id="${r.id}" style="font-size:13px;width:26px;height:26px">×</button>
      </div>
      ${r.note?`<div class="muted" style="margin-top:6px;font-size:12px">${escapeHtml(r.note)}</div>`:''}
    </div>`;
  });
  v.innerHTML = html;
  bindYM();
  $$('[data-edit="health"]').forEach(el => el.onclick = (e) => {
    if (e.target.dataset.del) return;
    openHealthForm(el.dataset.id);
  });
  $$('[data-del="health"]').forEach(b => b.onclick = (e) => { e.stopPropagation(); delHealth(b.dataset.id); });
}

function openHealthForm(id) {
  const r = id ? state.health.find(x => String(x.id) === String(id)) : null;
  openModal(`
    <div class="field-row">
      <div class="field"><label>次数</label><input id="h-times" type="number" min="1" value="${r ? r.times : 1}"></div>
      <div class="field"><label>日期</label><input id="h-date" type="date" value="${r ? r.record_date : todayStr()}"></div>
    </div>
    <div class="field"><label>备注（可选）</label><input id="h-note" type="text" placeholder="如：状态 / 诱因 / 心情" value="${r ? escapeHtml(r.note||'') : ''}"></div>
    <button class="btn" id="h-save">保存</button>`);
  setModalTitle(r ? '编辑记录' : '记一次');
  $('#h-save').onclick = () => saveHealth(id);
}

async function saveHealth(id) {
  const times = parseInt($('#h-times').value);
  if (!times || times < 1) { toastErr('次数至少 1'); return; }
  const payload = { times, note: $('#h-note').value.trim(), record_date: $('#h-date').value };
  const res = id
    ? await cloud.database.from('health').update(payload).eq('id', id).select()
    : await cloud.database.from('health').insert(payload).select();
  if (res.error) { toastErr(errMsg(res.error)); return; }
  closeModal();
  /*⛔⛔ 乐观更新：原来只重查云端，撞上写入延迟就「记了没反应」。 */
  // ⛔⛔ 同上：force=false 只 paint
  afterWrite('health', 'health', id, res, payload,
    (f) => { if (f) renderHealthList(true); else paintHealthList(); }, 'record_date');
}

async function delHealth(id) {
  if (!confirm('删除这条记录？')) return;
  const { error } = await cloud.database.from('health').delete().eq('id', id).select();
  if (error) { toastErr(errMsg(error)); return; }
  // ⛔⛔ 同上：先只画本地（paintHealthList）
  await finishDelete('health', 'health', id, (f) => { if (f) renderHealthList(true); else paintHealthList(); });
}

/* ---- 步数 ---- */
/* 步数区现在长在「运动」页（原来在「健康」页），所以落库后重画的目标页也跟着换 */
function afterStepsSaved() {
  if (activeTab === 'sport') renderSportList();
  else if (activeTab === 'home') renderHome();
}
function bindStep() {
  const b = $('#step-hero');
  if (b) b.onclick = openStepsForm;
  const c = $('#step-calib');
  if (c) c.onclick = (e) => { e.stopPropagation(); openStepCalibrate(); };
  const m = $('#step-metrics');
  if (m) m.onclick = (e) => { e.stopPropagation(); openStepMetrics(); };
}

/* 距离 / 消耗的折算系数。手机读不到这两项，只能按步数折，所以让用户自己报
   步幅和体重 —— 手机健康 App 上「距离 ÷ 步数」就是他的真实步幅。 */
function openStepMetrics() {
  openModal(`
    <div class="note" style="text-align:left;margin-bottom:12px">
      手机只肯把<b>步数</b>交给 App。距离、消耗、爬楼、心率是手机自带健康 App 的私有数据，
      普通 App 读不到（要厂商签名级权限）。<br>
      所以这里按你自己的情况折算：<b>距离 = 步数 × 步幅</b>；
      <b>消耗 ≈ 步数 × 体重 × 0.00053</b>；<b>时长 = 步数 ÷ 步频</b>。
    </div>
    <div class="field-row">
      <div class="field"><label>步幅（米/步）</label><input id="sm-stride" type="number" step="0.01" min="0.3" max="1.6" value="${stepStrideM()}"></div>
      <div class="field"><label>体重（公斤）</label><input id="sm-weight" type="number" step="0.5" min="20" max="200" value="${stepWeightKg()}"></div>
    </div>
    <div class="field"><label>步频（步/分钟）</label><input id="sm-spm" type="number" step="1" min="60" max="160" value="${stepSpm()}"></div>
    <p class="sy-p" style="color:var(--text-3)">不知道填多少？手机健康 App 里「距离 ÷ 步数」就是你的真实步幅（例如 1.21 公里 ÷ 1474 步 ≈ 0.82 米）。步频散步一般 90 ~ 110。</p>
    <button class="btn" id="sm-save">保存</button>`);
  setModalTitle('距离 / 消耗 · 折算方式');
  $('#sm-save').onclick = () => {
    const st = parseFloat($('#sm-stride').value);
    const wt = parseFloat($('#sm-weight').value);
    const sp2 = parseFloat($('#sm-spm').value);
    if (!isFinite(st) || st < 0.3 || st > 1.6) { toastErr('步幅请填 0.3 ~ 1.6 米'); return; }
    if (!isFinite(wt) || wt < 20 || wt > 200) { toastErr('体重请填 20 ~ 200 公斤'); return; }
    if (!isFinite(sp2) || sp2 < 60 || sp2 > 160) { toastErr('步频请填 60 ~ 160 步/分'); return; }
    LS.set('stepStride', st); LS.set('bodyWeight', wt); LS.set('stepSpm', sp2);
    closeModal();
    toast('已保存', `距离按 ${st} 米/步、体重 ${wt} 公斤、步频 ${sp2} 步/分折算`);
    if (activeTab === 'sport') renderSportList();
  };
}

async function openStepsForm() {
  const today = todayStr();
  let rec = (state.steps || []).find(r => String(r.record_date) === today) || null;
  try {
    const q = await cloud.database.from('steps').select('*').eq('record_date', today).limit(1).maybeSingle();
    if (q && !q.error && q.data) rec = q.data;
  } catch (e) { /* 查不到就用已有的 */ }
  const goal = Number(rec && rec.goal) || Number(LS.get('stepGoal', 8000)) || 8000;
  openModal(`
    <div class="field-row">
      <div class="field"><label>今日步数</label><input id="st-num" type="number" min="0" inputmode="numeric" placeholder="0" value="${rec ? rec.steps : ''}"></div>
      <div class="field"><label>日期</label><input id="st-date" type="date" value="${today}"></div>
    </div>
    <div class="field"><label>每日目标（步）</label><input id="st-goal" type="number" min="1000" step="500" value="${goal}"></div>
    <div class="note" style="text-align:left;padding:4px 2px 10px">
      网页读不到手机的健康数据（只有微信小程序才拿得到微信运动）。从手机健康 App 看一眼数字填进来，几秒钟的事；同一天改第二次会覆盖，不会重复累加。
      ${isInApp() ? `<br><button class="btn-text" id="st-calib" style="padding:0;font-size:12px">校准今日步数 ›</button>` : ''}
    </div>
    <button class="btn" id="st-save">保存</button>`);
  setModalTitle('记步数');
  $('#st-save').onclick = saveSteps;
  // v3.0：「配置手机自动同步」按钮已删（用户要求去掉这个入口）
  const calib = $('#st-calib');
  if (calib) calib.onclick = openStepCalibrate;
}

async function saveSteps() {
  const raw = $('#st-num').value.trim();
  const steps = parseInt(raw);
  if (raw === '' || !isFinite(steps) || steps < 0) { toastErr('请填写步数（非负整数）'); return; }
  const date = $('#st-date').value || todayStr();
  const goal = parseInt($('#st-goal').value) || 8000;
  const { res, isNew } = await saveStepsValue(date, steps, goal);
  if (res.error) { toastErr(errMsg(res.error)); return; }
  closeModal();
  if (activeTab === 'sport') renderSportList(); else switchTab('sport');
}

// 同一天二次录入走覆盖，不累加
async function saveStepsValue(date, steps, goal) {
  LS.set('stepGoal', goal);
  const exist = await cloud.database.from('steps').select('id').eq('record_date', date).limit(1).maybeSingle();
  const id = exist && exist.data && exist.data.id;
  const res = id
    ? await cloud.database.from('steps').update({ steps, goal }).eq('id', id).select()
    : await cloud.database.from('steps').insert({ steps, goal, record_date: date }).select();
  return { res, isNew: !id };
}

/* ---- 手机步数一键同步 ----------------------------------------------
   浏览器（含加到主屏幕的网页）读不到系统健康数据，这是平台限制。
   折中办法：手机上配一次快捷指令，每天把步数拼进链接打开本页，
   页面看到 ?steps= 参数就自动落库。                                     */
function readStepsParam() {
  let q = null;
  try { q = new URLSearchParams(location.search); } catch (e) { return null; }
  const raw = q.get('steps');
  if (raw === null || raw === '') return null;
  // 自动化工具传来的可能是小数（8000.0），也可能带千分位逗号 —— 只取数字主体
  const m = String(raw).replace(/[,\s]/g, '').match(/^-?\d+(?:\.\d+)?/);
  if (!m) return null;
  const n = Math.round(parseFloat(m[0]));
  if (!isFinite(n) || n > 300000) return null;
  let d = (q.get('d') || '').trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) d = todayStr();
  // a=1：手机端自动化打开（用户可能在睡觉、不会盯着屏幕）⇒ 不弹窗打断，直接给结果并自动退回
  const auto = q.get('a') === '1';
  if (n < 0) return { steps: n, date: d, auto, bad: true };
  return { steps: n, date: d, auto };
}
function clearStepsParam() {
  try { history.replaceState(null, '', location.pathname + location.hash); } catch (e) {}
}
/* 自动模式（?steps=…&a=1）下没人盯着屏幕，所以：结果用不主动消失的横条说清楚，
   然后尝试自己退回去（退不回就留着，用户瞄一眼就知道结果） */
function showSyncBar(text, sub, ms, onTap) {
  const el = document.createElement('div');
  el.className = 'sync-bar';
  //⛔ 自动同步时这条会盖在页面上，用户嫌它挡事 ⇒ 给个 ×让他自己点掉，
  //   而不是靠一句「可以关掉了」去提醒他。
  el.innerHTML = `<div class="ico">${ICONS.check}</div><div><div>${escapeHtml(text)}</div>${sub ? `<i>${escapeHtml(sub)}</i>` : ''}</div><button class="sb-x" aria-label="关闭">×</button>`;
  if (typeof onTap === 'function') {
    el.classList.add('tappable');
    el.onclick = (e) => {
      if (e.target.closest('.sb-x')) return;      // 点 × 只关掉，不触发跳转
      el.remove(); onTap();
    };
  }
  const kill = () => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); };
  el.querySelector('.sb-x').onclick = (e) => { e.stopPropagation(); kill(); };
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(kill, ms || 12000);
}
function autoLeave() {
  setTimeout(() => { try { if (history.length > 1) history.back(); } catch (e) {} }, 6000);
}
async function flushPendingSteps() {
  const p = state.pendingSteps || LS.get('pendingSteps', null);
  if (!p || typeof p.steps !== 'number') return;
  state.pendingSteps = null; LS.set('pendingSteps', null);
  const fmt = (x) => Number(x).toLocaleString('zh-CN');
  if (p.bad) {
    // 手机重启过 ⇒ 计步器归零 ⇒ 宏算出来的差值是负数。不猜，跳过这次。
    showSyncBar('这次步数没用上', '同步来的是负数，多半是手机重启过（计步器会归零）');
    if (p.auto) autoLeave();
    return;
  }
  const goal = Number(LS.get('stepGoal', 8000)) || 8000;
  let cur = null;
  try {
    const q = await cloud.database.from('steps').select('*').eq('record_date', p.date).limit(1).maybeSingle();
    if (q && !q.error) cur = q.data;
  } catch (e) { /* 查不到当没有 */ }
  const old = cur ? Number(cur.steps) : -1;
  // 同一天的步数只会涨：比已记的多（或本来没记）就直接存，否则先问
  if (old < 0 || p.steps > old) {
    const { res, isNew } = await saveStepsValue(p.date, p.steps, goal);
    if (res.error) {
      showSyncBar('步数同步失败', errMsg(res.error));
      if (p.auto) autoLeave();
      toast('步数同步失败', errMsg(res.error));
      return;
    }
    const line = `${fmt(p.steps)} 步 · ${p.date}`;
    // ⛔ 原来这里写的是「…· 这个页面可以关掉了」，用户说没必要 ——
    //    同步条本身就是结果提示，再加一句「可以关了」是废话。
    if (p.auto) { showSyncBar('已同步手机步数', line); autoLeave(); }
    else toast('已同步手机步数', line);
    afterStepsSaved();
    return;
  }
  if (p.auto) {
    // 自动打开时别弹窗等人点：保留原来那条更准的记录，只把结果说清楚
    showSyncBar('今天已经记过步数', `已记 ${fmt(old)} 步 ≥ 同步的 ${fmt(p.steps)} 步，保留原来的`);
    autoLeave();
    return;
  }
  openModal(`
    <div style="text-align:center;padding:8px 0 2px">
      <div class="num" style="font-size:32px;font-weight:800">${fmt(p.steps)}</div>
      <div class="muted" style="font-size:12.5px;margin-top:6px">手机同步来的步数 · ${p.date}</div>
      <div class="note" style="margin-top:12px">这天已经记了 <b>${fmt(old)}</b> 步，比同步来的多。要改成同步值吗？</div>
    </div>
    <button class="btn" id="ss-keep">保留原来的 ${fmt(old)}</button>
    <button class="btn-ghost" id="ss-use">改成 ${fmt(p.steps)}</button>`);
  setModalTitle('步数对不上');
  $('#ss-keep').onclick = closeModal;
  $('#ss-use').onclick = async () => {
    const { res } = await saveStepsValue(p.date, p.steps, goal);
    closeModal();
    if (res.error) { toast('步数同步失败', errMsg(res.error)); return; }
    toast('已同步手机步数', `${fmt(p.steps)} 步 · ${p.date}`);
    afterStepsSaved();
  };
}

/* ---- 原生 App 上报步数 ----------------------------------------------
   装了「生活手账」安卓 App 的话，App 自己就能读手机的计步传感器，
   通过 WebView 的 JS 桥调用下面这个函数把步数交进来 —— 这条路
   不需要任何外部自动化工具。

   和 ?steps= 那条路的区别：这里用户正开着 App 看着屏幕，所以
   不弹窗问、也不自动退出，只在真的更新了的时候给一条短提示。   */
window.lbNativeSteps = async function (steps, date, fresh) {
  try {
    const n = Math.round(Number(steps));
    if (!isFinite(n) || n < 0 || n > 300000) return;
    const d = /^\d{4}-\d{2}-\d{2}$/.test(String(date || '')) ? String(date) : todayStr();
    const goal = Number(LS.get('stepGoal', 8000)) || 8000;

    if (!currentUser) {
      // 还没登录：先存下来，登录后 renderApp 会自动补一次
      const prev = LS.get('pendingSteps', null);
      if (!prev || Number(prev.steps) < n) {
        LS.set('pendingSteps', { steps: n, date: d, auto: true, native: true });
      }
      return;
    }

    let cur = null;
    try {
      const q = await cloud.database.from('steps').select('*').eq('record_date', d).limit(1).maybeSingle();
      if (q && !q.error) cur = q.data;
    } catch (e) { /* 查不到当没有 */ }
    const old = cur ? Number(cur.steps) : -1;

    // 传感器有惯性：后台被限制、手机重启都会让读到的值偏小，这时保持原记录不动
    if (old >= 0 && n <= old) { if (fresh) freshStepTip(d); return; }

    const { res, isNew } = await saveStepsValue(d, n, goal);
    if (res.error) return;              // 静默失败，不打扰正在用的用户

    if (fresh) freshStepTip(d);
    else showSyncBar('已同步手机步数', `${n.toLocaleString('zh-CN')} 步 · ${d}`, 3200);
    afterStepsSaved();
  } catch (e) { /* 桥接层出错不该影响页面本身 */ }
};

/* ---- 装机当天的校准 --------------------------------------------------
   安卓的计步器只会说「开机以来一共走了多少步」，它不知道"今天"是从哪一步
   开始的。所以只要 App（或手机）是今天才起来的，就缺一个"今天零点"的基准，
   只能从当时的时刻起算 —— 那天必须靠用户告一次真实步数才能对上。
   之后由 App 每天 23:58 的定时刷新接续，不用再校准。                   */
/* 壳的最新版本号。发新版 APK 时**只改这一个地方**：
   ① 「重新下载」的链接跟着它换 query —— CDN 把完整 URL（含 query）当缓存键，
      不加参数的话下载到的可能还是上一版（叠加覆盖改不动老键）；
   ② 版本门槛也用它，旧壳会看到"建议重新下载安装包"。
   ⚠ 忘了改它，用户就会一直下到旧包 —— 这是最容易漏的一步。 */
const APP_VER = '1.6';

/* 页面自己的版本号。改界面就 +1，和 APP_VER 分开管：
   页面走线上（第二天自动生效），壳要走安装包（用户得重装）。
   ⛔ 两个号混成一个是用户困惑的根源 —— 界面上写着 v2.8，装的是 v1.6，
   看着像 bug 其实俩是两回事。所以「我的 → 版本」里把两者并排放，
   点的「版本」还能展开看各自管什么。 */
const WEB_VER = '3.23';
/* 当前装在手机上的壳版本；不在 App 里跑（浏览器）时留空，不硬凑一个数字出来。
   ⛔ 用函数而不是模块加载时就求值 —— WebView 里 UA/JSBridge 有时要等一小会儿才可用，
   加载时求值会永远拿到空串（明明装了新版却显示「旧版」）。 */
const appVerShown = () => { try { return appVersion(); } catch (e) { return ''; } };

function isInApp() { return /LifeBookApp/.test(navigator.userAgent); }

/* 壳的版本号。
   ⛔ 页面改了线上就生效，但**原生能力（文件选择）改了必须重装 App** —— 用户说"还是不行"时，
   光看现象分不清是"没重装"还是"代码又坏了"。所以把版本号显示出来，一眼定位。
   1.4 之前的壳 UA 里写死 LifeBookApp/1.0，取不到真版本 ⇒ 显示"旧版"就是答案。 */
function appVersion() {
  if (!isInApp()) return '';
  try { if (window.LBApp && window.LBApp.ver) return String(window.LBApp.ver()); } catch (e) {}
  const m = /LifeBookApp\/([\d.]+)/.exec(navigator.userAgent);
  return m ? m[1] : '';
}
/** 版本号比 min 旧（简单点分比较，够用） */
function verOlderThan(v, min) {
  if (!v) return true;
  const a = String(v).split('.').map(Number), b = String(min).split('.').map(Number);
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const x = a[i] || 0, y = b[i] || 0;
    if (x !== y) return x < y;
  }
  return false;
}

function freshStepTip(d) {
  const key = 'freshTip:' + d;
  if (LS.get(key, null)) return;        // 同一天只提醒一次，别烦人
  LS.set(key, 1);
  showSyncBar('今天步数从此刻起算', '计步器只记"开机以来"，不知道今天零点在哪 · 点这里校准', 9000, openStepCalibrate);
}

let calibWaiting = false;
function openStepCalibrate() {
  const ok = isInApp() && !!(window.LBApp && window.LBApp.calibrate);
  const today = todayStr();
  const rec = (state.steps || []).find(r => String(r.record_date) === today) || null;
  openModal(`
    <div class="note" style="text-align:left;margin-bottom:10px">
      手机的计步器只告诉 App「<b>开机以来一共走了多少步</b>」——它不知道"今天"是从哪一步开始的。<br>
      所以刚装 App 那天（或手机重启后），步数只能<b>从当时的时刻</b>开始算。把今天真实的步数告一次，
      基准就对上了，<b>以后每天都自动准，不用再管</b>。
    </div>
    <div class="field"><label>今天到现在，实际走了多少步</label>
      <input id="sc-num" type="number" min="0" inputmode="numeric" placeholder="例如 6280" value="${rec ? Number(rec.steps) : ''}">
    </div>
    <p class="sy-p" style="color:var(--text-3)">去哪看：手机自带的「健康」App，或者微信运动 —— 首页那个数字就是今天的累计。</p>
    ${ok ? '' : `<div class="note" style="text-align:left">校准要靠 App 里的计步器，网页版读不到手机步数。</div>`}
    <button class="btn" id="sc-go" ${ok ? '' : 'disabled'}>${ok ? '校准' : '装 App 后即可校准'}</button>
    <button class="btn-ghost" id="sc-later">以后再说</button>`);
  setModalTitle('校准今日步数');
  $('#sc-later').onclick = closeModal;
  if (ok) $('#sc-go').onclick = doCalibrate;
}

function doCalibrate() {
  const el = $('#sc-num');
  const n = parseInt(String(el ? el.value : '').trim(), 10);
  if (!isFinite(n) || n < 0 || n > 200000) { toast('请填 0 ~ 200000 之间的整数'); return; }
  if (calibWaiting) return;
  calibWaiting = true;
  const btn = $('#sc-go');
  if (btn) { btn.disabled = true; btn.textContent = '校准中…'; }
  try { window.LBApp.calibrate(n); }
  catch (e) { calibWaiting = false; toast('校准失败，请重试'); return; }
  // 原生读完传感器会回调 lbCalibResult；这里超时兜底，免得按钮一直转
  setTimeout(() => {
    if (!calibWaiting) return;
    calibWaiting = false;
    const b = $('#sc-go');
    if (!b) return;                      // 弹窗已关，别打扰
    b.disabled = false; b.textContent = '校准';
    toast('没读到计步器', '确认手机设置里给了「身体活动」权限');
  }, 6000);
}

window.lbCalibResult = async function (today, date) {
  if (!calibWaiting) return;             // 不是我们发起的，忽略
  calibWaiting = false;
  try {
    const n = Math.round(Number(today));
    if (!isFinite(n) || n < 0) { toast('校准失败', '这台手机读不到计步器'); return; }
    const d = /^\d{4}-\d{2}-\d{2}$/.test(String(date || '')) ? String(date) : todayStr();
    const goal = Number(LS.get('stepGoal', 8000)) || 8000;
    closeModal();
    const { res, isNew } = await saveStepsValue(d, n, goal);
    if (res.error) { toast('校准成功，但保存失败', errMsg(res.error)); return; }
    toast('校准完成', `${n.toLocaleString('zh-CN')} 步 · 以后每天自动算准`);
    afterStepsSaved();
  } catch (e) { toast('校准失败，请重试'); }
};

// v3.0：步数同步说明页 openStepSync 已随三个入口一起移除。
// ⛔ flushPendingSteps 保留 —— App 快捷指令靠 /?steps=…&auto=1 传数，
//    删了接收逻辑就把 App 的自动同步打死了。已配好的指令继续静默入库。
/* ================= Profile（我的） ================= */
/* ================= 每周回顾（周报） ================= */
// 周一为一周起点；全程本地时间，避免东八区凌晨算错日期
let weeklyAnchor = null;                 // 当前查看的那一周的周一（Date）
let weeklyData = null, weeklyDataAt = 0; // 近 13 周原始数据缓存

const WEEK_LABEL = ['一', '二', '三', '四', '五', '六', '日'];
const WEEK_TABLES = ['expense', 'diary', 'sport', 'health', 'steps'];
const WEEK_STEP_GOAL = 8000;

function mondayOf(d) {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  x.setDate(x.getDate() - ((x.getDay() + 6) % 7));
  return x;
}
function shiftDays(d, n) {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  x.setDate(x.getDate() + n);
  return x;
}
function weekRange(mon) {
  const sun = shiftDays(mon, 6);
  return { ws: localDateStr(mon), we: localDateStr(sun) };
}
const ymd = (r) => String((r && r.record_date) || '').slice(0, 10);
const inRange = (r, a, b) => { const d = ymd(r); return !!d && d >= a && d <= b; };
const sumBy = (arr, f) => arr.reduce((s, r) => s + (Number(f(r)) || 0), 0);

async function fetchWeeklyData() {
  if (weeklyData && Date.now() - weeklyDataAt < 60000) return weeklyData;
  const since = localDateStr(shiftDays(mondayOf(new Date()), -7 * 13));
  const res = await Promise.all(WEEK_TABLES.map(t =>
    cloud.database.from(t).select('*').gte('record_date', since).limit(5000)
      .then(r => (r && r.data) || [], () => [])
  ));
  const out = {};
  WEEK_TABLES.forEach((t, i) => { out[t] = res[i]; });
  weeklyData = out; weeklyDataAt = Date.now();
  return out;
}

function weekStats(data, ws, we) {
  const cut = (t) => (data[t] || []).filter(r => inRange(r, ws, we));
  const ex = cut('expense');
  const out = ex.filter(r => r.kind === 'out');
  const inc = ex.filter(r => r.kind === 'in');
  const cats = {}, catN = {};
  out.forEach(r => {
    const k = (r.category || '').trim() || '未分类';
    cats[k] = (cats[k] || 0) + (Number(r.amount) || 0);
    catN[k] = (catN[k] || 0) + 1;
  });
  const sp = cut('sport'), he = cut('health');
  const kinds = {};
  sp.forEach(r => { const k = (r.kind || '运动').trim() || '运动'; kinds[k] = (kinds[k] || 0) + 1; });
  const st = cut('steps').slice().sort((a, b) => ymd(a) < ymd(b) ? -1 : 1);
  const hDates = [...new Set(he.map(ymd))].sort();
  return {
    outTotal: sumBy(out, r => r.amount), outN: out.length,
    inTotal: sumBy(inc, r => r.amount), inN: inc.length,
    cats: Object.keys(cats).map(k => [k, cats[k]]).sort((a, b) => b[1] - a[1]),
    catN, expRows: out,
    diary: cut('diary').slice().sort((a, b) => ymd(a) < ymd(b) ? -1 : 1),
    sportN: sp.length, sportKinds: kinds,
    load: loadSum(dayLoad(sp, st)),
    healthN: he.length, healthDays: hDates.length, healthTimes: sumBy(he, r => r.times), healthDates: hDates,
    steps: st, stepTotal: sumBy(st, r => r.steps), stepDays: st.length,
    stepGoal: Number((st[0] || {}).goal) || WEEK_STEP_GOAL,
    stepHit: st.filter(r => (Number(r.steps) || 0) >= (Number(r.goal) || WEEK_STEP_GOAL)).length
  };
}

function deltaShort(cur, prev) {
  if (!prev) return cur > 0 ? '<span class="wk-up">新增</span>' : '<span class="wk-flat">—</span>';
  const p = (cur - prev) / prev * 100;
  const cls = p > 0.05 ? 'wk-up' : (p < -0.05 ? 'wk-dn' : 'wk-flat');
  const sg = (cur - prev) > 0 ? '+' : ((cur - prev) < 0 ? '−' : '');
  return `<span class="wk-delta ${cls}">${sg}${Math.abs(p).toFixed(1)}%</span>`;
}
function deltaHTML(cur, prev, unit) {
  if (!prev) return cur > 0
    ? `<span class="wk-delta wk-flat">上周无记录（本周 ${unit}${fmtMoney(cur)}）</span>`
    : '<span class="wk-delta wk-flat">两周都无记录</span>';
  const p = (cur - prev) / prev * 100;
  const abs = cur - prev;
  const cls = p > 0.05 ? 'wk-up' : (p < -0.05 ? 'wk-dn' : 'wk-flat');
  const sg = abs > 0 ? '+' : (abs < 0 ? '−' : '');
  const av = unit === '¥' ? unit + fmtMoney(Math.abs(abs)) : Math.abs(abs);
  return `<span class="wk-delta ${cls}">${sg}${Math.abs(p).toFixed(1)}% · ${sg}${av}</span>`;
}

// 一段话点评：全部由当周数据推出来，不写死
function weeklyVerdict(s, p) {
  const parts = [];
  if (s.outN) {
    let t = `本周支出 ¥${fmtMoney(s.outTotal)}（${s.outN} 笔）`;
    if (p.outTotal > 0) {
      const d = (s.outTotal - p.outTotal) / p.outTotal * 100;
      t += `，环比${d >= 0 ? '涨' : '降'} ${Math.abs(d).toFixed(1)}%`;
    } else t += '，上周没有支出记录';
    if (s.cats.length && s.outTotal > 0) {
      t += `；「${s.cats[0][0]}」¥${fmtMoney(s.cats[0][1])} 居首，占 ${Math.round(s.cats[0][1] / s.outTotal * 100)}%`;
    }
    parts.push(t);
  } else parts.push('本周没有支出记录');

  if (s.inN) parts.push(`收入 ¥${fmtMoney(s.inTotal)}（${s.inN} 笔），${s.inTotal - s.outTotal < 0 ? '净结余为负' : '净结余为正'}`);
  else parts.push('本周没有收入记录');

  const rec = [];
  rec.push(s.diary.length ? `日记 ${s.diary.length} 篇` : '日记没写');
  if (s.sportN) {
    const l = s.load, bits = [];
    if (l.km > 0) bits.push(`约 ${l.km.toFixed(2)} km`);
    if (l.kcal > 0) bits.push(`${Math.round(l.kcal)} 千卡`);
    const est = ['e', 'mix'].indexOf(l.src.km) >= 0 || ['e', 'mix'].indexOf(l.src.kcal) >= 0 || l.src.min === 'e';
    rec.push(`运动 ${s.sportN} 次${bits.length ? `（${bits.join('、')}${est ? '，步数估算' : ''}）` : ''}`);
  } else if (s.load.estDays) rec.push(`没记运动，步数折算约 ${s.load.km.toFixed(2)} km`);
  else rec.push('没有运动记录');
  if (s.stepDays) rec.push(`步数记了 ${s.stepDays} 天、达标 ${s.stepHit} 天`);
  else rec.push('步数没记录');
  parts.push(rec.join('，'));

  return parts.join('。') + '。';
}

/* ---- 日记摘要：让模型读一遍再压成一句话，替掉「正文前 20 字」的硬截断 ----
   成本控制：按「日记 id + 正文指纹」缓存（内容改了自动失效）；一次请求批量总结当周；
   失败后 5 分钟内不再重试；模型目录空 / 未登录就老实显示「点开看原文」，不编内容。 */
const DIARY_SUM_LS = 'diarySum';
let diarySumCache = null;      // 运行时副本
let diarySumBusy = false;      // 并发闸：同一时间只跑一轮
let diarySumBusyAt = 0;        // 本轮开始时间（闸门兜底，防止一轮悬着的请求把后续全锁死）
let diarySumFailAt = 0;        // 上次失败时间（冷却 5 分钟）
let diaryModelId = '';         // 选中的模型 id

/* 单次摘要的硬超时（毫秒）。7 篇日记压一句话，flash 级模型几秒就够；
   给到 25 秒还很慢的，基本就是卡住了（App 切后台时 WebView 冻结会让请求一直悬着）。
   ⭐ `window.__DIARY_SUM_TIMEOUT` 可以在无头验证里调小，免得每条断言都真等 25 秒。 */
const DIARY_SUM_TIMEOUT_DEFAULT = 25000;
const diarySumTimeout = () => Number(window.__DIARY_SUM_TIMEOUT) || DIARY_SUM_TIMEOUT_DEFAULT;
/* 闸门最长占用时间：超过这个还没跑完，就认为是上一轮卡死了，放行新一轮 */
const DIARY_SUM_LOCK_MS = 90000;

function diaryFingerprint(s) {
  let h = 5381; const t = String(s || '');
  for (let i = 0; i < t.length; i++) h = ((h << 5) + h + t.charCodeAt(i)) >>> 0;
  return h.toString(36);
}
const diarySumKey = (r) => r.id + '|' + diaryFingerprint(r.content);
function diarySumStore() {
  if (!diarySumCache) diarySumCache = LS.get(DIARY_SUM_LS, {}) || {};
  return diarySumCache;
}
function getDiarySum(r) { return String(diarySumStore()[diarySumKey(r)] || ''); }
function putDiarySum(r, text) {
  const c = diarySumStore();
  c[diarySumKey(r)] = String(text).replace(/\s+/g, '').slice(0, 60);
  const ks = Object.keys(c);
  if (ks.length > 400) ks.slice(0, ks.length - 400).forEach(k => delete c[k]);
  LS.set(DIARY_SUM_LS, c);
}
function diarySumCanRun() {
  return !!(cloud && cloud.llm && cloud.llm.chat && cloud.llm.chat.completions)
    && (Date.now() - diarySumFailAt > 5 * 60 * 1000);
}
// 把模型给的对象整成「纯数字键 → 摘要」，顺手剥掉「【12】」「12号」这类包装
function normSumObj(o) {
  if (!o || typeof o !== 'object' || Array.isArray(o)) return {};
  const out = {};
  Object.keys(o).forEach(k => {
    const id = String(k).replace(/[^\d]/g, '');
    const v = String(o[k] == null ? '' : o[k]).replace(/\s+/g, '').trim();
    if (id && v) out[id] = v;
  });
  return out;
}
const tryJSON = (s) => { try { return JSON.parse(s); } catch (e) { return null; } };
function parseSumJSON(t) {
  const s = String(t || '');
  const a = s.indexOf('{'), b = s.lastIndexOf('}');
  if (a >= 0 && b > a) {
    const got = normSumObj(tryJSON(s.slice(a, b + 1)));
    if (Object.keys(got).length) return got;
  }
  // 兜底：onlyReasoning 的模型可能把思考过程也吐进 content，整体切片必然解析失败。
  // 退化成「逐个配平花括号」扫描，取键最多的那个块。
  let best = {};
  let i = s.indexOf('{');
  while (i >= 0) {
    let depth = 0, en = -1;
    for (let j = i; j < s.length; j++) {
      if (s[j] === '{') depth++;
      else if (s[j] === '}') { depth--; if (!depth) { en = j; break; } }
    }
    if (en < 0) break;
    const got = normSumObj(tryJSON(s.slice(i, en + 1)));
    if (Object.keys(got).length > Object.keys(best).length) best = got;
    i = s.indexOf('{', en + 1);
  }
  return best;
}
/* 挑一个适合「把几篇日记压成一句话」的短任务模型。
   ⛔ 列表第一个是 auto（isDefault、onlyReasoning、effort=high）：它是「按任务自动路由」的
   推理模型，跑这种小任务要几十秒 high-effort 思考，**中途只出 reasoning 不出 content**，
   界面就一直卡在「正在读原文，稍等…」。所以排除 auto，优先挑 flash / turbo / mini 这类轻量模型。 */
const DIARY_MODEL_HINT = /flash|turbo|mini|lite|fast|light/i;
function pickDiaryModel(ms) {
  const ok = (ms || []).filter(x => x && x.id && x.disabled !== true && x.enabled !== false
    && String(x.id).toLowerCase() !== 'auto');
  return ok.find(x => DIARY_MODEL_HINT.test(String(x.id))) || ok[0] || null;
}
async function diaryModel(signal) {
  if (diaryModelId) return diaryModelId;
  const cached = LS.get('llmModel', '');
  if (cached && String(cached).toLowerCase() !== 'auto') { diaryModelId = cached; return cached; }
  if (!cloud || !cloud.llm || !cloud.llm.models) return '';
  const ms = (await cloud.llm.models.list(signal)) || [];
  const m = pickDiaryModel(ms);
  if (!m) return '';
  diaryModelId = m.id;
  LS.set('llmModel', m.id);
  return diaryModelId;
}
// 只回填「没有标题」的行；有标题的照旧显示标题
function paintDiarySum(rows) {
  (rows || []).forEach(r => {
    if (String(r.title || '').trim()) return;
    const el = document.querySelector(`[data-sum="${r.id}"]`);
    if (!el) return;
    el.textContent = getDiarySum(r) || '点开看原文';
    el.classList.remove('pending');
  });
}
async function ensureDiarySummaries(rows, done) {
  const need = (rows || []).filter(r =>
    !String(r.title || '').trim() && !getDiarySum(r) && String(r.content || '').trim());
  if (!need.length || !diarySumCanRun()) return;
  // 闸门：正常跑的时候挡住重复请求；但上一轮如果卡住了（切后台会让流式请求一直悬着），
  // 超过 DIARY_SUM_LOCK_MS 就放行 —— 否则界面永远停在「正在读原文」，既不出摘要也不降级。
  if (diarySumBusy && Date.now() - diarySumBusyAt < DIARY_SUM_LOCK_MS) return;
  diarySumBusy = true; diarySumBusyAt = Date.now();
  const ac = new AbortController();
  const to = setTimeout(() => ac.abort(), diarySumTimeout());
  try {
    const model = await diaryModel(ac.signal);
    if (!model) { diarySumFailAt = Date.now(); return; }
    const list = need
      .map(r => `【${r.id}】${String(r.content || '').replace(/\s+/g, ' ').trim().slice(0, 600)}`)
      .join('\n');
    const sys = '你在帮「生活手账」写周报。把每篇日记压成一句中文摘要，20 个字以内，'
      + '只说当天最主要的一件事或状态，像朋友随口一提；不要「这篇日记」「记录了」这类铺垫，'
      + '不要评价、不要加书名号引号、不要换行。只输出 JSON 对象，键是日记编号（【】里的数字），值是摘要字符串。';
    const usr = `日记如下：\n${list}\n\n只输出 JSON：`;
    let buf = '';
    for await (const chunk of cloud.llm.chat.completions.create({
      model,
      stream: true,
      temperature: 0.5,
      signal: ac.signal,   // 超时就掐断，别让它一直挂着
      messages: [{ role: 'system', content: sys }, { role: 'user', content: usr }]
    })) {
      const d = chunk.choices && chunk.choices[0] && chunk.choices[0].delta;
      if (d && d.content) buf += d.content;
    }
    const obj = parseSumJSON(buf);
    let hit = 0;
    need.forEach(r => {
      const v = String(obj[String(r.id)] || '').trim();
      if (v) { putDiarySum(r, v); hit++; }
    });
    if (!hit) diarySumFailAt = Date.now();
  } catch (e) {
    // 未登录 / 额度用尽 / 模型不可用：静默降级为「点开看原文」，不打扰用户
    console.warn('[周报] 日记摘要未生成：', (e && e.error && e.error.code) || (e && e.message) || e);
    diarySumFailAt = Date.now();
    // 超时掐断的不算「模型下线」，别把刚选好的模型也丢掉（⛔ 内存里那份也要清，
    // 只清 LS 的话下次 diaryModel() 会直接从 diaryModelId 返回下线模型，永远重试不成功）
    if (!(e && e.name === 'AbortError')) { diaryModelId = ''; LS.set('llmModel', ''); }
  } finally {
    clearTimeout(to);
    diarySumBusy = false;
    paintDiarySum(rows);
    // ⛔ need 为空、或还在冷却里时，上面已经 return 了，压根走不到这里
    //    ⇒ 回调只会在「真的跑了一轮」之后触发一次，不会自激成无限重渲染
    if (typeof done === 'function') { try { done(); } catch (e) {} }
  }
}
/* 手动重试：清掉冷却和选好的模型，把行上的文案先改回「正在读」，再跑一轮 */
function retryDiarySummaries(rows, done) {
  diarySumFailAt = 0; diarySumBusy = false; diarySumBusyAt = 0;
  diaryModelId = ''; LS.set('llmModel', '');
  (rows || []).forEach(r => {
    if (String(r.title || '').trim() || getDiarySum(r)) return;
    const el = document.querySelector(`[data-sum="${r.id}"]`);
    if (!el) return;
    el.textContent = '正在读原文，稍等…';
    el.classList.add('pending');
  });
  // 周报和月报各有一个 .wk-sumfail 条，同一个页面里不会同时出现，但保险起见全清
  document.querySelectorAll('.wk-sumfail').forEach(t => t.remove());
  ensureDiarySummaries(rows, done);
}
function openDiaryRead(id, rows) {
  const r = (rows || []).find(x => String(x.id) === String(id));
  if (!r) return;
  const sum = getDiarySum(r);
  const body = escapeHtml(String(r.content || '')).replace(/\n/g, '<br>');
  openModal(
    (sum ? `<div class="rd-sum">${escapeHtml(sum)}</div>` : '')
    + `<div class="rd-body">${body}</div>`
    + `<div class="rd-meta">${ymd(r).slice(5)}${sum ? ' · 摘要由模型读过原文后生成' : ''}</div>`
  );
  setModalTitle(`${ymd(r).slice(5)} 的日记`);
}

async function renderWeekly(keepScroll) {
  const sc0 = keepScroll ? window.scrollY : 0;
  const v = $('#view');
  if (!weeklyData) v.innerHTML = `<div class="empty"><span class="loader"></span><div style="margin-top:10px">加载中</div></div>`;

  let data;
  try { data = await fetchWeeklyData(); }
  catch (e) { v.innerHTML = `<div class="empty">读取失败<br>${escapeHtml(errMsg(e))}</div>`; return; }

  const thisMon = mondayOf(new Date());
  if (!weeklyAnchor) {
    // 默认看本周；本周（截至今天）一条记录都没有时自动退回上一周，免得开出一页空白
    const r0 = weekRange(thisMon);
    const blank = WEEK_TABLES.every(t => !(data[t] || []).some(r => inRange(r, r0.ws, r0.we)));
    weeklyAnchor = blank ? shiftDays(thisMon, -7) : thisMon;
  }
  const viewMon = weeklyAnchor;
  const { ws, we } = weekRange(viewMon);
  const prevR = weekRange(shiftDays(viewMon, -7));
  const s = weekStats(data, ws, we);
  const p = weekStats(data, prevR.ws, prevR.we);
  const isThisWeek = localDateStr(viewMon) === localDateStr(thisMon);

  const dayRows = WEEK_LABEL.map((lb, i) => ({
    label: lb, a: sumBy(s.expRows.filter(r => ymd(r) === localDateStr(shiftDays(viewMon, i))), r => r.amount)
  }));
  const stepMap = {};
  s.steps.forEach(r => { stepMap[ymd(r)] = Number(r.steps) || 0; });
  const stepRows = WEEK_LABEL.map((lb, i) => ({
    label: lb, a: stepMap[localDateStr(shiftDays(viewMon, i))] || 0
  }));
  const stepAvg = s.stepDays ? s.stepTotal / s.stepDays : 0;
  const chips = (days) => WEEK_LABEL.map((lb, i) => {
    const ds = localDateStr(shiftDays(viewMon, i));
    const on = days.indexOf(ds) >= 0;
    return `<span class="wk-day ${on ? 'on' : 'off'}">${ds.slice(5)} ${lb}${on ? '' : ' 无'}</span>`;
  }).join('');

  const topCats = s.cats.slice(0, 5);
  // 运动量单元格：手记 / 步数估算分别标出来源，两样都没有就照实写「未记录」
  const SRC_TXT = { m: '手记', e: '步数估算', mix: '手记 + 估算', none: '—' };
  const loadCell = (label, val, unit, fix, key) => {
    const src = s.load.src[key];
    const has = val > 0;
    const shown = has ? (fix === 2 ? val.toFixed(2) : Math.round(val).toLocaleString('zh-CN')) + unit : '<span class="nr">未记录</span>';
    return `<div class="stat"><div class="label">${label}</div><div class="value" style="font-size:17px">${shown}</div>`
      + `<div class="sub">${has ? SRC_TXT[src] : '—'}</div></div>`;
  };
  const estNote = s.load.estDays
    ? `时长 / 距离 / 消耗：手记填了就用手记，没填按步数折算 —— 覆盖本周 ${s.load.estDays} 天（步幅 ${stepStrideM()} 米、体重 ${stepWeightKg()} 公斤、步频 ${stepSpm()} 步/分，可在「运动 → 调整折算」里改）`
    : (s.sportN ? '本周运动量全部来自手记，没有用到步数折算' : '');
  const thisMap = {}, prevMap = {};
  s.cats.forEach(c => { thisMap[c[0]] = c[1]; });
  p.cats.forEach(c => { prevMap[c[0]] = c[1]; });
  const allCats = [...new Set([...s.cats.map(c => c[0]), ...p.cats.map(c => c[0])])]
    .sort((a, b) => (thisMap[b] || 0) - (thisMap[a] || 0) || (prevMap[b] || 0) - (prevMap[a] || 0));

  // 摘要状态：该总结的一条都没出来、又处在失败冷却里 ⇒ 说明刚失败过。
  // 这时候必须给个明确说法 + 重试入口，否则行上只会挂着一个不动的「正在读原文」。
  const sumNeed = s.diary.filter(r => !String(r.title || '').trim() && String(r.content || '').trim());
  const sumStuck = sumNeed.length > 0 && !sumNeed.some(r => getDiarySum(r)) && !diarySumCanRun();

  v.innerHTML = `
    <div class="wk-back" id="wk-back">‹ 返回</div>
    <div class="wk-nav">
      <button id="wk-prev" aria-label="上一周">‹</button>
      <div class="rg">${ws.slice(5)} ~ ${we.slice(5)}${isThisWeek ? '<em>本周</em>' : ''}</div>
      <button id="wk-next" aria-label="下一周" ${isThisWeek ? 'disabled' : ''}>›</button>
    </div>

    <div class="sec">收支</div>
    <div class="wk-hero">
      <div class="lbl">本周支出</div>
      <div class="big"${s.outN ? '' : ' style="font-size:21px;color:var(--amber)"'}>${s.outN ? '¥' + fmtMoney(s.outTotal) : '本周无记录'}</div>
      <div class="g">
        <div><span class="k">支出笔数</span><span class="v">${s.outN ? s.outN + ' 笔' : '—'}</span></div>
        <div><span class="k">收入</span><span class="v" style="color:var(--in)">${s.inN ? '¥' + fmtMoney(s.inTotal) + ' · ' + s.inN + ' 笔' : '无记录'}</span></div>
        <div><span class="k">净结余</span><span class="v" style="color:${s.inTotal - s.outTotal < 0 ? 'var(--out)' : 'var(--in)'}">${(s.outN || s.inN) ? (s.inTotal - s.outTotal < 0 ? '−' : '') + '¥' + fmtMoney(Math.abs(s.inTotal - s.outTotal)) : '—'}</span></div>
        <div><span class="k">笔均支出</span><span class="v">${s.outN ? '¥' + fmtMoney(s.outTotal / s.outN) : '—'}</span></div>
      </div>
    </div>
    <div class="muted" style="font-size:11.5px;line-height:1.9;margin:9px 2px 0">
      对比上周（${prevR.ws.slice(5)} ~ ${prevR.we.slice(5)}）<br>
      支出 ${deltaHTML(s.outTotal, p.outTotal, '¥')}<br>
      收入 ${deltaHTML(s.inTotal, p.inTotal, '¥')}
    </div>

    <div class="sec">每日支出</div>
    <div class="chart-wrap">
      <div class="chart-title">${ws.slice(5)} ~ ${we.slice(5)} · ${s.outN ? '合计 ¥' + fmtMoney(s.outTotal) : '本周无记录'}</div>
      ${s.outN
        ? barChartSVG(dayRows, { h: 130, padTop: 14, color: 'var(--out)', showVal: true, fmt: (x) => x >= 100 ? x.toFixed(0) : x.toFixed(1) })
        : '<div class="dim" style="font-size:12px;padding:6px 4px">本周无记录</div>'}
    </div>

    <div class="sec">支出分类 Top 5</div>
    <div class="chart-wrap">
      ${topCats.length
        ? hbarList(topCats.map(c => ({ label: c[0], v: c[1] })), { fmt: (x) => '¥' + fmtMoney(x) })
        : '<div class="dim" style="font-size:12px;padding:4px">本周无记录</div>'}
    </div>

    <div class="sec">分类明细 · 含上周对比</div>
    <div class="card" style="padding:4px 12px">
      <table class="st-tb">
        <thead><tr><th>分类</th><th>本周</th><th>笔</th><th>上周</th><th>变化</th></tr></thead>
        <tbody>
          ${allCats.length ? allCats.map(k => {
            const cur = thisMap[k] || 0, pv = prevMap[k] || 0;
            return `<tr><td>${escapeHtml(k)}</td><td>¥${fmtMoney(cur)}</td><td>${s.catN[k] || 0}</td>`
              + `<td>${pv ? '¥' + fmtMoney(pv) : '—'}</td><td>${deltaShort(cur, pv)}</td></tr>`;
          }).join('') + `<tr><td>合计</td><td>¥${fmtMoney(s.outTotal)}</td><td>${s.outN}</td><td>¥${fmtMoney(p.outTotal)}</td><td>${deltaShort(s.outTotal, p.outTotal)}</td></tr>`
            : '<tr><td colspan="5" class="muted">本周无记录</td></tr>'}
        </tbody>
      </table>
    </div>

    <div class="sec">日记 · ${s.diary.length} 篇</div>
    <div class="card" style="padding:4px 14px">
      ${s.diary.length ? `<ul class="wk-diary">${s.diary.map(r => {
        const title = String(r.title || '').trim();
        const sum = getDiarySum(r);
        // 有正文才谈得上「读原文」——没正文就别挂一个永远不动的「正在读」
        const canRead = !!String(r.content || '').trim();
        const pending = !title && !sum && canRead && diarySumCanRun();
        const label = title || sum || (pending ? '正在读原文，稍等…' : '点开看原文');
        return `<li data-did="${r.id}"><span class="dd">${ymd(r).slice(5)}</span>`
          + `<span class="tt"><span class="sum${pending ? ' pending' : ''}" data-sum="${r.id}">${escapeHtml(label)}</span></span>`
          + `<span class="more">原文 ›</span></li>`;
      }).join('')}</ul>` : '<div class="dim" style="font-size:12px;padding:8px 0">本周无记录</div>'}
    </div>
    ${sumStuck ? '<div class="wk-sumfail" id="wk-sumfail"><span>摘要没生成（模型暂时不可用）</span>'
      + '<button class="btn-text" id="wk-sumretry">重试</button></div>' : ''}

    <div class="sec">${s.sportN ? `运动 · ${s.sportN} 次` : '运动'}</div>
    <div class="stat-grid">
      ${loadCell('总时长', s.load.min, ' 分', 0, 'min')}
      ${loadCell('总距离', s.load.km, ' km', 2, 'km')}
      ${loadCell('总消耗', s.load.kcal, ' kcal', 0, 'kcal')}
      <div class="stat"><div class="label">次数</div><div class="value">${s.sportN}</div><div class="sub">上周 ${p.sportN} 次</div></div>
    </div>
    ${s.sportN
      ? `<div class="wk-days">${Object.keys(s.sportKinds).map(k => `<span class="wk-day on">${escapeHtml(k)} ×${s.sportKinds[k]}</span>`).join('')}</div>`
      : (s.load.estDays ? '' : '<div class="muted" style="font-size:12px;margin:8px 2px">本周无记录</div>')}
    ${estNote ? `<div class="muted" style="font-size:11.5px;line-height:1.85;margin:9px 2px 0">${escapeHtml(estNote)}</div>` : ''}

    <div class="sec">健康 · ${s.healthN} 次 / ${s.healthDays} 天</div>
    <div class="stat-grid">
      <div class="stat"><div class="label">记录次数</div><div class="value">${s.healthN}</div><div class="sub">上周 ${p.healthN} 次</div></div>
      <div class="stat"><div class="label">涉及天数</div><div class="value">${s.healthDays}</div><div class="sub">上周 ${p.healthDays} 天</div></div>
    </div>
    ${s.healthN ? `<div class="wk-days">${chips(s.healthDates)}</div>` : '<div class="muted" style="font-size:12px;margin:8px 2px">本周无记录</div>'}

    <div class="sec">步数 · 达标线 ${s.stepGoal}</div>
    <div class="chart-wrap">
      <div class="chart-title">${s.stepDays ? `记录日均 ${Math.round(stepAvg).toLocaleString('zh-CN')} 步 · 达标 ${s.stepHit} 天` : '本周无记录'}</div>
      ${s.stepDays
        ? barChartSVG(stepRows, { h: 122, padTop: 14, color: 'var(--cyan)', showVal: true })
        : '<div class="dim" style="font-size:12px;padding:6px 4px">09-21 ~ 09-27 这 7 天都没有步数记录</div>'}
    </div>
    <div class="stat-grid">
      <div class="stat"><div class="label">记录天数</div><div class="value">${s.stepDays} / 7</div><div class="sub">上周 ${p.stepDays} 天</div></div>
      <div class="stat"><div class="label">周平均步数</div><div class="value" style="font-size:18px">${s.stepDays ? Math.round(stepAvg).toLocaleString('zh-CN') : '—'}</div><div class="sub">7 日摊平 ${Math.round(s.stepTotal / 7).toLocaleString('zh-CN')} 步</div></div>
      <div class="stat"><div class="label">达标天数</div><div class="value" style="color:${s.stepHit ? 'var(--in)' : 'var(--out)'}">${s.stepHit}</div><div class="sub">目标 ${s.stepGoal} 步/天</div></div>
      <div class="stat"><div class="label">合计步数</div><div class="value" style="font-size:18px">${s.stepTotal.toLocaleString('zh-CN')}</div><div class="sub">${s.stepDays} 天累计</div></div>
    </div>

    <div class="wk-verdict">
      <div class="t">趋势点评</div>
      <p>${escapeHtml(weeklyVerdict(s, p))}</p>
      <div class="wc">按本地时间统计 · 没有记录的项目照实写「无记录」，不做推算或补零</div>
    </div>
  `;

  v.querySelectorAll('.wk-diary li').forEach(li => {
    li.onclick = () => openDiaryRead(li.getAttribute('data-did'), s.diary);
  });
  // 摘要跑完（含失败）就重画一次，失败条和重试入口才当场出现，不用退出重进
  const redraw = () => { if (activeTab === 'weekly') renderWeekly(true); };
  const sumRetry = $('#wk-sumretry');
  if (sumRetry) sumRetry.onclick = () => retryDiarySummaries(s.diary, redraw);
  if (s.diary.length) ensureDiarySummaries(s.diary, redraw);   // 后台生成摘要，不阻塞首屏
  const back = $('#wk-back'); if (back) back.onclick = () => switchTab('me');
  const pv = $('#wk-prev'); if (pv) pv.onclick = () => { weeklyAnchor = shiftDays(viewMon, -7); renderWeekly(); };
  const nx = $('#wk-next'); if (nx) nx.onclick = () => { if (isThisWeek) return; weeklyAnchor = shiftDays(viewMon, 7); renderWeekly(); };
  window.scrollTo(0, sc0);
}

/* ================= 每月回顾（月报） ================= */
// 自然月（1 日 ~ 月末）。周报看的是「周内节奏」，月报看的是「一个月的总量与结构」，
// 所以两边的切法故意不一样：周报按周一为起点，月报按日历月。
let monthlyAnchor = null;                 // 当前查看的那个月（存该月 1 号，Date）
let monthlyData = null, monthlyDataAt = 0; // 近 12 个月原始数据缓存
let monthlyDiaryAll = false;              // 日记是否已展开全部

const MONTH_TABLES = WEEK_TABLES;         // 同一批表，不必再抄一份
const MONTH_DIARY_SHOW = 8;               // 先铺最近 8 篇：整月 30 篇一次丢给模型，单请求会撑到 1.8 万字

function monthStart(d) { return new Date(d.getFullYear(), d.getMonth(), 1); }

// ⚠ 名字必须与文件上方那个 monthRange（返回 {start,end}、带默认参数）区分开——
//   重名会让后者被提升覆盖，今日页 `monthRange()` 无参调用就会抛 getFullYear。
function monthSpan(d) {
  const y = d.getFullYear(), m = d.getMonth();
  const first = new Date(y, m, 1);
  const last = new Date(y, m + 1, 0);            // 「下月 0 号」= 本月最后一天，自动处理 2 月与闰年
  const now = new Date();
  const isCurrent = (y === now.getFullYear() && m === now.getMonth());
  return {
    ms: localDateStr(first), me: localDateStr(last), ym: localDateStr(first).slice(0, 7),
    y, m, days: last.getDate(),
    passed: isCurrent ? now.getDate() : last.getDate(),   // 当月已经过掉几天（历史月 = 整月）
    isCurrent, label: `${y} 年 ${m + 1} 月`
  };
}
function shiftMonths(d, n) { return new Date(d.getFullYear(), d.getMonth() + n, 1); }

async function fetchMonthlyData() {
  if (monthlyData && Date.now() - monthlyDataAt < 60000) return monthlyData;
  const since = localDateStr(shiftMonths(monthStart(new Date()), -11));
  const res = await Promise.all(MONTH_TABLES.map(t =>
    cloud.database.from(t).select('*').gte('record_date', since).limit(5000)
      .then(r => (r && r.data) || [], () => [])
  ));
  const out = {};
  MONTH_TABLES.forEach((t, i) => { out[t] = res[i]; });
  monthlyData = out; monthlyDataAt = Date.now();
  return out;
}

function monthStats(data, rg) {
  const cut = (t) => (data[t] || []).filter(r => inRange(r, rg.ms, rg.me));
  const ex = cut('expense');
  const out = ex.filter(r => r.kind === 'out');
  const inc = ex.filter(r => r.kind === 'in');
  const cats = {}, catN = {};
  out.forEach(r => {
    const k = (r.category || '').trim() || '未分类';
    cats[k] = (cats[k] || 0) + (Number(r.amount) || 0);
    catN[k] = (catN[k] || 0) + 1;
  });
  const sp = cut('sport'), he = cut('health');
  const kinds = {};
  sp.forEach(r => { const k = (r.kind || '运动').trim() || '运动'; kinds[k] = (kinds[k] || 0) + 1; });
  const st = cut('steps').slice().sort((a, b) => ymd(a) < ymd(b) ? -1 : 1);
  const hDates = [...new Set(he.map(ymd))].sort();
  const diary = cut('diary').slice().sort((a, b) => ymd(a) < ymd(b) ? -1 : 1);

  // ---- 月报才关心的几个「体量」指标 ----
  // ⛔ 只数到「已过的那天」为止。日期输入框没设 max，用户（或导入的数据、手机时钟漂移）
  //    可能把记录落在未来；不收紧的话 actDays 会超过已过天数，覆盖率算出 450% 这种数，
  //    「月内最长连续」也会跟着虚高。当月夹到今天，历史月本来就整月都在范围内。
  const today = localDateStr(new Date());
  const rEff = rg.isCurrent ? (rg.ms > today ? '' : today) : rg.me;
  const act = new Set();                       // 有任意一条记录的日子
  if (rEff) MONTH_TABLES.forEach(t => cut(t).forEach(r => { const d = ymd(r); if (d && d <= rEff) act.add(d); }));
  const dayOut = {};                           // 每天支出合计，找「花得最多的一天」
  out.forEach(r => { const d = ymd(r); if (d) dayOut[d] = (dayOut[d] || 0) + (Number(r.amount) || 0); });
  const dayKeys = Object.keys(dayOut).sort((a, b) => (dayOut[b] - dayOut[a]) || (a < b ? -1 : 1));
  const maxSingle = out.reduce((m, r) => Math.max(m, Number(r.amount) || 0), 0);

  return {
    outTotal: sumBy(out, r => r.amount), outN: out.length,
    inTotal: sumBy(inc, r => r.amount), inN: inc.length,
    cats: Object.keys(cats).map(k => [k, cats[k]]).sort((a, b) => b[1] - a[1]),
    catN, expRows: out,
    diary, diaryDays: new Set(diary.map(ymd)).size,
    sportN: sp.length, sportKinds: kinds,
    load: loadSum(dayLoad(sp, st)),
    healthN: he.length, healthDays: hDates.length, healthDates: hDates,
    steps: st, stepTotal: sumBy(st, r => r.steps), stepDays: st.length,
    stepGoal: Number((st[0] || {}).goal) || WEEK_STEP_GOAL,
    stepHit: st.filter(r => (Number(r.steps) || 0) >= (Number(r.goal) || WEEK_STEP_GOAL)).length,
    actDays: act.size, streak: longestStreak(act), expDays: new Set(out.map(ymd)).size,
    topDay: dayKeys[0] || '', topDayAmt: dayKeys.length ? dayOut[dayKeys[0]] : 0,
    maxSingle, maxSingleRow: maxSingle > 0 ? out.find(r => (Number(r.amount) || 0) === maxSingle) : null
  };
}

// 环比文案要跟周报区分开：周报比「上周」，月报比「上月」
function deltaHTMLM(cur, prev, unit, prevLabel, curLabel) {
  const pl = prevLabel || '上月', cl = curLabel || '本月';
  if (!prev) return cur > 0
    ? `<span class="wk-delta wk-flat">${pl}无记录（${cl} ${unit}${fmtMoney(cur)}）</span>`
    : `<span class="wk-delta wk-flat">两个月都无记录</span>`;
  const p = (cur - prev) / prev * 100;
  const abs = cur - prev;
  const cls = p > 0.05 ? 'wk-up' : (p < -0.05 ? 'wk-dn' : 'wk-flat');
  const sg = abs > 0 ? '+' : (abs < 0 ? '−' : '');
  const av = unit === '¥' ? unit + fmtMoney(Math.abs(abs)) : Math.abs(abs);
  return `<span class="wk-delta ${cls}">${sg}${Math.abs(p).toFixed(1)}% · ${sg}${av}</span>`;
}

// 一段话点评：全部由当月数据推出来，不写死
function monthlyVerdict(s, p, rg) {
  const tag = rg.isCurrent ? '本月' : rg.label;
  const parts = [];
  if (s.outN) {
    let t = `${tag}支出 ¥${fmtMoney(s.outTotal)}（${s.outN} 笔）`;
    if (p.outTotal > 0) {
      const d = (s.outTotal - p.outTotal) / p.outTotal * 100;
      t += `，环比${d >= 0 ? '涨' : '降'} ${Math.abs(d).toFixed(1)}%`;
    } else t += '，上月没有支出记录';
    if (s.cats.length && s.outTotal > 0) {
      t += `；「${s.cats[0][0]}」¥${fmtMoney(s.cats[0][1])} 居首，占 ${Math.round(s.cats[0][1] / s.outTotal * 100)}%`;
    }
    parts.push(t);
  } else parts.push(`${tag}没有支出记录`);

  if (s.inN) parts.push(`收入 ¥${fmtMoney(s.inTotal)}（${s.inN} 笔），${s.inTotal - s.outTotal < 0 ? '净结余为负' : '净结余为正'}`);
  else parts.push('没有收入记录');

  const cov = Math.max(1, rg.passed);
  const rec = [`有记录 ${s.actDays} 天（覆盖 ${Math.min(100, Math.round(s.actDays / cov * 100))}%）`];
  if (s.diary.length) rec.push(`日记 ${s.diary.length} 篇、写了 ${s.diaryDays} 天`);
  else rec.push('日记没写');
  if (s.sportN) {
    const l = s.load, bits = [];
    if (l.km > 0) bits.push(`约 ${l.km.toFixed(2)} km`);
    if (l.kcal > 0) bits.push(`${Math.round(l.kcal)} 千卡`);
    const est = ['e', 'mix'].indexOf(l.src.km) >= 0 || ['e', 'mix'].indexOf(l.src.kcal) >= 0 || l.src.min === 'e';
    rec.push(`运动 ${s.sportN} 次${bits.length ? `（${bits.join('、')}${est ? '，步数估算' : ''}）` : ''}`);
  } else if (s.load.estDays) rec.push(`没记运动，步数折算约 ${s.load.km.toFixed(2)} km`);
  else rec.push('没有运动记录');
  if (s.stepDays) rec.push(`步数记了 ${s.stepDays} 天、达标 ${s.stepHit} 天`);
  else rec.push('步数没记录');
  parts.push(rec.join('，'));
  return parts.join('。') + '。';
}

async function renderMonthly(keepScroll) {
  const sc0 = keepScroll ? window.scrollY : 0;
  const v = $('#view');
  if (!monthlyData) v.innerHTML = `<div class="empty"><span class="loader"></span><div style="margin-top:10px">加载中</div></div>`;

  let data;
  try { data = await fetchMonthlyData(); }
  catch (e) { v.innerHTML = `<div class="empty">读取失败<br>${escapeHtml(errMsg(e))}</div>`; return; }

  if (!monthlyAnchor) monthlyAnchor = monthStart(new Date());
  const rg = monthSpan(monthlyAnchor);
  const prg = monthSpan(shiftMonths(monthlyAnchor, -1));
  const s = monthStats(data, rg);
  const p = monthStats(data, prg);

  // 整月 1..days 铺满；日期轴只标 1 / 5 的倍数 / 月末，否则 31 个数字会挤成一坨
  // 刻度：1 号、每 5 天、月末。⛔ 末日那格常常紧挨着 30（31 天的月份），
  // 两个数字会黏成「3031」那种看不清的东西 —— 所以先算哪些日子要标，
  // 如果某个 5 的倍数离末日不足两格，就把它去掉，只保末尾和 1 号。
  const dayLabel = (() => {
    const n = rg.days, marks = [];
    for (let i = 1; i <= n; i++) { if (i === 1 || i % 5 === 0) marks.push(i); }
    if (marks[marks.length - 1] !== n) marks.push(n);
    for (let k = marks.length - 1; k > 1; k--) {
      if (marks[k] - marks[k - 1] < 2) marks.splice(k - 1, 1);
    }
    const set = new Set(marks);
    return (i) => (set.has(i) ? String(i) : '');
  })();
  const dayOf = (i) => localDateStr(new Date(rg.y, rg.m, i));
  const dayRows = (() => {
    const m = {};
    s.expRows.forEach(r => { const d = ymd(r); m[d] = (m[d] || 0) + (Number(r.amount) || 0); });
    return Array.from({ length: rg.days }, (_, k) => ({ label: dayLabel(k + 1), a: m[dayOf(k + 1)] || 0 }));
  })();
  const stepRows = (() => {
    const m = {};
    s.steps.forEach(r => { m[ymd(r)] = Number(r.steps) || 0; });
    return Array.from({ length: rg.days }, (_, k) => ({ label: dayLabel(k + 1), a: m[dayOf(k + 1)] || 0 }));
  })();
  const stepAvg = s.stepDays ? s.stepTotal / s.stepDays : 0;

  const topCats = s.cats.slice(0, 5);
  // 运动量单元格：手记 / 步数估算分别标出来源，两样都没有就照实写「未记录」
  const SRC_TXT = { m: '手记', e: '步数估算', mix: '手记 + 估算', none: '—' };
  const loadCell = (label, val, unit, fix, key) => {
    const src = s.load.src[key];
    const has = val > 0;
    const shown = has ? (fix === 2 ? val.toFixed(2) : Math.round(val).toLocaleString('zh-CN')) + unit : '<span class="nr">未记录</span>';
    return `<div class="stat"><div class="label">${label}</div><div class="value" style="font-size:17px">${shown}</div>`
      + `<div class="sub">${has ? SRC_TXT[src] : '—'}</div></div>`;
  };
  const estNote = s.load.estDays
    ? `时长 / 距离 / 消耗：手记填了就用手记，没填按步数折算 —— 覆盖本月 ${s.load.estDays} 天（步幅 ${stepStrideM()} 米、体重 ${stepWeightKg()} 公斤、步频 ${stepSpm()} 步/分，可在「运动 → 调整折算」里改）`
    : (s.sportN ? '本月运动量全部来自手记，没有用到步数折算' : '');
  const thisMap = {}, prevMap = {};
  s.cats.forEach(c => { thisMap[c[0]] = c[1]; });
  p.cats.forEach(c => { prevMap[c[0]] = c[1]; });
  const allCats = [...new Set([...s.cats.map(c => c[0]), ...p.cats.map(c => c[0])])]
    .sort((a, b) => (thisMap[b] || 0) - (thisMap[a] || 0) || (prevMap[b] || 0) - (prevMap[a] || 0));

  // 日记先铺最近 8 篇，摘要也只给这几篇跑 —— 整月三十来篇一次丢给模型，单请求会撑到一万多字
  const dRows = monthlyDiaryAll ? s.diary : s.diary.slice(-MONTH_DIARY_SHOW);
  const moreN = s.diary.length - dRows.length;
  const sumNeed = dRows.filter(r => !String(r.title || '').trim() && String(r.content || '').trim());
  const sumStuck = sumNeed.length > 0 && !sumNeed.some(r => getDiarySum(r)) && !diarySumCanRun();

  // 本月亮点：只从已有数据里挑，一项都没有就整块不显示
  const hi = [];
  if (s.maxSingleRow) {
    const r = s.maxSingleRow;
    const note = String(r.note || '').replace(/\s+/g, ' ').trim().slice(0, 12);
    const cat = String(r.category || '').trim() || '未分类';
    hi.push(['单笔最大支出', `¥${fmtMoney(s.maxSingle)} · ${cat}${note ? ' · ' + note : ''} · ${ymd(r).slice(5)}`]);
  }
  if (s.topDay) hi.push(['花得最多的一天', `${s.topDay.slice(5)} · ¥${fmtMoney(s.topDayAmt)}`]);
  if (s.streak) hi.push(['月内最长连续记录', `${s.streak} 天`]);
  if (s.diary.length) hi.push(['日记', `${s.diary.length} 篇 · 写了 ${s.diaryDays} 天`]);
  if (s.cats.length && s.outTotal > 0) {
    const k = s.cats[0][0];
    hi.push(['花得最多的分类', `${k} · ${s.catN[k]} 笔 · 占 ${Math.round(s.cats[0][1] / s.outTotal * 100)}%`]);
  }
  if (s.stepDays) hi.push(['日均步数', `${Math.round(stepAvg).toLocaleString('zh-CN')} 步 · 达标 ${s.stepHit} 天`]);
  if (s.sportN) hi.push(['运动', `${s.sportN} 次 · ${s.sportKinds[Object.keys(s.sportKinds)[0]] ? Object.keys(s.sportKinds)[0] + ' 为主' : ''}`]);

  v.innerHTML = `
    <div class="wk-back" id="mo-back">‹ 返回</div>
    <div class="wk-nav">
      <button id="mo-prev" aria-label="上一月">‹</button>
      <div class="rg">${escapeHtml(rg.label)}${rg.isCurrent ? `<em>本月 · 已过 ${rg.passed}/${rg.days} 天</em>` : ''}</div>
      <button id="mo-next" aria-label="下一月" ${rg.isCurrent ? 'disabled' : ''}>›</button>
    </div>

    <div class="sec">收支</div>
    <div class="wk-hero">
      <div class="lbl">${rg.isCurrent ? '本月支出' : '当月支出'}</div>
      <div class="big"${s.outN ? '' : ' style="font-size:21px;color:var(--amber)"'}>${s.outN ? '¥' + fmtMoney(s.outTotal) : (rg.isCurrent ? '本月还没有记账' : '当月无记录')}</div>
      <div class="g">
        <div><span class="k">支出笔数</span><span class="v">${s.outN ? s.outN + ' 笔' : '—'}</span></div>
        <div><span class="k">收入</span><span class="v" style="color:var(--in)">${s.inN ? '¥' + fmtMoney(s.inTotal) + ' · ' + s.inN + ' 笔' : '无记录'}</span></div>
        <div><span class="k">净结余</span><span class="v" style="color:${s.inTotal - s.outTotal < 0 ? 'var(--out)' : 'var(--in)'}">${(s.outN || s.inN) ? (s.inTotal - s.outTotal < 0 ? '−' : '') + '¥' + fmtMoney(Math.abs(s.inTotal - s.outTotal)) : '—'}</span></div>
        <div><span class="k">笔均支出</span><span class="v">${s.outN ? '¥' + fmtMoney(s.outTotal / s.outN) : '—'}</span></div>
        <div><span class="k">日均支出</span><span class="v">${s.outN ? '¥' + fmtMoney(s.outTotal / Math.max(1, rg.passed)) : '—'}</span></div>
        <div><span class="k">记账天数</span><span class="v">${s.expDays} / ${rg.passed}</div></div>
      </div>
    </div>
    <div class="muted" style="font-size:11.5px;line-height:1.9;margin:9px 2px 0">
      对比上月（${escapeHtml(prg.ym)}）<br>
      支出 ${deltaHTMLM(s.outTotal, p.outTotal, '¥')}<br>
      收入 ${deltaHTMLM(s.inTotal, p.inTotal, '¥')}
    </div>

    <div class="sec">这个月记了多少</div>
    <div class="stat-grid">
      <div class="stat"><div class="label">有记录天数</div><div class="value">${s.actDays}</div><div class="sub">覆盖 ${Math.min(100, Math.round(s.actDays / Math.max(1, rg.passed) * 100))}% · 上月 ${p.actDays} 天</div></div>
      <div class="stat"><div class="label">最长连续</div><div class="value" style="color:${s.streak >= 7 ? 'var(--in)' : ''}">${s.streak}</div><div class="sub">天 · 上月 ${p.streak} 天</div></div>
    </div>

    ${hi.length ? `<div class="sec">本月亮点</div>
    <div class="card" style="padding:4px 12px">
      <table class="st-tb"><tbody>${hi.map(([k, val]) => `<tr><td>${escapeHtml(k)}</td><td>${escapeHtml(val)}</td></tr>`).join('')}</tbody></table>
    </div>` : ''}

    <div class="sec">每日支出</div>
    <div class="chart-wrap">
      <div class="chart-title">${rg.ms.slice(5)} ~ ${rg.me.slice(5)} · ${s.outN ? '合计 ¥' + fmtMoney(s.outTotal) : (rg.isCurrent ? '本月还没有记账' : '当月无记录')}</div>
      ${s.outN
        ? barChartSVG(dayRows, { h: 130, padTop: 14, color: 'var(--out)' })
        : '<div class="dim" style="font-size:12px;padding:6px 4px">本月无记录</div>'}
    </div>

    <div class="sec">支出分类 Top 5</div>
    <div class="chart-wrap">
      ${topCats.length
        ? hbarList(topCats.map(c => ({ label: c[0], v: c[1] })), { fmt: (x) => '¥' + fmtMoney(x) })
        : '<div class="dim" style="font-size:12px;padding:4px">本月无记录</div>'}
    </div>

    <div class="sec">分类明细 · 含上月对比</div>
    <div class="card" style="padding:4px 12px">
      <table class="st-tb">
        <thead><tr><th>分类</th><th>本月</th><th>笔</th><th>上月</th><th>变化</th></tr></thead>
        <tbody>
          ${allCats.length ? allCats.map(k => {
            const cur = thisMap[k] || 0, pv = prevMap[k] || 0;
            return `<tr><td>${escapeHtml(k)}</td><td>¥${fmtMoney(cur)}</td><td>${s.catN[k] || 0}</td>`
              + `<td>${pv ? '¥' + fmtMoney(pv) : '—'}</td><td>${deltaShort(cur, pv)}</td></tr>`;
          }).join('') + `<tr><td>合计</td><td>¥${fmtMoney(s.outTotal)}</td><td>${s.outN}</td><td>¥${fmtMoney(p.outTotal)}</td><td>${deltaShort(s.outTotal, p.outTotal)}</td></tr>`
            : '<tr><td colspan="5" class="muted">本月无记录</td></tr>'}
        </tbody>
      </table>
    </div>

    <div class="sec">日记 · ${s.diary.length} 篇${moreN > 0 ? `（先看最近 ${dRows.length} 篇）` : ''}</div>
    <div class="card" style="padding:4px 14px">
      ${dRows.length ? `<ul class="wk-diary">${dRows.map(r => {
        const title = String(r.title || '').trim();
        const sum = getDiarySum(r);
        // 有正文才谈得上「读原文」——没正文就别挂一个永远不动的「正在读」
        const canRead = !!String(r.content || '').trim();
        const pending = !title && !sum && canRead && diarySumCanRun();
        const label = title || sum || (pending ? '正在读原文，稍等…' : '点开看原文');
        return `<li data-did="${r.id}"><span class="dd">${ymd(r).slice(5)}</span>`
          + `<span class="tt"><span class="sum${pending ? ' pending' : ''}" data-sum="${r.id}">${escapeHtml(label)}</span></span>`
          + `<span class="more">原文 ›</span></li>`;
      }).join('')}</ul>` : '<div class="dim" style="font-size:12px;padding:8px 0">本月无记录</div>'}
    </div>
    ${sumStuck ? '<div class="wk-sumfail" id="mo-sumfail"><span>摘要没生成（模型暂时不可用）</span>'
      + '<button class="btn-text" id="mo-sumretry">重试</button></div>' : ''}
    ${moreN > 0 ? `<button class="btn-text" id="mo-more" style="display:block;margin:12px auto 0">展开其余 ${moreN} 篇 ›</button>` : ''}

    <div class="sec">${s.sportN ? `运动 · ${s.sportN} 次` : '运动'}</div>
    <div class="stat-grid">
      ${loadCell('总时长', s.load.min, ' 分', 0, 'min')}
      ${loadCell('总距离', s.load.km, ' km', 2, 'km')}
      ${loadCell('总消耗', s.load.kcal, ' kcal', 0, 'kcal')}
      <div class="stat"><div class="label">次数</div><div class="value">${s.sportN}</div><div class="sub">上月 ${p.sportN} 次</div></div>
    </div>
    ${s.sportN
      ? `<div class="wk-days">${Object.keys(s.sportKinds).map(k => `<span class="wk-day on">${escapeHtml(k)} ×${s.sportKinds[k]}</span>`).join('')}</div>`
      : (s.load.estDays ? '' : '<div class="muted" style="font-size:12px;margin:8px 2px">本月无记录</div>')}
    ${estNote ? `<div class="muted" style="font-size:11.5px;line-height:1.85;margin:9px 2px 0">${escapeHtml(estNote)}</div>` : ''}

    <div class="sec">健康 · ${s.healthN} 次 / ${s.healthDays} 天</div>
    <div class="stat-grid">
      <div class="stat"><div class="label">记录次数</div><div class="value">${s.healthN}</div><div class="sub">上月 ${p.healthN} 次</div></div>
      <div class="stat"><div class="label">涉及天数</div><div class="value">${s.healthDays}</div><div class="sub">上月 ${p.healthDays} 天</div></div>
    </div>
    ${s.healthN ? `<div class="muted" style="font-size:11.5px;line-height:1.9;margin:9px 2px 0">有记录的日子（日号）：${s.healthDates.map(d => d.slice(8)).join('、')}</div>`
      : '<div class="muted" style="font-size:12px;margin:8px 2px">本月无记录</div>'}

    <div class="sec">步数 · 达标线 ${s.stepGoal}</div>
    <div class="chart-wrap">
      <div class="chart-title">${s.stepDays ? `记录日均 ${Math.round(stepAvg).toLocaleString('zh-CN')} 步 · 达标 ${s.stepHit} 天` : (rg.isCurrent ? '本月还没有步数记录' : '当月无记录')}</div>
      ${s.stepDays
        ? barChartSVG(stepRows, { h: 122, padTop: 14, color: 'var(--cyan)' })
        : `<div class="dim" style="font-size:12px;padding:6px 4px">${rg.ms.slice(5)} ~ ${rg.me.slice(5)} 都没有步数记录</div>`}
    </div>
    <div class="stat-grid">
      <div class="stat"><div class="label">记录天数</div><div class="value">${s.stepDays} / ${rg.passed}</div><div class="sub">上月 ${p.stepDays} 天</div></div>
      <div class="stat"><div class="label">日均步数</div><div class="value" style="font-size:18px">${s.stepDays ? Math.round(stepAvg).toLocaleString('zh-CN') : '—'}</div><div class="sub">整月摊平 ${Math.round(s.stepTotal / rg.days).toLocaleString('zh-CN')} 步</div></div>
      <div class="stat"><div class="label">达标天数</div><div class="value" style="color:${s.stepHit ? 'var(--in)' : 'var(--out)'}">${s.stepHit}</div><div class="sub">目标 ${s.stepGoal} 步/天</div></div>
      <div class="stat"><div class="label">合计步数</div><div class="value" style="font-size:18px">${s.stepTotal.toLocaleString('zh-CN')}</div><div class="sub">${s.stepDays} 天累计</div></div>
    </div>

    <div class="wk-verdict">
      <div class="t">月度点评</div>
      <p>${escapeHtml(monthlyVerdict(s, p, rg))}</p>
      <div class="wc">按本地时间统计 · 覆盖 ${rg.ms} ~ ${rg.me}${rg.isCurrent ? `（已过 ${rg.passed} 天）` : ''} · 没有记录的项目照实写「无记录」，不做推算或补零</div>
    </div>
  `;

  v.querySelectorAll('.wk-diary li').forEach(li => {
    li.onclick = () => openDiaryRead(li.getAttribute('data-did'), s.diary);
  });
  // 摘要跑完（含失败）就重画一次，失败条和重试入口才当场出现，不用退出重进
  const redraw = () => { if (activeTab === 'monthly') renderMonthly(true); };
  const sumRetry = $('#mo-sumretry');
  if (sumRetry) sumRetry.onclick = () => retryDiarySummaries(dRows, redraw);
  if (dRows.length) ensureDiarySummaries(dRows, redraw);   // 后台生成摘要，不阻塞首屏
  const more = $('#mo-more');
  if (more) more.onclick = () => { monthlyDiaryAll = true; renderMonthly(); };
  const back = $('#mo-back'); if (back) back.onclick = () => switchTab('me');
  const pv2 = $('#mo-prev'); if (pv2) pv2.onclick = () => { monthlyAnchor = shiftMonths(monthlyAnchor, -1); monthlyDiaryAll = false; renderMonthly(); };
  const nx2 = $('#mo-next'); if (nx2) nx2.onclick = () => { if (rg.isCurrent) return; monthlyAnchor = shiftMonths(monthlyAnchor, 1); monthlyDiaryAll = false; renderMonthly(); };
  window.scrollTo(0, sc0);
}

async function renderProfile() {
  const v = $('#view');
  v.innerHTML = loadingHTML();
  const email = (currentUser && currentUser.email) || '';
  const uid = (currentUser && (currentUser.id || currentUser.sub)) || '';
  let counts = { expense:'-', diary:'-', life:'-', sport:'-', health:'-', steps:'-' };
  try {
    const [e, d, l, s, h, st] = await Promise.all([
      cloud.database.from('expense').select('id').limit(5000),
      cloud.database.from('diary').select('id').limit(5000),
      cloud.database.from('life').select('id').limit(5000),
      cloud.database.from('sport').select('id').limit(5000),
      cloud.database.from('health').select('id').limit(5000),
      cloud.database.from('steps').select('id').limit(5000)
    ]);
    counts = {
      expense: (e.data||[]).length, diary: (d.data||[]).length, life: (l.data||[]).length,
      sport: (s.data||[]).length, health: (h.data||[]).length, steps: (st.data||[]).length
    };
  } catch(err) { console.warn('profile counts', err); }

  const nick = getNick();
  const extra = LS.get('cats', []);
  const themeId = LS.get('theme', 'ink');
  const themeName = (THEMES.find(t => t.id === themeId) || THEMES[0]).name;

  v.innerHTML = `
    <div class="me-hero">
      <div class="me-avatar" id="me-avatar" title="点头像换">${avatarInner(email)}</div>
      <div class="me-email">${escapeHtml(email)}</div>
      <div class="me-meta">已登录 · 数据已同步到云端</div>
      <div class="muted" style="font-size:11.5px;margin-top:8px">点头像可以换</div>
    </div>

    <div class="sec">回顾</div>
    <div class="me-list">
      <div class="me-item" id="mi-weekly">
        <div class="me-ico" style="color:var(--brand-2)">${ICONS.chart}</div>
        <div class="me-txt"><div class="t">本周回顾</div><div class="s">收支 · 日记 · 运动 · 健康 · 步数，一页看完还能翻周</div></div>
        <div class="me-arrow">›</div>
      </div>
      <div class="me-item" id="mi-monthly">
        <div class="me-ico" style="color:var(--amber)">${ICONS.list}</div>
        <div class="me-txt"><div class="t">每月回顾</div><div class="s">一个月的总量与结构 · 亮点、对比上月，可往回翻</div></div>
        <div class="me-arrow">›</div>
      </div>
    </div>

    <div class="sec">外观与个性化</div>
    <div class="me-list">
      <div class="me-item" id="mi-avatar">
        <div class="me-ico" style="color:var(--pink)">${ICONS.user}</div>
        <div class="me-txt"><div class="t">我的头像</div><div class="s">${avatarVal === 'upload' ? '自己上传的图片 · 存在云端' : '默认 · 用邮箱首字母'}</div></div>
        <div class="me-arrow">›</div>
      </div>
      <div class="me-item" id="mi-nick">
        <div class="me-ico" style="color:var(--brand)">${ICONS.user}</div>
        <div class="me-txt"><div class="t">我的昵称</div><div class="s">${nick ? escapeHtml(nick) + ' · 首页会按时段问候你' : '未设置 · 设置后首页问候你'}</div></div>
        <div class="me-arrow">›</div>
      </div>
      <div class="me-item" id="mi-cats">
        <div class="me-ico" style="color:var(--cyan)">${ICONS.expense}</div>
        <div class="me-txt"><div class="t">记账分类</div><div class="s">内置 ${BASE_CATS.length} 类${extra.length ? ' · 自定义 ' + extra.length + ' 个' : ' · 可添加自己的'}</div></div>
        <div class="me-arrow">›</div>
      </div>
    </div>

    <div class="sec">主题色 · ${escapeHtml(themeName)}</div>
    <div class="card">
      <div class="theme-grid">
        ${THEMES.map(t => `<button class="theme-dot ${themeId === t.id ? 'on' : ''}" data-theme-id="${t.id}" aria-label="${t.name}" title="${t.name}" style="background:linear-gradient(180deg,${t.c1} 0 50%,${t.c2} 50% 100%)"></button>`).join('')}
      </div>
    </div>

    <div class="sec">背景</div>
    <div class="me-list">
      <div class="me-item" id="mi-bg">
        <div class="me-ico" style="color:var(--star-a)">${ICONS.image}</div>
        <div class="me-txt"><div class="t">粒子与底图</div><div class="s">${bgPhotos.length ? (bgPhotos.length + ' 张底图' + (bgBlur ? ' · 模糊' + bgBlur : '')) : '无底图'} · 粒子${escapeHtml((BG_LEVELS.find(l => l.id === bgLevel) || BG_LEVELS[2]).name)}</div></div>
        <div class="me-arrow">›</div>
      </div>
    </div>

    <div class="sec">账号与安全</div>
    <div class="me-list">
      <div class="me-item" id="mi-pwd">
        <div class="me-ico" style="color:var(--brand)">${ICONS.lock}</div>
        <div class="me-txt"><div class="t">修改密码</div><div class="s">只需旧密码 + 新密码，不用收验证码</div></div>
        <div class="me-arrow">›</div>
      </div>
      <div class="me-item" id="mi-reset">
        <div class="me-ico" style="color:var(--amber)">${ICONS.mail}</div>
        <div class="me-txt"><div class="t">忘记密码，用邮箱验证码重置</div><div class="s">旧密码想不起来时走这条路</div></div>
        <div class="me-arrow">›</div>
      </div>
      <div class="me-item" id="mi-out">
        <div class="me-ico" style="color:var(--out)">${ICONS.out}</div>
        <div class="me-txt"><div class="t" style="color:var(--out)">退出登录</div><div class="s">数据保留在云端，下次登录继续</div></div>
        <div class="me-arrow">›</div>
      </div>
    </div>

    <div class="sec">我的数据</div>
    <div class="me-list">
      <div class="me-item"><div class="me-ico" style="color:var(--brand)">${ICONS.expense}</div><div class="me-txt"><div class="t">记账</div></div><div class="me-count">${counts.expense} 笔</div></div>
      <div class="me-item"><div class="me-ico" style="color:var(--brand)">${ICONS.diary}</div><div class="me-txt"><div class="t">日记</div></div><div class="me-count">${counts.diary} 篇</div></div>
      <div class="me-item"><div class="me-ico" style="color:var(--brand)">${ICONS.life}</div><div class="me-txt"><div class="t">生活</div></div><div class="me-count">${counts.life} 条</div></div>
      <div class="me-item"><div class="me-ico" style="color:var(--brand)">${ICONS.sport}</div><div class="me-txt"><div class="t">运动</div></div><div class="me-count">${counts.sport} 次</div></div>
      <div class="me-item"><div class="me-ico" style="color:var(--pink)">${ICONS.health}</div><div class="me-txt"><div class="t">健康</div></div><div class="me-count">${counts.health} 条</div></div>
      <div class="me-item" id="mi-steps"><div class="me-ico" style="color:var(--cyan)">${ICONS.shoe}</div><div class="me-txt"><div class="t">步数</div><div class="s">App 自动同步 · 看数据在「运动」页</div></div><div class="me-count">${counts.steps} 天</div></div>
    </div>

    <!-- v3.0：「步数同步」整区移除（我的页入口 + 健康页入口 + 步数表单里那个配置按钮）。
         ⛔ 只删 UI，**不删** flushPendingSteps —— App 快捷指令是靠
            「/?steps=…&auto=1」这个 URL 传数进来的，删掉接收逻辑就等于把
            App 的步数同步功能整个打死。已经配好的指令会继续静默生效（静默入库，不打扰）。
         用户要的是「别让我到处找这个开关」，不是「让这个能力消失」。 -->
    <div class="sec">关于</div>
    <div class="me-list">
      <div class="me-item">
        <div class="me-ico" style="color:var(--cyan)">${ICONS.shield}</div>
        <div class="me-txt"><div class="t">隐私</div><div class="s">数据库按账号强制隔离，只有登录本人能看到自己的记录</div></div>
      </div>
      <div class="me-item" id="mi-ver">
        <div class="me-ico" style="color:var(--text-3)">${ICONS.info}</div>
        <div class="me-txt"><div class="t">版本</div><div class="s" id="me-ver-txt">页面 v${WEB_VER}${appVerShown() ? ' · App v' + appVerShown() : ''}${uid ? ' · ID ' + escapeHtml(String(uid).slice(0,8)) : ''}</div></div>
        <div class="me-arrow">›</div>
      </div>
      <div class="me-item" id="mi-diag">
        <div class="me-ico" style="color:var(--text-3)">🩺</div>
        <div class="me-txt"><div class="t">诊断</div><div class="s">排查问题用：显示每张表读到了几条、数据格式对不对。截图发我即可</div></div>
        <div class="me-arrow">›</div>
      </div>
      <div class="me-item" id="mi-ver-why" style="display:none">
        <div class="me-txt" style="padding:2px 0 8px">
          <div class="s" style="line-height:1.75">
            <b style="color:var(--text-2)">页面 v${WEB_VER}</b>：界面本身。改版后第二天自动生效，不用重装 App。<br>
            <b style="color:var(--text-2)">App v${appVerShown() || '未安装'}</b>：外面那层壳，负责桌面图标、状态栏配色和读取手机步数。这层变了才要重新下载安装。
          </div>
        </div>
      </div>
    </div>
    `;
  const miDiag = $('#mi-diag');
  if (miDiag) miDiag.onclick = () => {
    // ⛔ 2026-10-20：App 里打不开诊断页（URL 固定，没有 ?diag=1）。
    //    「我的 → 诊断」直接在本页开面板，不用跳链接。
    //    ⛔ 还要置上 diagOn：否则切页时 switchTab 不知道诊断开着，
    //    面板永远停在「我的」页的状态（用户反馈"点了日记页等2秒没反应"）。
    window.__diagOn = true;
    try { runDiag(); } catch (e) { toast('诊断打不开', String(e && e.message || e)); }
  };
  const miSteps = $('#mi-steps');
  if (miSteps) miSteps.onclick = openStepsForm;
  const miWeekly = $('#mi-weekly');
  if (miWeekly) miWeekly.onclick = () => { weeklyDataAt = 0; switchTab('weekly'); };
  const miMonthly = $('#mi-monthly');
  if (miMonthly) miMonthly.onclick = () => { monthlyDataAt = 0; monthlyDiaryAll = false; switchTab('monthly'); };
  $('#me-avatar').onclick = openAvatarPicker;
  $('#mi-avatar').onclick = openAvatarPicker;
  $('#mi-nick').onclick = openNick;
  $('#mi-cats').onclick = openCats;
  $('#mi-bg').onclick = openBgSettings;
  // 点「版本」展开说明：两个号分别管什么，免得看着像 bug
  const vw = $('#mi-ver-why');
  if (vw) $('#mi-ver').onclick = () => { vw.style.display = vw.style.display === 'none' ? '' : 'none'; };
  $$('.theme-dot').forEach(b => b.onclick = () => {
    LS.set('theme', b.dataset.themeId);
    applyTheme(b.dataset.themeId);
    switchTab('me');
  });
  $('#mi-pwd').onclick = openChangePwd;
  $('#mi-reset').onclick = openResetPwd;
  $('#mi-out').onclick = confirmSignOut;
}

/* ================= 个性化设置 ================= */
function openNick() {
  const cur = getNick();
  openModal(`
    <div class="field">
      <label>昵称</label>
      <input id="n-name" type="text" maxlength="12" placeholder="最多 12 个字" value="${escapeHtml(cur)}">
    </div>
    <button class="btn" id="n-save">保存</button>
    ${cur ? '<button class="btn-ghost danger" id="n-clear">清除昵称</button>' : ''}`);
  setModalTitle('我的昵称');
  $('#n-save').onclick = () => {
    LS.set('nick', $('#n-name').value.trim().slice(0, 12));
    closeModal(); renderApp(); switchTab('me');
  };
  const clr = $('#n-clear');
  if (clr) clr.onclick = () => { LS.set('nick', ''); closeModal(); renderApp(); switchTab('me'); };
}

function openCats() {
  openModal(`
    <div class="field"><label>我的自定义分类</label><div class="cat-edit" id="c-list"></div></div>
    <div class="field-row">
      <div class="field"><label>新增分类</label><input id="c-new" type="text" maxlength="6" placeholder="如：宠物、游戏"></div>
      <button type="button" class="btn-code" id="c-add">添加</button>
    </div>
`);
  setModalTitle('记账分类');
  const paint = () => {
    const list = LS.get('cats', []);
    $('#c-list').innerHTML = list.length
      ? list.map((c, i) => `<span class="cat-x" data-i="${i}">${escapeHtml(c)} <em>×</em></span>`).join('')
      : '<span class="muted" style="font-size:12px">还没有自定义分类</span>';
    $$('#c-list .cat-x').forEach(el => el.onclick = () => {
      const arr = LS.get('cats', []); arr.splice(Number(el.dataset.i), 1);
      LS.set('cats', arr); paint();
    });
  };
  paint();
  $('#c-add').onclick = () => {
    const v = $('#c-new').value.trim();
    if (!v) return;
    const arr = LS.get('cats', []);
    if (arr.includes(v) || BASE_CATS.includes(v)) { $('#c-new').value = ''; return; }
    arr.push(v); LS.set('cats', arr); $('#c-new').value = '';
    paint();
  };
}

function openChangePwd() {
  openModal(`
    <div class="field"><label>当前密码</label><input id="p-old" type="password" placeholder="现在的登录密码" autocomplete="current-password"></div>
    <div class="field"><label>新密码</label><input id="p-new" type="password" placeholder="至少 6 位" autocomplete="new-password"></div>
    <div class="field"><label>确认新密码</label><input id="p-new2" type="password" placeholder="再输一次" autocomplete="new-password"></div>
    <button class="btn" id="p-save">保存新密码</button>
    <button class="btn-ghost" id="p-goto-reset">旧密码忘了，改用邮箱验证码</button>
    <div class="msg" id="p-msg"></div>`);
  setModalTitle('修改密码');
  $('#p-goto-reset').onclick = () => { closeModal(); setTimeout(openResetPwd, 260); };
  $('#p-save').onclick = doChangePwd;
}

async function doChangePwd() {
  const msg = $('#p-msg');
  const oldPassword = $('#p-old').value;
  const newPassword = $('#p-new').value;
  const newPassword2 = $('#p-new2').value;
  if (!oldPassword || !newPassword) { showMsg(msg, '请把密码填完整'); return; }
  if (newPassword.length < 6) { showMsg(msg, '新密码至少 6 位'); return; }
  if (newPassword !== newPassword2) { showMsg(msg, '两次输入的新密码不一致'); return; }
  const btn = $('#p-save');
  btn.disabled = true; btn.textContent = '提交中...';
  const r = await cloud.auth.resetPasswordForOld({ oldPassword, newPassword });
  btn.disabled = false; btn.textContent = '保存新密码';
  if (r && r.error) {
    showMsg(msg, errMsg(r.error) + '（若旧密码不对，可改用邮箱验证码重置）');
    return;
  }
  showMsg(msg, '密码已更新，下次用新密码登录', 'ok');
  $('#p-old').value = ''; $('#p-new').value = ''; $('#p-new2').value = '';
  setTimeout(closeModal, 1200);
}

function openResetPwd() {
  const email = (currentUser && currentUser.email) || '';
  openModal(`
    <div class="field"><label>邮箱</label><input id="r-email" type="email" value="${escapeHtml(email)}" placeholder="you@example.com"></div>
    <div class="field-row">
      <div class="field"><label>验证码</label><input id="r-code" type="text" inputmode="numeric" placeholder="6 位数字"></div>
      <button type="button" class="btn-code" id="r-send">获取验证码</button>
    </div>
    <div class="field"><label>新密码</label><input id="r-pass" type="password" placeholder="至少 6 位" autocomplete="new-password"></div>
    <button class="btn" id="r-save">重置并登录</button>
    <div class="msg" id="r-msg"></div>`);
  setModalTitle('用邮箱验证码重置密码');
  const msg = $('#r-msg');
  let pending = null;
  $('#r-send').onclick = async (e) => {
    const em = $('#r-email').value.trim();
    if (!em) { showMsg(msg, '请填邮箱'); return; }
    e.target.disabled = true;
    const started = await cloud.auth.resetPasswordForEmail(em);
    e.target.disabled = false;
    if (started.error) { showMsg(msg, errMsg(started.error)); return; }
    pending = { started };
    showMsg(msg, '验证码已发送，注意查收', 'ok');
    countdown(e.target);
  };
  $('#r-save').onclick = async () => {
    const code = $('#r-code').value.trim();
    const pass = $('#r-pass').value;
    if (!pending) { showMsg(msg, '请先获取验证码'); return; }
    if (!code || !pass) { showMsg(msg, '验证码和新密码都要填'); return; }
    if (pass.length < 6) { showMsg(msg, '新密码至少 6 位'); return; }
    const r = await pending.started.data.updateUser({ nonce: code, password: pass });
    if (r && r.error) { showMsg(msg, errMsg(r.error)); return; }
    showMsg(msg, '密码已重置', 'ok');
    setTimeout(closeModal, 1200);
  };
}

/* ================= Boot ================= */

/* ⛔⛔ 跨天检测：App 常驻后台一整夜再打开，昨天的数据会**原样留着**。
   用户的原话是「昨天放的今天还是那个」—— 心情卡片、喝水总量都停在昨天，
   要手动杀掉进程重开才会刷新。

   为什么 fetchStData(force) 自己救不了：它只在被调用时才检查日期，
   而页面已经在前台、没人再调它 ⇒ 昨天的 stData 就一直显示着。

   ⇒ 每次「切回前台 / 窗口获得焦点 / 系统从休眠醒来」都比一下日期，
     跨了就强制重拉并重画。localStorage 存 lastSeenDay，
     这样即使页面被整个冻结（iOS 后台标签）跨了天，回来也能发现。
*/
(function setupDayRollover() {
  const KEY = 'lastSeenDay';
  function checkDayRollover() {
    const today = todayStr();
    const seen = LS.get(KEY, '');
    if (seen === today) return;
    LS.set(KEY, today);
    // 第一次进来（seen 为空）不算跨天，只是登记
    if (!seen || !currentUser) return;
    // 跨天了：清掉当天缓存 + 静默重拉 + 重画当前页
    stData = null; stDataAt = 0; stDataDay = '';
    state.expenseSig = '';            // 让记账页下次进来会重拉
    if (typeof renderStZone === 'function') { try { renderStZone(true); } catch (e) {} }
    if (activeTab === 'expense') { try { renderExpenseList(); } catch (e) {} }
    if (activeTab === 'diary')    { try { renderDiaryList(); } catch (e) {} }
  }
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) checkDayRollover();
  });
  window.addEventListener('focus', checkDayRollover);
  window.addEventListener('pageshow', checkDayRollover);   // 从 bfcache 回来
  // 定时兜底：App 一直开着跨过零点（挂后台但没被冻结）
  setInterval(checkDayRollover, 60000);
})();

boot();
