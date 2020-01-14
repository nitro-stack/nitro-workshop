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
    "revision": "2dccdc1d313d8cdb7df1ca6ebeeecdcf"
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
    "url": "assets/js/10.ef3ce9f5.js",
    "revision": "a93fdd78009884775cce292665af1b6e"
  },
  {
    "url": "assets/js/11.34a9602d.js",
    "revision": "6c2e632294bbecb616b1a29def0f1e19"
  },
  {
    "url": "assets/js/12.8bbf03fc.js",
    "revision": "8a4b589c9db51c1fdf485f081e4cb650"
  },
  {
    "url": "assets/js/13.bb13f2af.js",
    "revision": "c1917ab9e2a973738f322e369f957afc"
  },
  {
    "url": "assets/js/14.3586d5c3.js",
    "revision": "a7f377437b09d91cc9793a81b2b23861"
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
    "url": "assets/js/6.ee9cf466.js",
    "revision": "e91c4647e1e6193b741765718ea5ea89"
  },
  {
    "url": "assets/js/7.b3f3a4a8.js",
    "revision": "64c13a37422720d87914c6bd5710c867"
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
    "url": "assets/js/app.47fd29ef.js",
    "revision": "4c456d905f5a113ed12004de15cc9558"
  },
  {
    "url": "conclusion.html",
    "revision": "c1f51494a029ad693776fa09d8c081ec"
  },
  {
    "url": "env.html",
    "revision": "726166c8912057711c338de4f58893f5"
  },
  {
    "url": "index.html",
    "revision": "786eb44ec001b15daacb597d04f1d75a"
  },
  {
    "url": "intro.html",
    "revision": "f2e365ea58cf2eaa888730c5e190f5c6"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "d2df208497ea285489ba51ab598f3d2c"
  },
  {
    "url": "step2/index.html",
    "revision": "7945ed099ba8e14521cb767d72abc16b"
  },
  {
    "url": "step3/index.html",
    "revision": "ab306195598994a4f5268d60a01b8d07"
  },
  {
    "url": "step4/index.html",
    "revision": "cbcc67ad0d7ee47447dcf788245160d2"
  },
  {
    "url": "step5.html",
    "revision": "e1d2f914c83561288b328f57d4cf5fbc"
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
