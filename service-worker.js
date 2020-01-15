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
    "revision": "3d7c63e2d0b92046dadd80e9bc655fa9"
  },
  {
    "url": "assets/css/0.styles.50f1f6e2.css",
    "revision": "b6aef0f5473e93dc003ac2a4bb355738"
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
    "url": "assets/js/10.ef3ce9f5.js",
    "revision": "a93fdd78009884775cce292665af1b6e"
  },
  {
    "url": "assets/js/11.34a9602d.js",
    "revision": "6c2e632294bbecb616b1a29def0f1e19"
  },
  {
    "url": "assets/js/12.8bbf03fc.js",
    "revision": "8a4b589c9db51c1fdf485f081e4cb650"
  },
  {
    "url": "assets/js/13.dcd0550d.js",
    "revision": "e59a6644bda92567fc433f60e91b1c28"
  },
  {
    "url": "assets/js/14.4af8a3f8.js",
    "revision": "09fc03cdde4e60cfd2ac834bb9d77579"
  },
  {
    "url": "assets/js/15.f18ae210.js",
    "revision": "9b9c437f033ce59318e99a098623f05f"
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
    "url": "assets/js/3.2b65d60a.js",
    "revision": "44947a6397f854f9783ed58958b6c778"
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
    "url": "assets/js/6.89b285c2.js",
    "revision": "761eaaf6e2eaac379e000dea4be5855c"
  },
  {
    "url": "assets/js/7.bfa3dc8f.js",
    "revision": "081d14158c1c9ea162d5dbec99cee09f"
  },
  {
    "url": "assets/js/8.8f8238d7.js",
    "revision": "69f22972256ec9a72f38d9598bd23d50"
  },
  {
    "url": "assets/js/9.2c440a67.js",
    "revision": "b188859f166234fc7be0d63e5955df3e"
  },
  {
    "url": "assets/js/app.e9ad3f4d.js",
    "revision": "4a96119d34053d05ca0551c99e5726b4"
  },
  {
    "url": "conclusion.html",
    "revision": "a79f69034b80c338d07237a8934778f4"
  },
  {
    "url": "env.html",
    "revision": "0bfcf48b6ea1e5fff768716f6916df0e"
  },
  {
    "url": "index.html",
    "revision": "8bcf5a5c58cb94b1566c53f6d00cf488"
  },
  {
    "url": "intro.html",
    "revision": "dd902ede2d7fd5e50ca77104673cfb4d"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "8873038284b15d82fbc1a009898d02d6"
  },
  {
    "url": "step2/index.html",
    "revision": "865d077bdb70c7cc06ee46ba52815891"
  },
  {
    "url": "step3/index.html",
    "revision": "dd51c989b5ffad5e7f10b3dc8cddf7bc"
  },
  {
    "url": "step4/index.html",
    "revision": "bca96024f658b87c6d4e37acdbcab54f"
  },
  {
    "url": "step5/index.html",
    "revision": "d49499cb192628cd94c33127fd5d70ca"
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
