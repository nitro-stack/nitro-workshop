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
    "revision": "2ca38d79224d6687ae30fd4897f3e6ba"
  },
  {
    "url": "assets/css/0.styles.e0ba4cd8.css",
    "revision": "9f72d7d370b3913dadd6a3ff3f8c35fa"
  },
  {
    "url": "assets/img/azure.680f0e39.svg",
    "revision": "680f0e39ee86c3a3f5fba16702d4c851"
  },
  {
    "url": "assets/img/cors-error.8f5afbe2.jpg",
    "revision": "8f5afbe2837d12693744e7154ee3b628"
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
    "url": "assets/img/storage1.7be5d2bb.png",
    "revision": "7be5d2bbbedf9464454418f016460b33"
  },
  {
    "url": "assets/img/storage2.b49cb9dd.png",
    "revision": "b49cb9dd4578e6dc7764a75e75743696"
  },
  {
    "url": "assets/img/tag.d7726bec.png",
    "revision": "d7726beca04b12f915f3d18e87b54ea5"
  },
  {
    "url": "assets/img/thats-it.fb910f3b.jpg",
    "revision": "fb910f3b6f69e2b4fb33d948171d522b"
  },
  {
    "url": "assets/js/10.46a9dba0.js",
    "revision": "f22a4f02e17e1a53121979c2b1fa3575"
  },
  {
    "url": "assets/js/11.4af0a601.js",
    "revision": "2b6c5efc854007663135c2351366c5bd"
  },
  {
    "url": "assets/js/12.569b53b7.js",
    "revision": "023f6dfbd5d03bbf1e76d360093f0749"
  },
  {
    "url": "assets/js/13.6533b08a.js",
    "revision": "79610369fd255c2de87c7c1a7d7b26e8"
  },
  {
    "url": "assets/js/14.1ed58de7.js",
    "revision": "95abe2efb462374f17f730cbdad0e877"
  },
  {
    "url": "assets/js/15.9aa5f87e.js",
    "revision": "f25e9c25ba0e8e47b2f31e24f8484a1a"
  },
  {
    "url": "assets/js/2.37e49c15.js",
    "revision": "6667da70bf737ce12f07f8a89b3b5672"
  },
  {
    "url": "assets/js/3.8d928ecf.js",
    "revision": "ded7a05aaba7214228f150773d335fe8"
  },
  {
    "url": "assets/js/4.f4ff603a.js",
    "revision": "353afcc1286d4a19524ff11a4b9f5caa"
  },
  {
    "url": "assets/js/5.a8ed8633.js",
    "revision": "d1e437c825fbfee346aa7b94633b6ab5"
  },
  {
    "url": "assets/js/6.7d0ff200.js",
    "revision": "5e9d942a7129bd62c6cb94f84a302086"
  },
  {
    "url": "assets/js/7.533ffd45.js",
    "revision": "56563ca28ed0442a07cf5cee7a914226"
  },
  {
    "url": "assets/js/8.a3dee27a.js",
    "revision": "40386b039180dc8f94a7a833539b8970"
  },
  {
    "url": "assets/js/9.b65f2e22.js",
    "revision": "f4d308461be5a3eb2aded35e34e2a173"
  },
  {
    "url": "assets/js/app.4a4fd523.js",
    "revision": "0d96933b9c33aee076cf56ec04ae970f"
  },
  {
    "url": "conclusion.html",
    "revision": "81231e43142a961ff4ff3ff02705056b"
  },
  {
    "url": "env.html",
    "revision": "db5eb1f20228e7f995b4915b3aba59bd"
  },
  {
    "url": "index.html",
    "revision": "15cfb7c86edb6827065af3d3bf59165a"
  },
  {
    "url": "intro.html",
    "revision": "3274fe38238c4b85b693ff0b5475f7bd"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "3ca21a02eac9ebac264e5c325aed44f6"
  },
  {
    "url": "step2/index.html",
    "revision": "2ca4ecd54aaab6ce953cfa3c0f27eb67"
  },
  {
    "url": "step3/index.html",
    "revision": "247c70a1fbdba3b8971a25b05ffe99f5"
  },
  {
    "url": "step4/index.html",
    "revision": "4a8c052a5e04bef5771c6c461f2cfd23"
  },
  {
    "url": "step5/index.html",
    "revision": "c72847e6881ba35b1e8f1a72311d3c62"
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
