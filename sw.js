var cache_name = 'my-custom-pwa';  

self.addEventListener('install', function(evt) {  
  evt.waitUntil(caches.open(cache_name).then(function (cache) {  
      cache.addAll([  
        "index.html",
        "scripts/main.js",
        "images/rubik-128x128.png",
        "images/rubik-256x256.png"
      ]);  
  }));  
}); 

/*
* Lien utile : https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps/Offline_Service_workers#r%C3%A9pondre_aux_requ%C3%AAtes
*/

self.addEventListener('fetch', function(fetch_event) {
  // console.log(fetch_event);

  fetch_event.respondWith(
    caches.match(fetch_event.request).then(function(cache_response) {
      console.log('[Service Worker] Récupération de la ressource: ' + fetch_event.request.url);
      if(cache_response) {
        return cache_response;
      }
      else {
        fetch(fetch_event.request).then(function(server_response) {
          return caches.open(cache_name).then(function(cache) {
            console.log('[Service Worker] Mise en cache de la nouvelle ressource: ' + fetch_event.request.url);
            cache.put(fetch_event.request, server_response.clone());
            return server_response;
          });
        });
      }
    })
  );
  
});
