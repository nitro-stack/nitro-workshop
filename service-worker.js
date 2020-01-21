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
    "revision": "d15fb5a7d30d7e16136ae866bd9ad30b"
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
    "url": "assets/img/thats-it.fb910f3b.jpg",
    "revision": "fb910f3b6f69e2b4fb33d948171d522b"
  },
  {
    "url": "assets/js/10.d965d8f4.js",
    "revision": "a4cd10d109c147f676703eb301e3ebe1"
  },
  {
    "url": "assets/js/11.fe483f38.js",
    "revision": "266a61049bcb20de99a65a849c094ddb"
  },
  {
    "url": "assets/js/12.e615794a.js",
    "revision": "5907c4e2b5853c144555301644574072"
  },
  {
    "url": "assets/js/13.7be9de47.js",
    "revision": "1787c5d7e60f25eb0d0aef0d360533d8"
  },
  {
    "url": "assets/js/14.aabe62ca.js",
    "revision": "f8025d8115d3b8daabb79564afc11155"
  },
  {
    "url": "assets/js/15.b68a732d.js",
    "revision": "3f426e08b036640634fb2ec071098f6b"
  },
  {
    "url": "assets/js/16.8be28db5.js",
    "revision": "96f5de555f73cb96db5371a7024adcb5"
  },
  {
    "url": "assets/js/2.530f1a9a.js",
    "revision": "1f46c19f5873dc4375b3b03a3e100813"
  },
  {
    "url": "assets/js/3.479d6eb7.js",
    "revision": "d17ceb6386c61f9022f52d3b145ffca5"
  },
  {
    "url": "assets/js/4.8804fbfd.js",
    "revision": "208a48ea51056765ab1b62c39c148edb"
  },
  {
    "url": "assets/js/5.22983426.js",
    "revision": "d13d7466accda649bcafa38472095238"
  },
  {
    "url": "assets/js/6.4f86e07c.js",
    "revision": "8d8702896a4954d43a6d893e5bddbf7a"
  },
  {
    "url": "assets/js/7.80ed88e3.js",
    "revision": "ebab10c7ca0c41ee4eae39011fb8dfaa"
  },
  {
    "url": "assets/js/8.6f679d49.js",
    "revision": "90c62d443bc2ef4363b010127d4adaa4"
  },
  {
    "url": "assets/js/9.aff70da2.js",
    "revision": "f512c30c0378da15ef7fceca0ab9a1a1"
  },
  {
    "url": "assets/js/app.a8c672b0.js",
    "revision": "699fb1fd1fefd8d84684476804db50c8"
  },
  {
    "url": "conclusion.html",
    "revision": "63a4beb37db14b6f9e2255300aa545da"
  },
  {
    "url": "env.html",
    "revision": "7b0ff41a6e8a84096f5ef3e6b0ffb9ca"
  },
  {
    "url": "index.html",
    "revision": "46ff41de8ddbc09f65abde24b6d09af7"
  },
  {
    "url": "intro.html",
    "revision": "1298d2a55cad301e66bde7da4432eab5"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "781756c1e150e88522e42e5dc0b3020d"
  },
  {
    "url": "step2/index.html",
    "revision": "bbcf0b7862c74b91cc8a8785391c0459"
  },
  {
    "url": "step3/index.html",
    "revision": "dc8ee243e776c78ccd1d78ba49614e7f"
  },
  {
    "url": "step4/index.html",
    "revision": "b5a3ecbc075d5b714cec0fd993eee212"
  },
  {
    "url": "step5/index.html",
    "revision": "ae8e5f237f40e7d268e5d00a8ab2d79c"
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
