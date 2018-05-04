
function map() {
let newMap = L.map('mapid').setView([41, -101], 4)

newMap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})

let lightMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(newMap)
let roadMap = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}')
let topoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')

let basemaps = {
   'Light basemap': lightMap,
   'Road baseMap': roadMap,
   'Topo basemap': topoMap
 }

 L.control.layers(basemaps).addTo(newMap)

 function mapStyle (feature) {
 }
 function mapPopup (feature, layer) {
 }
}
map()
