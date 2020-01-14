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
    "revision": "1740880b94090e7ae232f0e771d3c794"
  },
  {
    "url": "assets/css/0.styles.43be2a01.css",
    "revision": "c5efb2133db04a749a747e71f719f533"
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
    "url": "assets/js/12.8f8bfd71.js",
    "revision": "cfcebb71a9d634f49bacbd5c7f7b372f"
  },
  {
    "url": "assets/js/13.aa04527c.js",
    "revision": "58b5717edd8b1d38cb34f1f46a75f028"
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
    "url": "assets/js/6.1a44795e.js",
    "revision": "80e06827a4e0f027e673f39b559fe0b9"
  },
  {
    "url": "assets/js/7.5f4ec513.js",
    "revision": "97f9634c8416678c197acb76552683ba"
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
    "url": "assets/js/app.99decfcb.js",
    "revision": "1389f0d2d951a1ba4b0eadd85535a08a"
  },
  {
    "url": "conclusion.html",
    "revision": "dca140d8f58aa1411da510a129712b7f"
  },
  {
    "url": "env.html",
    "revision": "b83b1ba3de4b434953a01917331a58f0"
  },
  {
    "url": "index.html",
    "revision": "7b77431724b2ac197fbfc99599122d11"
  },
  {
    "url": "intro.html",
    "revision": "0330b0ca5a49c0889f77dde5d3b86959"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "342ae33af5dbd3e7eb4fa248f42b2b25"
  },
  {
    "url": "step2/index.html",
    "revision": "ad2feda3ec2a7d0635cee2224567ff16"
  },
  {
    "url": "step3/index.html",
    "revision": "2c498bef0316218794043c8e6b2ab272"
  },
  {
    "url": "step4/index.html",
    "revision": "02df8eb528b6cc594e0721062b4df1db"
  },
  {
    "url": "step5.html",
    "revision": "7dfe2d75d4ef48ee9385e87d7e2a56e6"
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
