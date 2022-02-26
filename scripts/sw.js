var cache_name = 'my-custom-pwa';  

self.addEventListener('install', function(evt) {  
  evt.waitUntil(caches.open(cache_name).then(function (cache) {  
	        cache.addAll([  
	          "/index.html",
              "/scripts/main.js",
			  "/scripts/sw.js",
	  ]);  
  }));  
}); 