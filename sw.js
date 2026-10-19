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
      文件名带版本号（app.32.js）也是同一个目的：新版本是新 URL，
      旧缓存自然失效，不需要手动清。
   ⛔ 不要缓存 index.html 到永久：那样会永远看不到新版本。
*/
const VER = 'v317';
const ASSETS = [
  './app.317.js',
  './app.317.css',
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
  // 删掉旧版本的缓存，否则缓存会越攒越多
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VER).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;      // 只管自己的域

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