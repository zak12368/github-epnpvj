/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import './style.css';

let map: google.maps.Map;

// Set LatLng and title text for the markers.
const stops: [google.maps.LatLngLiteral, string][] = [
  [{ lat: 45.54660349710988, lng: -73.60924619686111 }, 'Hôpital Jean-Talon'],
  [{ lat: 45.50425698728272, lng: -73.62490904256765 }, 'CHU Sainte-Justine'],
  [{ lat: 45.53629150335271, lng: -73.65415402768872 }, 'Marché Central'],
  [{ lat: 45.46629750794617, lng: -73.56424876043654 }, 'Hôpital de Verdun'],
  [
    { lat: 45.47643728314344, lng: -73.74526919781727 },
    'Aéroport international Pierre-Elliott-Trudeau de Montréal',
  ],
];

function initMap(): void {
  const cpa = { lat: 45.538155, lng: -73.61137 };
  const red_car = { lat: 45.624286103575, lng: -73.55816162776232 };
  const TERRITOIRE = {
    north: 45.749983,
    south: 45.28,
    west: -74.1,
    east: -73.34,
  };

  var myStyles = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ];

  var myOptions = {
    minZoom: 11,
    zoom: 11,
    center: cpa,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: myStyles,
    clickableIcons: false,
    restriction: {
      latLngBounds: TERRITOIRE,
      strictBounds: false,
    },
  };

  map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    myOptions
  );

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  const svgMarker = {
    path: 'M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z',
    fillColor: 'green',
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };

  const car = {
    path: 'M21.434 7.689l-2.434 3.311h-5.684c.701 2 2.996 3.886 6.201 3.26.95-.064 4.155-.573 5.483-.26 1.768.424 1.031.426 4.201 2.97l15.799 13.03c.968.855 2.206.505 3.063-.461.857-.968.905-2.684-.063-3.539l-20-16c-1.252-1.005-1.568-2.397-2-4-.84-2.755-3.929-4.965-6.961-4.965-2.443 0-5.072 2.113-6.039 3.965h6l2.434 2.689zm13.72 24.311l-6.182-10.73c-.244-.445-.861-1.27-1.368-1.27h-17.208c-.507 0-1.124.825-1.369 1.27l-6.027 10.73h-.154c-1.015 0-1.846.369-1.846 1.385v9.23c0 1.016.831 1.385 1.846 1.385h2.154v3.23c0 1.524.938 2.77 2.461 2.77h.923c1.524 0 2.616-1.246 2.616-2.77v-3.23h16v3.23c0 1.523 1.092 2.77 2.615 2.77h.923c1.524 0 2.462-1.246 2.462-2.77v-3.23h2.154c1.015 0 1.846-.369 1.846-1.385v-9.23c0-1.016-.831-1.385-1.846-1.385zm-29.077 6.923c-1.275 0-2.308-1.033-2.308-2.308s1.033-2.308 2.308-2.308c1.274 0 2.308 1.033 2.308 2.308s-1.033 2.308-2.308 2.308zm1.846-6.923l3.741-7.828c.227-.454.829-1.172 1.336-1.172h12c.507 0 1.108.718 1.336 1.172l3.741 7.828h-22.154zm24 6.923c-1.274 0-2.308-1.033-2.308-2.308s1.033-2.308 2.308-2.308 2.308 1.033 2.308 2.308-1.034 2.308-2.308 2.308z',
    fillColor: 'black',
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 0.7,
    anchor: new google.maps.Point(0, 0),
  };

  new google.maps.Marker({
    position: cpa,
    map,
    icon: svgMarker,
    title: 'CPA MONTREAL',
  });

  // Create the markers.
  stops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      icon: car,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener('click', () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });

  car.fillColor = 'red';
  new google.maps.Marker({
    position: red_car,
    map,
    icon: car,
    title: 'Garage à investiger',
  });

  var polygonMask = new google.maps.Polygon({
    map:map,
    strokeColor: '#000000',
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor: '#CACACA',
    fillOpacity: 0.7,
    paths: [[new google.maps.LatLng(44.980973, -74.626375),
    new google.maps.LatLng(46.134841, -74.626375),
    new google.maps.LatLng(46.134841, -72.834230),
    new google.maps.LatLng(44.980973, -72.834230),
    new google.maps.LatLng(44.980973, -74.626375)],
    [new google.maps.LatLng(45.306227, -74.138857),
    new google.maps.LatLng(45.292220, -73.799310),
    new google.maps.LatLng(45.316971, -73.643013),
    new google.maps.LatLng(45.339780, -73.527914),
    new google.maps.LatLng(45.343280, -73.487659),
    new google.maps.LatLng(45.407551, -73.340288),
    new google.maps.LatLng(45.631987, -73.309045),
    new google.maps.LatLng(45.710796, -73.309217),
    new google.maps.LatLng(45.732967, -73.332735),
    new google.maps.LatLng(45.737415, -73.394662),
    new google.maps.LatLng(45.736112, -73.462082),
    new google.maps.LatLng(45.714092, -73.548170),
    new google.maps.LatLng(45.712234, -73.657175),
    new google.maps.LatLng(45.656020, -73.784891),
    new google.maps.LatLng(45.580528, -73.885141),
    new google.maps.LatLng(45.428276, -74.187265),
    new google.maps.LatLng(45.306227, -74.138857)]]});
}
export { initMap };
