/*fetch*/

const NEXT_LAUNCH_URL = `https://api.spacexdata.com/v3/launches/next`;

fetch(NEXT_LAUNCH_URL)
  .then((response) => response.json())
  .then((data) => {
    currentSiteLocation(data)
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
