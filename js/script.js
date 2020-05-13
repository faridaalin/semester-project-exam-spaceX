/*Mobile Navigation*/
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  this.classList.toggle("open");
  menu.classList.toggle("dropdown");
  console.dir(this)
}

let lastScrollPosition = 0;
console.log(lastScrollPosition)

window.onscroll = function() {
  let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  console.log(currentScrollPosition)
  console.log(lastScrollPosition > currentScrollPosition)

  if(currentScrollPosition > lastScrollPosition) {
    document.querySelector("header").style.top = "-115px";
  } else {
    document.querySelector("header").style.top = "0";
  }

  lastScrollPosition = currentScrollPosition;
  console.log('New Scroll position:', lastScrollPosition)

}

/*Accordion*/
const accordionBtn = document.querySelectorAll(".accordion_btn");
accordionBtn.forEach((button) => {
  button.addEventListener("click", openTab)
});

function openTab(event) {

  this.classList.toggle("active");
}



