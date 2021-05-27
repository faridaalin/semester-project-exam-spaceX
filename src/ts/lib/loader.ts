const loader = () => {
  window.addEventListener("load", () => {
    const loader = document.querySelector(
      ".loader-container"
    ) as HTMLDivElement;
    loader.className += " hidden";
  });
};

export default loader;
