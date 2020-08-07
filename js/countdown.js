let app = (function () {
  const countDown = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        nextDate = data;
        updateEverySec(nextDate);
      })
      .catch((error) => console.log(error));
  };


  const updateEverySec = (nextDate) => {
    const nextLaunchDate = new Date(nextDate.launch_date_local);
    const countDownDate = new Date(nextLaunchDate).getTime();

    const day = document.querySelector("#days");
    const hrs = document.querySelector("#hours");
    const minutes = document.querySelector("#min");
    const seconds = document.querySelector("#sec");
    const nextLanunchText = document.querySelector(".inner-counter p");

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

        day.innerHTML = `${days}`
        hrs.innerHTML = `${hours < 10 ? "0" : ""} ${hours}`;
        minutes.innerHTML = `${min < 10 ? "0" : ""} ${min}`;
        seconds.innerHTML = `${sec < 10 ? "0" : ""} ${sec}`;
      } else {
        nextLanunchText.textContent = 'Launch has ended'
        day.textContent = '00'
        hrs.textContent = '00'
        minutes.textContent = '00'
        seconds.textContent = '00'
      }
    }, 1000);
  };

  return {
    countDown: countDown,
  };
})();
