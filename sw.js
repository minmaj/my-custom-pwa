var cache_name = 'my-custom-pwa';  

self.addEventListener('install', function(evt) {  
  evt.waitUntil(caches.open(cache_name).then(function (cache) {  
      cache.addAll([  
        "index.html",
        "scripts/main.js",
        "sw.js",
      ]);  
  }));  
}); 

self.addEventListener('fetch', function (event) {
    // it can be empty if you just want to get rid of that error
});
