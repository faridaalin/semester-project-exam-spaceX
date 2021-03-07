import { accordion, menu } from './script';
import endpoints, { storage } from './config';
import { countDownTimer } from './countdown';
import { fetchData } from './fetchData';

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-container');
  if (loader) {
    loader.className += ' hidden';
  }
});

countDownTimer(storage.NEXT_LAUNCH, endpoints.NEXT_LAUNCH);
accordion();
menu();

/*fetch*/
let nextLaunch: object;
const dataFromSessionStorage: string | null = sessionStorage.getItem(
  storage.NEXT_LAUNCH
);

if (!dataFromSessionStorage) {
  fetchData(storage.NEXT_LAUNCH, endpoints.NEXT_LAUNCH)
    .then((data) => {
      displayNextLaunch(data);
    })
    .catch((e) => console.log(e));
} else {
  nextLaunch = JSON.parse(dataFromSessionStorage);
  displayNextLaunch(nextLaunch);
}

// DOM interaction
function displayNextLaunch<T extends IObjectFromApiCall>(data: T): void {
  const nextLaunchContainer = document.querySelector(
    '.next-launch'
  ) as HTMLDivElement;
  const nextLaunchInfo = document.querySelector(
    '.next-launch-info__first-part'
  ) as HTMLDivElement;

  let launchDate = new Date(data.launch_date_local);
  let date = launchDate.getDate();
  let month: number | string = launchDate.getMonth() + 1;
  month = month < 10 ? month.toString() + '0' : month;

  const today = new Date().getTime();

  nextLaunchContainer.innerHTML = `<div>
  <p>${today > launchDate.getTime() ? 'Last Launch Was:' : 'Next Launch'}</p>
  <span class="year">${data.launch_year}</span>
  <span class="month">${month}/${date}</span>
</div>`;

  nextLaunchInfo.innerHTML = `
<div class="info-container">
  <p class="info__name">Rocket</p>
  <p class="info__text">${data.rocket.rocket_name}</p>
</div>

<div class="info-container">
  <p class="info__name">Location</p>
  <p class="info__text">${data.launch_site.site_name}</p>
</div>

<div class="info-container">
  <p class=" info__name">Mission</p>
  <p class="info__text highlighted">${data.mission_name}</p>
</div>`;

  const nextLaunchDetails = <HTMLElement>document.querySelector('.details');
  if (nextLaunchDetails) {
    nextLaunchDetails.innerHTML = ` <div class="accordion-item-content"><p class="info__text"></p>${data.details}</div`;
  }
}
