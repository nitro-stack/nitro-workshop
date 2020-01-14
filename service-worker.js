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
    "revision": "8aea1b490a913dca91337cc88f21eef0"
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
    "url": "assets/js/10.c46645a7.js",
    "revision": "770bea6719c2b23e57f2a894fdf6f14f"
  },
  {
    "url": "assets/js/11.38ef21d5.js",
    "revision": "f4809794ee6fb3c9e67c0f7176a07365"
  },
  {
    "url": "assets/js/12.8bbf03fc.js",
    "revision": "8a4b589c9db51c1fdf485f081e4cb650"
  },
  {
    "url": "assets/js/13.cbb5a5d6.js",
    "revision": "d513b363e8d5c541f288692ed68a8d62"
  },
  {
    "url": "assets/js/14.6a66eab4.js",
    "revision": "ca2d3bf3357aee7d34c216d7825ae314"
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
    "url": "assets/js/6.63e3482f.js",
    "revision": "47a4e0a49834d75ede41a35d9c8ad6de"
  },
  {
    "url": "assets/js/7.5f4ec513.js",
    "revision": "97f9634c8416678c197acb76552683ba"
  },
  {
    "url": "assets/js/8.690c7d72.js",
    "revision": "d9f677d8a921e3d460d6d014f3302dc6"
  },
  {
    "url": "assets/js/9.2c440a67.js",
    "revision": "b188859f166234fc7be0d63e5955df3e"
  },
  {
    "url": "assets/js/app.d2be1756.js",
    "revision": "2457ce8bea54cd91e1a07d1c0c0bfbb2"
  },
  {
    "url": "conclusion.html",
    "revision": "2955db0fe5b0319f7a85f846b2a082f3"
  },
  {
    "url": "env.html",
    "revision": "4c6dafec1a820c601b453973728076e0"
  },
  {
    "url": "index.html",
    "revision": "ae4994a28230a0f656daaf00fd899d7c"
  },
  {
    "url": "intro.html",
    "revision": "8ba3cbbfc7cea4bc5303ae72d9cac1b0"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "e4d661529a707f32c48773f2099b4e3b"
  },
  {
    "url": "step2/index.html",
    "revision": "67c7d88741300ac03835ac9d5f90487c"
  },
  {
    "url": "step3/index.html",
    "revision": "02c3121b01f952396ec187c11532d61c"
  },
  {
    "url": "step4/index.html",
    "revision": "51d42b11af59f4ec9afc3d64b867c36f"
  },
  {
    "url": "step5/index.html",
    "revision": "c642bb3357db8afbd875070650e02727"
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
