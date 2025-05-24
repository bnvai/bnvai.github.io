// js/script.js

// Lấy tham chiếu đến nút "Top"
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Hàm để cuộn trang lên đầu
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Cuộn mượt mà
  });
}

// Lắng nghe sự kiện click trên nút "Top"
if (scrollToTopBtn) {
  // Đảm bảo nút tồn tại trước khi thêm sự kiện
  scrollToTopBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
    scrollToTop();
  });
}

// Lắng nghe sự kiện cuộn trang để hiển thị/ẩn nút
window.addEventListener('scroll', function () {
  // Nếu nút tồn tại, kiểm tra vị trí cuộn
  if (scrollToTopBtn) {
    // Nếu người dùng cuộn xuống hơn 200px (thay đổi giá trị này nếu cần)
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = 'block'; // Hiển thị nút
    } else {
      scrollToTopBtn.style.display = 'none'; // Ẩn nút
    }
  }
});
