// This function fetches and displays the header and footer content
function loadDynamicContent() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the header:', error);
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the footer:', error);
        });
}



// Ensure the DOM is fully loaded before executing
document.addEventListener('DOMContentLoaded', function() {
    loadDynamicContent();
    initCharts();
});
