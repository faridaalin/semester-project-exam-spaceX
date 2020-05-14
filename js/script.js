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

window.onscroll = function() {
  let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if(currentScrollPosition > lastScrollPosition) {
    document.querySelector("header").style.top = "-115px";
    document.querySelector(".countdown-wrapper").style.top = "-115px";
  } else {
    document.querySelector("header").style.top = "0";
    document.querySelector(".countdown-wrapper").style.top = "0";
  }

  lastScrollPosition = currentScrollPosition;

}

const scrollUp = document.querySelector('.scroll-up')
scrollUp.addEventListener('click', scrollToTop)

function scrollToTop (event) {
  window.scrollTo({
    top:0,
    lef: 0,
    behavior: "smooth"
  });
}

/*Accordion*/
const accordionBtn = document.querySelectorAll(".accordion_btn");
accordionBtn.forEach((button) => {
  button.addEventListener("click", openTab)
});

function openTab(event) {

  this.classList.toggle("active");
}



