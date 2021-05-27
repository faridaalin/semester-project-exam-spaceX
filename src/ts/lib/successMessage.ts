function showSuccessMessage() {
  const form = document.querySelector(".contact-form") as HTMLFormElement;
  const msg = document.querySelector(".success-message") as HTMLElement;
  form.style.display = "none";
  msg.style.display = "block";
}

export default showSuccessMessage;
