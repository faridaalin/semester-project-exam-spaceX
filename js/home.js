window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-container");
  loader.className += " hidden";
});

const NEXT_LAUNCH = `https://api.spacexdata.com/v3/launches/next`;
let showdateCountDown = app.countDown(NEXT_LAUNCH);

/*fetch*/
let nextLaunch;

fetch(NEXT_LAUNCH)
  .then((response) => response.json())
  .then((data) => {
    nextLaunch = data;
    displayNextLaunch(nextLaunch);
    currentSiteLocation(nextLaunch);
  })
  .catch((error) => console.log(error));

function displayNextLaunch(data) {
  const nextLaunchContainer = document.querySelector(".next-launch");
  const nextLaunchInfo = document.querySelector(
    ".next-launch-info__first-part"
  );


  let launchDate = new Date(data.launch_date_local),
    date = launchDate.getDate(),
    month = launchDate.getMonth() + 1;
  month = month < 10 ? "0" + month : month;

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


  const nextLaunchDetails = document.querySelector(".details");
  if(nextLaunchDetails === null) {
    nextLaunchDetails.innerHTML = ` <div class="accordion-item-content"><p class="info__text">For live feed, discussions and updates you can visit
    ${data.mission_name}'s <a href="${data.links.reddit_campaign}" target="_blank">Reddit Campaign Tread</a> and <a href="${data.links.reddit_launch}" target="_blank">Reddit Launch Tread</a></p></div`;
  } else {
    nextLaunchDetails.innerHTML = ` <div class="accordion-item-content"><p class="info__text"></p>${data.details}</div`;
  }

  const coundtdownMobile = document.querySelector(".coundtdown-mobile"),
    coundtdownDesktop = document.querySelector(".coundtdown-desktop");

}

function currentSiteLocation(data) {
  const siteLocationFromApi = data.launch_site.site_id;
  const area = document.querySelectorAll(".area");

  area.forEach((site) => {
    const sitename = site.id;
    const title = site.parentNode.previousElementSibling;

    if (siteLocationFromApi === sitename) {
      title.children[0].classList.add("active-location");
    }
  });
}

