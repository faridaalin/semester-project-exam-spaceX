/*
* Hello Farida
* you may self destruct these comments when you have completed the challenge 🕹
*
* You have a greater grasp JS... SOOO now to take things to next level, lets talk Design Patterns.
* Which we will cover more in next semester, but as i always say "there is no time like the present" so here we go
*
* I want you to think of you code as modules and in also in a functional way. think of all the different peices of code you have and break them down into single purpose functions(where possible).
*
* Design Pattern 1
* The revealing module pattern
*
* the basic idea is you can with having to use import statements or module or requires (because they are not yet fully supported in ALL browsers yet),
* you can have code that is broken down into modules
* break up you code modules, these modules can be single purpose functions, functions that you will be able to call from any where in your app
**
* an example I made with psuedocode: https://github.com/mannuelf/js-scratch-pad/tree/master/src/revealing-module-pattern
* some light reading: https://addyosmani.com/resources/essentialjsdesignpatterns/book/
*
* */

/*Mobile Navigation*/
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  this.classList.toggle("open");
  menu.classList.toggle("dropdown");
console.dir(this) // delete all logs
}

/*Accordion*/
const accordionBtn = document.querySelectorAll(".accordion_btn");
accordionBtn.forEach((button) => {
  button.addEventListener("click", openTab)
});

function openTab(event) {
  this.classList.toggle("active");
}



