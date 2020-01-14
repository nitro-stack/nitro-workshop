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
    "revision": "c7dc20d5305ff07781dff0a619ab3b99"
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
    "url": "assets/js/13.444e77f8.js",
    "revision": "a419a16067b29d7b9dce95acd50b7eaa"
  },
  {
    "url": "assets/js/14.8ec8a564.js",
    "revision": "e5b66aaaef52e658f0949e41dcb0f6ce"
  },
  {
    "url": "assets/js/15.0377561b.js",
    "revision": "99f83afb96747b8963c752618e18ee35"
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
    "url": "assets/js/6.ee9cf466.js",
    "revision": "e91c4647e1e6193b741765718ea5ea89"
  },
  {
    "url": "assets/js/7.b3f3a4a8.js",
    "revision": "64c13a37422720d87914c6bd5710c867"
  },
  {
    "url": "assets/js/8.b9599034.js",
    "revision": "f34ffb80e566a25c805ec1e72f7d193e"
  },
  {
    "url": "assets/js/9.2c440a67.js",
    "revision": "b188859f166234fc7be0d63e5955df3e"
  },
  {
    "url": "assets/js/app.9eddb594.js",
    "revision": "98a0899e5468b3eeef3c01d0f7ebbcee"
  },
  {
    "url": "conclusion.html",
    "revision": "8a2447ffcc6a25f739e4f944d12c951c"
  },
  {
    "url": "env.html",
    "revision": "1e305a1dbe4103af50e97614bee897bc"
  },
  {
    "url": "index.html",
    "revision": "167c4a92bdaad99b58b6307e17a00be8"
  },
  {
    "url": "intro.html",
    "revision": "190b05e7188db8dce83c97f546549dab"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "97ce4603b05a90a0e484b8bec9bb0496"
  },
  {
    "url": "step2/index.html",
    "revision": "73f0238076803bb2d644bc827f8889fe"
  },
  {
    "url": "step3/index.html",
    "revision": "958f55296e61540de27711547933c975"
  },
  {
    "url": "step4/index.html",
    "revision": "1d7c402830009fdc6d7091fa4feb0dde"
  },
  {
    "url": "step5/index.html",
    "revision": "301e0f2298dbb16940d64379d862f2d9"
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
