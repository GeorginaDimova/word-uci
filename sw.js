const CACHE='word-uci-source-v1';
const LOCAL=[
  './','./index.html','./styles.css','./app.js','./manifest.webmanifest',
  './icons/icon-192.png','./icons/icon-512.png',
  './assets/word-logo.png','./assets/keyboard.png','./assets/word-window.png','./assets/typing-rules.png',
  './assets/language.png','./assets/font-tool.png','./assets/font-list.png','./assets/font-size.png',
  './assets/exercise-1.png','./assets/formatting.png','./assets/exercise-paragraph.png','./assets/alignment.png',
  './assets/lists-tools.png','./assets/lists-video.png','./assets/wrap-text.png','./assets/rotate.png',
  './assets/insert-table.png','./assets/shading.png','./assets/border-painter.png','./assets/table-layout.png',
  './assets/merge-cells.png','./assets/table-video.png','./assets/self-eval.png'
];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(LOCAL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin) return;
  if(req.mode==='navigate'){
    event.respondWith(fetch(req).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy));return r;}).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(req,copy));}return r;})));
});
