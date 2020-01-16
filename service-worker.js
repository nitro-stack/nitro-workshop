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
    "revision": "fe75a383bd0a1d5dbb41c070fd06c836"
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
    "url": "assets/img/happycat.b0ef3f29.jpg",
    "revision": "b0ef3f29d84e4650b530c38308c69eaf"
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
    "url": "assets/img/storage1.7be5d2bb.png",
    "revision": "7be5d2bbbedf9464454418f016460b33"
  },
  {
    "url": "assets/img/storage2.b49cb9dd.png",
    "revision": "b49cb9dd4578e6dc7764a75e75743696"
  },
  {
    "url": "assets/img/thats-it.fb910f3b.jpg",
    "revision": "fb910f3b6f69e2b4fb33d948171d522b"
  },
  {
    "url": "assets/js/10.f67498c9.js",
    "revision": "7374425fb3c5d7f5daac6913bd6e7f1e"
  },
  {
    "url": "assets/js/11.35b96ccd.js",
    "revision": "878b1efecea39289de9b1c1934fcb9b3"
  },
  {
    "url": "assets/js/12.516dfd5a.js",
    "revision": "b699fb7c8f50806f207420dc5a9574a0"
  },
  {
    "url": "assets/js/13.0c2b42e9.js",
    "revision": "2d656c8545358bb5359348d0cffe3737"
  },
  {
    "url": "assets/js/14.7d8d0ac9.js",
    "revision": "14f973cdf2714d6d9991cea59d4c78e5"
  },
  {
    "url": "assets/js/15.dce0db69.js",
    "revision": "40b642164b44a29973aab15c74696b12"
  },
  {
    "url": "assets/js/16.8be28db5.js",
    "revision": "96f5de555f73cb96db5371a7024adcb5"
  },
  {
    "url": "assets/js/2.e16b72c7.js",
    "revision": "3096fe7f8dac8e1942d59451c7ba8c6a"
  },
  {
    "url": "assets/js/3.af6eb89d.js",
    "revision": "9604211115d56f1b7f29343d26c6c30c"
  },
  {
    "url": "assets/js/4.ca8668b2.js",
    "revision": "54050808517cd9204035c4b10fb9e802"
  },
  {
    "url": "assets/js/5.720f949e.js",
    "revision": "fb6a79b0f3d1a69c772752c8b0e70b81"
  },
  {
    "url": "assets/js/6.748c56cc.js",
    "revision": "fec45688aec76f963b0a716bc767985b"
  },
  {
    "url": "assets/js/7.09fe268d.js",
    "revision": "f3cf39ccf60aa1088d19036d08442a58"
  },
  {
    "url": "assets/js/8.54e33233.js",
    "revision": "39c5ac47fdecbbf2fb588855b06e3378"
  },
  {
    "url": "assets/js/9.35109d40.js",
    "revision": "81f400cc478de120f557569bf3f6c13e"
  },
  {
    "url": "assets/js/app.a783a15e.js",
    "revision": "1f87b918b9c8f5c7d73e3787f92df365"
  },
  {
    "url": "conclusion.html",
    "revision": "05f012999ca912ef916a6cf9b6fa78a6"
  },
  {
    "url": "env.html",
    "revision": "0aebe634c9b75b61bfed49c33a5e7ed1"
  },
  {
    "url": "index.html",
    "revision": "3264621c109c48395d001afe939d567f"
  },
  {
    "url": "intro.html",
    "revision": "5c01e456e08079b05ac7f2b51d907619"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "2ec031745c4c4c36c0cad58c7be13869"
  },
  {
    "url": "step2/index.html",
    "revision": "95b562f3b29f52ad32c82423a44edec4"
  },
  {
    "url": "step3/index.html",
    "revision": "68c90444b64711fe32055f4817fb2380"
  },
  {
    "url": "step4/index.html",
    "revision": "527d2284edf67d5f12e77b27e9371cce"
  },
  {
    "url": "step5/index.html",
    "revision": "a278691bef562cb4ed5bfbc0380002af"
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
