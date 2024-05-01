document.addEventListener('DOMContentLoaded', function() {
    fetch('../events.json') 
        .then(response => response.json())
        .then(events => {
            const eventsContainer = document.getElementById('events-container');
            events.forEach(event => {
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event';
                eventDiv.innerHTML = `
                    <h3>${event.title}</h3>
                    <p>Date: ${event.date}</p>
                    <p>Description: ${event.description}</p>`;
                eventsContainer.appendChild(eventDiv);
            });
        })
        .catch(error => console.error('Error loading events:', error));
});
