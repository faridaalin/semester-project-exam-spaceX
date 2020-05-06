/*Mobile Navigation*/
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', toggleMenu)

function toggleMenu() {
  this.classList.toggle('open');
  menu.classList.toggle('dropdown');
}

let prevScrollPosition = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPosition = window.pageYOffset;

  if(prevScrollPosition > currentScrollPosition) {
    document.querySelector('header').style.top ="38px";
  } else {
    document.querySelector('header').style.top ="-100px";
  }

  prevScrollPosition = currentScrollPosition;
}


/*Accordion*/
const accordionBtn = document.querySelectorAll('.accordion_btn');
accordionBtn.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const tabContent = button.nextElementSibling;
    if(tabContent.style.maxHeight === "") {
      tabContent.style.maxHeight = tabContent.scrollHeight + "px"
    } else {
      tabContent.style.maxHeight = "";
    }
  })
});
