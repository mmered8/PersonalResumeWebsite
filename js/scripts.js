// Contact form backend — a Cloudflare Worker that emails submissions.
// Source lives in worker/contact-form.js.
var CONTACT_ENDPOINT = 'https://masonmeredith-contact.mason-mere.workers.dev/';

function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Collecting form data
    var nameValue = document.getElementById('name').value;
    var emailValue = document.getElementById('email').value;
    var numberValue = document.getElementById('phone').value;
    var messageValue = document.getElementById('message').value;
    var companyValue = (document.getElementById('company') || {}).value || ''; // honeypot

    var successEl = document.getElementById('submitSuccessMessage');
    var errorEl = document.getElementById('submitErrorMessage');
    var button = document.getElementById('submitButton');

    // Clear any prior result message
    successEl.classList.add('d-none');
    errorEl.classList.add('d-none');

    // Validation
    if (!nameValue || !emailValue || !numberValue || !messageValue) {
        console.error('Validation Failed: Missing one or more fields');
        errorEl.classList.remove('d-none');
        return; // Stop the function if validation fails
    }

    var data = {
        name: nameValue,
        email: emailValue,
        number: numberValue,
        message: messageValue,
        company: companyValue
    };

    button.disabled = true;

    fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(function (response) {
        if (!response.ok) {
            throw new Error('Request failed with status ' + response.status);
        }
        return response.json();
    })
    .then(function () {
        successEl.classList.remove('d-none');
        document.getElementById('contactForm').reset();
    })
    .catch(function (error) {
        console.error('Contact form error:', error);
        errorEl.classList.remove('d-none');
    })
    .finally(function () {
        button.disabled = false;
    });
}

// Attach the event listeners only on the contact page where the form exists
var contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
    contactForm.addEventListener('input', function(event) {
        var feedbackElements = document.getElementsByClassName('invalid-feedback');
        Array.from(feedbackElements).forEach(el => el.classList.add('d-none'));
    });
}
