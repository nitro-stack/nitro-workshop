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
    "revision": "ab503000d65016bac39962052bf63f4d"
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
    "url": "assets/js/10.718f8667.js",
    "revision": "76c7cf59c71d08ce049130c65b35e64f"
  },
  {
    "url": "assets/js/11.baeead49.js",
    "revision": "3aa62fd419dd7ae69d5f014340a15756"
  },
  {
    "url": "assets/js/12.97ba555b.js",
    "revision": "0ca834100e61ba149f1fbace17a9e276"
  },
  {
    "url": "assets/js/13.10e82472.js",
    "revision": "84e856c821e6045d3d2a12e57deb5489"
  },
  {
    "url": "assets/js/14.ac6bab50.js",
    "revision": "4bec83291c8f6c92bd1ee9c6f31b93d1"
  },
  {
    "url": "assets/js/15.59069cd3.js",
    "revision": "8b9b68183a3ccb25317e9196b1d71ded"
  },
  {
    "url": "assets/js/16.225a1e0c.js",
    "revision": "f1ef695ed3ee58275b934afd3b949a77"
  },
  {
    "url": "assets/js/2.8046322f.js",
    "revision": "ecaf0a1df69b5b72e73a0a2b892d35f5"
  },
  {
    "url": "assets/js/3.66da2074.js",
    "revision": "d5d348fdb1705268fdd468df76546b84"
  },
  {
    "url": "assets/js/4.97c0017c.js",
    "revision": "c9d14737a527e45fe7809021de82b7ac"
  },
  {
    "url": "assets/js/5.9ed9f84b.js",
    "revision": "432fda0db0724687849e3f4f4f11eea0"
  },
  {
    "url": "assets/js/6.c6d14396.js",
    "revision": "4f9c3daeb861537e80ee5900ee8855ae"
  },
  {
    "url": "assets/js/7.367b792d.js",
    "revision": "844dac39c0ec61a5c0bda9098fb4d171"
  },
  {
    "url": "assets/js/8.aa7ce6bf.js",
    "revision": "e1a48147f9d5bc47e0005d455cbdc298"
  },
  {
    "url": "assets/js/9.03074d07.js",
    "revision": "7695ae5e90600d9c3bda513c2eb7648c"
  },
  {
    "url": "assets/js/app.8c162ed6.js",
    "revision": "c2578ea4ebec1d52f4243da3c6ffc83c"
  },
  {
    "url": "conclusion.html",
    "revision": "e5c34adaa41b950a97f872e5a3c03736"
  },
  {
    "url": "env.html",
    "revision": "eef25b70666209e9eb3290b2096f5a75"
  },
  {
    "url": "index.html",
    "revision": "c199dd074983b78df4d1ec3451979e34"
  },
  {
    "url": "intro.html",
    "revision": "6db446e86402e6cc507e814238ba8307"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "setup.html",
    "revision": "bf53e10c4591aec090657e8667461266"
  },
  {
    "url": "step1/index.html",
    "revision": "69e5366637fecbdfeef07b73803c5737"
  },
  {
    "url": "step2/index.html",
    "revision": "b0a2ff09683e142a18685eee62bc1cf9"
  },
  {
    "url": "step3/index.html",
    "revision": "d5cc61fbd85890bf72d760eecf2e949f"
  },
  {
    "url": "step4/index.html",
    "revision": "90ad3fdc10626e411bcd1ec8e64385c6"
  },
  {
    "url": "step5/index.html",
    "revision": "f4bc9798a15598f3921632ea935664ff"
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
