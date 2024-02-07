//solicitudes fetch, un usuario lo hace se va a conectar al servidor
//se le devulev lo que esta en el cache
//solo fuera de linea

//estructura 
//primera solicitud evento fetch, 
self.addEventListener('fetch', event => {
    const offlineResponse = new Response(`
    Bienvendido
    Para usar esta aplicacion necesitas conexion a internet
    `)
    //no puede ser gestionado por promesas oh servicxces worker 404---
    const resp = fetch(event.request)
    .catch(() => offlineResponse)

    //interceptarlas solicitudes(304) atraves del service worker, ayuda a dar respuesta personalidada por el service worker 
    event.respondWith(resp)
})
