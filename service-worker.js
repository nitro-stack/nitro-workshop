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
    "revision": "958bb10f2856f0f6496e02cab93f5f18"
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
    "url": "assets/js/10.a7d61bf4.js",
    "revision": "4dff68e54d16eb72b86a63223a01c868"
  },
  {
    "url": "assets/js/11.63366b7d.js",
    "revision": "f95b31a79bf23a0740303c1c43501dba"
  },
  {
    "url": "assets/js/12.569b53b7.js",
    "revision": "023f6dfbd5d03bbf1e76d360093f0749"
  },
  {
    "url": "assets/js/13.e29da6bd.js",
    "revision": "129ed9f125851c18131399493650db1a"
  },
  {
    "url": "assets/js/14.b38915ae.js",
    "revision": "bae3d8824e8d62d0cba182af33aa8ed2"
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
    "url": "assets/js/5.ad75a9f6.js",
    "revision": "cf13a3b6100dec69052b99a47fb4ebb6"
  },
  {
    "url": "assets/js/6.c32032d7.js",
    "revision": "3b24983469bf005a5eb5f800b8ec0cd2"
  },
  {
    "url": "assets/js/7.e990fc13.js",
    "revision": "4e2fbc3b60e81ffe37a7b04182fda889"
  },
  {
    "url": "assets/js/8.ac2e6214.js",
    "revision": "44881dec852b5d35af3134d00beb5be2"
  },
  {
    "url": "assets/js/9.af10bc55.js",
    "revision": "b306bc3bf0aefb61a4ed8cea524de1ae"
  },
  {
    "url": "assets/js/app.97a78a11.js",
    "revision": "872df639c4f3d2e068f281ffacf9e286"
  },
  {
    "url": "conclusion.html",
    "revision": "dc16add4ebd8a96a706e11bccab6f86a"
  },
  {
    "url": "env.html",
    "revision": "1e604695c849886703e6eb1b1b2af8be"
  },
  {
    "url": "index.html",
    "revision": "bd04b908241e9786ab60460f41d4b252"
  },
  {
    "url": "intro.html",
    "revision": "1c54cebdc629c17e7d314cf242aef024"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "974696a0774c5f5ddc635f61ff6c2855"
  },
  {
    "url": "step2/index.html",
    "revision": "249f35994eda11dd4fc7bbf57d544dc6"
  },
  {
    "url": "step3/index.html",
    "revision": "e493cc0cc33e9b709fc8ab48d7af1859"
  },
  {
    "url": "step4/index.html",
    "revision": "f58541c2f1a9895048f26e3a3598f0ca"
  },
  {
    "url": "step5/index.html",
    "revision": "fa42006eec17326f00d8b3b3a128d497"
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
