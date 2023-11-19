const body = document.querySelector(".body");
const primaryParent = document.querySelector(".primary-parent");
const hamburgerButton = document.querySelector(".hamburger");
const primaryNav = document.querySelector(".primary-navbar");
const mobileNav = document.querySelector(".mobile-nav");

// Initialize a variable to keep track of the navbar's state
let isNavbarVisible = false;

// Function to toggle the navbar
function toggleNavbar() {
  if (isNavbarVisible) {
    
    mobileNav.classList.remove("is-active");
    hamburgerButton.classList.remove("is-active");
    body.classList.remove("is-active");
    isNavbarVisible = false;
  } else {
    primaryNav.toggleAttribute("is-active");
    mobileNav.classList.add("is-active");
    hamburgerButton.classList.add("is-active");
    body.classList.add("is-active");
    isNavbarVisible = true;
  }
}

// Add a click event listener to the hamburger button
hamburgerButton.addEventListener("click", toggleNavbar);
