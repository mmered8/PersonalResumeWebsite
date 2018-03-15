//https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js

function loopAndLog(){
  for (let i = 0; i < projects.length; i++) {
    let title = createTitle(i)
    let image = createImageSrc(i)
    console.log(title)
    console.log(image)
  }
  console.log("Is it suppose to do something?")
}
function createTitle(i){
  var a ='Index position ' + i + ' title: ' + projects[i].title
}
function createImageSrc(i){
  // build and log an image file name based on the project ID
  if (projects[i].thumb === true){
    var a ='images/' + projects[i].id + '.png'
  }
  else {
    var b = 'images/no-preview.png'
  }
}

$(document).ready(loopAndLog())
