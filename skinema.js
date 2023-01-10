const copyrightDate = document.querySelector(".cp-date");
const carouselImg = document.querySelector(".carousel-img");
const fullYear = new Date().getFullYear();

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
