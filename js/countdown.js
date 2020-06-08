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

    setInterval(() => {
      const today = new Date().getTime();
      const timeRemaining = countDownDate - today;

      let sec = Math.floor(timeRemaining / 1000);
      let min = Math.floor(sec / 60);
      let hours = Math.floor(min / 60);
      let days = Math.floor(hours / 24);

      hours %= 24;
      min %= 60;
      sec %= 60;

      hours = hours < 10 ? "0" + hours : hours;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;

      const day =  document.querySelector('#days').innerHTML = `${days}`,
      hrs = document.querySelector('#hours').innerHTML = `${hours}`,
      minutes = document.querySelector('#min').innerHTML = `${min}`,
      secunds = document.querySelector('#sec').innerHTML = `${sec}`;

    }, 1000);
  };

  return {
    countDown: countDown,

  };
})();
