importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.e1b94f4.js",
    "revision": "e451dba8a4093eb38eac4b7bc2df1242"
  },
  {
    "url": "/_nuxt/commons.app.5be60f9.js",
    "revision": "40ef3ff3ea2e009912ac4d0163691b64"
  },
  {
    "url": "/_nuxt/pages/genre/[_]id.312b485.js",
    "revision": "e6dd77e9e722dce56a10c257d614b692"
  },
  {
    "url": "/_nuxt/pages/index.038b075.js",
    "revision": "7c0390d4b6f61677ffb3e3bc7c116d85"
  },
  {
    "url": "/_nuxt/pages/search/[_]id.977ac4c.js",
    "revision": "7efbfcfa4457a9d2a61a675eb48b736f"
  },
  {
    "url": "/_nuxt/pages/watch/[_]id.b7e8064.js",
    "revision": "ec867c3b7b45bb596e27d31b42427cf0"
  },
  {
    "url": "/_nuxt/runtime.ea9ea31.js",
    "revision": "9cc3e41fd72fbe4208527463d2131bc1"
  }
], {
  "cacheId": "nuxtmovies",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
