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
    "revision": "6885fa4d7c954621ca6f60f66df323e3"
  },
  {
    "url": "assets/css/0.styles.50f1f6e2.css",
    "revision": "b6aef0f5473e93dc003ac2a4bb355738"
  },
  {
    "url": "assets/img/azure.680f0e39.svg",
    "revision": "680f0e39ee86c3a3f5fba16702d4c851"
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
    "url": "assets/img/thats-it.fb910f3b.jpg",
    "revision": "fb910f3b6f69e2b4fb33d948171d522b"
  },
  {
    "url": "assets/js/10.0ea0b659.js",
    "revision": "4a01372b62b704dae526bd95ef608b7f"
  },
  {
    "url": "assets/js/11.38ef21d5.js",
    "revision": "f4809794ee6fb3c9e67c0f7176a07365"
  },
  {
    "url": "assets/js/12.d185bbc2.js",
    "revision": "3594a2d684a30ee345637c25e6654532"
  },
  {
    "url": "assets/js/13.dcd0550d.js",
    "revision": "e59a6644bda92567fc433f60e91b1c28"
  },
  {
    "url": "assets/js/14.8df603d1.js",
    "revision": "645ce5061bd4de6e8b39e9c8038af1a6"
  },
  {
    "url": "assets/js/15.f18ae210.js",
    "revision": "9b9c437f033ce59318e99a098623f05f"
  },
  {
    "url": "assets/js/16.8be28db5.js",
    "revision": "96f5de555f73cb96db5371a7024adcb5"
  },
  {
    "url": "assets/js/2.89622c55.js",
    "revision": "bec2496321b91989f479fe421747e404"
  },
  {
    "url": "assets/js/3.ca7f9cb9.js",
    "revision": "07c2a8f44e283e17a2649db8ecbd0206"
  },
  {
    "url": "assets/js/4.1c62fd6e.js",
    "revision": "5170641647ef339ebfb68b1208917f49"
  },
  {
    "url": "assets/js/5.3a590768.js",
    "revision": "38c0920362c2cfb204222b7a5ecf9dc3"
  },
  {
    "url": "assets/js/6.d48d5816.js",
    "revision": "9456cbfe10979a135f481a7dcd2905d6"
  },
  {
    "url": "assets/js/7.cc72e158.js",
    "revision": "caf42dbea001a971963345c6e3d38457"
  },
  {
    "url": "assets/js/8.2dd04b78.js",
    "revision": "7cae597b746b2396f92e62e73b676254"
  },
  {
    "url": "assets/js/9.2c440a67.js",
    "revision": "b188859f166234fc7be0d63e5955df3e"
  },
  {
    "url": "assets/js/app.9779f468.js",
    "revision": "fd72418e9f748f33c49ae7a14f628032"
  },
  {
    "url": "conclusion.html",
    "revision": "899d743622ea86ee06695694f8083ae8"
  },
  {
    "url": "env.html",
    "revision": "c47a6032d8e9aecb89a9ee66701ba3e6"
  },
  {
    "url": "index.html",
    "revision": "96a514540b4b9d54900afefab3d034e1"
  },
  {
    "url": "intro.html",
    "revision": "648ed56fcdb5a5967411547331bffcd0"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "ddb4993e533a6819461b54886a8cd225"
  },
  {
    "url": "step2/index.html",
    "revision": "1d3cf5f4fc4f9f15a3a87d0a233b3ebf"
  },
  {
    "url": "step3/index.html",
    "revision": "3bfa7173124d40e560928bc930162664"
  },
  {
    "url": "step4/index.html",
    "revision": "ac47919b5feb954d0d0a5da54341df4f"
  },
  {
    "url": "step5/index.html",
    "revision": "314f34f4d9725ad69c1296ede5b79bbb"
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
