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
    "revision": "90aca09db3b1dfdaf34d909c18012ad1"
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
    "url": "assets/js/10.e6fa2c15.js",
    "revision": "2fd627cf456b2b0cd8b33e610b82f103"
  },
  {
    "url": "assets/js/11.35b85193.js",
    "revision": "f781924b7fd81a13f58dda474fee24d2"
  },
  {
    "url": "assets/js/12.d0f43af5.js",
    "revision": "4559eacb0c0d9ddfaa3825a639c38406"
  },
  {
    "url": "assets/js/13.7bb3b0ac.js",
    "revision": "1b94a1714a7585d4b835779846c40c63"
  },
  {
    "url": "assets/js/14.14787ab4.js",
    "revision": "077d4f5cbfdcd125020914fd6f906a5f"
  },
  {
    "url": "assets/js/15.c7051655.js",
    "revision": "c00ac6d9fdc7c4a00c0ca5030143d54c"
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
    "url": "assets/js/3.62bf0f14.js",
    "revision": "ff0c8dbb19cfdfb4d37225aa84d0843f"
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
    "url": "assets/js/6.856f4ba1.js",
    "revision": "6809b7515892633b8c4dc3f576cb2aaf"
  },
  {
    "url": "assets/js/7.c4dd9a03.js",
    "revision": "284f97227a9b101b65460d739e55df68"
  },
  {
    "url": "assets/js/8.a5fa43a1.js",
    "revision": "a0d44cb54ecff207d3ebccc4b578d350"
  },
  {
    "url": "assets/js/9.f6cd3966.js",
    "revision": "7b12d0ff9dda8da020586c0462446315"
  },
  {
    "url": "assets/js/app.3aa30790.js",
    "revision": "0f75a57c52e54d78b7bc361816aed120"
  },
  {
    "url": "conclusion.html",
    "revision": "b424e28ac08062a09e0664fb9ae8b352"
  },
  {
    "url": "env.html",
    "revision": "38a40f27cee615b2020bed7e2ac00234"
  },
  {
    "url": "index.html",
    "revision": "f3dea7f0d2589c2fe95eb9c459d59fc1"
  },
  {
    "url": "intro.html",
    "revision": "0f18288160bc3511b6d65c1674e488e3"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "setup.html",
    "revision": "1ce7a83195a22a7614550c8c9257eb0a"
  },
  {
    "url": "step1/index.html",
    "revision": "12703cacff1596c716c922ce34baa821"
  },
  {
    "url": "step2/index.html",
    "revision": "afded09563f7698e1cb885c092f6a5b5"
  },
  {
    "url": "step3/index.html",
    "revision": "33cf4294ee294e370536dd3d55d9d951"
  },
  {
    "url": "step4/index.html",
    "revision": "e33c2c79415e11a47366739eb5fd202e"
  },
  {
    "url": "step5/index.html",
    "revision": "de42e2248dfc984e90f6ad6df8eb5e85"
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
