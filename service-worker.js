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
    "revision": "e8c2f6b6d980c1950ba6459e330a21f6"
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
    "url": "assets/js/10.f140f831.js",
    "revision": "d16d2351a6e600614945bdc26cbaa1ba"
  },
  {
    "url": "assets/js/11.4fb4abe8.js",
    "revision": "3ea6ddb7b5d5cfeb026bcda3f2c43cf9"
  },
  {
    "url": "assets/js/12.a622ec17.js",
    "revision": "fe5a91ae7cc335bc44363e8cc65b6ad4"
  },
  {
    "url": "assets/js/13.d03cdac5.js",
    "revision": "c6827cfda920e61a62563500e81588f1"
  },
  {
    "url": "assets/js/14.732acbc1.js",
    "revision": "32656db27e54560a94026ec77b2e35cd"
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
    "url": "assets/js/6.89b285c2.js",
    "revision": "761eaaf6e2eaac379e000dea4be5855c"
  },
  {
    "url": "assets/js/7.bfa3dc8f.js",
    "revision": "081d14158c1c9ea162d5dbec99cee09f"
  },
  {
    "url": "assets/js/8.dcfa686b.js",
    "revision": "535c1a8e27272a961ca1cc5d8703a206"
  },
  {
    "url": "assets/js/9.2c440a67.js",
    "revision": "b188859f166234fc7be0d63e5955df3e"
  },
  {
    "url": "assets/js/app.5ec13bd0.js",
    "revision": "b12929b9182a577aa5f90b83a2d8d5bc"
  },
  {
    "url": "conclusion.html",
    "revision": "0baaa7d807d58a738a93eeeefb75e34b"
  },
  {
    "url": "env.html",
    "revision": "5273ca6938843a67c1fa982085a0e026"
  },
  {
    "url": "index.html",
    "revision": "cbc80e774db1ff3040d858b53a3d8e8b"
  },
  {
    "url": "intro.html",
    "revision": "bf76a0dadd2f080e11ba101f8d422f98"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "fd69c94d0d447013f97404634d17b442"
  },
  {
    "url": "step2/index.html",
    "revision": "65b23310f19ef257727a2f05cb8d4216"
  },
  {
    "url": "step3/index.html",
    "revision": "2cc0f2186a1f1fa3e74d765a50e9029b"
  },
  {
    "url": "step4/index.html",
    "revision": "435c767e60db8a6c2a392fccb36b745d"
  },
  {
    "url": "step5.html",
    "revision": "d276e182e2bb338ae96b4fd8c1cdafd7"
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
