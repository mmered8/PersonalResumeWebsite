let currentMap = L.map('mapid').setView([51.505, -0.09], 13)

//Let mapURl = 'https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}'
//Let mapURl = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png'
//L.tileLayer('mapURl').addTo(currentMap)

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(currentMap)
let point = L.marker([51.5, -0.09]).addTo(currentMap)
let polygon = L.polygon([
  [51.51, -0.10],
  [51.502, -0.07],
  [51.509, -0.048]
]).addTo(currentMap);

var latitudeLongitude = [
  [51.59, -0.1],
  [51.53, -0.16],
  [51.501, -0.07]
]
var polyline = L.polyline(latitudeLongitude, {color: 'red'}).addTo(currentMap);
currentMap.fitBounds(polyline.getBounds());

polygon.bindPopup('St. Katharine\'s and Wapping')
point.bindPopup('London Bridge Station')

currentMap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
