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
    "revision": "3f47b17550d3f1d0cd6c23a22804ee72"
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
    "url": "assets/js/10.b6b58243.js",
    "revision": "408373586657b418948a77371b247609"
  },
  {
    "url": "assets/js/11.9ccaaa12.js",
    "revision": "1b768a6c23e068c463117263da44fd14"
  },
  {
    "url": "assets/js/12.6d1ceb18.js",
    "revision": "3f42a91ec0646e1575db5ef81a206b38"
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
    "url": "assets/js/5.ae413656.js",
    "revision": "87c35b2a6c683e4e104b12861a9127cb"
  },
  {
    "url": "assets/js/6.c6d14396.js",
    "revision": "4f9c3daeb861537e80ee5900ee8855ae"
  },
  {
    "url": "assets/js/7.f0dc1c55.js",
    "revision": "8fbb25eebacec9f1a611791095a3d042"
  },
  {
    "url": "assets/js/8.4465429d.js",
    "revision": "6679b443c7cc63e1210de39eb8fcb736"
  },
  {
    "url": "assets/js/9.4a383c01.js",
    "revision": "b5a0563b0d139fcc67646d1a50457b92"
  },
  {
    "url": "assets/js/app.53162123.js",
    "revision": "ba4bd04f8ed8c8607e0efb88190067ed"
  },
  {
    "url": "conclusion.html",
    "revision": "3db7a67a3352a88d722f6093c67d09ce"
  },
  {
    "url": "env.html",
    "revision": "e87cc1c377b7312812a78b3d9ecaea73"
  },
  {
    "url": "index.html",
    "revision": "d8d93e2aa10e64e90cfd318c954c3bc0"
  },
  {
    "url": "intro.html",
    "revision": "f7cda0be16a5ffcdc26f57e7891c9953"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "setup.html",
    "revision": "ef37c279e5f280e69020ec7bf6155796"
  },
  {
    "url": "step1/index.html",
    "revision": "ccafb22a82d3623369dabdfe2e30944a"
  },
  {
    "url": "step2/index.html",
    "revision": "dcbf9a085641f1cf01ea4231bdca1e06"
  },
  {
    "url": "step3/index.html",
    "revision": "6f64bf13e9d17340f6b36a7a9d6264ef"
  },
  {
    "url": "step4/index.html",
    "revision": "0467676b04ec574306f6d858bb4e6dfa"
  },
  {
    "url": "step5/index.html",
    "revision": "fc218b877bf6e124e139854263ff0a80"
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
