const toggle = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
