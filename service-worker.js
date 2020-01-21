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
    "revision": "27d832b5e7396ad5d6d178c143ca83fa"
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
    "url": "assets/js/10.4c1fd152.js",
    "revision": "f49c06eb2bd44a7b8f53084831d4760c"
  },
  {
    "url": "assets/js/11.46a938ce.js",
    "revision": "8df3df04959e8299d80377131da559c4"
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
    "url": "assets/js/5.44904030.js",
    "revision": "5118e500b603c0267cfc1695b1511b3e"
  },
  {
    "url": "assets/js/6.d6471253.js",
    "revision": "2948bb833b60911e99bbb27dbd00a8b5"
  },
  {
    "url": "assets/js/7.dd80547f.js",
    "revision": "bd2dcd6edd7e56034edb20f8190d81cd"
  },
  {
    "url": "assets/js/8.b4bbf2a1.js",
    "revision": "d3878ea717399ec7cf6b3f22bbcbd501"
  },
  {
    "url": "assets/js/9.1f4b4d44.js",
    "revision": "07cd10ccf5e44ad63a7195228eb25cfe"
  },
  {
    "url": "assets/js/app.4b6a19b7.js",
    "revision": "28c93f64cb2806659daeb8de40deaac0"
  },
  {
    "url": "conclusion.html",
    "revision": "6426cdb17518daa597dc61acf9ef4bdb"
  },
  {
    "url": "env.html",
    "revision": "bd84ecbeaf359d7c7a5c3de8970ee1ab"
  },
  {
    "url": "index.html",
    "revision": "d9214f22cba1dcde366461961651d5f7"
  },
  {
    "url": "intro.html",
    "revision": "8cd1d1f9d230aad45cc9255fa3644e32"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "37911f4e1357620ff345fc0be829cca2"
  },
  {
    "url": "step2/index.html",
    "revision": "72b565e1f80dc6f86c3bbea443a2574c"
  },
  {
    "url": "step3/index.html",
    "revision": "e52a6f649b1906ff1546cfb52ed48d17"
  },
  {
    "url": "step4/index.html",
    "revision": "267addc401c8619124732ed3bbad680c"
  },
  {
    "url": "step5/index.html",
    "revision": "0ae836125affb69480700ded1f873719"
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
