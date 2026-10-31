/* 生活手账 Service Worker
   ------------------------------------------------------------------
   为什么要它：托管不给 Cache-Control（实测：sdk 文件被打开 4 次，
   每次 transferSize 都是完整 61KB；响应头只有 Last-Modified）。
   服务器没告诉浏览器「这个能缓存多久」⇒ 浏览器每次都重新下载。

   SW 让缓存策略由我们自己定：
   - app.js / app.css：cache-first（二次打开 0 字节下载）
   - index.html   ：network-first（保证能拿到新版本）

   ------------------------------------------------------------------
   ⛔ 版本号（VER）改名的规矩：
      改了 app.js / app.css 的内容，**必须把 VER 加一**。
      不改的话老用户缓存里的旧代码会被一直用着，看起来像「改了没生效」。

   ⛔⛔⛔ 2026-10-24：**文件名改回固定的 app.js / app.css**。
      之前用的是 app.js 这种带版本号的名字 ⇒ 每发一版就多两个文件，
      GitHub 仓库和托管目录都被历史版本堆满（一次清理了 31 个）。
      ⇒ 现在：文件名固定，版本走 URL 查询参数 `app.js?v=3.28`。
        · CDN/浏览器按完整 URL（含查询参数）缓存 ⇒ 改了 ?v 就是新 URL ⇒ 一定拿新的
        · 仓库永远只有 app.js / app.css 两个文件 ⇒ 不会再乱
      ⇒ VER 仍然必须递增：它是 **缓存名**，SW 换了缓存名才会清掉旧缓存。
   ⛔ 不要缓存 index.html 到永久：那样会永远看不到新版本。
*/
const VER = 'v1793435510997';
const APP_VER = '1793435510997';   // 与 index.html 里 app.js?v= 的值保持一致
const ASSETS = [
  './app.js',
  './app.css',
  './sdk.index.global.js'
];

self.addEventListener('install', (e) => {
  /* ⛔⛔⛔ 2026-10-19 修：安卓 App 的 WebView 长期存活，
     没有 skipWaiting 的话新 SW 会一直卡在 waiting —— 旧 SW 继续管着页面，
     App 永远停在旧版本（用户实测 App=v3.11、浏览器=v3.15）。
     ⇒ install 时立刻 skipWaiting，新缓存一装好就夺权。
     ⛔ 为什么不偷换页面：App 里用户可能正在填表单，
        这里只换「缓存内容」和「接管权」，不主动 reload 当前页面，
        换完等用户下次打开就是新版（index.html 是 network-first，会拿新的）。*/
  e.waitUntil(
    caches.open(VER).then((c) => Promise.allSettled(ASSETS.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  /* 删掉旧版本的缓存，否则缓存会越攒越多 */
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VER).map((k) => caches.delete(k))))
      /*⛔⛔⛔ 2026-10-24：再清掉**当前缓存里带 ?v= 的旧条目**。
         app.js?v=3.25 和 app.js?v=3.28 是两个不同的 URL ⇒ 各存一份
         ⇒ 不清的话每发一版就多一份 311KB。 */
      .then(() => caches.open(VER).then((c) => c.keys()).then((reqs) => {
        const stale = reqs.filter(r => {
          const u = new URL(r.url);
          if (!u.searchParams.has('v')) return false;
          const v = u.searchParams.get('v');
          return v && v !== APP_VER;      // 只留当前版本号
        });
        return Promise.all(stale.map(r => c.delete(r)));
      }))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;      // 只管自己的域
  // ⛔ 自建版：API 与鉴权请求绝不进 SW 缓存，否则读到的是第一次的旧结果
  if (url.pathname.startsWith('/.cloud/') || url.pathname.startsWith('/auth/')) return;

  const isHTML = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');

  // HTML 走 network-first：先试网络（拿到新版），断网回落缓存
  if (isHTML) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(VER).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
    );
    return;
  }

  /*⛔⛔⛔ 2026-10-24：带 ?v= 的请求（app.js?v=3.28）走 **stale-while-revalidate**。
     为什么要单独处理：
       · 页面里引的是 `app.js?v=3.28`，这个 URL 与预缓存的 `./app.js` **不是同一个**
         ⇒ `caches.match(req)` 匹配不到 ⇒ 会每次都回源（慢，但至少是最新的）
       · 优化：先给缓存（快），同时后台更新（下次就是新的）
       · 离线时回落到 `./app.js`（预缓存那份）⇒ 离线仍可用
     ⚠️ 缓存会按完整 URL 各存一份 ⇒ 每发一版多一份 ⇒ 会在 activate 时清理。 */
  if (url.searchParams.has('v')) {
    e.respondWith(
      caches.match(req).then((hit) => {
        const net = fetch(req).then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(VER).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        }).catch(() => hit);
        return hit || net;      // 有缓存先用（快），同时后台刷新
      })
    );
    return;
  }

  // 静态资源走 cache-first
  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(VER).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => hit);
    })
  );
});