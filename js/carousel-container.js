function scrollCarousel(direction) {
    const carousel = document.getElementById("carousel");
    const item = carousel.querySelector(".carousel-item");
    const scrollAmount = (item.offsetWidth + 16) * 4; // scroll 4 items
    carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  }  