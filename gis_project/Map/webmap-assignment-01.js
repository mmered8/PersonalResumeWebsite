let currentMap = L.map('mapid').setView([30.491192, -91.186609], 10)

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(currentMap)

let myStyle = {
  color: 'blue',
  fillColor: 'darkblue'
}
let vars =[
  [30.407147, 268.834989],
  [30.413809, 268.841684],
  [30.421803, 268.829067]
];
let polygon = L.polygon(vars, myStyle).addTo(currentMap);
polygon.bindPopup('LSU LAKES')

currentMap.fitBounds(polygon.getBounds());

currentMap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
// currentMap.fitBounds(polygon.getBounds());
