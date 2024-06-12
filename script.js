 const container = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const arrowRight = document.querySelector('.right-arrow');
    const arrowLeft = document.querySelector('.left-arrow');
    const itemsPerSlide = 3; // Number of items to show at once

    let currentIndex = 0;

    arrowRight.addEventListener('click', () => {
        if (currentIndex + itemsPerSlide < totalItems) {
            currentIndex += itemsPerSlide;
        } else {
            currentIndex = 0; // Reset to the start
        }
        updateCarousel();
    });

    arrowLeft.addEventListener('click', () => {
        if (currentIndex - itemsPerSlide >= 0) {
            currentIndex -= itemsPerSlide;
        } else {
            currentIndex = totalItems - itemsPerSlide; // Go to the end
        }
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * (100 / itemsPerSlide);
        container.style.transform = `translateX(${offset}%)`;
    }