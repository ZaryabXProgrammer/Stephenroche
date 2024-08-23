const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const menuIconClosed =
  "https://img.icons8.com/?size=100&id=8113&format=png&color=959595";
const menuIconOpen =
  "https://img.icons8.com/?size=100&id=23537&format=png&color=959595";

document
  .getElementById("mobile-menu-icon")
  .addEventListener("click", function () {
    const isMenuVisible = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    menuIcon.src = isMenuVisible ? menuIconClosed : menuIconOpen;
  });

//NAVBAR DONT TELL ICON ARROW
const dontTellLink = document.getElementById("dont-tell-link");
const dontTellIcon = document.getElementById("dontTellIcon");

dontTellLink.addEventListener("mouseenter", () => {
  dontTellIcon.src =
    "https://img.icons8.com/?size=200&id=2760&format=png&color=FFFFFF";
  dontTellIcon.style.transform = "rotate(-180deg)";
});

dontTellLink.addEventListener("mouseleave", () => {
  dontTellIcon.src =
    "https://img.icons8.com/?size=200&id=60653&format=png&color=FFFFFF";
  dontTellIcon.style.transform = "rotate(180deg)";
});

//MMOBILE NAV ARROW

const arrowIcon = document.getElementById("arrowIconDontUp-menu");
const dropdownMenu = document.getElementById("dropdownDontTellNew-menu");

// Initialize the state of the dropdown
let isMenuOpen = false;

// Function to toggle the dropdown menu
function toggleDropdown() {
  if (isMenuOpen) {
    // Close the dropdown menu
    dropdownMenu.classList.add("hidden");
    dropdownMenu.classList.remove("block");
    arrowIcon.style.transform = "rotate(0deg)"; // Rotate arrow back to default
  } else {
    // Open the dropdown menu
    dropdownMenu.classList.remove("hidden");
    dropdownMenu.classList.add("block");
    arrowIcon.style.transform = "rotate(180deg)"; // Rotate arrow downwards
  }
  // Update the state
  isMenuOpen = !isMenuOpen;
}

// Add click event listener to the icon
arrowIcon.addEventListener("click", toggleDropdown);

//moving slides

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slider-slide");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  let autoplayInterval;

  // Function to show a specific slide
  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.remove("active-slide");
      if (dots[i]) {
        dots[i].classList.remove("active-dot");
      }
    });
    slides[index].classList.add("active-slide");
    if (dots[index]) {
      dots[index].classList.add("active-dot");
    }
  };

  // Function to move to the next slide
  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  };

  // Autoplay functionality
  const startAutoplay = () => {
    autoplayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
  };

  const stopAutoplay = () => {
    clearInterval(autoplayInterval);
  };

  // Initialize slider
  showSlide(currentSlide);
  startAutoplay();

  // Event listeners for arrow buttons
  document.getElementById("rightArrow").addEventListener("click", () => {
    nextSlide();
    stopAutoplay(); // Stop autoplay on manual slide change
    startAutoplay(); // Restart autoplay
  });

  document.getElementById("leftArrow").addEventListener("click", () => {
    prevSlide();
    stopAutoplay(); // Stop autoplay on manual slide change
    startAutoplay(); // Restart autoplay
  });

  // Event listeners for dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide(currentSlide);
      stopAutoplay(); // Stop autoplay on manual slide change
      startAutoplay(); // Restart autoplay
    });
  });
});
