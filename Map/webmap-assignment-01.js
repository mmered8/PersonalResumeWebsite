let mymap = L.map('mapid').setView([51.505, -0.09], 13)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(mymap)

let marker = L.marker([51.5, -0.09]).addTo(mymap)
let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);
