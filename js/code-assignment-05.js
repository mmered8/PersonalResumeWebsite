let project1 = {
  id: 1,
  title: 'Redlands',
  hasThumbnail: true
}
let project2 = {
  id: 2,
  title: 'Mall',
  hasThumbnail: true
}

let projects = [
  project1,
  project2
]

for (let i = 0; i < projects.length; i++) {
  // log the current project's title
  console.log('Element ' + i + ' title: ' + projects[i].title);
  // build and log an image file name based on the project ID
  if (projects[i].hasThumbnail === true) {
  console.log('images/' + projects[i].id + '.png');
  }
}
