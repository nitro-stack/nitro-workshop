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
    "revision": "107440315188aee17f5a95d12bbe4da0"
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
    "url": "assets/js/11.53b2322d.js",
    "revision": "4f3a9022c1fa137328017db3e52ab95d"
  },
  {
    "url": "assets/js/12.8bbf03fc.js",
    "revision": "8a4b589c9db51c1fdf485f081e4cb650"
  },
  {
    "url": "assets/js/13.96023329.js",
    "revision": "007d62458434d5891b8179df21ca2454"
  },
  {
    "url": "assets/js/14.4a694840.js",
    "revision": "509624a9c4ded53927867d2fbde4553c"
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
    "url": "assets/js/6.e7e8cc50.js",
    "revision": "084c98cd6c8c097709bbf728add0c6ba"
  },
  {
    "url": "assets/js/7.cc72e158.js",
    "revision": "caf42dbea001a971963345c6e3d38457"
  },
  {
    "url": "assets/js/8.690c7d72.js",
    "revision": "d9f677d8a921e3d460d6d014f3302dc6"
  },
  {
    "url": "assets/js/9.2c440a67.js",
    "revision": "b188859f166234fc7be0d63e5955df3e"
  },
  {
    "url": "assets/js/app.79ff9aa9.js",
    "revision": "9c1ac399fa12031df1ffbfa7c125e593"
  },
  {
    "url": "conclusion.html",
    "revision": "5531fce8557183937a6ff0df0fec3cf3"
  },
  {
    "url": "env.html",
    "revision": "4e0e36650592dab3a831b45a7b182541"
  },
  {
    "url": "index.html",
    "revision": "8ba33552700f6467965c67ad1b6f16b9"
  },
  {
    "url": "intro.html",
    "revision": "36e363ad7f0cbc4872156dd5f3f3deab"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "dab5787cae121c830fd9922f1b8140fc"
  },
  {
    "url": "step2/index.html",
    "revision": "61ef6213b01fe92c02b3fe57776e9121"
  },
  {
    "url": "step3/index.html",
    "revision": "460062fd3adad57675ff1e1c915062b9"
  },
  {
    "url": "step4/index.html",
    "revision": "88255902f0033a5f629fbd4571683b73"
  },
  {
    "url": "step5/index.html",
    "revision": "908b80448eddd92f596f31b23bc16204"
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
