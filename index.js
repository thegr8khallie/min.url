//Hamburger Scripts - start
const ham = document.querySelector(".hamburger-wrapper");
const hamNav = document.querySelector(".navi-element");

const hamAnime = () => {
  if (hamNav.style.transform === "translate(-0.5rem, -20rem)") {
    hamNav.style.transform = "translate(-0.5rem, 0.5rem)";
  } else {
    hamNav.style.transform = "translate(-0.5rem, -20rem)";
  }
};
ham.addEventListener("click", hamAnime);
//Hamburger Scripts - End
