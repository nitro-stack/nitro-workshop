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
    "revision": "f5e11f9d8eab20421c8fc3a264998ac2"
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
    "url": "assets/js/10.326437b4.js",
    "revision": "34751203f663a0a3e72955c8f2f86be8"
  },
  {
    "url": "assets/js/11.9749a7ab.js",
    "revision": "04f2ce2fb5717117165dd0e0fc1e66fb"
  },
  {
    "url": "assets/js/12.569b53b7.js",
    "revision": "023f6dfbd5d03bbf1e76d360093f0749"
  },
  {
    "url": "assets/js/13.0de30082.js",
    "revision": "d212b8f60c662cdaed2f894bf37454b4"
  },
  {
    "url": "assets/js/14.1f7868b1.js",
    "revision": "5484d1dc4a56839fd752a620cd47606b"
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
    "url": "assets/js/5.2da70dcb.js",
    "revision": "66143e83036a514ec5de67f9a260f330"
  },
  {
    "url": "assets/js/6.90d22e05.js",
    "revision": "43b67c3fdb710bcbdd7fa0ef1223c141"
  },
  {
    "url": "assets/js/7.1ec3125c.js",
    "revision": "eb385e564b252b9449ac35e58758fda5"
  },
  {
    "url": "assets/js/8.6f59853a.js",
    "revision": "4c21d291df8f4957c578f54fcb8652fb"
  },
  {
    "url": "assets/js/9.5bdf37e3.js",
    "revision": "c4c0eb856bcba0dc6507f96b3ad70d5e"
  },
  {
    "url": "assets/js/app.defbd54a.js",
    "revision": "26239494b91e8840e645405a6d6822b4"
  },
  {
    "url": "conclusion.html",
    "revision": "23ac0201268d696d0a56371fcc0b0d08"
  },
  {
    "url": "env.html",
    "revision": "89f8b2568a236be554c88d8bd847fc1f"
  },
  {
    "url": "index.html",
    "revision": "0fd80d545ac5ff2c9f1217e026f6880f"
  },
  {
    "url": "intro.html",
    "revision": "c5a4ca1b2a96517cb491a9da9ab2d7cc"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "fa4380e39a9fcf29096c3afdfa03df19"
  },
  {
    "url": "step2/index.html",
    "revision": "df505686cb2d6fc70e910b7438c56393"
  },
  {
    "url": "step3/index.html",
    "revision": "0922d12570935c4a0f6ea0ae3d1e69bd"
  },
  {
    "url": "step4/index.html",
    "revision": "e0fa5449b272090532b3094d5eae7ee7"
  },
  {
    "url": "step5/index.html",
    "revision": "de7ce0c6009ac8b94548ccf7ae2eac12"
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
