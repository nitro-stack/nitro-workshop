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
    "revision": "f8f693d3717a8a45957a36112053b0f4"
  },
  {
    "url": "assets/css/0.styles.a1e28b27.css",
    "revision": "c619fd02555003ca23b407587017b696"
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
    "url": "assets/img/cosmos-db.f635c65e.png",
    "revision": "f635c65e4fc26a851f7c09b55cd94573"
  },
  {
    "url": "assets/img/cosmos-explorer.2c355978.png",
    "revision": "2c35597873b14f00845ef2c14417ea56"
  },
  {
    "url": "assets/img/cosmos-portal.dba52ccd.png",
    "revision": "dba52ccdc0fdad8c6153ffa102c9eb09"
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
    "url": "assets/img/tag.d7726bec.png",
    "revision": "d7726beca04b12f915f3d18e87b54ea5"
  },
  {
    "url": "assets/img/thats-it.fb910f3b.jpg",
    "revision": "fb910f3b6f69e2b4fb33d948171d522b"
  },
  {
    "url": "assets/img/try-explorer.9ef0237a.png",
    "revision": "9ef0237ad583f01402ab53e2ed3d8748"
  },
  {
    "url": "assets/img/try1.d2bea64c.png",
    "revision": "d2bea64c3a70164a5a91cb3ebfbe3349"
  },
  {
    "url": "assets/img/try2.d2076d4c.png",
    "revision": "d2076d4c0944b882b4a5a9d715313142"
  },
  {
    "url": "assets/img/try3.d40b54e3.png",
    "revision": "d40b54e32e0c17627e9f4543d2824f6c"
  },
  {
    "url": "assets/img/try4.c954a03e.png",
    "revision": "c954a03e3079d001a7014f5a085b1ab5"
  },
  {
    "url": "assets/img/try5.bd45ed70.png",
    "revision": "bd45ed70cde8414f35f246981b58af0c"
  },
  {
    "url": "assets/js/10.6345423c.js",
    "revision": "325d0df3f5a76a0f3e6f0e218bee7616"
  },
  {
    "url": "assets/js/11.1e282ad7.js",
    "revision": "8b7dc156b40000d57770e2bd23506ddc"
  },
  {
    "url": "assets/js/12.93ac978b.js",
    "revision": "e85883dfc9cef478a8cd7df852006761"
  },
  {
    "url": "assets/js/13.f1264ff7.js",
    "revision": "9616a11c7f141332ba7b244d35c3447e"
  },
  {
    "url": "assets/js/14.96d2f4bc.js",
    "revision": "d07e4e7d3273a494a3be8dda14e32c9e"
  },
  {
    "url": "assets/js/15.e54270ea.js",
    "revision": "3bc010dddb4795e14a44daa39caa3a63"
  },
  {
    "url": "assets/js/16.8fd0dd7c.js",
    "revision": "9111c75b06fac98ee202be7d18413013"
  },
  {
    "url": "assets/js/2.37837671.js",
    "revision": "a7331b07fc910930048f9e77885e6d1a"
  },
  {
    "url": "assets/js/3.0da9a229.js",
    "revision": "02d709cc76188beb3a6cca419361779e"
  },
  {
    "url": "assets/js/4.629eb8d2.js",
    "revision": "a62f7bbb8fe4c426e0286bcf545d48f8"
  },
  {
    "url": "assets/js/5.6cf4e94b.js",
    "revision": "7b89b8c336d2762f7d4db87f7db6f902"
  },
  {
    "url": "assets/js/6.d69e349b.js",
    "revision": "0419eea2ce2580b354121d64a5331cd3"
  },
  {
    "url": "assets/js/7.1c6d1ffd.js",
    "revision": "1322c05c5d45dfe93cb70c119b206a0e"
  },
  {
    "url": "assets/js/8.e98e9367.js",
    "revision": "88e48c430bc1f4596ca8445546e82641"
  },
  {
    "url": "assets/js/9.f44a4e00.js",
    "revision": "2cfe598e37aff7936368756f5d6eb4f3"
  },
  {
    "url": "assets/js/app.2d92ed32.js",
    "revision": "f7de85acba94028e7f57a3f67cecd771"
  },
  {
    "url": "conclusion.html",
    "revision": "e56947927de92cad4d7ac03864b0f641"
  },
  {
    "url": "env.html",
    "revision": "cf07f984dcce652a0ec3082ddebd46ca"
  },
  {
    "url": "index.html",
    "revision": "b424463b407a6a189495bff7342cfc2e"
  },
  {
    "url": "intro.html",
    "revision": "ae8f955153c2fc2a4ff7d6bc713ff56f"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "setup.html",
    "revision": "06e7d024bd04ac08365ace5d53a6b181"
  },
  {
    "url": "step1/index.html",
    "revision": "0485e32f5278fdd7f443dc44bb4862ac"
  },
  {
    "url": "step2/index.html",
    "revision": "5f9b471537a3c086030c73c5d230fa33"
  },
  {
    "url": "step3/index.html",
    "revision": "176f0c43288794637a1dffe943620aad"
  },
  {
    "url": "step4/index.html",
    "revision": "057f7e3d416049a5711f245b028090c7"
  },
  {
    "url": "step5/index.html",
    "revision": "56312b5c426ba7e175c48efebbe7d5e5"
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
