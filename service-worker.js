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
    "revision": "8a53b194c4f040e123dca480c40fa51b"
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
    "url": "assets/js/13.2d0211e8.js",
    "revision": "3d53e97b744c289bb21a751ec755615f"
  },
  {
    "url": "assets/js/14.cb508a72.js",
    "revision": "b70b98c91655804c8661c1775c0071bb"
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
    "url": "assets/js/5.b38633cc.js",
    "revision": "a25c97099b7860fd6bf693f28dc98d10"
  },
  {
    "url": "assets/js/6.288635af.js",
    "revision": "73c14d8a6c411864bfc4852b01ae1d97"
  },
  {
    "url": "assets/js/7.b8708583.js",
    "revision": "bd06090637df99e755de6b2f850a2cf7"
  },
  {
    "url": "assets/js/8.bf8be91b.js",
    "revision": "ece65bfbae033087d55e9a586742b88a"
  },
  {
    "url": "assets/js/9.e035ea19.js",
    "revision": "34ed90e0d727bdb2d0f7983aeafcd5ba"
  },
  {
    "url": "assets/js/app.4b20a700.js",
    "revision": "3c87f89d7613aba80ce1405e1c0d436d"
  },
  {
    "url": "conclusion.html",
    "revision": "55a4436d1244ed3cad9ce332d68a61bb"
  },
  {
    "url": "env.html",
    "revision": "3aa09e1af252f11d1a24a571b94a4c54"
  },
  {
    "url": "index.html",
    "revision": "5a768a60c89668e2757be47816a9f84c"
  },
  {
    "url": "intro.html",
    "revision": "3bfe9460bf73ba066bde917f84233b21"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "ea9fff34c4b69ff2e78ca472103abf6f"
  },
  {
    "url": "step2/index.html",
    "revision": "8e36a9cc0d8adc2f06d3ce426b4016ee"
  },
  {
    "url": "step3/index.html",
    "revision": "ec9d873374ed1e20951d6fa84a9253f9"
  },
  {
    "url": "step4/index.html",
    "revision": "a4522b46733a4c2fa9b345f83396398c"
  },
  {
    "url": "step5/index.html",
    "revision": "55308a0eb8c188882d3bb613c28f70a3"
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
