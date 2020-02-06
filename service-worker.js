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
    "revision": "0cd8e226c976a4d1096ead87972cbd10"
  },
  {
    "url": "assets/css/0.styles.e0ba4cd8.css",
    "revision": "9f72d7d370b3913dadd6a3ff3f8c35fa"
  },
  {
    "url": "assets/img/azure.680f0e39.svg",
    "revision": "680f0e39ee86c3a3f5fba16702d4c851"
  },
  {
    "url": "assets/img/cors-error.8f5afbe2.jpg",
    "revision": "8f5afbe2837d12693744e7154ee3b628"
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
    "url": "assets/img/tag.d7726bec.png",
    "revision": "d7726beca04b12f915f3d18e87b54ea5"
  },
  {
    "url": "assets/img/thats-it.fb910f3b.jpg",
    "revision": "fb910f3b6f69e2b4fb33d948171d522b"
  },
  {
    "url": "assets/js/10.718f8667.js",
    "revision": "76c7cf59c71d08ce049130c65b35e64f"
  },
  {
    "url": "assets/js/11.615a01da.js",
    "revision": "9bf9aa32e1d20b49ba724c4c13b83c1d"
  },
  {
    "url": "assets/js/12.6d1ceb18.js",
    "revision": "3f42a91ec0646e1575db5ef81a206b38"
  },
  {
    "url": "assets/js/13.10e82472.js",
    "revision": "84e856c821e6045d3d2a12e57deb5489"
  },
  {
    "url": "assets/js/14.dc54f998.js",
    "revision": "e19990874520ebf1055e93175e409f8a"
  },
  {
    "url": "assets/js/15.d6a1a60c.js",
    "revision": "d92e7c7d4d9d017f562d75681395977f"
  },
  {
    "url": "assets/js/16.225a1e0c.js",
    "revision": "f1ef695ed3ee58275b934afd3b949a77"
  },
  {
    "url": "assets/js/2.8046322f.js",
    "revision": "ecaf0a1df69b5b72e73a0a2b892d35f5"
  },
  {
    "url": "assets/js/3.66da2074.js",
    "revision": "d5d348fdb1705268fdd468df76546b84"
  },
  {
    "url": "assets/js/4.97c0017c.js",
    "revision": "c9d14737a527e45fe7809021de82b7ac"
  },
  {
    "url": "assets/js/5.7307624b.js",
    "revision": "666826bc9b1704c6f6dbaad6548ea653"
  },
  {
    "url": "assets/js/6.fd20ac90.js",
    "revision": "646d99f97d1458d59c19648ab2b815bc"
  },
  {
    "url": "assets/js/7.367b792d.js",
    "revision": "844dac39c0ec61a5c0bda9098fb4d171"
  },
  {
    "url": "assets/js/8.be10abac.js",
    "revision": "ba74fd8c788cbd2501320761af8d8e81"
  },
  {
    "url": "assets/js/9.edd10c6c.js",
    "revision": "327f6741f18795f29f8a6f29ef6db2d0"
  },
  {
    "url": "assets/js/app.222a7939.js",
    "revision": "edf30df5260c5878ae29b0b2fce57872"
  },
  {
    "url": "conclusion.html",
    "revision": "b02dc528111dadd6b9490d97698d5358"
  },
  {
    "url": "env.html",
    "revision": "b22bdc14ec95a9388d3a00407987a196"
  },
  {
    "url": "index.html",
    "revision": "8168a5e38ba02d523e8ef28a72f3fb19"
  },
  {
    "url": "intro.html",
    "revision": "305433d856b7f83eb75f0c411fc5d8bf"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "setup.html",
    "revision": "ac3a347420c1a7f68f1e65cd3e4629f4"
  },
  {
    "url": "step1/index.html",
    "revision": "f90f7ea7d794865964496f3a02da8a5f"
  },
  {
    "url": "step2/index.html",
    "revision": "ab09a47d6c11be43beb2cd4f0a619e3b"
  },
  {
    "url": "step3/index.html",
    "revision": "04451b52796313ab3dcc36333641875d"
  },
  {
    "url": "step4/index.html",
    "revision": "52a6bf7deab357a660966fbc1c63fdc8"
  },
  {
    "url": "step5/index.html",
    "revision": "8d07614cf183cffee92d6194392b9f3c"
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
