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

function showSuccessMessage() {
    document.getElementById('submitSuccessMessage').classList.remove('d-none');
}

function showErrorMessage() {
    document.getElementById('submitErrorMessage').classList.remove('d-none');
}

function hideMessages() {
    document.getElementById('submitSuccessMessage').classList.add('d-none');
    document.getElementById('submitErrorMessage').classList.add('d-none');
}


function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Perform custom validation (example for name field)
    var name = document.getElementById('name').value;
    if (!name) {
        // Show error for name field
        document.querySelector('[data-sb-feedback="name:required"]').classList.remove('d-none');
        return; // Stop the function if validation fails
    }

    // Assuming validation passes, construct the data object
    const data = {
        name: name,
        email: document.getElementById('email').value,
        number: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Fetch request to your API
    fetch('https://hqqehdq4jb.execute-api.us-east-2.amazonaws.com/FormAPI', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('submitSuccessMessage').classList.remove('d-none');
        // Optionally, reset form fields here
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
