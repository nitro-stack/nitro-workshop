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
    "revision": "fa2557a9e2dfea22e30a5bbf66e995fc"
  },
  {
    "url": "assets/css/0.styles.c4c22788.css",
    "revision": "97b0647e72ea78d2234629fcc7323ae1"
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
    "url": "assets/js/10.38c35601.js",
    "revision": "90d375cde977501632aacaa2d56136aa"
  },
  {
    "url": "assets/js/11.1ebe2696.js",
    "revision": "49fb0320e4c0766bcf3c0cf4ca56163e"
  },
  {
    "url": "assets/js/12.9f0f8926.js",
    "revision": "7a84e2d07fffec8766b146f2caf92629"
  },
  {
    "url": "assets/js/13.234c8add.js",
    "revision": "e93859b47f7dff00b7464dfc7d3a8cc2"
  },
  {
    "url": "assets/js/14.f75cb62c.js",
    "revision": "4d151e2369f52d5f86deb0830156f50f"
  },
  {
    "url": "assets/js/15.b8b554c4.js",
    "revision": "a826ba7e8cb0d0b01b3a3eb65987e556"
  },
  {
    "url": "assets/js/2.c0f35d4d.js",
    "revision": "ceaf3742612e15b3af3c974399c050ff"
  },
  {
    "url": "assets/js/3.75d3be52.js",
    "revision": "5862372a9a5c05cd94e2b8fa41fe0159"
  },
  {
    "url": "assets/js/4.a05e98a4.js",
    "revision": "824981c80d4e94c7ded6f749be2a6119"
  },
  {
    "url": "assets/js/5.9be74bfb.js",
    "revision": "25db63dec3fe14f6648e675b02db3270"
  },
  {
    "url": "assets/js/6.bafdf2a9.js",
    "revision": "fdedf287cc4a66d9cfbe8680cfa63428"
  },
  {
    "url": "assets/js/7.ffc53a84.js",
    "revision": "bcde9b24c271502b87aaddd0b73506d1"
  },
  {
    "url": "assets/js/8.1b4d5aaf.js",
    "revision": "25ad06158ec6e03c4166c86a16c244c4"
  },
  {
    "url": "assets/js/9.0c54c6d8.js",
    "revision": "6e646a28bb34fc2e775975cf18b4b2de"
  },
  {
    "url": "assets/js/app.5c6acc5d.js",
    "revision": "d323e314e40c67f1488f352e97f535db"
  },
  {
    "url": "conclusion.html",
    "revision": "5d292ff3d96751c13827b1e8b06167a4"
  },
  {
    "url": "env.html",
    "revision": "f38ba73ddb15c963bc32a4971988245a"
  },
  {
    "url": "index.html",
    "revision": "198ff06280444b368330af4da8640df7"
  },
  {
    "url": "intro.html",
    "revision": "51dc9dfe6d8bac1697c49c575d53b80e"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "ad0b23f28c5708960dbd940cd6ba5d2a"
  },
  {
    "url": "step2/index.html",
    "revision": "4e0bc976492182191d17f271a8182d85"
  },
  {
    "url": "step3/index.html",
    "revision": "d1e9245139ebeee3922a33a29df6b0b1"
  },
  {
    "url": "step4/index.html",
    "revision": "890e73a3b2848fc47b0b18208d5163e0"
  },
  {
    "url": "step5/index.html",
    "revision": "3612f8403afdd4cc2ab8b1a874d4259d"
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
