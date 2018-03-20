let currentMap = L.map('mapid').setView([51.505, -0.09], 13)

//Let mapURl = 'https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}'
//Let mapURl = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png'
//L.tileLayer('mapURl').addTo(currentMap)

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(currentMap)
let point = L.marker([30.41662, 268.838024]).addTo(currentMap)
let polygon = L.polygon([
  [30.407147, 268.834989],
  [30.413809, 268.841684],
  [30.421803, 268.829067],
]).addTo(currentMap);

var latitudeLongitude = [
  [30.40241, 268.830697],
  [30.423876, 268.826492],
  [30.41788, 268.844087]
]
var polyline = L.polyline(latitudeLongitude, {color: 'red'}).addTo(currentMap);
currentMap.fitBounds(polyline.getBounds());

polygon.bindPopup('LSU LAKES')
point.bindPopup('CANOE RENTAL')

currentMap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
