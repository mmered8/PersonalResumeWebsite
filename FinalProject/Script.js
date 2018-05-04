

function map() {
let newMap = L.map('mapid').setView([41, -101], 4)
newMap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})

let lightMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(newMap);
let roadMap = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}');
let topoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');

let basemaps = {
   'Light basemap': lightMap,
   'Road basemap': roadMap,
   'Topo basemap': topoMap
 }
 L.control.layers(basemaps).addTo(newMap)

 function myStyle (feature) {
   let crime = feature.properties.CRIME
   let color = 'green'
   if (crime>300 && crime <600  ) {
     color = 'orange'
   }
   else if(crime>600) {
     {
       color ='red'
     }
   }
   let myStyle = {
     color: color,
     weight: 1,
     fillOpacity: 0.2
   }
   return myStyle
 }

 function theWorstBest(feature, layer)
 {
   let name = feature.properties.STATE_NAME
   let crime = feature.properties.CRIME
   if(crime==804.2)
   {
     layer.bindPopup('The great state of ' + name + ': WORST violent crime rate of' + crime + '.<br> Worst of all states and territories!')
   }else if(crime==123.8)
   {
     layer.bindPopup('The great state of ' + name + ': BEST violent crime rate of' + crime + '.<br> Best of all states and territories!')
   }
 }

 function myPopup (feature, layer) {
   let name = feature.properties.STATE_NAME
   let Crime = feature.properties.CRIME
   layer.bindPopup('Per Capita(crime per 100,000) for ' + name + ': ' + Crime + '<br> National average: ~420')
   theWorstBest(feature,layer);
 }

 function myIcon(feature, layer)
 {
   let name = feature.properties.STATE_NAME
   let crime = feature.properties.CRIME
   let myIcon = L.icon({
     iconUrl: 'star.jpg',
     iconSize: [35, 60], // size of the icon
     iconAnchor: [21, 93], // point of the icon which will correspond to marker's location
     popupAnchor: [-2, -75] // point from which the popup should open relative to the iconAnchor
   })
   if (crime>300 && crime <600  ) {
     myIcon.iconUrl = 'yellowCircle.png'
   }
   else if(crime>600 && crime <800) {
     myIcon.iconUrl = 'OrangeCircle.png'
   }
   else if(crime >800 ){
     myIcon.iconUrl = 'badStar.png'
   }
   // return Layer.marker([50.457504, -69.169922], {icon: myIcon});
   layer.marker([45.706179, -80.244141], {icon: myIcon});
 }

  let mapOptions = {
    style: myStyle,
    onEachFeature: myPopup,
    marker: myIcon
  }
  L.geoJSON(stateDemographics, mapOptions).addTo(newMap)
}
map();
