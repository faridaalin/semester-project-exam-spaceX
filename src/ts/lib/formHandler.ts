import { checkInputLength } from "../validation/checkInputLength";
import { validateEmail } from "../validation/validateEmail";
import inputError from "../validation/inputError";
import showSuccessMessage from "../lib/successMessage";

const formHandler = () => {
  const form = document.querySelector(".contact-form") as HTMLFormElement;
  form.addEventListener("submit", submitContactForm);
  function submitContactForm(event: Event): void {
    event.preventDefault();

    const inputName = document.querySelector("#name") as HTMLInputElement;
    const inputEmail = document.querySelector("#email")! as HTMLInputElement;
    const inputMessage = document.querySelector("#message") as HTMLInputElement;

    const nameLength = inputName.value.trim().length;
    const emailLength = inputEmail.value.trim().length;
    const messageLength = inputMessage.value.trim().length;

    const nameValidation = inputError("name", nameLength, checkInputLength);
    const emailLengthValidation = inputError(
      "email",
      emailLength,
      checkInputLength
    );
    const emailValidation = inputError(
      "invalid email",
      inputEmail.value,
      validateEmail
    );
    const messageValidation = inputError(
      "message",
      messageLength,
      checkInputLength
    );

    if (
      nameValidation &&
      emailLengthValidation &&
      emailValidation &&
      messageValidation
    )
      showSuccessMessage();
  }
};

export default formHandler;
