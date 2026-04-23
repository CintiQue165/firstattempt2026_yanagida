// public/service-worker.js
// Career Passport — Service Worker
// Strategy: Cache-First (app loads from cache, falls back to network)

// ── Cache name — change version to force cache refresh ─────
const CACHE_NAME = 'career-passport-v1';

// ── Files to cache on install ──────────────────────────────
// These are the core files needed for the app to work offline
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// ──────────────────────────────────────────────────────────
// INSTALL EVENT
// Fires when the service worker is first installed.
// We open a cache and store all the core files.
// ──────────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker...');

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Precaching core files');
      return cache.addAll(PRECACHE_URLS);
    })
  );

  // Force the new service worker to activate immediately
  // instead of waiting for old tabs to close
  self.skipWaiting();
});

// ──────────────────────────────────────────────────────────
// ACTIVATE EVENT
// Fires after install. We clean up any OLD caches here
// so stale files don't pile up on the user's device.
// ──────────────────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker...');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          // Find caches that are NOT the current version
          .filter((name) => name !== CACHE_NAME)
          // Delete them
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    })
  );

  // Take control of all open tabs immediately
  self.clients.claim();
});

// ──────────────────────────────────────────────────────────
// FETCH EVENT
// Fires every time the app requests a file (HTML, CSS, JS,
// images, fonts, etc.)
//
// Strategy: Cache-First with Network Fallback
//   1. Check if file is in cache → return it immediately
//   2. If not in cache → fetch from network
//   3. Save the network response to cache for next time
//   4. If network fails too → return offline fallback
// ──────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  // Only handle GET requests — ignore POST, PUT, DELETE etc.
  if (event.request.method !== 'GET') return;

  // Ignore Chrome extension requests
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // ✅ Found in cache — return it right away (fast!)
      if (cachedResponse) {
        console.log('[SW] Serving from cache:', event.request.url);
        return cachedResponse;
      }

      // ❌ Not in cache — go to network
      console.log('[SW] Fetching from network:', event.request.url);
      return fetch(event.request)
        .then((networkResponse) => {
          // Don't cache bad responses
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type === 'opaque'
          ) {
            return networkResponse;
          }

          // Clone the response — we need one copy for the
          // cache and one to return to the browser
          const responseToCache = networkResponse.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => {
          // 📴 Network failed AND not in cache
          // Return the offline fallback page
          console.log('[SW] Offline — serving fallback');
          return caches.match('/index.html');
        });
    })
  );
});
