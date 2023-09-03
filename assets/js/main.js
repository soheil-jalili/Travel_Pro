// Hamburger Menu
const navBtn = document.querySelector(".nav__btn"),
  navMenu = document.querySelector(".nav-menu");

let showMenu = false;

const hideNavMenu = () => {
  navBtn.classList.remove("nav-menu--active");
  navMenu.style.left = "-25rem";
  showMenu = false;
};

navBtn.addEventListener("click", () => {
  if (showMenu) {
    hideNavMenu();
  } else {
    navBtn.classList.add("nav-menu--active");
    navMenu.style.left = "0";
    showMenu = true;
  }
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu =
    navMenu.contains(event.target) || navBtn.contains(event.target);

  if (!isClickInsideMenu && showMenu) {
    hideNavMenu();
  }
});
