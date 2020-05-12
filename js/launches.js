const NEXT_LAUNCH_URL = `https://api.spacexdata.com/v3/launches/next`;


const LANDING_PAD_LAUNCH_URL = `https://api.spacexdata.com/v3/landpads`;

fetch(NEXT_LAUNCH_URL)
  .then((response) => response.json())
  .then((data) => {
    dateCountdown(data);
  })
  .catch((error) => console.log(error));

function dateCountdown(data) {
  const nextLaunchDate = new Date(data.launch_date_local);

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
  `;
  }, 1000);
}



const UPCOMING_LAUNCH_URL = `https://api.spacexdata.com/v3/launches/upcoming`;

fetch(UPCOMING_LAUNCH_URL)
  .then((response) => response.json())
  .then((data) => {
    displayUpcomingLanuches(data);
  })
  .catch((error) => console.log(error));

  function displayUpcomingLanuches(upcomingLaunches) {
    const upcomingLaunchesContainer = document.querySelector('.upcoming-container')

    upcomingLaunches.forEach(launch => {

      // console.dir(launch)


      upcomingLaunchesContainer.innerHTML +=
    `<div class="info-container upcoming">
    <p class="info__text">YEAR-MONTH-DATE</p>
    <p class="info__text">${launch.rocket.rocket_name}</p>
    <p class="info__text">${launch.launch_site.site_name}</p>
    <p class="info__text highlighted">${launch.flight_number}</p>
    </div>`;
    });
  }

  const PREVIOUS_LAUNCH_URL = `https://api.spacexdata.com/v3/launches/past`;

fetch(PREVIOUS_LAUNCH_URL)
  .then((response) => response.json())
  .then((data) => {
    displayPreviousLanuches(data);
  })
  .catch((error) => console.log(error));

  function displayPreviousLanuches(previousLaunches) {
    const previousLaunchesContainer = document.querySelector('.previous-container')

    previousLaunches.forEach(launch => {
      // console.dir(launch)

      // console.dir(launch)


      previousLaunchesContainer.innerHTML +=
    `<div class="info-container upcoming">
    <p class="info__text">YEAR-MONTH-DATE</p>
    <p class="info__text">${launch.rocket.rocket_name}</p>
    <p class="info__text">${launch.launch_site.site_name}</p>
    <p class="info__text highlighted">${launch.flight_number}</p>
    </div>`;
    });
  }
