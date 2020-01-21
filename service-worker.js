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
    "revision": "5c9c63c0d93436aec1509546e03b901a"
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
    "url": "assets/js/10.d66170af.js",
    "revision": "1965f4067d82598bfbf4a71b0d659795"
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
    "url": "assets/js/13.63cbaa9e.js",
    "revision": "a822aacab5732280a73ad2c7a8170794"
  },
  {
    "url": "assets/js/14.6ec9b572.js",
    "revision": "040171dd80dd3db9fb19349eab5987fa"
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
    "url": "assets/js/5.453f565c.js",
    "revision": "57a883431656846a823b2145696934e5"
  },
  {
    "url": "assets/js/6.91256258.js",
    "revision": "6e7de439092884501beed041f74d466f"
  },
  {
    "url": "assets/js/7.e5812e74.js",
    "revision": "c9e5eabae0e1243fca29967cbf755f37"
  },
  {
    "url": "assets/js/8.03c8c0d5.js",
    "revision": "4d47e20d7dd2d3a7a08218a008dfb728"
  },
  {
    "url": "assets/js/9.b65f2e22.js",
    "revision": "f4d308461be5a3eb2aded35e34e2a173"
  },
  {
    "url": "assets/js/app.fccc7601.js",
    "revision": "16a1031ea7aa8228736a16f4bac91be9"
  },
  {
    "url": "conclusion.html",
    "revision": "9a071a7c56604bdd84edcc5ff8dccff9"
  },
  {
    "url": "env.html",
    "revision": "62b1cd61f8679d6f9be245ee905be667"
  },
  {
    "url": "index.html",
    "revision": "9faf786737fc5c8847b875fea07423f6"
  },
  {
    "url": "intro.html",
    "revision": "07f3fca31d1c45e9d4e1ae4b0fe29510"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "dd3c551e236384e595e92fb2d02c1c46"
  },
  {
    "url": "step2/index.html",
    "revision": "45d6d03954e54c09bbb55de347443499"
  },
  {
    "url": "step3/index.html",
    "revision": "30ab7afd582ff638a695ae3ab0518e6e"
  },
  {
    "url": "step4/index.html",
    "revision": "a6f5923053a79986a7156d954e54360d"
  },
  {
    "url": "step5/index.html",
    "revision": "0eb65c46d703909e899f32d2a310d3ed"
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
