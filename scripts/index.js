import "../sass/main.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../vendors/vendors";

const menuButton = document.querySelector(".navigation__menu");
const menuLinks = document.querySelector(".navigation__links");
const heroButton = document.querySelector("#hero-button");
const featuredMenu = document.querySelector("#featured");

menuButton.addEventListener("click", e => {
  const expanded = menuButton.getAttribute("aria-expanded");

  menuLinks.classList.toggle("hide");

  // Will set accessible value expandable
  // http://www.davidmacd.com/blog/toggle-aria-expanded-javascript.html
  if (expanded === "false") {
    menuButton.setAttribute("aria-expanded", "true");
  } else if (expanded === "true") {
    menuButton.setAttribute("aria-expanded", "false");
  }
});

// Hero button Event

heroButton.addEventListener("click", e => {
  // Removes focus from the hero button
  heroButton.blur();
  // Scrolls to the menu
  featuredMenu.scrollIntoView();
  // Sets focus to the menu section
  featuredMenu.focus();
});
