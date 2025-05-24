// back to top plugin
// hiện nút khi scroll xuống và cuộn lên đầu trang khi nhấn nút

let backToTopBtn;
let showOffset = 200; // px

const createBackToTop = () => {
  backToTopBtn = document.getElementById("scrollToTopBtn");
  if (!backToTopBtn) return;

  // khi click, cuộn lên đầu trang
  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // thêm listener scroll với debounce_scroll
  window.addEventListener("scroll", debounce_scroll(toggleBtnVisibility, 100));
  toggleBtnVisibility(); // gọi luôn lần đầu để ẩn/hiện đúng
};

const toggleBtnVisibility = () => {
  if (window.scrollY > showOffset) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
};

// debounce_scroll hàm để tối ưu hiệu năng scroll
const debounce_scroll = (func, delay) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
};

// khi trang load xong thì khởi tạo nút
window.addEventListener("load", createBackToTop);
