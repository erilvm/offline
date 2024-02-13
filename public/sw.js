//La creación del App Shell, se realizará dentro del proceso de instalación 
self.addEventListener('install', event => {

//Para eso, dentro del evento de instalación creamos una constante cacheAppShel, 
// que va a almacenar la promesa que dispara el evento open para crear o abrir el caché 
    const cacheAppShell = caches.open('cache-1').then(cache => {      
//esta promesa retorna la creación del AppShell con el método addAll, que recibe un arreglo con 
//cada uno de los archivos necesarios para el buen funcionamiento de la aplicación.
        return cache.addAll([
            '/',
            '/index.html',
            '/js/app.js',
            '/sw.js',
            'static/js/bundle.js',
            'favicon.ico',

        ])
    })
    event.waitUntil(cacheAppShell)
})

//El usuario verá en su aplicación únicamente los recursos que están almacenados en caché. 
//Este proceso se hace dentro del evento fetch    
self.addEventListener('fetch', event => {
    //por medio de la propiedad  event.respondWith interceptando las solicitudes
    event.respondWith(caches.match(event.request))
})

