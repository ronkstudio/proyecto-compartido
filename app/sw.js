/* Service worker: deja la guía disponible sin conexión.
   Estrategia: primero la red (para tener siempre la última versión) y, si no hay conexión, la copia guardada.
   Las fotos y los mapas se guardan a medida que se ven. */
var CACHE = "guia-v2";
var SHELL = ["./", "index.html", "css/styles.css", "js/app.js", "data/caba.js", "data/caba-coords.js", "data/caba-extra.js", "data/caba-zones.js", "icon.svg", "manifest.webmanifest"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  var cacheable = url.origin === location.origin || /wikimedia\.org|cdnjs\.cloudflare\.com|tile\.openstreetmap\.org/.test(url.hostname);
  if (!cacheable) return; // clima y cotización: la app guarda su propia copia
  e.respondWith(
    fetch(req).then(function (res) {
      if (res && (res.ok || res.type === "opaque")) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req, { ignoreSearch: url.origin === location.origin }).then(function (hit) {
        return hit || (req.mode === "navigate" ? caches.match("index.html") : Response.error());
      });
    })
  );
});
