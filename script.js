const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", function () {
  document.body.classList.toggle("menu-open");
});
const exploreToggle = document.querySelector(".explore-toggle");
const exploreSubmenu = document.querySelector(".explore-submenu");
exploreToggle.addEventListener("click", function (event) {
  event.preventDefault();
  exploreSubmenu.classList.toggle("open");
});
