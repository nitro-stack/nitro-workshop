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
    "revision": "9bb9346584a976162f88af79d83ddd68"
  },
  {
    "url": "assets/css/0.styles.711f541e.css",
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
    "url": "assets/js/10.94b62e75.js",
    "revision": "e646649e08c2db6d9f7fd2c04f26f5e1"
  },
  {
    "url": "assets/js/11.034c5b18.js",
    "revision": "bb0167655907bd262ebc6994323fde0b"
  },
  {
    "url": "assets/js/12.1d9f5893.js",
    "revision": "897aa38c76b7912dd3c7bcdf21b60b77"
  },
  {
    "url": "assets/js/13.7bb3b0ac.js",
    "revision": "1b94a1714a7585d4b835779846c40c63"
  },
  {
    "url": "assets/js/14.6de45de2.js",
    "revision": "50bb92f899a3200409a291690ff60a9e"
  },
  {
    "url": "assets/js/15.8f981e15.js",
    "revision": "1ed3cd4d816e2767d61d9f6ecfd64928"
  },
  {
    "url": "assets/js/16.fdae2747.js",
    "revision": "838f7165a9ee021520bf673d15bcbb46"
  },
  {
    "url": "assets/js/2.ed883d78.js",
    "revision": "ae4eb88c0dc0a5d1fbba19f0fa436f4c"
  },
  {
    "url": "assets/js/3.82b83545.js",
    "revision": "fc2e54e402129d30fccdc7d910cd1e0d"
  },
  {
    "url": "assets/js/4.43a724e1.js",
    "revision": "228748f8839b88c309042a572333a324"
  },
  {
    "url": "assets/js/5.0bd9aa8b.js",
    "revision": "1afbb24f690b4704c24d4ad78977e7c6"
  },
  {
    "url": "assets/js/6.ee275a4f.js",
    "revision": "6bcffff634e007841d4e9385a7cdd5f4"
  },
  {
    "url": "assets/js/7.f17e1f7a.js",
    "revision": "23581845134a3417e0805b9e112c8255"
  },
  {
    "url": "assets/js/8.5ff42001.js",
    "revision": "71827e957fc4635bcaae7da34c07d190"
  },
  {
    "url": "assets/js/9.f6cd3966.js",
    "revision": "7b12d0ff9dda8da020586c0462446315"
  },
  {
    "url": "assets/js/app.6ac0a10d.js",
    "revision": "87e016f1186d1b5cadfb3ea52d2f1616"
  },
  {
    "url": "conclusion.html",
    "revision": "7ca5702ec5096a678d47977effe67acf"
  },
  {
    "url": "env.html",
    "revision": "df9cb7ee4269f462368a2fca78c69d30"
  },
  {
    "url": "index.html",
    "revision": "3b5bfcd42dd2b551f6b822f502e369de"
  },
  {
    "url": "intro.html",
    "revision": "7c4d80ca46e6872bd2dd8b25acd53fb0"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "setup.html",
    "revision": "8b2d42924022d2fda13c738b59639e8d"
  },
  {
    "url": "step1/index.html",
    "revision": "8ee3903b9ba937c5ebae205e16d8191f"
  },
  {
    "url": "step2/index.html",
    "revision": "5d27be35c958f086235aa3f842f473cd"
  },
  {
    "url": "step3/index.html",
    "revision": "35a150265cce2ca6724f4ea5c219309f"
  },
  {
    "url": "step4/index.html",
    "revision": "cf1a44d677ec831925387f550164013a"
  },
  {
    "url": "step5/index.html",
    "revision": "624c21ce89eaf18f058291e92dc362b1"
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
