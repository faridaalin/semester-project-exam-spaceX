const scrollIndicator = () => {
  const scrollIndicator = document.querySelector(
    ".scroll-indicator"
  ) as HTMLDivElement;

  if (scrollIndicator) {
    const scrollPositionTop = window.scrollY;
    if (scrollPositionTop < 200) scrollIndicator.classList.add("show");
  }
};

export const scrollToUp = () => {
  const scrollToUp = document.querySelector(".scroll-up") as HTMLDivElement;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      scrollToUp.classList.add("active");
    } else {
      scrollToUp.classList.remove("active");
    }
  });

  scrollToUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  scrollIndicator();
};
