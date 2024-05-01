document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting the traditional way

        // Simple client-side validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Submit the form data via AJAX, fetch, or redirect to a thank you page
        console.log('Form submitted', { name, email, subject, message });
        // Reset the form
        form.reset();

        // Show a success message (you can implement a modal or redirect)
        alert('Thank you for contacting us!');
    });
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var userName = document.getElementById('userName').value;
    var userExperience = document.getElementById('userExperience').value;
    var userComments = document.getElementById('userComments').value;

    fetch({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            experience: userExperience,
            comments: userComments
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Display a success message or handle the response
    })
    .catch((error) => {
        console.error('Error:', error);
        // Display an error message
    });

    
    // Show a success message (you can implement a modal or redirect)
    alert('Thank you for your feedback!');
    // Reset the form
    form.reset();
});

