const NEXT_LAUNCH_URL = `https://api.spacexdata.com/v3/launches/next`;

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

const ROCKETS_URL = `https://api.spacexdata.com/v3/rockets`;
let rocketsArray = [];

fetch(ROCKETS_URL)
  .then((response) => response.json())
  .then((data) => {
    rocketsArray = data;
    createRocketCards(rocketsArray);
  })
  .catch((error) => console.log(error));

function createRocketCards(rockets) {
  const cardsContainer = document.querySelector(".cards");

  rockets.forEach((rocket) => {
    cardsContainer.innerHTML += `
      <div class="card" style="background-image: url(${rocket.flickr_images[0]})">

      <h2 class="card__title">${rocket.rocket_name}</h2>

      <div class="card__info">
        <div class="devider">
          <div class="devider-container">
            <div class="devider-1">
              <div class="info-container">
                <p class="info__name">Diameter</p>
                <p class="info__text">${rocket.diameter.meters} m</p>
              </div>
              <div class="info-container">
                <p class="info__name">Height</p>
                <p class="info__text">${rocket.height.meters} m</p>
              </div>
              <div class="info-container">
                <p class="info__name">Mass</p>
                <p class="info__text">${rocket.mass.kg} kg</p>
              </div>
            </div>

          </div>

          <div class="devider-container">
            <div class="devider-2">
              <div class="info-container">
                <p class="info__name">Landing Legs</p>
                <p class="info__text">${rocket.landing_legs.number}</p>
              </div>

              <div class="info-container">
                <p class="info__name">Engines</p>
                <p class="info__text">${rocket.engines.number}</p>
              </div>

              <div class="info-container">
                <p class="info__name">Stages</p>
                <p class="info__text">${rocket.stages}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="hr-break">
      </hr>
      <div class="card__description">
      <div class="accordion-item-content">
        <p>${rocket.description}</p>
        </div>
      </div>
    </div>`;
  });
}
