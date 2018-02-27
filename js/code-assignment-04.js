// This is an array
let projectArray = [
  1,
  'https://www.arcgis.com/apps/MapTour/index.html?appid=3a0f07d8a63d4512976a17637c7ee7a6',
  'Redlands',
  'Redlands MapTour.',
  true,
  ['gis', 'Redlands', 'MapTour']
]

// This is an object. Each value is paired with a property.
let projectObject = {
  id: 1,
  url: 'https://llsu.maps.arcgis.com/apps/GeoForm/index.html?appid=40f9d5fb11764a9d888995bfdcad14c7',
  title: 'LSU Incidents',
  desc: 'Incidents both silly and harmful from LSU.',
  thumb: true,
  keywords: [
    'Sorority',
    'Fraternity',
    'Burgler'
  ]
}

console.log(projectArray[2])
console.log(projectObject.title)
console.log(projectObject["title"])
