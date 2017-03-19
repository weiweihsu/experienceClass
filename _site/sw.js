importScripts( '/DOCter/cache-polyfill.js' );

var filesToCache = [
  // root
  '/DOCter/',
  '/DOCter/index.html',
  // css
  '/DOCter/assets/css/main.css',
  '/DOCter/assets/css/normalize.css',
  '/DOCter/assets/css/syntax.css',
  // images
  '/DOCter/assets/img/octocat.png',
  // pages
  '/DOCter/jekyll/update/2013/11/20/welcome-to-jekyll.html','/DOCter/example_page/',
  // posts
  '/DOCter/jekyll/update/2013/11/20/welcome-to-jekyll.html',
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( 'DOCter-v1.1' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});
