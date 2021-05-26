const errorMessage = (msg: string) => {
  const main = document.querySelector("  main") as HTMLElement;
  main.innerHTML = "";
  let messageContainer = document.createElement("div");
  messageContainer.innerText = msg;
  messageContainer.classList.add("message");

  main.appendChild(messageContainer);
};

export default errorMessage;
