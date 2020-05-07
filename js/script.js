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

/*Form Validation*/
const form = document.querySelector('.contact-form');
const submitBtn = document.querySelector('#submit');

form.addEventListener("submit", submitContactForm)

function submitContactForm(event) {
  event.preventDefault();

  let isValid = true;

  const inputName = document.querySelector('#name');
  const nameValue = inputName.value.trim().length;
  if(nameValue === 0) {
    document.querySelector('.error-name').style.display = "block"
    isValid = false;
  } else {
    document.querySelector('.error-name').style.display = "none"
  }

  const inputEmail = document.querySelector('#email');
  const emailValue = inputEmail.value.trim().length;
  if(emailValue  === 0) {
    document.querySelector('.error-email').style.display = "block"
    isValid = false;
  } else {
    document.querySelector('.error-email').style.display = "none"
  }

  const inputMessage = document.querySelector('#message');
  const messageValue = inputMessage.value.trim().length;
  if(messageValue === 0) {
    document.querySelector('.error-name-message').style.display = "block"
    isValid = false;
  } else {
    document.querySelector('.error-name-message').style.display = "none"

  }
  if(validateEmail(email.value)) {
    document.querySelector('.error-invalid-email').style.display = "none"
  } else {
    document.querySelector('.error-invalid-email').style.display = "block"
    isValid = false;
  }


  displayThankYouMessage(isValid)

}

function validateEmail(email) {
  let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(email);
};


function displayThankYouMessage(validation) {
  if(validation) {
    const ThanYouMessage = document.querySelector('.success-message')
    form.style.display = "none"
    ThanYouMessage.style.display = "block"
  }
}

