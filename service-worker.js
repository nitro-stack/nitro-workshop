/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "35aff6a3f2347242ff3677e3cee12a2f"
  },
  {
    "url": "assets/css/0.styles.8e1732fa.css",
    "revision": "acbb83b3bbb7d9a862ff10d1d3f171dd"
  },
  {
    "url": "assets/img/azure.680f0e39.svg",
    "revision": "680f0e39ee86c3a3f5fba16702d4c851"
  },
  {
    "url": "assets/img/nestjs.c596eb94.svg",
    "revision": "c596eb94a634591dc42d2484c5b44ea2"
  },
  {
    "url": "assets/img/remote-open.29f02732.png",
    "revision": "29f027326ae23d4524b2860360845857"
  },
  {
    "url": "assets/img/remote-status.ce80a62c.png",
    "revision": "ce80a62c8808ff25d5725d72e09c7969"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/thats-it.fb910f3b.jpg",
    "revision": "fb910f3b6f69e2b4fb33d948171d522b"
  },
  {
    "url": "assets/js/10.2ef16811.js",
    "revision": "af9bf63d7b8a71b9f9a7bb91daa8f455"
  },
  {
    "url": "assets/js/11.f85304e7.js",
    "revision": "1a02285ba88de480dfc3822c64857f2e"
  },
  {
    "url": "assets/js/12.67ae0a00.js",
    "revision": "15b9a1be1a742e7d462f649b2b486af9"
  },
  {
    "url": "assets/js/13.bb13f2af.js",
    "revision": "c1917ab9e2a973738f322e369f957afc"
  },
  {
    "url": "assets/js/14.3586d5c3.js",
    "revision": "a7f377437b09d91cc9793a81b2b23861"
  },
  {
    "url": "assets/js/15.0377561b.js",
    "revision": "99f83afb96747b8963c752618e18ee35"
  },
  {
    "url": "assets/js/16.8be28db5.js",
    "revision": "96f5de555f73cb96db5371a7024adcb5"
  },
  {
    "url": "assets/js/2.89622c55.js",
    "revision": "bec2496321b91989f479fe421747e404"
  },
  {
    "url": "assets/js/3.fd42e370.js",
    "revision": "fd03df823b86844980c1bd9b4069503e"
  },
  {
    "url": "assets/js/4.1c62fd6e.js",
    "revision": "5170641647ef339ebfb68b1208917f49"
  },
  {
    "url": "assets/js/5.3a590768.js",
    "revision": "38c0920362c2cfb204222b7a5ecf9dc3"
  },
  {
    "url": "assets/js/6.63e3482f.js",
    "revision": "47a4e0a49834d75ede41a35d9c8ad6de"
  },
  {
    "url": "assets/js/7.cc0529e3.js",
    "revision": "7f8aee0516f417654ec40e56c9d253d7"
  },
  {
    "url": "assets/js/8.f221c190.js",
    "revision": "dba7cc63d94dab4d408a627e430da8bf"
  },
  {
    "url": "assets/js/9.2c440a67.js",
    "revision": "b188859f166234fc7be0d63e5955df3e"
  },
  {
    "url": "assets/js/app.dd45aeb6.js",
    "revision": "ef8836e09eb907e38d9adca8228d2e43"
  },
  {
    "url": "conclusion.html",
    "revision": "10c0382658edadcacfc830c3603a3ca4"
  },
  {
    "url": "env.html",
    "revision": "36f122d9da7e9c5f7523b59ef9879dc8"
  },
  {
    "url": "index.html",
    "revision": "1bf07738b00f86f0cb8b377a72d80a11"
  },
  {
    "url": "intro.html",
    "revision": "01c8ee128015e0d9b61a7a2a0a5d9d37"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "a1cc5721a93b00db28f3e18dae4a9394"
  },
  {
    "url": "step2/index.html",
    "revision": "1d21f3d545582fe972864b144acdf62a"
  },
  {
    "url": "step3/index.html",
    "revision": "96f7e88833c8cb3f601a7b9cdaadde34"
  },
  {
    "url": "step4/index.html",
    "revision": "8c89ebebd762b15dcc005889836d8cfb"
  },
  {
    "url": "step5.html",
    "revision": "0d9dddb0428d53bd8aa285955fa14e58"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
