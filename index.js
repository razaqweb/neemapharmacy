// Selecting

const hamMenu = document.querySelector(".hamburger-menu");
const hamTop = document.querySelector(".top");
const hamMiddle = document.querySelector(".middle");
const hamBottom = document.querySelector(".bottom");
const mobileNav = document.querySelector(".mobile-nav-list");
const learnBtn = document.querySelector(".learn-more");

// Event Listeners

hamMenu.addEventListener("click", (e) => {
  e.preventDefault();
  hamTop.classList.toggle("clicked");
  hamTop.classList.toggle("unclicked");
  hamMiddle.classList.toggle("clicked");
  hamMiddle.classList.toggle("unclicked");
  hamBottom.classList.toggle("clicked");
  hamBottom.classList.toggle("unclicked");
  mobileNav.classList.toggle("inactive");
});

// Smooth Scrolling
mobileNav.addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  console.log(id);
  if (!e.target.classList.contains("mobile-nav-link")) {
    return;
  }
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  mobileNav.classList.toggle("inactive");
  hamTop.classList.toggle("clicked");
  hamTop.classList.toggle("unclicked");
  hamMiddle.classList.toggle("clicked");
  hamMiddle.classList.toggle("unclicked");
  hamBottom.classList.toggle("clicked");
  hamBottom.classList.toggle("unclicked");
});

learnBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.getAttribute("href");

  if (!e.target.classList.contains("btn-link")) {
    return;
  }

  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});
