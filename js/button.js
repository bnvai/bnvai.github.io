document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function (event) {
      event.preventDefault();
      scrollToTop();
    });

    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });
  }
});
