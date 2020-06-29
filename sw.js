importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.867ff5e.js",
    "revision": "5152390749b0c178655899433c53d98b"
  },
  {
    "url": "/_nuxt/commons.app.c103baf.js",
    "revision": "3b811d7f3feb74361b95f5947c64edd8"
  },
  {
    "url": "/_nuxt/pages/genre/[_]id.74da7ed.js",
    "revision": "f1ec1714987db602654e9aa9baa46d98"
  },
  {
    "url": "/_nuxt/pages/index.cb79590.js",
    "revision": "b72b688e1da52be9cbce671559e1b829"
  },
  {
    "url": "/_nuxt/pages/search/[_]id.294efef.js",
    "revision": "15510f5c1fadb66f7fb7e05d5dc369a4"
  },
  {
    "url": "/_nuxt/pages/watch/[_]id.14373f3.js",
    "revision": "3b52e7c89f4e8393f143f5d823a41959"
  },
  {
    "url": "/_nuxt/runtime.40d82e4.js",
    "revision": "d12487b5d5e9aadef6929d1dc1a87d89"
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
