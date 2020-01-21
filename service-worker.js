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
    "revision": "ea37708250163e1aa3d3dbf03da0919c"
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
    "url": "assets/js/10.16608bda.js",
    "revision": "c043f0f507b8df36def41c8d0530e87e"
  },
  {
    "url": "assets/js/11.4af0a601.js",
    "revision": "2b6c5efc854007663135c2351366c5bd"
  },
  {
    "url": "assets/js/12.569b53b7.js",
    "revision": "023f6dfbd5d03bbf1e76d360093f0749"
  },
  {
    "url": "assets/js/13.e29da6bd.js",
    "revision": "129ed9f125851c18131399493650db1a"
  },
  {
    "url": "assets/js/14.6ec9b572.js",
    "revision": "040171dd80dd3db9fb19349eab5987fa"
  },
  {
    "url": "assets/js/15.9aa5f87e.js",
    "revision": "f25e9c25ba0e8e47b2f31e24f8484a1a"
  },
  {
    "url": "assets/js/2.37e49c15.js",
    "revision": "6667da70bf737ce12f07f8a89b3b5672"
  },
  {
    "url": "assets/js/3.8d928ecf.js",
    "revision": "ded7a05aaba7214228f150773d335fe8"
  },
  {
    "url": "assets/js/4.f4ff603a.js",
    "revision": "353afcc1286d4a19524ff11a4b9f5caa"
  },
  {
    "url": "assets/js/5.91f4b948.js",
    "revision": "b4cb112d920e68eb1db2974bb80d378d"
  },
  {
    "url": "assets/js/6.16d635d5.js",
    "revision": "ff4f7ecd11a7f53d0a56a5c6439f574c"
  },
  {
    "url": "assets/js/7.9a0fc0f6.js",
    "revision": "e3c5c41bf8c3f306e061d168b5965d6b"
  },
  {
    "url": "assets/js/8.b4bbf2a1.js",
    "revision": "d3878ea717399ec7cf6b3f22bbcbd501"
  },
  {
    "url": "assets/js/9.835059f4.js",
    "revision": "0815118fe2bab113d1a29b39c8610d30"
  },
  {
    "url": "assets/js/app.ce513ca0.js",
    "revision": "3fa47bbaac9b2203dcfbada6726492e4"
  },
  {
    "url": "conclusion.html",
    "revision": "f3b551110cbb1d2829ee4b95868d64e7"
  },
  {
    "url": "env.html",
    "revision": "f3c5a6571c00fe335d94586f7e25af40"
  },
  {
    "url": "index.html",
    "revision": "50a1dcd60de9ced4a43b3cad348e5f54"
  },
  {
    "url": "intro.html",
    "revision": "6ace67329c58c26565da13f2b51069da"
  },
  {
    "url": "nitro.png",
    "revision": "bdee4df2ee79ef7df4596f0208e6b6e8"
  },
  {
    "url": "step1/index.html",
    "revision": "131fac98f1c51dc400f65a5dc07b0c30"
  },
  {
    "url": "step2/index.html",
    "revision": "59fac4eff088c8e92e9b531102a88188"
  },
  {
    "url": "step3/index.html",
    "revision": "5f8c251af116235800ad0ab628020874"
  },
  {
    "url": "step4/index.html",
    "revision": "017ca443f95d59028431749862da8807"
  },
  {
    "url": "step5/index.html",
    "revision": "f0cec8b01c1753fec8a686dbad8f2081"
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
