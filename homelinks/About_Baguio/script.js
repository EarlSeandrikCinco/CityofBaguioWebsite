window.addEventListener('scroll', function() {
    const image = document.querySelector('.header-image');
    const scrollY = window.scrollY;

    // Change the opacity based on scroll position
    image.style.opacity = 1 - scrollY / 400; // Adjust the divisor for fade effect
});
