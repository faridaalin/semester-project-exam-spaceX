window.addEventListener('load', (event) => {
  const loader = document.querySelector('.loader-container');
  loader.className+=' hidden'
  const scrollIndicator = document.querySelector('.scroll-indicator')

  const scrollPositionTop = window.scrollY;

  if(scrollPositionTop < 200) scrollIndicator.classList.add('show')
})


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
const loader = document.querySelector('.loader')

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

const scrollToUp = document.querySelector('.scroll-up')

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 100) {
    scrollToUp.classList.add('active')
  } else {
    scrollToUp.classList.remove('active')
  }
})

scrollToUp.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    lef: 0,
    behavior: "smooth"
  });
})


