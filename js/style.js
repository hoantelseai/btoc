// JavaScript animation for the top Flower background 
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById("header");
  const flowers = [
      { id: "flower1", color: "#fecf11" },
      { id: "flower2", color: "#FE7C24" },
      { id: "flower3", color: "#2ED44E" },
      { id: "flower4", color: "#DA7AFF" }
  ];


  const hasFlowers = flowers.some(flower => document.getElementById(flower.id));
  if (header && hasFlowers) {
      const displayDuration = 11000; // 11s per flower
      const totalCycle = displayDuration * flowers.length; // 44s total
      let startTime = Date.now();
      let animationFrameId = null;

      function hideAllFlowers() {
          flowers.forEach(flower => {
              const el = document.getElementById(flower.id);
              if (el) {
                  el.style.opacity = "0";
                  el.style.transform = "scale(0.75)";
              }
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
          if (el) {
              el.style.opacity = "1";
              const scale = 1 - progress * 0.25; // Scale from 1 → 0.75
              el.style.transform = `scale(${scale.toFixed(3)})`;
          }

          animationFrameId = requestAnimationFrame(updateFlowerAnimation);
      }

      function startAnimation() {
          if (animationFrameId) cancelAnimationFrame(animationFrameId);
          updateFlowerAnimation();
      }

      document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible") {
              startTime = Date.now() - ((Date.now() - startTime) % totalCycle);
              startAnimation();
          } else {
              if (animationFrameId) cancelAnimationFrame(animationFrameId);
          }
      });

      startAnimation();
  } else {
      console.log('Flower elements or header not found, skipping flower animation');
  }

  // JavaScript to open/close the hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const closeMenu = document.querySelector('.close-menu');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
//   const menuLinks = document.querySelectorAll('.menu-section a');

  // Check if hamburger menu elements exist
  if (!hamburger || !closeMenu || !hamburgerMenu) {
      console.error('One or more hamburger menu elements are missing in the DOM');
      return;
  }

  // Open the menu when clicking the hamburger
  hamburger.addEventListener('click', () => {
      console.log('Hamburger clicked!'); // Debug
      hamburgerMenu.classList.add('active');
    //   document.body.classList.add('no-scroll');
  });

  // Close the menu when clicking the X
  closeMenu.addEventListener('click', () => {
      console.log('Close menu clicked!'); // Debug
      hamburgerMenu.classList.remove('active');
    //   document.body.classList.remove('no-scroll');
  });

 
//   menuLinks.forEach(link => {
//     link.addEventListener('click', (event) => {
//         console.log('Menu link clicked!'); // Debug
//         hamburgerMenu.classList.remove('active');
//         document.body.classList.remove('no-scroll');
//     });
// });

  // Card Slider functionality
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  if (slides.length === 0 || dots.length === 0) {
      console.warn('No slides or dots found for card slider');
  } else {
      let slideIndex = 0;

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
  }

  // Top page icon
  const topPageIcon = document.querySelector('.top-page-icon');
  if (topPageIcon) {
      topPageIcon.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }
});

// Chọn tất cả các tab và block
const tabs = document.querySelectorAll('.guide-tab');
const blocks = document.querySelectorAll('.guide-explain-block');

// Thêm sự kiện click cho từng tab
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Xóa class active khỏi tất cả tab và block
        tabs.forEach(t => t.classList.remove('active'));
        blocks.forEach(block => block.classList.remove('active'));


        tab.classList.add('active');


        const target = tab.getAttribute('data-target');
        const targetBlock = document.querySelector(`.guide-explain-block[data-id="${target}"]`);


        if (targetBlock) {
            targetBlock.classList.add('active');
        }
    });
});

// TOP ANIMATION

document.addEventListener('DOMContentLoaded', () => {
    const imgPc = document.querySelector('.top-img img');
    const imgSp = document.querySelector('.top-img-sp');
    const title = document.querySelector('.top-title');
    let isFadeApplied = false; // Biến để theo dõi trạng thái fade đã áp dụng hay chưa

    // Xác định ảnh đang hiển thị dựa trên kích thước màn hình
    function getActiveImage() {
        if (window.innerWidth <= 820) {
            return imgSp;
        }
        return imgPc;
    }

    // Sau 0.5 giây, thêm class để hiện tiêu đề và làm nhạt ảnh
    setTimeout(() => {
        title.classList.add('visible');
        const activeImg = getActiveImage();
        if (activeImg) {
            activeImg.classList.add('fade');
            isFadeApplied = true; // Đánh dấu rằng hiệu ứng fade đã được áp dụng
        }
    }, 500);

    // Cập nhật khi thay đổi kích thước màn hình
    window.addEventListener('resize', () => {
        const activeImg = getActiveImage();
        const allImages = document.querySelectorAll('.top-img img, .top-img-sp');

        // Nếu hiệu ứng fade đã được áp dụng, đảm bảo ảnh đang hiển thị có class fade
        if (isFadeApplied) {
            // Xóa class fade khỏi tất cả ảnh
            allImages.forEach(img => img.classList.remove('fade'));
            // Thêm lại class fade cho ảnh hiện tại
            if (activeImg) {
                activeImg.classList.add('fade');
            }
        }
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     const blocks = document.querySelectorAll('.flower-explain-guide-block');

//     blocks.forEach(block => {
//         const expandSp = block.querySelector('.explain-block-expand-sp');
//         const guideDisplay = block.querySelector('.guide-expand-display');
//         const toggleIcons = block.querySelector('.toggle-icons');

//         if (expandSp && guideDisplay && toggleIcons) {
//             expandSp.addEventListener('click', () => {
          
//                 if (window.innerWidth <= 820) {
//                     guideDisplay.classList.toggle('active');
//                     toggleIcons.classList.toggle('active');
//                 }
//             });
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.flower-explain-guide-block');

    blocks.forEach(block => {
        const expandSp = block.querySelector('.explain-block-expand-sp');
        const guideDisplay = block.querySelector('.guide-expand-display');
        const toggleIcons = block.querySelector('.toggle-icons');

        if (expandSp && guideDisplay && toggleIcons) {
            expandSp.addEventListener('click', () => {
                guideDisplay.classList.toggle('active');
                toggleIcons.classList.toggle('active');
            });
        }
    });
});