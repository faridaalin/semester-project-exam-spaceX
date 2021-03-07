import { accordion, menu } from './script';
import endpoints, { storage } from './config';
import { countDownTimer } from './countdown';
import { fetchData } from './fetchData';

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-container') as HTMLDivElement;
  loader.className += ' hidden';
});

countDownTimer(storage.NEXT_LAUNCH, endpoints.NEXT_LAUNCH);
accordion();
menu();

const getLaunches = (
  key: string,
  url: string,
  callback: (a: object[]) => void
) => {
  const dataFromStorage = sessionStorage.getItem(key);

  if (!dataFromStorage) {
    fetchData(key, url)
      .then((data) => {
        callback(data);
      })
      .catch((e) => console.log(e));
  } else {
    callback(JSON.parse(dataFromStorage));
  }
};
getLaunches(
  storage.UPCOMING_LAUNCH,
  endpoints.UPCOMING_LAUNCH,
  displayLanuches
);
getLaunches(
  storage.PREVIOUS_LAUNCH,
  endpoints.PREVIOUS_LAUNCH,
  displayPreviousLanuches
);
getLaunches(storage.PAD_LOCATIONS, endpoints.PAD_LOCATIONS, displayLanuchPads);

function displayLanuches<T extends IObjectFromApiCall>(
  upcomingLaunches: T[]
): void {
  const upcomingLaunchesContainer = document.querySelector(
    '.upcoming-launches-container'
  ) as HTMLDivElement;

  upcomingLaunches.forEach((launch) => {
    let launchDate = new Date(launch.launch_date_local);
    let date: number | string = launchDate.getDate();
    let month: number | string = launchDate.getMonth() + 1;

    date = date < 10 ? '0' + date : date;
    month = month < 10 ? '0' + month : month;

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

function displayPreviousLanuches<T extends IObjectFromApiCall>(
  previousLaunches: T[]
): void {
  const previousLaunchContainer = document.querySelector(
    '.previous-launches-container'
  ) as HTMLDivElement;
  previousLaunches.forEach((launch) => {
    let launchDate = new Date(launch.launch_date_local);
    let date: number | string = launchDate.getDate();
    let month: number | string = launchDate.getMonth() + 1;
    date = date < 10 ? '0' + date : date;
    month = month < 10 ? '0' + month : month;

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

function displayLanuchPads<T extends IObjectFromApiCall>(
  locationPads: T[]
): void {
  const californiaLocations = locationPads.filter(function (pad) {
    return pad.location.region === 'California';
  });
  const floridaaLocations = locationPads.filter(function (pad) {
    return pad.location.region === 'Florida';
  });
  const texasLocations = locationPads.filter(function (pad) {
    return pad.location.region === 'Texas';
  });
  const mIslandLocations = locationPads.filter(function (pad) {
    return pad.location.region === 'Marshall Islands';
  });

  const californiaLocationsContainer = document.querySelector(
    '.location-launches__info__ca'
  ) as HTMLElement;
  const floridaLocationsContainer = document.querySelector(
    '.location-launches__info__fl'
  ) as HTMLElement;
  const texasLocationsContainer = document.querySelector(
    '.location-launches__info__tx'
  ) as HTMLElement;
  const mIslandsLocationsContainer = document.querySelector(
    '.location-launches__info__mi'
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
      <p class="info__name">${item.name}:</p>
      <p class="info__text">${item.site_name_long}</p>
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

const scrollToUp = document.querySelector('.scroll-up') as HTMLDivElement;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollToUp.classList.add('active');
  } else {
    scrollToUp.classList.remove('active');
  }
});

scrollToUp.addEventListener('click', scrollToTop);
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
