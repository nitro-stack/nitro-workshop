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
    "revision": "784befb66486939d426a450f61f1e43f"
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
    "url": "assets/js/13.dcd0550d.js",
    "revision": "e59a6644bda92567fc433f60e91b1c28"
  },
  {
    "url": "assets/js/14.b71c9dab.js",
    "revision": "c4581f98063165f140591bb2960677f7"
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
    "url": "assets/js/app.7aeeea23.js",
    "revision": "55eea757f283100c5f50cb8e836efa5b"
  },
  {
    "url": "conclusion.html",
    "revision": "2fe0f35bc9aad2a5573ed0f9e4cdb7dc"
  },
  {
    "url": "env.html",
    "revision": "f2e172e591d1c8f2d06ed13752cef2e7"
  },
  {
    "url": "index.html",
    "revision": "25f1dcec7afb17649727e51d4fa38e23"
  },
  {
    "url": "intro.html",
    "revision": "cc85a5aa3bbc8909da2b3cad9732ac3d"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "1a55dd3eb58a5af81a455c5765b0450a"
  },
  {
    "url": "step2/index.html",
    "revision": "891d895c22d476d266eed43134d5b51f"
  },
  {
    "url": "step3/index.html",
    "revision": "05c6e59956f17e7584d7c4948ff4e261"
  },
  {
    "url": "step4/index.html",
    "revision": "40b8b23810563928f1176a1172e644fe"
  },
  {
    "url": "step5/index.html",
    "revision": "704795340e90dc733b44cab63c0100f2"
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
