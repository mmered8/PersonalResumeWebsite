let myMap = L.map('mapid').setView([40, -100], 4)
myMap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})

let lightBasemap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(myMap)
let darkBasemap = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png')

L.esri.dynamicMapLayer({
    url: 'https://services.arcgisonline.com/arcgis/rest/services/Specialty/Soil_Survey_Map/MapServer',
    opacity: 0.7
  }).addTo(myMap);


let basemaps = {
   'Light basemap': lightBasemap,
   'Dark basemap': darkBasemap
 }
