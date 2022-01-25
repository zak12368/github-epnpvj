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

function initMap(): void {
  const cpa = { lat: 45.5381, lng: -73.61132 };
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: cpa,
    zoom: 15,
  });

  new google.maps.Marker({
    position: cpa,
    map,
    title: "CPA MONTREAL",
  });

}
export { initMap };
