let currentMap = L.map('mapid').setView([51.505, -0.09], 13)

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(currentMap)

let myIcon = L.icon({
  iconUrl: 'CanoeYellow.png',
  iconSize: [35, 60], // size of the icon
  iconAnchor: [21, 93], // point of the icon which will correspond to marker's location
  popupAnchor: [-2, -75] // point from which the popup should open relative to the iconAnchor
  /*iconSize: [38, 95], // size of the icon
  //shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  //shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  */
})
let point = L.marker([30.41662, 268.838024], {icon: myIcon}).addTo(currentMap)

let myStyle = {
  color: 'blue',
  fillColor: 'darkblue'
}
let myCoords = [
    [30.407147, 268.834989],
    [30.413809, 268.841684],
    [30.421803, 268.829067]
  ]
let polygon = L.polygon(myCoords, myStyle).addTo(currentMap);

var latitudeLongitude = [
  [30.40241, 268.830697],
  [30.423876, 268.826492],
  [30.41788, 268.844087]
]
var polyline = L.polyline(latitudeLongitude, {color: 'red'}).addTo(currentMap);
currentMap.fitBounds(polyline.getBounds());

polygon.bindPopup('LSU LAKES')
point.bindPopup('CANOE RENTAL')
polyline.bindPopup('OUTER LAKE LIMITS')

currentMap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
