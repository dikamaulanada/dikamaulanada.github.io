self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('akademi-crypto-cache').then((cache) => {
      return cache.addAll([
        '/test/',
        '/test/index.html',
        '/test/styles.css',
        '/test/script.js',
        '/test/manifest.json',
        '/test/images/logo.png',
        '/test/images/logo-192x192.png',
        '/test/images/logo-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
