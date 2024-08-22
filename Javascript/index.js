const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const menuIconClosed =
  "https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF";
const menuIconOpen =
  "https://img.icons8.com/?size=100&id=23537&format=png&color=1A1A1A";

document
  .getElementById("mobile-menu-icon")
  .addEventListener("click", function () {
    const isMenuVisible = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    menuIcon.src = isMenuVisible ? menuIconClosed : menuIconOpen;
  });



//NAVBAR ANIMATIONS
  
