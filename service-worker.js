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
    "revision": "5c2d66c8346f11cbc07c00acbefe9470"
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
    "url": "assets/js/10.908280dd.js",
    "revision": "7c06c75f5999a2f63ff8f136a53dd625"
  },
  {
    "url": "assets/js/11.02d6c49f.js",
    "revision": "825d9b111798f40a6a6c762a581dbd1b"
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
    "url": "assets/js/14.a45a9f5e.js",
    "revision": "11220258269b980279ce57e792e9c1a5"
  },
  {
    "url": "assets/js/15.d01bc0b1.js",
    "revision": "52b95d0a82a82450952cdd969d44f5d1"
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
    "url": "assets/js/3.f6568e5c.js",
    "revision": "6046438090a0cee5efcc8776e9095c71"
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
    "url": "assets/js/7.dc38ccd0.js",
    "revision": "7c7f5b55731939d4540e28a2efb2bdf1"
  },
  {
    "url": "assets/js/8.edd52f9a.js",
    "revision": "89895480597c9ffb119b59ea0d5cfc50"
  },
  {
    "url": "assets/js/9.94f83160.js",
    "revision": "d2f4401c3d52b19e64adbc38c104605c"
  },
  {
    "url": "assets/js/app.df72fc6b.js",
    "revision": "2000715b0d9be46a17f59520b1760fe2"
  },
  {
    "url": "conclusion.html",
    "revision": "0e85876087e0f81f844270523dfe6d0d"
  },
  {
    "url": "env.html",
    "revision": "2c97b1dc2e189321984fb2fedabe2700"
  },
  {
    "url": "index.html",
    "revision": "5d83d3d9ab13a7c4f7a95c707ebdb36c"
  },
  {
    "url": "intro.html",
    "revision": "46ab415390d52aa691e22747481f9e4e"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "setup.html",
    "revision": "c05c8d8385bb8789503b0a87df83e1c5"
  },
  {
    "url": "step1/index.html",
    "revision": "bdbee3cbcd8788f48029ad0f13e111a8"
  },
  {
    "url": "step2/index.html",
    "revision": "f72e1211b3268bc1eae9b6cb4c06f275"
  },
  {
    "url": "step3/index.html",
    "revision": "93520b0cfde5090c1948aae2c269fd7e"
  },
  {
    "url": "step4/index.html",
    "revision": "98a87d8b16df9746dd226f901bf795ef"
  },
  {
    "url": "step5/index.html",
    "revision": "06ee610cf778b45430faa0e92d5e0226"
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
