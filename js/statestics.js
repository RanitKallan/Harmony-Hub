document.addEventListener('DOMContentLoaded', function() {
    fetch('../statistics.json')
        .then(response => response.json())
        .then(data => {
            // Assuming you have a container for each chart
            const visitorsContainer = document.getElementById('visitors-statistics');
            const engagementContainer = document.getElementById('engagement-statistics');
            const contentEngagementContainer = document.getElementById('content-engagement-statistics');
            const demographicInformationContainer = document.getElementById('demographic-information');

            // Initialize Visitor Statistics Chart
            const visitorsCanvas = document.createElement('canvas');
            visitorsContainer.appendChild(visitorsCanvas);
            const visitorsCtx = visitorsCanvas.getContext('2d');
            new Chart(visitorsCtx, {
                type: 'line',
                data: {
                    labels: data.visitorStatistics.labels,
                    datasets: [{
                        label: 'Number of Visitors',
                        data: data.visitorStatistics.data,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                }
            });

            // Initialize User Engagement Chart
            const engagementCanvas = document.createElement('canvas');
            engagementContainer.appendChild(engagementCanvas);
            const engagementCtx = engagementCanvas.getContext('2d');
            new Chart(engagementCtx, {
                type: 'bar',
                data: {
                    labels: data.userEngagement.labels,
                    datasets: [{
                        label: 'User Engagement',
                        data: data.userEngagement.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Initialize Content Engagement Chart
            const contentEngagementCanvas = document.createElement('canvas');
            contentEngagementContainer.appendChild(contentEngagementCanvas);
            const contentEngagementCtx = contentEngagementCanvas.getContext('2d');
            new Chart(contentEngagementCtx, {
                type: 'pie',
                data: {
                    labels: data.contentEngagement.labels,
                    datasets: [{
                        label: 'Content Engagement',
                        data: data.contentEngagement.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ]
                    }]
                }
            });

            // Initialize Demographic Information Chart
            const demographicInformationCanvas = document.createElement('canvas');
            demographicInformationContainer.appendChild(demographicInformationCanvas);
            const demographicInformationCtx = demographicInformationCanvas.getContext('2d');
            new Chart(demographicInformationCtx, {
                type: 'doughnut',
                data: {
                    labels: data.demographicInformation.labels,
                    datasets: [{
                        label: 'Demographic Information',
                        data: data.demographicInformation.data,
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)'
                        ]
                    }]
                }
            });
        })
        .catch(error => console.error('Error loading statistics:', error));
});
``
