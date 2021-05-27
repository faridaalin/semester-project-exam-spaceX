import displayComponents from "./lib/displayComponents";
import { launchesPast, launchesUpcoming, launchpads } from "./utils/query";
import { toggleAccordion, menu } from "./script";
import { storage, locations } from "./utils/constants";
import { countDownTimer } from "./countdown";
import {
  createPreviousLanuches,
  createUpcomingLaunches,
} from "./components/accordion";
import loader from "./lib/loader";

loader();
countDownTimer();
toggleAccordion();
menu();
// PREVIOUS_LAUNCH
displayComponents(
  storage.PREVIOUS_LAUNCH,
  createPreviousLanuches,
  launchesPast
);

//UPCOMING_LAUNCH
displayComponents(
  storage.UPCOMING_LAUNCH,
  createUpcomingLaunches,
  launchesUpcoming
);

// PAD_LOCATIONS
displayComponents(storage.PAD_LOCATIONS, displayLanuchPads, launchpads);

function displayLanuchPads<T extends ILaunchPads>(data: T): void {
  const locationPads = data.launchpads;

  const californiaLocations = locationPads.filter(
    (pad: Pads) => pad.location.region === locations.CALIFORNIA
  );
  const floridaaLocations = locationPads.filter(
    (pad: Pads) => pad.location.region === locations.FLORIDA
  );
  const texasLocations = locationPads.filter(
    (pad: Pads) => pad.location.region === locations.TEXAS
  );
  const mIslandLocations = locationPads.filter(
    (pad: Pads) => pad.location.region === locations.MI
  );

  const californiaLocationsContainer = document.querySelector(
    ".location-launches__info__ca"
  ) as HTMLElement;
  const floridaLocationsContainer = document.querySelector(
    ".location-launches__info__fl"
  ) as HTMLElement;
  const texasLocationsContainer = document.querySelector(
    ".location-launches__info__tx"
  ) as HTMLElement;
  const mIslandsLocationsContainer = document.querySelector(
    ".location-launches__info__mi"
  ) as HTMLElement;

  createLocationPads(californiaLocations, californiaLocationsContainer);
  createLocationPads(floridaaLocations, floridaLocationsContainer);
  createLocationPads(texasLocations, texasLocationsContainer);
  createLocationPads(mIslandLocations, mIslandsLocationsContainer);
}

function createLocationPads<T extends Pads, U extends HTMLElement>(
  array: T[],
  container: U
): void {
  array.forEach((item) => {
    let status = item.status[0].toUpperCase() + item.status.slice(1);

    container.innerHTML += `
    <div class="launches_container location_container locations-pads">
    <div class="info-container">
      <p class="info__name">${item.location.name}:</p>
      <p class="info__text">${item.name}</p>
    </div>

    <div class="info-container">
      <p class="info__name">Status:</p>
      <p class="info__text">${status}</p>
    </div>

    <div class="info-container">
      <p class="info__name">Location Description:</p>
      <p class="info__text">${item.details}</p>
    </div>

    <hr class="hr-break">
  </div>`;
  });
}

const scrollToUp = document.querySelector(".scroll-up") as HTMLDivElement;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToUp.classList.add("active");
  } else {
    scrollToUp.classList.remove("active");
  }
});

scrollToUp.addEventListener("click", scrollToTop);
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
