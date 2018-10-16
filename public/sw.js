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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-fbededfed49806937a00.js"
  },
  {
    "url": "app-6832d7fb70634c01a55f.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-0691004cd9de246c1542.js"
  },
  {
    "url": "index.html",
    "revision": "e2b519b3d2cf4b20631eda94731c1233"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7625215658c56bcab224efb3b6a81c04"
  },
  {
    "url": "component---src-pages-index-js.5bba7ed4189aa0f375d5.css"
  },
  {
    "url": "component---src-pages-index-js-448a92f370ec912e4715.js"
  },
  {
    "url": "7-057a6a2dafc6f38bbaa2.js"
  },
  {
    "url": "0-d4bd6ab2ccc3f8887f1d.js"
  },
  {
    "url": "static/d/890/path---index-6a9-qqg6H3Pt8wA0SS1PAnKm7WgowM.json",
    "revision": "94c31a70a4c2a460ef39370feb0bbb04"
  },
  {
    "url": "component---src-pages-404-js.5bba7ed4189aa0f375d5.css"
  },
  {
    "url": "component---src-pages-404-js-503f38a84c284d8356f5.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "302782c2485c9aa058f64524e99ba82c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});