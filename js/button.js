// Back to Top plugin
// Show the button when scrolling down and scroll back to top when clicked

let backToTopBtn;
const showOffset = 200; // Scroll offset in pixels to show button

const createBackToTop = () => {
  // Get the Back to Top button element by ID
  backToTopBtn = document.getElementById("scrollToTopBtn");
  if (!backToTopBtn) return; // Exit if button not found

  // Add click event: smooth scroll back to top
  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Add scroll event listener with debounce to optimize performance
  window.addEventListener("scroll", debounceButton(toggleBtnVisibility, 100));

  // Call once immediately to set initial visibility of the button
  toggleBtnVisibility();
};

// Show or hide the button based on scroll position
const toggleBtnVisibility = () => {
  if (window.scrollY > showOffset) {
    backToTopBtn.classList.add("show"); // Show button if scrolled down beyond offset
  } else {
    backToTopBtn.classList.remove("show"); // Hide button if near top
  }
};

// Debounce function to limit how often a function is called during scroll events
const debounceButton = (func, delay) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
};

// Initialize the Back to Top button when the page is fully loaded
window.addEventListener("load", createBackToTop);