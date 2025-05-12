// JavaScript animation for the top Flower background
const header = document.getElementById("header");
const flowers = [
    { id: "flower1", color: "#fecf11" }, // Yellow for flower1
    { id: "flower2", color: "#FE7C24" }, // Orange for flower2
    { id: "flower3", color: "#2ED44E" }, // Green for flower3
    { id: "flower4", color: "#DA7AFF" }  // Pink for flower4
];

const displayDuration = 11000; // 11 seconds per flower
const totalCycle = 44000; // Total cycle for 4 flowers (44 seconds)
const flowerDelay = 500;// Flower appears 0.5 seconds after the background color (set in CSS)
let startTime = Date.now(); // Store the start time as soon as the page loads
let animationFrameId = null;

// Function to calculate the current flower and update the background color based on time
function updateBackground() {
    const elapsedTime = Date.now() - startTime; // Time elapsed since the start
    const timeInCycle = elapsedTime % totalCycle; // Time in the 44-second cycle
    const currentIndex = Math.floor(timeInCycle / displayDuration); // Calculate the current flower index
    const currentFlower = flowers[currentIndex];
    header.style.backgroundColor = currentFlower.color; // Update the background color

    // Continue updating using requestAnimationFrame for synchronization
    animationFrameId = requestAnimationFrame(updateBackground);
}

// Initialize and start updating the background color
function startBackgroundChange() {
    if (animationFrameId) cancelAnimationFrame(animationFrameId); //  Cancel the old frame if there is one
    updateBackground(); // Start updating the background color
}

// Handle when the tab returns to the active state
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // When the tab returns to active state, continue updating the background color
        startBackgroundChange();
    } else {
        // When the tab is not active, cancel requestAnimationFrame to save resources
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
    }
});

// Initial startup
startBackgroundChange();


// JavaScript to open/close the hamburger menu
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');

// Open the menu when clicking the hamburger
hamburger.addEventListener('click', () => {
    hamburgerMenu.classList.add('active');
    document.body.classList.add('no-scroll'); // Add no-scroll class to hide the scrollbar
});

// Close the menu when clicking the X
closeMenu.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    document.body.classList.remove('no-scroll'); // Remove no-scroll class to restore scrolling
});

// Card Slider functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slideIndex = (slideIndex + 1) % slides.length;
    
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

function currentSlide(n) {
    slideIndex = n;
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
    clearInterval(slideInterval);
    slideInterval = setInterval(showSlides, 5000);
}

slides[0].classList.add('active');
dots[0].classList.add('active');

let slideInterval = setInterval(showSlides, 5000);

// Top page icon 
document.querySelector('.top-page-icon').addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });