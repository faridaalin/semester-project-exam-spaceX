/*fetch*/

const NEXT_LAUNCH_URL = `https://api.spacexdata.com/v3/launches/next`;

fetch(NEXT_LAUNCH_URL)
  .then((response) => response.json())
  .then((data) => {
    dateCountdown(data);
    displayNextLaunch(data);
  })
  .catch((error) => console.log(error));

function displayNextLaunch(data) {
  const nextLaunchContainer = document.querySelector(".next-launch");
  const nextLaunchInfo = document.querySelector(
    ".next-launch-info__first-part"
  );
  const nextLaunchDetails = document.querySelector(".details");

  const launchDate = new Date(data.launch_date_local),
    date = launchDate.getDate(),
    month = launchDate.getMonth() + 1;

  let launchDetails = data.details;
  launchDetails
    ? (launchDetails = launchDetails)
    : (launchDetails =
        "More information about this launch will be available soon.");

  nextLaunchContainer.innerHTML = `      <div>
  <p>Next Launch</p>
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

  nextLaunchDetails.innerHTML = ` <div class="accordion-item-content"><p>${launchDetails}</p></div`;


  currentSiteLocation(data)
}

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

function currentSiteLocation(data) {
  const siteLocationFromApi = data.launch_site.site_id;
  const area = document.querySelectorAll('.area');

  area.forEach(site => {

    const sitename = site.id
    const title = site.parentNode.previousElementSibling

    if(siteLocationFromApi === sitename) {
      title.children[0].classList.add('active-location')
    }
  });

}