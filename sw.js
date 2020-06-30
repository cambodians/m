importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.d047dc8.js",
    "revision": "0c722e2cd65c13837a3a93866d3629e0"
  },
  {
    "url": "/_nuxt/commons.app.1d2045e.js",
    "revision": "72ff2ddc0332f32a6f637b75b1bce063"
  },
  {
    "url": "/_nuxt/pages/genre/[_]id.ea4b8a9.js",
    "revision": "2ffd26e87e0f44e6336229ab56c61fa2"
  },
  {
    "url": "/_nuxt/pages/index.b68ebc2.js",
    "revision": "1dd063bccc4ec1b593e86cf3587a9884"
  },
  {
    "url": "/_nuxt/pages/search/[_]id.7b05a52.js",
    "revision": "04b5cbf720a265af322bd3dfb3220af8"
  },
  {
    "url": "/_nuxt/pages/watch/[_]id.a866b0e.js",
    "revision": "d8ef4b559fe437d43317d233ac8e2ca6"
  },
  {
    "url": "/_nuxt/runtime.2c0b3e0.js",
    "revision": "a205ff6ea80f12b3a3200cdb2d3d98c1"
  }
], {
  "cacheId": "pheabyundotcom",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
