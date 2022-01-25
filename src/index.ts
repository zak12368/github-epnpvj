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


const stops: [google.maps.LatLngLiteral, string][] = [
  [{ lat: 45.54660349710988, lng: -73.60924619686111 }, "Hôpital Jean-Talon"],
  [{ lat: 34.8559195, lng: -111.7988186 }, "Airport Mesa"],
  [{ lat: 34.832149, lng: -111.7695277 }, "Chapel of the Holy Cross"],
  [{ lat: 34.823736, lng: -111.8001857 }, "Red Rock Crossing"],
  [{ lat: 34.800326, lng: -111.7665047 }, "Bell Rock"],
];


function initMap(): void {
  const cpa = { lat: 45.538155, lng: -73.611370 };
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: cpa,
    zoom: 15,
  });

  const svgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "red",
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
    title: "CPA MONTREAL",
  });

}
export { initMap };
