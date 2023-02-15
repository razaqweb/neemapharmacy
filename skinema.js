const copyrightDate = document.querySelector(".cp-date");
const fullYear = new Date().getFullYear();
const skHamMenu = document.querySelector(".sk-hamburger-menu");
const hamTop = document.querySelector(".top");
const hamMiddle = document.querySelector(".middle");
const hamBottom = document.querySelector(".bottom");
const skMobileNav = document.querySelector(".mobile-nav-list");
const skNormalNav = document.querySelector(".sk-nav-list");
const productLink = document.querySelector(".btn-link");
const homePage = "https://neemapharmacy.co.tz";

copyrightDate.textContent = fullYear;

skHamMenu.addEventListener("click", (e) => {
  e.preventDefault();
  hamTop.classList.toggle("clicked");
  hamTop.classList.toggle("unclicked");
  hamMiddle.classList.toggle("clicked");
  hamMiddle.classList.toggle("unclicked");
  hamBottom.classList.toggle("clicked");
  hamBottom.classList.toggle("unclicked");
  skMobileNav.classList.toggle("inactive");
});

skMobileNav.addEventListener("click", (e) => {
  e.preventDefault();

  const id = e.target.getAttribute("href");
  console.log(id);
  if (!e.target.classList.contains("mobile-nav-link")) {
    return;
  } else if (!id.startsWith("#")) {
    window.open(homePage);
  }
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  skMobileNav.classList.toggle("inactive");
  hamTop.classList.toggle("clicked");
  hamTop.classList.toggle("unclicked");
  hamMiddle.classList.toggle("clicked");
  hamMiddle.classList.toggle("unclicked");
  hamBottom.classList.toggle("clicked");
  hamBottom.classList.toggle("unclicked");
});

skNormalNav.addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.getAttribute("href");

  if (!e.target.classList.contains("sk-nav-link")) {
    return;
  } else if (!id.startsWith("#")) {
    window.open(homePage);
  }

  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

productLink.addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.getAttribute("href");

  // if (!e.target.classList.contains("sk-nav-link")) {
  //   return;
  // } else if (id == "index.html") {
  //   window.open(id);
  // }

  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});
