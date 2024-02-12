//estructura para el evento fetch
self.addEventListener('fetch', event =>{
    //declaramos una constante de nombre resp que va a ser igual a la respuesta de la peticion fetch
const offlineResponse = new Response(`Bienvenido para usar la aplicación de el evento fetch`)

    const resp = fetch(event.request)
    .catch(() => offlineResponse )
//respondemos con ese mismo
    event.respondWith(resp)
})