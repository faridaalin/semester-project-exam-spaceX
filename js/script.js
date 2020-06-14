
/*Mobile Navigation*/
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  this.classList.toggle("open");
  menu.classList.toggle("dropdown");
}

/*Accordion*/
const accordionBtn = document.querySelectorAll(".accordion_btn");
accordionBtn.forEach((button) => {
  button.addEventListener("click", openTab)
});

function openTab(event) {
  this.classList.toggle("active");
}



