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
    "revision": "d16dcf42b581fde37f2224f29d857a89"
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
    "url": "assets/js/10.4539b463.js",
    "revision": "f2449c62eb9a814d3c671cf01f7c9a57"
  },
  {
    "url": "assets/js/11.67b20da5.js",
    "revision": "30a822f5d2ab073f2580eb0daf0a1c39"
  },
  {
    "url": "assets/js/12.099e9d4b.js",
    "revision": "899a323a1289d56515ea52419567a601"
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
    "url": "assets/js/3.758dc0b5.js",
    "revision": "26d44c798c4fe047e6aa65dffc6b4fb9"
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
    "url": "assets/js/6.eed680ef.js",
    "revision": "6a3a40f435826d5ac36034eb73823611"
  },
  {
    "url": "assets/js/7.83036a7f.js",
    "revision": "c7d69ac2fb591a88812f98083961fb49"
  },
  {
    "url": "assets/js/8.ae073eff.js",
    "revision": "8cd37afef867361f465a36f46ca4c005"
  },
  {
    "url": "assets/js/9.1d1c21f8.js",
    "revision": "d64f5b03efff9857ab018d813bc1e8c7"
  },
  {
    "url": "assets/js/app.fae36255.js",
    "revision": "dc6c6a4d938647cb2c9ec5836a838f31"
  },
  {
    "url": "conclusion.html",
    "revision": "213aa0961920fe6eb1cdb6410becf79b"
  },
  {
    "url": "env.html",
    "revision": "ab945fc80703937b5fccc221157a892b"
  },
  {
    "url": "index.html",
    "revision": "851bc94e46b30e77af3aaf420b66b8d0"
  },
  {
    "url": "intro.html",
    "revision": "cdc0c8cd4b9e9e1a0f6261affd622beb"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "setup.html",
    "revision": "5da6347ce0183f7fb69dac4e661f59a8"
  },
  {
    "url": "step1/index.html",
    "revision": "5597202af3b217ef1dc068d8e16a3ccf"
  },
  {
    "url": "step2/index.html",
    "revision": "6a917ccd276866e1c55b97235e268718"
  },
  {
    "url": "step3/index.html",
    "revision": "6e806d98b82f1f4fe339d2de07b701ea"
  },
  {
    "url": "step4/index.html",
    "revision": "656d6b7306521b5c5dc9f9787269e838"
  },
  {
    "url": "step5/index.html",
    "revision": "5c272fcf1a8b2160ecce1efdb73c7668"
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
