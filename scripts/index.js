import "../sass/main.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

const menuButton = document.querySelector(".navigation__menu");
const menuLinks = document.querySelector(".navigation__links");

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
