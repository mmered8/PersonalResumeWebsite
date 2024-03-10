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
    event.preventDefault(); // Prevent default form submission

    // Perform custom validation
    var nameValue = document.getElementById('name').value;
    var emailValue = document.getElementById('email').value;
    var numberValue = document.getElementById('phone').value;
    var messageValue = document.getElementById('message').value;

    

    var error = 0;
    if (!nameValue) {
        // Show error for name field
        document.querySelector('[data-sb-feedback="name:required"]').classList.remove('d-none');
        error = 1; 
    } else if(!emailValue) {
        document.querySelector('[data-sb-feedback="email:required"]').classList.remove('d-none');
        error = 1; 
    } else if(!numberValue) {
        document.querySelector('[data-sb-feedback="phone:required"]').classList.remove('d-none');
        error = 1; 
    } else if(!messageValue) {
        document.querySelector('[data-sb-feedback="message:required"]').classList.remove('d-none');
        error = 1; 
    }

    // Assuming validation passes, construct the data object
    const data = {
        name: nameValue,
        email: emailValue,
        number: numberValue,
        message: messageValue
    };

    fetch('https://hqqehdq4jb.execute-api.us-east-2.amazonaws.com/FormAPI/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
        console.log('Received response:', response); // Log the raw response
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(responseData => {
        console.log('Response data:', responseData); // Log the response data
        document.getElementById('submitSuccessMessage').classList.remove('d-none');
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('submitErrorMessage').classList.remove('d-none');
    });
}

// To hide error messages when the user starts typing again
document.getElementById('contactForm').addEventListener('input', function(event) {
    var feedbackEl = event.target.parentNode.querySelector('.invalid-feedback');
    if (feedbackEl && !feedbackEl.classList.contains('d-none')) {
        feedbackEl.classList.add('d-none');
    }
});
