// JavaScript animation for the top Flower background
const header = document.getElementById("header");
const flowers = [
  { id: "flower1", color: "#fecf11" },
  { id: "flower2", color: "#FE7C24" },
  { id: "flower3", color: "#2ED44E" },
  { id: "flower4", color: "#DA7AFF" }
];

const displayDuration = 11000; // 11s per flower
const totalCycle = displayDuration * flowers.length; // 44s total
let startTime = Date.now();
let animationFrameId = null;

function hideAllFlowers() {
  flowers.forEach(flower => {
    const el = document.getElementById(flower.id);
    el.style.opacity = "0";
    el.style.transform = "scale(0.75)";
  });
}

function updateFlowerAnimation() {
  const now = Date.now();
  const elapsed = now - startTime;
  const cycleTime = elapsed % totalCycle;
  const currentIndex = Math.floor(cycleTime / displayDuration);
  const currentFlower = flowers[currentIndex];
  const timeInFlower = cycleTime % displayDuration;
  const progress = timeInFlower / displayDuration; // from 0 to 1

  // Background color
  header.style.backgroundColor = currentFlower.color;

  // Hide all flowers first
  hideAllFlowers();

  // Show current flower
  const el = document.getElementById(currentFlower.id);
  el.style.opacity = "1";
  const scale = 1 - progress * 0.25; // Scale from 1 → 0.75
  el.style.transform = `scale(${scale.toFixed(3)})`;

  animationFrameId = requestAnimationFrame(updateFlowerAnimation);
}

function startAnimation() {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  updateFlowerAnimation();
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    // Reset startTime so it syncs with actual time
    startTime = Date.now() - ((Date.now() - startTime) % totalCycle);
    startAnimation();
  } else {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  }
});

startAnimation();



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