const copyrightDate = document.querySelector(".cp-date");
const carouselImg = document.querySelector(".carousel-img");
const fullYear = new Date().getFullYear();
const skHamMenu = document.querySelector(".sk-hamburger-menu");
const hamTop = document.querySelector(".top");
const hamMiddle = document.querySelector(".middle");
const hamBottom = document.querySelector(".bottom");
const skMobileNav = document.querySelector(".mobile-nav-list");

copyrightDate.textContent = fullYear;

let count = 1;
carouselImg.addEventListener("click", () => {
  if (count == 5) {
    count = 1;
  } else {
    count++;
  }
  carouselImg.setAttribute("src", `imgs/lab-img${count}.JPG`);

  console.log(count);
});

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
  if (!e.target.classList.contains("mobile-nav-link")) {
    return;
  } else if (id == "index.html") {
    window.open("index.html");
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
