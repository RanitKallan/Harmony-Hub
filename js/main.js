document.addEventListener('DOMContentLoaded', function() {
    // Add 'Careers' link to the navbar
    let navbarNav = document.getElementById('navbarNav');
    if (navbarNav) {
        let newNavItem = document.createElement('li');
        newNavItem.className = 'nav-item';
        newNavItem.innerHTML = '<a class="nav-link" href="careers.html">Careers</a>';
        navbarNav.querySelector('.navbar-nav').appendChild(newNavItem);
    }

    // Change 'Blog' to 'News'
    let navLinks = navbarNav.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i].textContent === 'Blog') {
            navLinks[i].textContent = 'News';
            break; 
        }
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        document.body.innerHTML += footerHTML;
    });
    
});

// search function

document.getElementById('searchBtn').addEventListener('click', function() {
    var searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    if (!searchTerm) {
        alert('Please enter a search term.');
        return;
    }

    // Clear previous search results
    document.querySelectorAll('.searchable').forEach(function(el) {
        el.innerHTML = el.innerHTML.replace(/<mark>/g, '').replace(/<\/mark>/g, '');
    });

    // Search and highlight the term in the content
    document.querySelectorAll('.searchable').forEach(function(el) {
        var originalText = el.textContent;
        var lowerCaseText = originalText.toLowerCase();
        var startIndex = lowerCaseText.indexOf(searchTerm);

        if (startIndex !== -1) {
            var endIndex = startIndex + searchTerm.length;
            var highlightedText = originalText.substring(0, startIndex) + "<mark>" + originalText.substring(startIndex, endIndex) + "</mark>" + originalText.substring(endIndex);
            el.innerHTML = highlightedText;
        }
    });
});

// Login

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }

    console.log('Login attempt with:', username, password);

    // Suppose your form submission was successful
    function onFormSubmissionSuccess() {
        // Redirect to another page
        window.location.href = './index.html'; // Replace with your target page
    }

    // Display a success message
    function onFormSubmissionSuccess() {
        // Assuming you have a div with the ID 'messageContainer' in your HTML
        var messageContainer = document.getElementById('messageContainer');
        messageContainer.innerHTML = '<p>Form submitted successfully!</p>';
        messageContainer.style.color = 'green';

        // Optionally, hide the form
        document.getElementById('yourFormId').style.display = 'none';
    }
});

// register

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Basic client-side validation
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Log to console (for debugging purposes, remove in production)
    console.log('Registration attempt with:', username, email);

    // Example of sending data to a server
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'your-server-endpoint', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        username: username,
        email: email,
        password: password // Be cautious with handling passwords
    }));

    xhr.onload = function() {
        if (xhr.status === 200) {
            // Handle success (e.g., redirect or display a success message)
            console.log('Registration successful');
            // window.location.href = 'login.html'; // Redirect to login
        } else {
            // Handle errors (e.g., display an error message)
            console.log('Registration failed');
        }
    };
});




document.addEventListener("DOMContentLoaded", function() {
    updateNavbarForAuthenticatedUsers();
});

function isAuthenticated() {
    // This function should implement your authentication logic
    // For example, checking for a valid token in localStorage/sessionStorage
    return localStorage.getItem('userToken') !== null;
}

function updateNavbarForAuthenticatedUsers() {
    if (isAuthenticated()) {
        const navbarList = document.querySelector('#navbarNav');
        const statsLi = document.createElement('li');
        const statsLink = document.createElement('a');
        statsLink.href = "./statestics.html"; // The href should match your SPA routing logic
        statsLink.textContent = 'Statistics';
        statsLi.appendChild(statsLink);
        navbarList.appendChild(statsLi);
    }
}



