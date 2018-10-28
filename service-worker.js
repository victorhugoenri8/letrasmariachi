self.addEventListener('install', function(e) {
  console.log('install');

  // waitUntil tells the browser that the install event is not finished until we have
  // cached all of our files
  e.waitUntil(
    // Here we call our cache "myonsenuipwa", but you can name it anything unique
    caches.open('myonsenuipwa')
    .then(cache => {
      // If the request for any of these resources fails, _none_ of the resources will be
      // added to the cache.
      return cache.addAll([
        './',
    './index.html',
    './manifest.json',
    './app.js',
    './letras1.json',
    './favicon.png',
        './notas.png',
        './notasr.png',
        './css.css',
        './antonio_lista.html',
        './javier_lista.html',
        './josealfredo_lista.html',
        './negrete_lista.html',
        './pedro_lista.html',
        './vicente_lista.html',
        './joan_lista.html',
        './lucha_lista.html',
        './vargas_lista.html',
        './banda_lista.html',
        './rocio_lista.html',
        './juanga_lista.html',
        './alex_lista.html',
        'https://code.jquery.com/jquery-3.2.1.slim.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
        'https://fonts.googleapis.com/css?family=Roboto:400,300,700',
        'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
      ]);
    })
    .catch(nn => console.log("fallo la cache"))
  );
});

// 2. Intercept requests and return the cached version instead
self.addEventListener('fetch', function(e) {
  e.respondWith(
    // check if this file exists in the cache

    caches.match(e.request)
      // Return the cached file, or else try to get it from the server
      .then(response => response || fetch(e.request))
  );
});


caches.open('myonsenuiapp').then(cache => {
  return cache.addAll([
     './',
    './index.html',
    './manifest.json',
    './app.js',
    './letras1.json',
    './favicon.png',
        './notas.png',
        './notasr.png',
        './css.css',
        './antonio_lista.html',
        './javier_lista.html',
        './josealfredo_lista.html',
        './negrete_lista.html',
        './pedro_lista.html',
        './vicente_lista.html',
        './joan_lista.html',
        './lucha_lista.html',
        './vargas_lista.html',
        './banda_lista.html',
        './rocio_lista.html',
        './juanga_lista.html',
        './alex_lista.html',
        'https://code.jquery.com/jquery-3.2.1.slim.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
        'https://fonts.googleapis.com/css?family=Roboto:400,300,700',
        'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
  ]);
});







// self.addEventListener('push', e =>
// {
//   console.log('Evento:  push')
//   let title= 'evento de lanzamiento de Push',
//       options={
//     body:'esto se una notificacion',
//     icon: './notas.png',
//     vibrate: [100, 50, 100],
//       data: { id: 1 },
//       actions: [
//         { 'action': 'Si', 'title': 'Amo esta aplicación :)', icon: './notasr.png' },
//         { 'action': 'No', 'title': 'No me gusta esta aplicación :(', icon: './notasr.png' }
//       ]
//   }
// e.waitUntil(self.registration.showNotification(title, options))
// })
