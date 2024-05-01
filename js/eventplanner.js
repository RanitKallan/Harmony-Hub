
// Called after the router renders the eventPlannerPage
function initEventPlannerPage() {
    document.getElementById('event-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        const eventDescription = document.getElementById('event-description').value;

        // Create an event object
        const event = { name: eventName, date: eventDate, description: eventDescription };
        saveEvent(event); // Save the event
        displayEvents(); // Refresh the list of displayed events
    });

    displayEvents(); // Initial display of events
}

function saveEvent(event) {
    // Get the existing events from local storage or initialize an empty array if none exist
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(event); // Add the new event to the array
    localStorage.setItem('events', JSON.stringify(events)); // Save back to local storage
}

function displayEvents() {
    const eventsContainer = document.getElementById('events-list');
    const events = JSON.parse(localStorage.getItem('events')) || [];
    eventsContainer.innerHTML = ''; // Clear the events list

    // Add each event to the events list container
    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event';
        eventDiv.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Description: ${event.description}</p>`;
        eventsContainer.appendChild(eventDiv);
    });
}
