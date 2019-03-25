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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

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
    "url": "webpack-runtime-187f4c6bd02e23f2ea9d.js"
  },
  {
    "url": "app-b64b65ed40c590012234.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-a9567cae4a2696219814.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "253359271cab774b39943444735e89a1"
  },
  {
    "url": "component---src-pages-404-js.5dc6a1e5b6df05e6d55c.css"
  },
  {
    "url": "component---src-pages-404-js-b2d7f0d2ad49015bb0f7.js"
  },
  {
    "url": "0-2cc1d64a650e2ee9d94b.js"
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

workbox.routing.registerRoute(/(\.js$|\.css$|\/static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');
"use strict";

/* global importScripts, workbox, idbKeyval */
importScripts("idb-keyval-iife.min.js");
var WHITELIST_KEY = "custom-navigation-whitelist";
var navigationRoute = new workbox.routing.NavigationRoute(function (_ref) {
  var event = _ref.event;

  var _ref2 = new URL(event.request.url),
      pathname = _ref2.pathname;

  return idbKeyval.get(WHITELIST_KEY).then(function (customWhitelist) {
    if (customWhitelist === void 0) {
      customWhitelist = [];
    }

    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      var offlineShell = "/offline-plugin-app-shell-fallback/index.html";
      var cacheName = workbox.core.cacheNames.precache;
      return caches.match(offlineShell, {
        cacheName: cacheName
      });
    }

    return fetch(event.request);
  });
});
workbox.routing.registerRoute(navigationRoute);
var updatingWhitelist = null;

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(function () {
      return rawWhitelistPathnames(pathnames);
    });
  }

  updatingWhitelist = idbKeyval.get(WHITELIST_KEY).then(function (customWhitelist) {
    if (customWhitelist === void 0) {
      customWhitelist = [];
    }

    pathnames.forEach(function (pathname) {
      if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname);
    });
    return idbKeyval.set(WHITELIST_KEY, customWhitelist);
  }).then(function () {
    updatingWhitelist = null;
  });
  return updatingWhitelist;
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(function () {
      return rawResetWhitelist();
    });
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(function () {
    updatingWhitelist = null;
  });
  return updatingWhitelist;
}

var messageApi = {
  whitelistPathnames: function whitelistPathnames(event) {
    var pathnames = event.data.pathnames;
    pathnames = pathnames.map(function (_ref3) {
      var pathname = _ref3.pathname,
          includesPrefix = _ref3.includesPrefix;

      if (!includesPrefix) {
        return "" + pathname;
      } else {
        return pathname;
      }
    });
    event.waitUntil(rawWhitelistPathnames(pathnames));
  },
  resetWhitelist: function resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist());
  }
};
self.addEventListener("message", function (event) {
  var gatsbyApi = event.data.gatsbyApi;
  if (gatsbyApi) messageApi[gatsbyApi](event);
});