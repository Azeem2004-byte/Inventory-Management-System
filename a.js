const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const offcanvas = document.getElementById('offcanvas');
const closeBtn = document.getElementById('close-btn');

mobileMenu.addEventListener('click', () => {
    offcanvas.style.left = '0';
});

closeBtn.addEventListener('click', () => {
    offcanvas.style.left = '-250px';
});

// Optional: Close the offcanvas when clicking outside of it
offcanvas.addEventListener('click', (e) => {
    if (e.target === offcanvas) {
        offcanvas.style.left = '-250px';
    }
});





let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselContainer = document.getElementById('carousel-container');

function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate the offset
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    updateCarousel();
});