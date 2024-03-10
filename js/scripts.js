function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Collecting form data
    var nameValue = document.getElementById('name').value;
    var emailValue = document.getElementById('email').value;
    var numberValue = document.getElementById('phone').value;
    var messageValue = document.getElementById('message').value;

    // Validation
    if (!nameValue || !emailValue || !numberValue || !messageValue) {
        console.error('Validation Failed: Missing one or more fields');
        document.getElementById('submitErrorMessage').classList.remove('d-none');
        return; // Stop the function if validation fails
    }

    // Assuming validation passes, construct the data object
    const data = {
        name: nameValue,
        email: emailValue,
        number: numberValue,
        message: messageValue
    };

    // Fetch request to your API
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

// Attach the event listener to the form
document.getElementById('contactForm').addEventListener('submit', handleSubmit);

// To hide error messages when the user starts typing again
document.getElementById('contactForm').addEventListener('input', function(event) {
    var feedbackElements = document.getElementsByClassName('invalid-feedback');
    Array.from(feedbackElements).forEach(el => el.classList.add('d-none'));
});
