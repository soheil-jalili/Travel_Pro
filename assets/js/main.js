const hamberMenu = document.querySelector(".nav__menu--hamber"),
  navBarNav = document.querySelector(".navbar__nav");

let isActive = false;

hamberMenu.addEventListener("click", () => {
  if (isActive) {
    hamberMenu.classList.remove("nav__btn--open");
    navBarNav.classList.remove("nav__open");
    isActive = false;
  } else {
    hamberMenu.classList.add("nav__btn--open");
    navBarNav.classList.add("nav__open");
    isActive = true;
  }
});
