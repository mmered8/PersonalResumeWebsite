function map4 () {
  // create a map object
  let mymap = L.map('mapid2').setView([40, -100], 4)
  mymap.on('click', function (event) {
    console.log('You clicked the map at ' + event.latlng)
  })
  // create basemap layer
  //L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(mymap)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(mymap)
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
  L.geoJSON(stateDemo, myOptions).addTo(mymap)
}
map4()
