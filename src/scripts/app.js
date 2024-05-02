import MotionInit from "./motion/init";
import LazyLoad from "vanilla-lazyload";
import { Loader } from "@googlemaps/js-api-loader"

var aLazyLoad = new LazyLoad({});

window.addEventListener('load', function () {
  new MotionInit();

  const loader = new Loader({
    apiKey: atob("QUl6YVN5QmIyeUtUZ0N5NVBuVHdiWml1TTVqOU1IaDdNYVo2dUxRCg=="),
    version: "weekly",
  });

  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
      "marker",
    );

    const map = new Map(document.querySelector('.map-intro .image-wrapper #map'), {
      mapId: 'f621342c3a910fdc',
      mapTypeId: 'roadmap',
      streetViewControl: false,
      tiltInteractionEnabled: false,
      mapTypeControl: false,
      headingInteractionEnabled: false,
      isFractionalZoomEnabled: false,
      center: { lat: -6.2092653, lng: 106.8211186 },
      zoom: 17
    });

    map.styles = [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#F5F5F5"
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
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#F5F5F5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#BDBDBD"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#EEEEEE"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#E5E5E5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9E9E9E"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#FFFFFF"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#DADADA"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9E9E9E"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#E5E5E5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#EEEEEE"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#C9C9C9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9E9E9E"
          }
        ]
      }
    ];

    const iconImage = document.createElement("img");
    iconImage.src = '/wp-content/themes/flow-wp/assets/images/marker.svg';

    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: new google.maps.LatLng(-6.2092653, 106.8211186),
      content: iconImage,
    });
  });
});
