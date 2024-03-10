// document.getElementById('submitButton').addEventListener('click', function() {
//     const data = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         number: document.getElementById('phone').value,
//         message: document.getElementById('message').value
//     };

//     fetch('https://hqqehdq4jb.execute-api.us-east-2.amazonaws.com/FormAPI', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));

// });



function handleSubmit(event) {
    event.preventDefault(); // Prevents default form submission behavior

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
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // You can add code here to update the UI on successful submission
    })
    .catch(error => {
        console.error('Error:', error);
        // Update the UI to show the error message
    });
}