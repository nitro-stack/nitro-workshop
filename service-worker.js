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
    "revision": "54857ce563685809c497605a3dc7be43"
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
    "url": "assets/js/10.6430b891.js",
    "revision": "c88a21b861cd79795e46f95130047009"
  },
  {
    "url": "assets/js/11.84959e0b.js",
    "revision": "c0ce5dd3d69529f08a1bd10a6f411f79"
  },
  {
    "url": "assets/js/12.e615794a.js",
    "revision": "5907c4e2b5853c144555301644574072"
  },
  {
    "url": "assets/js/13.24234338.js",
    "revision": "f489610d22f9dcc84987b38c4e975f6f"
  },
  {
    "url": "assets/js/14.1c0d94b4.js",
    "revision": "46227b14a4d7f30f5be3f3787831c73c"
  },
  {
    "url": "assets/js/15.1eb9cd0d.js",
    "revision": "c979b70238e7b7d40f5b3df2d595d4ea"
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
    "url": "assets/js/6.4c833a2d.js",
    "revision": "9c9a65e974af5bea64a43b1a1c9e823b"
  },
  {
    "url": "assets/js/7.9dad96fc.js",
    "revision": "b4b4c3367a992e9dd53f9df565e1bc82"
  },
  {
    "url": "assets/js/8.50c6baae.js",
    "revision": "38dd6a4bb3b9ad75a1f910114f1c4e5e"
  },
  {
    "url": "assets/js/9.4971819a.js",
    "revision": "7f0ba8f1d085efa8eb503571090742d9"
  },
  {
    "url": "assets/js/app.bd59fed1.js",
    "revision": "395d327b5a1cdac9a8e435bebd075d19"
  },
  {
    "url": "conclusion.html",
    "revision": "9813eb2de45038681188135f5ae18e88"
  },
  {
    "url": "env.html",
    "revision": "c369a5b16ea1daac31b628ced0784434"
  },
  {
    "url": "index.html",
    "revision": "8b5f9c312979ef9005e4750dfdb95f19"
  },
  {
    "url": "intro.html",
    "revision": "c2d6ec615930a6611d2faaac3b495747"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "210fe00463ae19d38986aa3599fd960b"
  },
  {
    "url": "step2/index.html",
    "revision": "a5ada959e4bd91532b4b24696411cb25"
  },
  {
    "url": "step3/index.html",
    "revision": "9487d8dca52c2a27669a4c11ffbb0fd7"
  },
  {
    "url": "step4/index.html",
    "revision": "6753f960babd90bd5c9ee6778e64fff6"
  },
  {
    "url": "step5/index.html",
    "revision": "7fb75e14182a26c3258e304eb9b7b8b9"
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
