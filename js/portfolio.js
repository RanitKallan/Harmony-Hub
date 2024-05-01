document.addEventListener('DOMContentLoaded', function() {
    const portfolioContainer = document.getElementById('portfolio');
    const loadMoreButton = document.getElementById('loadMore');
    let currentItemCount = 0;
    const itemsPerLoad = 5;

    // Hypothetical project data
    const projects = [
        { title: 'Community Art Exhibit', description: 'A vibrant display of local artwork, fostering community creativity.', imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.macunitedsoccer.com%2Fyouth-soccer%2F&psig=AOvVaw31zUc_VbrONR3HRSO6_v_v&ust=1706486428880000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDh-bDj_oMDFQAAAAAdAAAAABAD' },
        { title: 'Tech for Seniors', description: 'Workshop series teaching technology basics to seniors.', imageUrl: 'path_to_tech_seniors_image.jpg' },
        { title: 'Youth Soccer Camp', description: 'Summer soccer camp for youths aged 8-14, focusing on teamwork and health.', imageUrl: 'path_to_soccer_camp_image.jpg' },
        

    ];

    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}">
            <h5>${project.title}</h5>
            <p>${project.description}</p>
        `;
        return card;
    }

    function loadProjects() {
        const max = currentItemCount + itemsPerLoad;
        for (let i = currentItemCount; i < max && i < projects.length; i++) {
            portfolioContainer.appendChild(createProjectCard(projects[i]));
        }
        currentItemCount += itemsPerLoad;
         // Hide the button if all items are loaded
         if (currentItemCount >= projects.length) {
            loadMoreButton.style.display = 'none';
        }
       
    }

    loadMoreButton.addEventListener('click', loadProjects);

    // Initial load
    loadProjects();
});
