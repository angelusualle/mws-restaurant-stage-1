self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(staticCacheName).then(function(cache) {
        return cache.addAll([
          '/index.html',
          '/restaurant.html',
          'js/main.js',
          'js/restaurant_info.js',
          'js/dbhelper.js',
          'data/restaurants.json',
          'css/styles.css',
          'imgs/1.jpg',
          'imgs/2.jpg',
          'imgs/3.jpg',
          'imgs/4.jpg',
          'imgs/5.jpg',
          'imgs/6.jpg',
          'imgs/7.jpg',
          'imgs/8.jpg',
          'imgs/9.jpg',
          'imgs/10.jpg',
          '//normalize-css.googlecode.com/svn/trunk/normalize.css',
          'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
          'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
        ]);
      })
    );
});
  