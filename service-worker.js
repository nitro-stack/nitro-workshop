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
    "revision": "be941e336dd0e01efda5c4a602f06a75"
  },
  {
    "url": "assets/css/0.styles.bef55414.css",
    "revision": "923ad1349919592af73a941bf0b7666b"
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
    "url": "assets/js/10.5ea12bf9.js",
    "revision": "8fe31aa0d0ceb0b0816150dcf1718015"
  },
  {
    "url": "assets/js/11.ff8aa475.js",
    "revision": "48465ccdfc55875424d02f0be1b53b24"
  },
  {
    "url": "assets/js/12.22981cf4.js",
    "revision": "d3317db2f8374a9a5efb678c53dc09c1"
  },
  {
    "url": "assets/js/13.f1264ff7.js",
    "revision": "9616a11c7f141332ba7b244d35c3447e"
  },
  {
    "url": "assets/js/14.f7bcb862.js",
    "revision": "142d4377038a9fead12e3e28c539fe3f"
  },
  {
    "url": "assets/js/15.686a4ae0.js",
    "revision": "7252fb4060205a2b940dd6f453814eca"
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
    "url": "assets/js/3.c7002ef4.js",
    "revision": "92e2b8400d0a899584d8d8f9f592d382"
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
    "url": "assets/js/6.e7bba530.js",
    "revision": "e7c2d41724ba99702b82eac20dbb78ac"
  },
  {
    "url": "assets/js/7.bea097d6.js",
    "revision": "d5566dc0569cab1e25362cfade7c952f"
  },
  {
    "url": "assets/js/8.e98e9367.js",
    "revision": "88e48c430bc1f4596ca8445546e82641"
  },
  {
    "url": "assets/js/9.6a72163e.js",
    "revision": "8913fa37182baa2c3314334eac8f8a81"
  },
  {
    "url": "assets/js/app.a46cfba1.js",
    "revision": "948cf05db8cf6c6d27cec64f30350fde"
  },
  {
    "url": "conclusion.html",
    "revision": "7ac62ae3c993f453f284a1c03a2c9a1c"
  },
  {
    "url": "env.html",
    "revision": "f5c29cf20724879d24d5e19fa2e4d393"
  },
  {
    "url": "index.html",
    "revision": "4f3afe7c3a9454d3c5069f2a76d56d2b"
  },
  {
    "url": "intro.html",
    "revision": "d0d7e84656855ca7bf66f1e4847381f8"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "setup.html",
    "revision": "fc11640c96f212bca39f20743965f3b0"
  },
  {
    "url": "step1/index.html",
    "revision": "0702c7fdaccbdc9c77f7ec9fc0162332"
  },
  {
    "url": "step2/index.html",
    "revision": "7dbb2b964c6c6f1751215dae7e923a16"
  },
  {
    "url": "step3/index.html",
    "revision": "5be9584b90e11b6b16cfdce415c7cc8b"
  },
  {
    "url": "step4/index.html",
    "revision": "91f9f3f2e99fa5510ea91c10334000cc"
  },
  {
    "url": "step5/index.html",
    "revision": "58acc8381831b3a59c64387778534b39"
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
