
self.addEventListener('fetch', event => {
    const offlineResponse = fetch('pages/offile.html')


    const resp = fetch(event.request)

    .catch(() => offlineResponse)
    event.respondWith(resp)
})

self.addEventListener("fetch", function (event) {
    const offlineResponse = fetch("pages/offline.html")
   
    
      const resp = fetch(event.request);
      event.respondWith(resp.catch(() => offlineResponse));
    
      event.respondWith(resp);
    });
  