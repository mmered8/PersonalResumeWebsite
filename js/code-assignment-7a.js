https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js

function createTitle(i){
  console.log('Index position ' + i + 'title: ' + projects[i].title)
}
function createImageSrc(i){
  // build and log an image file name based on the project ID
  if (projects[i].thumb === true){
    console.log('images/' + projects[i].id + '.png')
  }
  else {
    console.log('images/no-preview.png')
  }
}
function loopAndLog(){
  for (let i = 0; i < projects.length; i++) {
    let title = createTitle(i)
    let image = createImageSrc(i)
    console.log(title);
    console.log(image);
  }
}
loopAndLog()

$(document).ready(console.log('The page is ready!'))
