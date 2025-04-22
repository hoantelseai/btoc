const header = document.getElementById("header");
        const flowers = [
            { id: "flower1", color: "#fecf11" }, // Vàng cho flower1
            { id: "flower2", color: "#FE7C24" }, // Cam cho flower2
            { id: "flower3", color: "#2ED44E" }, // Xanh cho flower3
            { id: "flower4", color: "#DA7AFF" }  // Hồng cho flower4
        ];

        let currentIndex = 0;

        // Thời gian hiển thị của mỗi bông hoa (11 giây)
        const displayDuration = 11000; // 11 giây
        const initialDelay = 500; // Độ trễ ban đầu 0.5 giây

        // Hàm thay đổi màu nền
        function changeBackground() {
            const currentFlower = flowers[currentIndex];
            header.style.backgroundColor = currentFlower.color;
            currentIndex = (currentIndex + 1) % flowers.length;
        }

        // Đợi 0.5 giây trước khi bắt đầu thay đổi màu nền (đồng bộ với flower1)
        setTimeout(() => {
            // Thay đổi màu nền ngay lập tức cho flower1
            changeBackground();

            // Sau đó, thay đổi màu nền mỗi 11 giây
            setInterval(() => {
                changeBackground();
            }, displayDuration);
        }, initialDelay);

        // Đặt màu ban đầu
        header.style.backgroundColor = flowers[0].color;

// JavaScript để mở/đóng menu hamburger
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');

// Mở menu khi nhấp vào hamburger
hamburger.addEventListener('click', () => {
    hamburgerMenu.classList.add('active');
});

// Đóng menu khi nhấp vào dấu X
closeMenu.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
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
