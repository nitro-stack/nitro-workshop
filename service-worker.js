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
    "revision": "4eab2d8cacc3c3eeb6e3166f803902b5"
  },
  {
    "url": "assets/css/0.styles.cea1f138.css",
    "revision": "7d322a0452825c09548e64af05b4d920"
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
    "url": "assets/js/10.351b3e9b.js",
    "revision": "d281d77663efa5d7196d4c0cc0875600"
  },
  {
    "url": "assets/js/11.c0f5f132.js",
    "revision": "21361b427aaa822662296d2f229ffd82"
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
    "url": "assets/js/14.835b6eea.js",
    "revision": "9b2ec8698c20a80b77f138868c6662b6"
  },
  {
    "url": "assets/js/15.ed7b4ba1.js",
    "revision": "e35ee17ac2a64c740d16fc630577f276"
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
    "url": "assets/js/3.5b7b7aa9.js",
    "revision": "8e12787530731f0db082c8c39baa20e7"
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
    "url": "assets/js/7.3eb58b4f.js",
    "revision": "2693109905e3cde8cd063cba744826dd"
  },
  {
    "url": "assets/js/8.05d03b08.js",
    "revision": "2336702fe6a71bc6af1ccfddac4a27a5"
  },
  {
    "url": "assets/js/9.f44a4e00.js",
    "revision": "2cfe598e37aff7936368756f5d6eb4f3"
  },
  {
    "url": "assets/js/app.07ef1f14.js",
    "revision": "cdc8c5d155ca743e86f562f7fa21af3c"
  },
  {
    "url": "conclusion.html",
    "revision": "e8f7aa17bae01ee8e6ad7febe663dc2d"
  },
  {
    "url": "env.html",
    "revision": "20feaf14e84f1a9713a67fbc0a467b54"
  },
  {
    "url": "index.html",
    "revision": "9008c8e217b9fe16573e360e7fa8f3af"
  },
  {
    "url": "intro.html",
    "revision": "0b71096bee6a9b946d925d526cad40b4"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "setup.html",
    "revision": "1f9b544c6cf12e6320ce3d95fe3a1933"
  },
  {
    "url": "step1/index.html",
    "revision": "282f843626fb47cc88eba2962cf29a51"
  },
  {
    "url": "step2/index.html",
    "revision": "a0876742b97ee82e9bf9d803cd09a467"
  },
  {
    "url": "step3/index.html",
    "revision": "2f50f3028658f444d8d917e2aff09d66"
  },
  {
    "url": "step4/index.html",
    "revision": "bc4530540fbfdcd38cb6cdba8cfcd94c"
  },
  {
    "url": "step5/index.html",
    "revision": "67416667c7f034a052b5be333729535b"
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
