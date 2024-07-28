const images = document.querySelectorAll('.covers-img');

document.addEventListener('DOMContentLoaded', () => {
    const marqueeContainer = document.querySelector('.marquee-container');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                images.forEach(image => {
                    image.style.animationPlayState = 'running';
                });
            } else {
                images.forEach(image => {
                    image.style.animationPlayState = 'paused';
                });
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    observer.observe(marqueeContainer);
});

function stopImages(event) {
    const row = event.target.parentElement;
    Array.from(row.children).forEach(child => {
        if (child.style.animationPlayState === 'paused') {
            child.style.animationPlayState = 'running';
        } else {
            child.style.animationPlayState = 'paused';
        }
    });
}

images.forEach(img => {
    img.addEventListener('click', stopImages);
});
