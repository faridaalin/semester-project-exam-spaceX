import displayComponents from "./lib/displayComponents";
import { launchesPast, launchesUpcoming, launchpads } from "./utils/query";
import { accordion, menu } from "./script";
import { storage } from "./utils/constants";
import { countDownTimer } from "./countdown";

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-container") as HTMLDivElement;
  loader.className += " hidden";
});

countDownTimer();
accordion();
menu();
displayComponents(
  storage.PREVIOUS_LAUNCH,
  displayPreviousLanuches,
  launchesPast
);
displayComponents(storage.UPCOMING_LAUNCH, displayLanuches, launchesUpcoming);
displayComponents(storage.PAD_LOCATIONS, displayLanuchPads, launchpads);

function displayLanuches<T extends IUpcomingLaunches>(data: T): void {
  console.log("data", data);
  const upcomingLaunches = data.launchesUpcoming;

  const upcomingLaunchesContainer = document.querySelector(
    ".upcoming-launches-container"
  ) as HTMLDivElement;

  upcomingLaunches.forEach((launch: any) => {
    let date = Intl.DateTimeFormat(navigator.language, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(launch.launch_date_local));
    upcomingLaunchesContainer.innerHTML += `
    <div class="container">
      <div class="launches_container">

          <div class="info-container heading">
            <p class="info__name">Launch Date</p>
            <p class="info__name">Rocket Name</p>
            <p class=" info__name">Launch Pad</p>
            <p class="info__name">Flight Number</p>
          </div>
          <div class="info-container upcoming">
        <p class="info__text">${date}</p>
        <p class="info__text">${launch.rocket.rocket_name}</p>
        <p class="info__text">${launch.launch_site.site_name}</p>
        <p class="info__text highlighted">9${launch.flight_number}</p>
           </div>

      </div>
    <hr class="hr-break">
  </div>`;
  });
}

function displayPreviousLanuches<T extends IPreviousLaunches>(data: T): void {
  const previousLaunches = data.launchesPast;

  const previousLaunchContainer = document.querySelector(
    ".previous-launches-container"
  ) as HTMLDivElement;

  previousLaunches.forEach((launch: any) => {
    let launchDate = new Date(launch.launch_date_local);
    let date: number | string = launchDate.getDate();
    let month: number | string = launchDate.getMonth() + 1;
    date = date < 10 ? "0" + date : date;
    month = month < 10 ? "0" + month : month;

    previousLaunchContainer.innerHTML += `  <div class="container">
      <div class="launches_container">

          <div class="info-container heading">
            <p class="info__name">Launch Date</p>
            <p class="info__name">Rocket Name</p>
            <p class=" info__name">Launch Pad</p>
            <p class="info__name">Flight Number</p>
          </div>
          <div class="info-container upcoming">
        <p class="info__text">${launch.launch_year}-${month}-${date}</p>
        <p class="info__text">${launch.rocket.rocket_name}</p>
        <p class="info__text">${launch.launch_site.site_name}</p>
        <p class="info__text highlighted">9${launch.flight_number}</p>
           </div>

      </div>
    <hr class="hr-break">
  </div>`;
  });
}

function displayLanuchPads<T extends ILaunchPads>(data: T): void {
  const locationPads = data.launchpads;

  const californiaLocations = locationPads.filter(function (pad: IPads) {
    return pad.location.region === "California";
  });
  const floridaaLocations = locationPads.filter(function (pad: IPads) {
    return pad.location.region === "Florida";
  });
  const texasLocations = locationPads.filter(function (pad: IPads) {
    return pad.location.region === "Texas";
  });
  const mIslandLocations = locationPads.filter(function (pad: IPads) {
    return pad.location.region === "Marshall Islands";
  });

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

function createLocationPads<
  T extends IObjectFromApiCall,
  U extends HTMLElement
>(array: T[], container: U): void {
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
