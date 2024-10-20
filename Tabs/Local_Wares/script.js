let slideIndex = 1; // Start with the first slide

function showSlides(n) {
    const slides = document.querySelectorAll('.mySlides'); // Get all slides
    if (n > slides.length) { slideIndex = 1 } // Loop back to the first slide
    if (n < 1) { slideIndex = slides.length } // Loop to the last slide
    slides.forEach(slide => slide.style.display = "none"); // Hide all slides
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
}

function plusSlides(n) {
    showSlides(slideIndex += n); // Update slide index and show slides
}

// Initialize the slideshow on page load
document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex); // Show the first slide initially
});
