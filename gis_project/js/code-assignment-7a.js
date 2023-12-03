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

$(document).ready(loopAndLog())
