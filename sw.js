// Minimaler Service Worker – nur dafür da, damit der Browser die Seite als
// installierbare App erkennt ("Zum Startbildschirm hinzufügen" / "App installieren").
// Cached nur die eigene App-Hülle (HTML, Manifest, Icons), NICHT die externen
// CDN-Ressourcen (Tailwind/Plotly/Fonts) – diese werden weiterhin normal aus dem
// Netz geladen, damit es keine veralteten/inkonsistenten Versionen gibt.
// Alle Berechnungen und Daten bleiben davon unberührt (reines Caching der
// statischen Dateien, kein Eingriff in App-Logik oder localStorage).

const CACHE_NAME = 'finanzplaner-shell-v1';
const APP_SHELL = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch(() => {}) // falls z.B. offline installiert wird: nicht fehlschlagen
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Nur eigene GET-Requests auf die App-Hülle behandeln; alles andere (CDN-Skripte,
  // externe Fonts etc.) läuft normal und unverändert über das Netzwerk.
  const url = new URL(event.request.url);
  const isOwnOrigin = url.origin === self.location.origin;
  if (event.request.method !== 'GET' || !isOwnOrigin) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
  );
});
