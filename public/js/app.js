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
            cache.delete('/index.html')
        })
        //verificar si existe un archivo dentro del cache, pero que pasa si ese archivo no esta dentrro del cache

        cache.match('index.html').then(res => {
            res.text().then(console.log)
        })
    })
}