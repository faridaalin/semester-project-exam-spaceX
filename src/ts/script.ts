/*Mobile Navigation*/
export const menu = () => {
  const hamburger = document.querySelector('.hamburger') as HTMLDivElement;
  const menu = document.querySelector('.menu') as HTMLDivElement;

  hamburger.addEventListener('click', toggleMenu);

  function toggleMenu(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle('open');
    menu.classList.toggle('dropdown');
  }
};

/*Accordion*/
export const accordion = (): void => {
  const accordionBtn = document.querySelectorAll('.accordion_btn');
  accordionBtn.forEach((button) => {
    button.addEventListener('click', openTab);
  });

  function openTab(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle('active');
  }
};
