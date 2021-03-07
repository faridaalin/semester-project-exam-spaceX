import { fetchData } from './fetchData';
import { currentSiteLocation } from './currentSiteLocation';

// Writes to the DOM
export const countDownTimer = (key: string, url: string) => {
  // Typescript generic type
  const updateEverySec = <T extends IObjectFromApiCall>(nextDate: T): void => {
    const countDownDate = nextDate.launch_date_unix;
    const day = document.querySelectorAll(
      '.days'
    ) as NodeListOf<HTMLSpanElement>;
    const hrs = document.querySelectorAll(
      '.hours'
    ) as NodeListOf<HTMLSpanElement>;
    const minutes = document.querySelectorAll(
      '.min'
    ) as NodeListOf<HTMLSpanElement>;
    const seconds = document.querySelectorAll(
      '.sec'
    ) as NodeListOf<HTMLSpanElement>;
    const nextLanunchText = document.querySelector(
      '.inner-counter p'
    ) as HTMLParagraphElement;

    setInterval(() => {
      const today = new Date().getTime();

      if (countDownDate > today) {
        const timeRemaining = countDownDate - today;

        let sec = Math.floor(timeRemaining / 1000);
        let min = Math.floor(sec / 60);
        let hours = Math.floor(min / 60);
        let days = Math.floor(hours / 24);

        hours %= 24;
        min %= 60;
        sec %= 60;

        day.forEach((el) => (el.innerHTML = `${days}`));
        hrs.forEach(
          (el) => (el.innerHTML = `${hours < 10 ? '0' : ''} ${hours}`)
        );
        minutes.forEach(
          (el) => (el.innerHTML = `${min < 10 ? '0' : ''} ${min}`)
        );
        seconds.forEach(
          (el) => (el.innerHTML = `${sec < 10 ? '0' : ''} ${sec}`)
        );
      } else {
        day.forEach((el) => (el.textContent = '00'));
        hrs.forEach((el) => (el.textContent = '00'));
        minutes.forEach((el) => (el.textContent = '00'));
        seconds.forEach((el) => (el.textContent = '00'));
        nextLanunchText.textContent = 'Launch has ended';
      }
    }, 1000);
  };
  const timer = sessionStorage.getItem(key);
  if (!timer) {
    fetchData(key, url)
      .then((data) => {
        updateEverySec(data);
        currentSiteLocation(data);
      })
      .catch((e) => console.log(e));
  } else {
    updateEverySec(JSON.parse(timer));
    currentSiteLocation(JSON.parse(timer));
  }
};
