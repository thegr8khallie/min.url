const ham = document.querySelector(".hamburger-wrapper");
const hamNav = document.querySelector(".navi-element");
const hamAnime = () => {
  hamNav.classList.toggle("ham-menu");
};
ham.addEventListener("click", hamAnime);
