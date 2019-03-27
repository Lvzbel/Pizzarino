import "../sass/main.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

const menuButton = document.querySelector(".navigation__menu");
const menuLinks = document.querySelector(".navigation__links");

menuButton.addEventListener("click", e => {
  menuLinks.classList.toggle("hide");
});
