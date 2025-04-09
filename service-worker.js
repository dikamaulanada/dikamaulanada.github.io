const CACHE_NAME = 'akademi-crypto-cache-v1';
const assetsToCache = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './images/logo.png',
  './images/logo-192x192.png',
  './images/logo-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME)
        .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});
