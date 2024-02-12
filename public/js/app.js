if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
}
if(window.caches) {

    //console.log("Soporta cache")
    //crear primer cache
    caches.open('test-1')

    caches.open('test-2')

    //verificar si existe un cache
    //caches.has('test-1').then(console.log)


    //Eliminar cache
    caches.delete('test-1').then(console.log)

    //Guardar archivos en un cache=parametro que recicbe esa promesa

    caches.open('cache-1').then(cache => {
        cache.add('/index.html')
        //agregar archivos

        //agregar varios archivos
        cache.addAll([
            'logo192.png',
            'logo512.png',
            '/pages/offline.html'
        ]).then(() => {
            //Interceptar un archivo por otro
            cache.put('index.html', new Response('Interceptado archivo index'))
        })
        
        //Obtener todos los caches existen en la aplicacion y todos los metodos responden con una promesa
        cache.keys().then()
    })
}