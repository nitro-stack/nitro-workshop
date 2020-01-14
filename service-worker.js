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
    "revision": "f67e42a6ebd50367eb4fb61ebd608de2"
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
    "url": "assets/js/10.2ef16811.js",
    "revision": "af9bf63d7b8a71b9f9a7bb91daa8f455"
  },
  {
    "url": "assets/js/11.34a9602d.js",
    "revision": "6c2e632294bbecb616b1a29def0f1e19"
  },
  {
    "url": "assets/js/12.a622ec17.js",
    "revision": "fe5a91ae7cc335bc44363e8cc65b6ad4"
  },
  {
    "url": "assets/js/13.8f15923e.js",
    "revision": "c17eb74295574603825c492e399a0dd5"
  },
  {
    "url": "assets/js/14.d671a33e.js",
    "revision": "0760615a37cd764162b4846eae8dfb6f"
  },
  {
    "url": "assets/js/15.2e267a4a.js",
    "revision": "c8c0824d244129a69c10ef42e8a40f19"
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
    "url": "assets/js/3.fd42e370.js",
    "revision": "fd03df823b86844980c1bd9b4069503e"
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
    "url": "assets/js/6.c11bda38.js",
    "revision": "f8a98f4b328c35f96f7f76b74db51259"
  },
  {
    "url": "assets/js/7.de2875df.js",
    "revision": "a34cd245e05dff24ffed9b12cd43c83f"
  },
  {
    "url": "assets/js/8.f221c190.js",
    "revision": "dba7cc63d94dab4d408a627e430da8bf"
  },
  {
    "url": "assets/js/9.2c440a67.js",
    "revision": "b188859f166234fc7be0d63e5955df3e"
  },
  {
    "url": "assets/js/app.5862901c.js",
    "revision": "bdb1472866a7bb5b20a3f3eed2c0a64a"
  },
  {
    "url": "conclusion.html",
    "revision": "072c70e23d79000533b637428f9b1bbc"
  },
  {
    "url": "env.html",
    "revision": "5dc54d024eda21cac266538537e859dc"
  },
  {
    "url": "index.html",
    "revision": "d86b88ad6e564e048f7da08c1a0e9ed8"
  },
  {
    "url": "intro.html",
    "revision": "1b67358f15b2f14f9d1087d331c7d2be"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "f4ced35f9c98f8ef2d2230e048779fbd"
  },
  {
    "url": "step2/index.html",
    "revision": "d09d3506405bfc31a3f2c559c6d5e836"
  },
  {
    "url": "step3/index.html",
    "revision": "e53b05fa43cb29299c832e7c2ac84b06"
  },
  {
    "url": "step4/index.html",
    "revision": "ee9c1c2c6b58a4aa53483f39df1d311c"
  },
  {
    "url": "step5.html",
    "revision": "27c5ad41c813654dd7d995ce7cac763a"
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
