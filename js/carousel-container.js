document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('carousel-it');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  function scrollCarousel(direction) {
    console.log('scrollCarousel');
    if (!carousel) return;
    const item = carousel.querySelector('.carousel-item');
    if (!item) return;

    const style = getComputedStyle(item);
    const marginRight = parseFloat(style.marginRight || 0);
    const scrollAmount = item.offsetWidth + marginRight;

    console.log('scrollAmount:', scrollAmount, 'direction:', direction);

    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Prev button clicked');
      scrollCarousel(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Next button clicked');
      scrollCarousel(1);
    });
  }
});
