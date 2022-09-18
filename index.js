import infoSvg from "./scripts/infoSvg.js";
import socialSvg from "./scripts/socialSvg.js";
//Hamburger Scripts - start
const ham = document.querySelector(".hamburger-wrapper");
const hamNav = document.querySelector(".navi-element");
const hamElement = document.querySelectorAll(".hamburger");
if (innerWidth < 1228) {
  hamNav.style.transform = "translate(-0.5rem, -20rem)";
  hamElement[0].style.height = "0.8rem";
}
const hamAnime = () => {
  if (hamNav.style.transform === "translate(-0.5rem, -20rem)") {
    hamNav.style.transform = "translate(-0.5rem, 0.5rem)";
  } else {
    hamNav.style.transform = "translate(-0.5rem, -20rem)";
  }
  if (hamElement[0].style.height === "0.8rem") {
    hamElement.forEach((i) => {
      i.style.height = "0.3rem";
    });
  } else {
    hamElement.forEach((i) => {
      i.style.height = "0.8rem";
    });
  }
};
ham.addEventListener("click", hamAnime);
//Hamburger Scripts - End

//info-section-bullet Scripts - start
const iconWrapper = document.querySelectorAll(".point-icon");
iconWrapper.forEach((i, j) => {
  i.innerHTML = infoSvg[j];
});
//info-section-bullet Scripts - end

//footer scripts - start
const socialIcons = document.querySelectorAll(".social-app");
socialIcons.forEach((i, j) => {
  i.innerHTML = socialSvg[j];
});
//footer scripts - end

// Link Shortening Form Scripts - Start
const urlField = document.querySelector(
  ".form-control > input[type='text']#form-link"
);
const urlNameField = document.querySelector(
  ".form-control > input[type='text']#form-name"
);
const form = document.querySelector(".form-control");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const urlValidator =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  const theUrl = urlField.value;
  if (urlField.value === "") {
    errorHandling("Please add a Link");
  } else if (!urlField.value.match(urlValidator)) {
    errorHandling("Please enter a valid URL");
  } else {
    getMinUrl(theUrl);
  }
});

function errorHandling(errMsg) {
  let errorMessage = document.createElement("div");
  errorMessage.className = "error-message";
  let errorText = document.createTextNode(`*${errMsg}`);
  errorMessage.appendChild(errorText);
  let formContainer = document.querySelector(".form-container");
  formContainer.style.paddingBottom = "2rem";
  formContainer.appendChild(errorMessage);
  urlField.style.border = "0.3rem solid #dc3636";
  setTimeout(() => {
    errorMessage.remove();
    formContainer.style.paddingBottom = "1rem";
    urlField.style.border = "none";
  }, 3000);
}
function dataHandling(minUrlName, minUrlLink, minUrl) {
  let minUrlWrapper = document.createElement("div");
  let minUrlMarkup = `<div class="data-display">
    <p class="link-name">${minUrlName}</p>
                        <div class="link-copy">
                          <a href="${minUrlLink}" target="_blank" rel="noopener noreferrer">${minUrl}</a>
                          <div class="responseBtn-wrapper">
                          <button class="copy">Copy</button>
                          <button class="delete">Delete</button>
                          </div>
                        </div>
                        </div>`;
  minUrlWrapper.className = "data-display-wrapper";
  minUrlWrapper.innerHTML = minUrlMarkup;
  let container = document.querySelector(".info-section");
  let nextSibling = document.querySelector(".info-section-intro");
  container.insertBefore(minUrlWrapper, nextSibling);
  urlField.value = "";
}

const theUrlName =
  urlNameField.value === "" ? "Untitled Link" : urlNameField.value;

//POST request to shrtco.de API
async function getMinUrl(url) {
  let serverData = await axios.post(
    `https://api.shrtco.de/v2/shorten?url=${url}`
  );
  let minUrlLink = serverData.data.result.full_short_link;
  let minUrl = serverData.data.result.short_link;
  dataHandling(theUrlName, minUrlLink, minUrl);
}
//Link Shortening Form Scripts - End

//Link Copy and Delete Functionality
document.body.addEventListener("click", (e) => {
  //Copy
  if (e.target.classList.contains("copy")) {
    let copyBtn = e.target;
    copyBtn.innerHTML = "Copied!";
    copyBtn.style.backgroundColor = "#57317d";
    copyBtn.style.border = "none";
    copyBtn.style.pointerEvents = "none";
    let textToBeCopied = copyBtn
      .closest(".link-copy")
      .querySelector("a").textContent;
    navigator.clipboard.writeText(textToBeCopied);
    setTimeout(() => {
      copyBtn.style.pointerEvents = "auto";
      copyBtn.innerHTML = "Copy";
      copyBtn.style.backgroundColor = "#2acfcf";
      copyBtn.style.border = "0.1rem solid #2acfcf";
    }, 3000);
  } else if (e.target.classList.contains("delete")) {
    let deleteBtn = e.target;
    deleteBtn.closest(".data-display-wrapper").remove();
  }
});
