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


  var myStyles =[
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
              { visibility: "off" }
        ]
    }
];

var myOptions = {
    zoom: 15,
    center: cpa,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: myStyles 
};

  map = new google.maps.Map(document.getElementById('map') as HTMLElement, myOptions);

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
    anchor: new google.maps.Point(0,0),
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
      icon : car,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });



}
export { initMap };
