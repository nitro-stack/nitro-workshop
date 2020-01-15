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
    "revision": "776f0a4c7ebe183032c4bac8656eef5a"
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
    "url": "assets/js/10.f140f831.js",
    "revision": "d16d2351a6e600614945bdc26cbaa1ba"
  },
  {
    "url": "assets/js/11.4fb4abe8.js",
    "revision": "3ea6ddb7b5d5cfeb026bcda3f2c43cf9"
  },
  {
    "url": "assets/js/12.a622ec17.js",
    "revision": "fe5a91ae7cc335bc44363e8cc65b6ad4"
  },
  {
    "url": "assets/js/13.7c72207c.js",
    "revision": "ed414a8713a0d1cec0de22a77a3e3ce6"
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
    "url": "assets/js/3.17fad2df.js",
    "revision": "31edfc6b6eaf6885c45a3206343cfa0f"
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
    "url": "assets/js/6.ee9cf466.js",
    "revision": "e91c4647e1e6193b741765718ea5ea89"
  },
  {
    "url": "assets/js/7.b3f3a4a8.js",
    "revision": "64c13a37422720d87914c6bd5710c867"
  },
  {
    "url": "assets/js/8.dcfa686b.js",
    "revision": "535c1a8e27272a961ca1cc5d8703a206"
  },
  {
    "url": "assets/js/9.2c440a67.js",
    "revision": "b188859f166234fc7be0d63e5955df3e"
  },
  {
    "url": "assets/js/app.895cd663.js",
    "revision": "5dedad859e33381c20766079e13e4947"
  },
  {
    "url": "conclusion.html",
    "revision": "e0e911951d14ba984b085ae1ae599b4a"
  },
  {
    "url": "env.html",
    "revision": "6eaf4ee3ad0fc37eb9031c5c68bbd612"
  },
  {
    "url": "index.html",
    "revision": "d369e505255d77984dcc052bee8cb58a"
  },
  {
    "url": "intro.html",
    "revision": "bd3e6a95518116ea6b47fbdfc942d922"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "d675238850969e9063a7bda35892c78d"
  },
  {
    "url": "step2/index.html",
    "revision": "332719738470b7b04b394d7a06d7add3"
  },
  {
    "url": "step3/index.html",
    "revision": "3be3fc33f0bce786b9dd69369bac5a9e"
  },
  {
    "url": "step4/index.html",
    "revision": "4da5c19e4dd8d0ec3d7668c621fcb127"
  },
  {
    "url": "step5/index.html",
    "revision": "93132e94c2cb4c6c685836de6fc6d73c"
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
