const inputError = (
  field: string,
  value: number | string,
  calcback: Function
) => {
  let isValid: boolean = false;
  const container =
    field === "name"
      ? ".error-name"
      : field === "email"
      ? ".error-email"
      : field === "invalid email"
      ? ".error-invalid-email"
      : ".error-name-message";

  const element = document.querySelector(container) as HTMLSpanElement;

  if (typeof value === "string") {
    if (!calcback(value)) {
      element.style.display = "block";
      isValid = false;
    } else {
      element.style.display = "none";
      isValid = true;
    }
  } else {
    if (calcback(value)) {
      element.style.display = "block";
      isValid = false;
    } else {
      element.style.display = "none";
      isValid = true;
    }
  }
  return isValid;
};

export default inputError;
