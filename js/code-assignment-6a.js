let projects = []
projects[0] = {
  id:1,
  url:'http://bit,ly/2EF070t',
  title:'RedLands Tour',
  desc:'An ArcGis Online website about redlands CA.',
  thumb:true,
  keywords:['Redlands', 'California', 'story map', 'arcgis online']
}
projects[1] = {
  id:2,
  url:'https://www.arcgis.com/apps/MapTour/index.html?appid=34dab67ae97e4a12a4611f53ccc0566f',
  title:'Mall',
  desc:'An ArcGis Online website about popular places in BR.',
  thumb:true,
  keywords:['Baton Rouge', 'Mall']
}

function loopAndLog(){
  for (let i = 0; i < projects.length; i++) {
    let title = createTitle(i)
    let image = createImageSrc(i)
    console.log(title)
    console.log(image)
  }
}

function createTitle(i){
  var a ='Index position ' + i + ' title: ' + projects[i].title
  return a
}
function createImageSrc(i){
  // build and log an image file name based on the project ID
  if (projects[i].thumb === true){
    var a ='images/' + projects[i].id + '.png'
    return a
  }
  else {
    var b ='images/no-preview.png'
    return b
  }
}

loopAndLog()

// Describes Fruit
/*
function describeFruit (fruit) {
  let description = 'The ' + fruit + ' is a delicious snack.'
  return description
}
let fDesc = describeFruit('apple')
console.log(fDesc)
*/
