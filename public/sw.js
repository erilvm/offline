
self.addEventListener('fetch', event => {
    const offlineResponse = fetch('pages/offile.html')


    const resp = fetch(event.request)

    .catch(() => offlineResponse)
    event.respondWith(resp)
})
