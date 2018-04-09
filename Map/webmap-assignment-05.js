
function map5() {
let myMap = L.map('mapid3').setView([40, -100], 4)
myMap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})

let lightBasemap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(myMap)
let darkBasemap = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png')
let soilBasemap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')

let basemaps = {
   'Light basemap': lightBasemap,
   'Dark basemap': darkBasemap,
   'Soil basemap': soilBasemap
 }

 L.control.layers(basemaps).addTo(myMap)

 function myStyle (feature) {
   let population = feature.properties.POPULATION
   let color = 'blue'
   if (population < 6514000) {
     color = 'red'
   }
   let myStyle = {
     color: color,
     weight: 1,
     fillOpacity: 0.2
   }
   return myStyle
 }
 function myPopup (feature, layer) {
   let name = feature.properties.STATE_NAME
   let population = feature.properties.POPULATION
   layer.bindPopup('Median population of ' + name + ': ' + population + '<br>National average per state: ~6,514,000 million')
 }
  let myOptions = {
    style: myStyle,
    onEachFeature: myPopup
  }
  L.geoJSON(stateDemographics, myOptions).addTo(myMap)
}
map5()
