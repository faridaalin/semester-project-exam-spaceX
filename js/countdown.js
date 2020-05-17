const NEXT_LAUNCH_URL = `https://api.spacexdata.com/v3/launches/next`;
let jsonData;

fetch(NEXT_LAUNCH_URL)
  .then((response) => response.json())
  .then((data) => {
    jsonData = data;
    dateCountdown(jsonData);
  })
  .catch((error) => console.log(error));

function dateCountdown(jsonData) {
  const nextLaunchDate = new Date(jsonData.launch_date_local);

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

    const countDownWrapper = document.querySelector(".countdown-wrapper");

    countDownWrapper.innerHTML = `
    <div class="inner-counter">
    <p>Next launch is in:</p>
    <div class="countdown" id="countDown">
      <div class="countdown__counter">
      <p>Days</p>
      <span id="days">${days}</span>
      </div>
      <div class="countdown__counter">
      <p>hours</p>
      <span id="hours">${hours}</span>
      </div>
      <div class="countdown__counter">
      <p>min</p>
      <span id="min">${min}</span>
      </div>
      <div class="countdown__counter">
      <p>sec</p>
      <span class="sec" id="sec">${sec}</span>
      </div>
    </div>
  </div>

  `;
  }, 1000);
}
