/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/

document.getElementById('submitButton').addEventListener('click', function() {
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    fetch('https://hqqehdq4jb.execute-api.us-east-2.amazonaws.com/FormAPI', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
            // Include API key header if necessary
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});