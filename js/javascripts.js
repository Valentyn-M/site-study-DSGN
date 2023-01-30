const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', (e) => {
   e.target.closest('.hamburger').classList.toggle('hamburger_active');
   e.target.closest('.menu').querySelector('.menu__list').classList.toggle('menu__list_active')
});



// Встраивание Гугл карты

var stylesArray = [
   {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#e9e9e9"
         },
         {
            "lightness": 17
         }
      ]
   },
   {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#f5f5f5"
         },
         {
            "lightness": 20
         }
      ]
   },
   {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
         {
            "color": "#ffffff"
         },
         {
            "lightness": 17
         }
      ]
   },
   {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
         {
            "color": "#ffffff"
         },
         {
            "lightness": 29
         },
         {
            "weight": 0.2
         }
      ]
   },
   {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#ffffff"
         },
         {
            "lightness": 18
         }
      ]
   },
   {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#ffffff"
         },
         {
            "lightness": 16
         }
      ]
   },
   {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#f5f5f5"
         },
         {
            "lightness": 21
         }
      ]
   },
   {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#dedede"
         },
         {
            "lightness": 21
         }
      ]
   },
   {
      "elementType": "labels.text.stroke",
      "stylers": [
         {
            "visibility": "on"
         },
         {
            "color": "#ffffff"
         },
         {
            "lightness": 16
         }
      ]
   },
   {
      "elementType": "labels.text.fill",
      "stylers": [
         {
            "saturation": 36
         },
         {
            "color": "#333333"
         },
         {
            "lightness": 40
         }
      ]
   },
   {
      "elementType": "labels.icon",
      "stylers": [
         {
            "visibility": "off"
         }
      ]
   },
   {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#f2f2f2"
         },
         {
            "lightness": 19
         }
      ]
   },
   {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
         {
            "color": "#fefefe"
         },
         {
            "lightness": 20
         }
      ]
   },
   {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
         {
            "color": "#fefefe"
         },
         {
            "lightness": 17
         },
         {
            "weight": 1.2
         }
      ]
   }
];    // Стиль карты с помощью сервиса https://snazzymaps.com

function initMap() {
   const myLatLng = { lat: 33.769181, lng: -118.195824 };                        // заносим координаты в константу
   const map = new google.maps.Map(document.getElementById("map"), {    // заносим в константу наш дыв с картой
      zoom: 12,                                                                  // устанавливаем увеличение
      center: myLatLng,                                                          // вызываем координаты
      //styles: stylesArray,
   });

   // Пользовательский маркер
   new google.maps.Marker({
      position: myLatLng,                                                        // координаты маркера совпадают с картой
      map: map,
      icon: 'img/svg/marker.svg'                                                 // ставим свою иконку
   });

}

window.initMap = initMap;
