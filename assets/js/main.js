const hamburgerBtn = document.querySelector(".nav__btn"),
  navMenu = document.querySelector(".nav-menu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.add("nav-menu--active");
});
