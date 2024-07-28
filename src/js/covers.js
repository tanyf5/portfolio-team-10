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
        threshold: 0.1
    });

    observer.observe(marqueeContainer);
});

const marqueeRows = document.querySelectorAll('.marquee-row');

function stopImages(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    };

    const rowClicked = event.target.parentElement;

    marqueeRows.forEach(row => {
        Array.from(row.children).forEach(child => {
            child.style.animationPlayState = 'running';
        });
    });

    Array.from(rowClicked.children).forEach(child => {
        child.style.animationPlayState = 'paused';
    });
};

marqueeRows.forEach(row => {
    row.addEventListener('click', stopImages);
});
