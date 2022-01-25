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
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: cpa,
    zoom: 15,
  });

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
      icon : svgMarker,
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
