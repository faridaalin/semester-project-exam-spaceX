/*Mobile Navigation*/
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  this.classList.toggle("open");
  menu.classList.toggle("dropdown");
  console.dir(this)
}

let prevScrollPosition = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPosition = window.pageYOffset;

  if (prevScrollPosition === 0 || prevScrollPosition > currentScrollPosition) {
    document.querySelector("header").style.visibility = "visible";
  } else {
    document.querySelector("header").style.visibility = "hidden";
  }
  prevScrollPosition = currentScrollPosition;
};

/*Accordion*/
const accordionBtn = document.querySelectorAll(".accordion_btn");
accordionBtn.forEach((button) => {
  button.addEventListener("click", openTab)
});

function openTab(event) {

  this.classList.toggle("active");
  console.log(this)
}



