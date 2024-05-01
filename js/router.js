
// Define your route mappings
const routes = {
    '/': homePage, // Function that returns the HTML for the Home page
    '../eventplaner.html': eventPlannerPage, // Function for the Event Planning page content
    // Add other routes and their corresponding functions here
};

function router() {
    // Get the current hash, remove the '#' at the beginning
    const path = window.location.hash.substring(1);
    // Get the function to execute based on the current path
    const pageFunction = routes[path];

    // Check if the function exists
    if (pageFunction) {
        // Execute the function to get the page content HTML string
        const pageContent = pageFunction();
        // Insert the page content into the 'app' element
        document.getElementById('app').innerHTML = pageContent;
        // If your page function includes additional JavaScript for interactivity,
        // make sure to call it here after setting the innerHTML
    } else {
        // Handle unknown routes
        document.getElementById('app').innerHTML = '<h1>404 Not Found</h1>';
    }
}

// Listen for hash change and window load events
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
