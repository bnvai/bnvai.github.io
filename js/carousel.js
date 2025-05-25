// Image Carousel plugin
// Quản lý nhiều carousel trên cùng 1 trang, auto chuyển slide, nút prev/next

const ImageCarousel = (() => {
    const carousels = {}; // Lưu trạng thái của các carousel theo id
    const intervalTime = 4000; // Thời gian auto chuyển slide (ms)
    let autoSlideTimer;
  
    // Hiển thị slide thứ index cho carousel id
    const showSlide = (id, index) => {
      const container = document.getElementById(id);
      if (!container) return;
      const slides = container.querySelectorAll('.slides img');
      if (!slides.length) return;
  
      if (!carousels[id]) carousels[id] = { currentIndex: 0 };
  
      const total = slides.length;
      carousels[id].currentIndex = ((index % total) + total) % total;
  
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === carousels[id].currentIndex);
      });
    };
  
    // Chuyển slide trước
    const prevSlide = (id) => {
      if (!carousels[id]) carousels[id] = { currentIndex: 0 };
      showSlide(id, carousels[id].currentIndex - 1);
    };
  
    // Chuyển slide tiếp theo
    const nextSlide = (id) => {
      if (!carousels[id]) carousels[id] = { currentIndex: 0 };
      showSlide(id, carousels[id].currentIndex + 1);
    };
  
    // Khởi tạo các sự kiện cho carousel (nút prev, next)
    const setupEventListeners = () => {
      document.querySelectorAll('.carousel').forEach(carousel => {
        const id = carousel.id;
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
  
        if (prevBtn) {
          prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide(id);
            resetAutoSlide();
          });
        }
  
        if (nextBtn) {
          nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide(id);
            resetAutoSlide();
          });
        }
      });
    };
  
    // Khởi tạo carousel ban đầu (hiển thị slide đầu)
    const initCarousels = () => {
      document.querySelectorAll('.carousel').forEach(carousel => {
        const id = carousel.id;
        if (!carousels[id]) carousels[id] = { currentIndex: 0 };
        showSlide(id, 0);
      });
    };
  
    // Tự động chuyển slide theo interval
    const startAutoSlide = () => {
      autoSlideTimer = setInterval(() => {
        Object.keys(carousels).forEach(id => {
          nextSlide(id);
        });
      }, intervalTime);
    };
  
    // Reset timer auto slide khi người dùng bấm prev/next
    const resetAutoSlide = () => {
      if (autoSlideTimer) clearInterval(autoSlideTimer);
      startAutoSlide();
    };
  
    // Hàm debounce (giới hạn tần suất gọi hàm)
    const debounce = (func, delay) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(null, args), delay);
      };
    };
  
    // Khởi tạo plugin carousel khi DOM ready
    const init = () => {
      initCarousels();
      setupEventListeners();
      startAutoSlide();
    };
  
    return {
      init,
      prevSlide,
      nextSlide,
      showSlide,
    };
  })();
  
  // Chạy khi trang load xong
  window.addEventListener('load', ImageCarousel.init);  