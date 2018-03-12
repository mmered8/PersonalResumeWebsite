let projects = []
projects[1] = {
  id: 1,
  url: 'http://bit,ly/2EF070t',
  title: 'RedLands Tour',
  desc: 'An ArcGis Online website about redlands CA.',
  thumb: true,
  keywords: ['REdlands', 'California', 'story map', 'arcgis online']
}
projects[2] = {
  id: 2,
  url: 'https://www.arcgis.com/apps/MapTour/index.html?appid=34dab67ae97e4a12a4611f53ccc0566f',
  title: 'Mall',
  desc: 'An ArcGis Online website about popular places in BR.',
  thumb: true,
  keywords: ['Baton Rouge', 'Mall']
}
for (let i = 0; i < projects.length; i++) {
  // log the current project's title
  console.log('Index positon ' + i + ' title: ' + projects[i].title)
  // build and log an image file name based on the project ID
  if (projects[i].thumb === true){
    console.log('images/' + projects[i].id + '.png')
  }
  else {
    console.log('images/no-preview.png')
  }
}

function describeFruit (fruit) {
  let description = 'The ' + fruit + ' is a delicious snack.'
  return description
}
let fDesc = describeFruit('apple')
console.log(fDesc)
