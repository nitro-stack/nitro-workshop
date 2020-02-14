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
    "revision": "2fc61977ad8405277e4e71b5964383c6"
  },
  {
    "url": "assets/css/0.styles.7581c615.css",
    "revision": "1648bfdbf1ce7d99405f9408a4b8465b"
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
    "url": "assets/js/10.50a957e5.js",
    "revision": "7dd8d3a851cdb21650d1e0a210f9c03c"
  },
  {
    "url": "assets/js/11.1d046c32.js",
    "revision": "0e5fd566f0d038b591f7826e707f19d8"
  },
  {
    "url": "assets/js/12.cf63405a.js",
    "revision": "e65b7a9c38934de28408ec765f046a4b"
  },
  {
    "url": "assets/js/13.39fed125.js",
    "revision": "84e856c821e6045d3d2a12e57deb5489"
  },
  {
    "url": "assets/js/14.d354194e.js",
    "revision": "7638c6506713edb7326e87fa02d66083"
  },
  {
    "url": "assets/js/15.c805159b.js",
    "revision": "b4be37ca7a898724ec73500eab4555c8"
  },
  {
    "url": "assets/js/16.fc25e7dc.js",
    "revision": "f1ef695ed3ee58275b934afd3b949a77"
  },
  {
    "url": "assets/js/2.70e73962.js",
    "revision": "55e8f2527637223da1a082404ef350b5"
  },
  {
    "url": "assets/js/3.b567dbb0.js",
    "revision": "d5d348fdb1705268fdd468df76546b84"
  },
  {
    "url": "assets/js/4.31cef348.js",
    "revision": "066c02024c8be3c5baba78fa063b98c9"
  },
  {
    "url": "assets/js/5.18300a9a.js",
    "revision": "666826bc9b1704c6f6dbaad6548ea653"
  },
  {
    "url": "assets/js/6.e2e9d1c0.js",
    "revision": "996d79bc5e8b01551b9d6770e6083b99"
  },
  {
    "url": "assets/js/7.d2f34b37.js",
    "revision": "19cd5c3971a0b81d1bf04a81c9e3f91a"
  },
  {
    "url": "assets/js/8.b339e8c3.js",
    "revision": "ffb366fc8e2fc51468662b6a642e2a9f"
  },
  {
    "url": "assets/js/9.1fca62e7.js",
    "revision": "327f6741f18795f29f8a6f29ef6db2d0"
  },
  {
    "url": "assets/js/app.42ec6604.js",
    "revision": "571bf7e5fda05e64958f163eaa3a4dc5"
  },
  {
    "url": "conclusion.html",
    "revision": "87804e8d18e30f2cd872c91120ccd294"
  },
  {
    "url": "env.html",
    "revision": "6538839c7f95e4e601978fcf9e8545b8"
  },
  {
    "url": "index.html",
    "revision": "451fd207fcbe812d3eab525888e56d5a"
  },
  {
    "url": "intro.html",
    "revision": "ae2f0f8890ce71b72a2f22a3c246b52d"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "setup.html",
    "revision": "d697c36d97d8057751693e220d0d018d"
  },
  {
    "url": "step1/index.html",
    "revision": "bb0161c1bd6f8b3849987aa86f561fa5"
  },
  {
    "url": "step2/index.html",
    "revision": "51ffe97d6e70239f7242f147d725a3f8"
  },
  {
    "url": "step3/index.html",
    "revision": "b44b317f43c891773a4662c7bab8cb97"
  },
  {
    "url": "step4/index.html",
    "revision": "f466321eb94d7aa9062c000c1b410a68"
  },
  {
    "url": "step5/index.html",
    "revision": "f2fca6a8acc989ebd13c90e8e8b66cfa"
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
