document.addEventListener('DOMContentLoaded', () => {

    const galleryLinks = document.querySelectorAll('a[data-lightbox="gallery"]');
    
    galleryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            console.log('Gallery image clicked:', event.target.src);
        });
    });

});