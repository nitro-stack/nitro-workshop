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
    "revision": "f06e013004ca1b7e7f8b1e7cca7c8831"
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
    "url": "assets/img/happycat.b0ef3f29.jpg",
    "revision": "b0ef3f29d84e4650b530c38308c69eaf"
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
    "url": "assets/js/10.7addd5e4.js",
    "revision": "69c012e0288b8efc93fadc29095ee1d6"
  },
  {
    "url": "assets/js/11.361b812c.js",
    "revision": "59352a2bf1fac761b30bbd45f6b87a2f"
  },
  {
    "url": "assets/js/12.e88db6c4.js",
    "revision": "ead7d4cd8a0a09e6493594f94a8a4353"
  },
  {
    "url": "assets/js/13.cf21522e.js",
    "revision": "739127c2536fb3b3be3fbad23ca2e9a3"
  },
  {
    "url": "assets/js/14.c9b626cf.js",
    "revision": "4a51e2af70626f6d776126563772fd83"
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
    "url": "assets/js/2.f97841ae.js",
    "revision": "be04fdedc8bca74a4f5d021c29d37976"
  },
  {
    "url": "assets/js/3.93b493b7.js",
    "revision": "286e121f79c7d5ce734d8185bb29fe9a"
  },
  {
    "url": "assets/js/4.35320263.js",
    "revision": "d246f928344669c040bdc6518828b926"
  },
  {
    "url": "assets/js/5.508e54cd.js",
    "revision": "45af6da24e6f358e5fd0acf044c4721c"
  },
  {
    "url": "assets/js/6.1a44795e.js",
    "revision": "80e06827a4e0f027e673f39b559fe0b9"
  },
  {
    "url": "assets/js/7.5f4ec513.js",
    "revision": "97f9634c8416678c197acb76552683ba"
  },
  {
    "url": "assets/js/8.690c7d72.js",
    "revision": "d9f677d8a921e3d460d6d014f3302dc6"
  },
  {
    "url": "assets/js/9.ef05d275.js",
    "revision": "d3208df59defb794567b6574327d6c6a"
  },
  {
    "url": "assets/js/app.801baf2b.js",
    "revision": "dde77f21f149bb609effa000de288f48"
  },
  {
    "url": "conclusion.html",
    "revision": "0867fe2d0dcb53b3cdde5b10a3d118bb"
  },
  {
    "url": "env.html",
    "revision": "9f26f6a0097e223bdef28bb104d27a7b"
  },
  {
    "url": "index.html",
    "revision": "bfd2cb16f637854558563fa4def940b7"
  },
  {
    "url": "intro.html",
    "revision": "cfc3ff0a7b7f8d24f0f0cecca74c42ad"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "009ca39c5890f68c111aa13ea8f95e78"
  },
  {
    "url": "step2/index.html",
    "revision": "ef06ed148eee406d279ef77259730a87"
  },
  {
    "url": "step3/index.html",
    "revision": "4b1d6f82ea1574a2e9ecc650a512257a"
  },
  {
    "url": "step4/index.html",
    "revision": "dcf6b5efd1ba4df1e0b4c0d36331375d"
  },
  {
    "url": "step5/index.html",
    "revision": "462714e04eef2d99163716dec79b0ceb"
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
