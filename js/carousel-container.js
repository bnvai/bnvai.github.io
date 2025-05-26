document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('carousel');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  function scrollCarousel(direction) {
    if (!carousel) return;
    const item = carousel.querySelector('.carousel-item');
    if (!item) return;

    const style = getComputedStyle(item);
    const marginRight = parseFloat(style.marginRight || 0);
    const scrollAmount = item.offsetWidth + marginRight;
    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function (e) {
      e.preventDefault();
      scrollCarousel(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function (e) {
      e.preventDefault();
      scrollCarousel(1);
    });
  }
});
