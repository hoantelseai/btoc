const header = document.getElementById("header");
const flowers = [
    { id: "flower1", color: "#fecf11" }, // Vàng cho flower1
    { id: "flower2", color: "#FE7C24" }, // Cam cho flower2
    { id: "flower3", color: "#2ED44E" }, // Xanh cho flower3
    { id: "flower4", color: "#DA7AFF" }  // Hồng cho flower4
];

const displayDuration = 11000; // 11 giây mỗi hoa
const totalCycle = 44000; // Tổng chu kỳ cho 4 hoa (44 giây)
const flowerDelay = 500; // Hoa hiển thị sau màu nền 0.5 giây (được set trong CSS)
let startTime = Date.now(); // Lưu thời gian bắt đầu ngay khi trang tải
let animationFrameId = null;

// Hàm tính hoa hiện tại và cập nhật màu nền dựa trên thời gian
function updateBackground() {
    const elapsedTime = Date.now() - startTime; // Thời gian đã trôi qua kể từ khi bắt đầu
    const timeInCycle = elapsedTime % totalCycle; // Thời gian trong chu kỳ 44 giây
    const currentIndex = Math.floor(timeInCycle / displayDuration); // Tính chỉ số hoa hiện tại
    const currentFlower = flowers[currentIndex];
    header.style.backgroundColor = currentFlower.color; // Cập nhật màu nền

    // Tiếp tục cập nhật bằng requestAnimationFrame để đảm bảo đồng bộ
    animationFrameId = requestAnimationFrame(updateBackground);
}

// Khởi tạo và bắt đầu cập nhật màu nền
function startBackgroundChange() {
    if (animationFrameId) cancelAnimationFrame(animationFrameId); // Hủy frame cũ nếu có
    updateBackground(); // Bắt đầu cập nhật màu nền
}

// Xử lý khi tab trở lại trạng thái active
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Khi tab trở lại trạng thái active, tiếp tục cập nhật màu nền
        startBackgroundChange();
    } else {
        // Khi tab không active, hủy requestAnimationFrame để tiết kiệm tài nguyên
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
    }
});

// Khởi động ban đầu
startBackgroundChange();


// JavaScript để mở/đóng menu hamburger
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');

// Mở menu khi nhấp vào hamburger
hamburger.addEventListener('click', () => {
    hamburgerMenu.classList.add('active');
    document.body.classList.add('no-scroll'); // Thêm class no-scroll để ẩn thanh cuộn
});

// Đóng menu khi nhấp vào dấu X
closeMenu.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    document.body.classList.remove('no-scroll'); // Xóa class no-scroll để khôi phục cuộn
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


