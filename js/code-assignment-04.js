// This is an array
let projectArray = [
  1,
  'https://example.com',
  'Redlands',
  'Redlands MapTour.',
  true,
  ['gis', 'Redlands', 'MapTour']
]

// This is an object. Each value is paired with a property.
let projectObject = {
  id: 1,
  url: 'https://example.com',
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
