const card = (item: RocketTypes) => {
  const cardsContainer = document.querySelector(".cards") as HTMLDivElement;
  cardsContainer.innerHTML += `
      <div class="card">

      <h2 class="card__title">${item.name}</h2>
      <div class="card__info">
        <div class="devider">
          <div class="devider-container">
            <div class="devider-1">
              <div class="info-container">
                <p class="info__name">Diameter</p>
                <p class="info__text">${item.diameter.meters} m</p>
              </div>
              <div class="info-container">
                <p class="info__name">Height</p>
                <p class="info__text">${item.height.meters} m</p>
              </div>
              <div class="info-container">
                <p class="info__name">Mass</p>
                <p class="info__text">${item.mass.kg} kg</p>
              </div>
            </div>

          </div>

          <div class="devider-container">
            <div class="devider-2">
              <div class="info-container">
                <p class="info__name">Landing Legs</p>
                <p class="info__text">${item.landing_legs.number}</p>
              </div>

              <div class="info-container">
                <p class="info__name">Engines</p>
                <p class="info__text">${item.engines.number}</p>
              </div>

              <div class="info-container">
                <p class="info__name">Stages</p>
                <p class="info__text">${item.stages}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="hr-break">
      </hr>
      <div class="card__description">
      <div class="accordion-item-content">
        <p>${item.description}</p>
        </div>
      </div>
    </div>`;
};
export default card;

export function createRocketCards<T extends IRockets>(data: T): void {
  data.rockets.forEach((rocket) => {
    card(rocket);
  });
}
