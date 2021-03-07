import endpoints, { storage } from './config';
import { menu } from './script';
import { countDownTimer } from './countdown';
import { checkInputLength } from './checkInputLength';
import { validateEmail } from './validateEmail';

countDownTimer(storage.NEXT_LAUNCH, endpoints.NEXT_LAUNCH);
menu();

/*Form Validation*/
const form = document.querySelector('.contact-form') as HTMLFormElement;
form.addEventListener('submit', submitContactForm);

// DOM interaction
function submitContactForm(event: Event): void {
  event.preventDefault();

  let isValid = true;

  const inputName = document.querySelector('#name') as HTMLInputElement;
  const nameValue = inputName.value.trim().length;

  if (checkInputLength(nameValue)) {
    (document.querySelector('.error-name') as HTMLSpanElement).style.display =
      'block';
    isValid = false;
  } else {
    (document.querySelector('.error-name')! as HTMLSpanElement).style.display =
      'none';
  }

  const inputEmail = document.querySelector('#email')! as HTMLInputElement;
  const emailValue = inputEmail.value.trim().length;

  if (checkInputLength(emailValue)) {
    (document.querySelector('.error-email') as HTMLSpanElement).style.display =
      'block';
    isValid = false;
  } else {
    (document.querySelector('.error-email') as HTMLSpanElement).style.display =
      'none';
  }

  const inputMessage = document.querySelector('#message') as HTMLInputElement;
  const messageValue = inputMessage.value.trim().length;
  if (checkInputLength(messageValue)) {
    (document.querySelector(
      '.error-name-message'
    ) as HTMLSpanElement).style.display = 'block';
    isValid = false;
  } else {
    (document.querySelector(
      '.error-name-message'
    )! as HTMLSpanElement).style.display = 'none';
  }
  if (validateEmail(inputEmail.value)) {
    (document.querySelector(
      '.error-invalid-email'
    ) as HTMLSpanElement).style.display = 'none';
  } else {
    (document.querySelector(
      '.error-invalid-email'
    ) as HTMLSpanElement).style.display = 'block';
    isValid = false;
  }

  showSuccessMessage(isValid);
}

function showSuccessMessage(validation: boolean) {
  if (validation) {
    const msg = document.querySelector('.success-message') as HTMLElement;
    form.style.display = 'none';
    msg.style.display = 'block';
  }
}
