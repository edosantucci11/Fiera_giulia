// Rende l'app utilizzabile senza rete: alla prima apertura salva app, icone e piantine.
// L'app si apre sempre dalla copia salvata (subito, anche con rete scarsa in fiera)
// e si aggiorna in background: una nuova versione compare all'apertura successiva.
const CACHE = "fiera-medica-2026-v6";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "mappa-10.png","mappa-11.png","mappa-12.png","mappa-15.png","mappa-16.png","mappa-17.png","mappa-3.png","mappa-4.png","mappa-5.png","mappa-6.png","mappa-7-1.png","mappa-7-2.png","mappa-7.png","mappa-7A.png","mappa-8A.png","mappa-8B.png","mappa-generale.png"];
self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.map(f => c.add(new Request(f, {cache: "reload"})).catch(() => {})))));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  const isMap = /\/mappa-[^/]+\.png$/.test(new URL(req.url).pathname);
  if (isMap) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return res; })));
    return;
  }
  const isPage = req.mode === "navigate";
  const fresh = fetch(req).then(res => {
    if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(isPage ? "./" : req, cp)).catch(() => {}); }
    return res;
  });
  e.waitUntil(fresh.then(() => {}, () => {}));
  e.respondWith(
    caches.match(isPage ? "./" : req).then(r => r || caches.match(req)).then(r => {
      if (r) return r;
      // Nessuna copia salvata: si aspetta la rete, ma al massimo 8 secondi.
      return Promise.race([fresh, new Promise((_, rej) => setTimeout(rej, 8000))])
        .catch(() => caches.match("./").then(c => c || Response.error()));
    })
  );
});
