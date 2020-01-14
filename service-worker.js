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
    "revision": "f676a803bc266a4a07912a4902ae6176"
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
    "url": "assets/js/11.38ef21d5.js",
    "revision": "f4809794ee6fb3c9e67c0f7176a07365"
  },
  {
    "url": "assets/js/12.d185bbc2.js",
    "revision": "3594a2d684a30ee345637c25e6654532"
  },
  {
    "url": "assets/js/13.8f15923e.js",
    "revision": "c17eb74295574603825c492e399a0dd5"
  },
  {
    "url": "assets/js/14.e1c8e40c.js",
    "revision": "0fbf4b1f685958cf0e7d11c53da1bf3d"
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
    "url": "assets/js/6.c11bda38.js",
    "revision": "f8a98f4b328c35f96f7f76b74db51259"
  },
  {
    "url": "assets/js/7.5f4ec513.js",
    "revision": "97f9634c8416678c197acb76552683ba"
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
    "url": "assets/js/app.53494fd9.js",
    "revision": "17df7c7ce9fdd119b2e64d7b44716e7d"
  },
  {
    "url": "conclusion.html",
    "revision": "fcba78f364c8eb7b7fc17828072a82a6"
  },
  {
    "url": "env.html",
    "revision": "df8fe90113d0e9140e518a5cca97c1f4"
  },
  {
    "url": "index.html",
    "revision": "821cfe3917f11fd83ea2b66a22070236"
  },
  {
    "url": "intro.html",
    "revision": "1537ad1691021bedd14e11ffb02e56b9"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "6dbf6d6cd86cddedc0fcc06b31dff23c"
  },
  {
    "url": "step2/index.html",
    "revision": "16c91da24b0a739a0ff12c55c96902ab"
  },
  {
    "url": "step3/index.html",
    "revision": "f3e25171d83fcfcc45529b1671b958fd"
  },
  {
    "url": "step4/index.html",
    "revision": "b5a69acaf1329cec6f2a6dc590ac1c99"
  },
  {
    "url": "step5.html",
    "revision": "05b4408911cee399f4dca1a20fc22fa4"
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
