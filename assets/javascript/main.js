/*Geolocalizacion*/

function initMap() {
		//para calcular la ruta entre dos puntos
		var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

      var map = new google.maps.Map(document.getElementById('mapa'), {
        center: {lat: -33.4569400, lng: -70.6482700}, //muestra ubicacion inicial en stgo
        zoom: 17,
        disableDefaultUI: true //quita el zoom y las vistas de mapa
        });

        directionsDisplay.setMap(map);

        // Pregunta si quieres activar geolocalizacion.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var miPosicion = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            map.setZoom(17);
    				map.setCenter(miPosicion); //centra el mapa en la ubicacion

            var marker = new google.maps.Marker({ //funcion que coloca un marcador
        		position: miPosicion,
        		animation: google.maps.Animation.BOUNCE,
        		map: map,
        		// AQUI PONER FOTO AUTITO DEL MARKER//
        		url: "lyft-classic_opt.png", 
        		size: new google.maps.Size(71, 71),
						origin: new google.maps.Point(0, 0),
						anchor: new google.maps.Point(17, 34),
						scaledSize: new google.maps.Size(25, 25)
						});
    			}, 

          	function() {
         	error(true, map.getCenter());
          	});
        //para autocompletar
  		var destinoAutoComp = (document.getElementById('destino')); //toma punto de destino
  		var autocompletar = new google.maps.places.Autocomplete(destinoAutoComp);
  		autocompletar.bindTo('bounds', map); // para restringir los resultados al viewport del mapa, aún cuando dicho viewport cambie.

  		//para que funcione con el boton
  		document.getElementById("trazar").addEventListener("click", function(){
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        });

  		//toma los datos de ambos input y los busca

      	function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          destination: document.getElementById('destino').value,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Tu búsqueda ha generado error: ' + status);
          }
        });
      }
	      	 //funcion para mensaje de error
	      function error() {
	        alert("No es posible encontrar tu ubicación");
	      }
	 		}

	}// fin de funcion initMap

     