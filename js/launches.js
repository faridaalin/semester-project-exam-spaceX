window.addEventListener("load", (event) => {
  const loader = document.querySelector(".loader-container");
  loader.className += " hidden";
});

const UPCOMING_LAUNCH_URL = `https://api.spacexdata.com/v3/launches/upcoming`;
let launchesArray;

fetch(UPCOMING_LAUNCH_URL)
  .then((response) => response.json())
  .then((data) => {
    launchesArray = data;
    displayLanuches(launchesArray);
  })
  .catch((error) => console.log(error));

function displayLanuches(upcomingLaunches) {
  const upcomingLaunchesContainer = document.querySelector(
    ".upcoming-launches-container"
  );

  upcomingLaunches.forEach((launch) => {
    let launchDate = new Date(launch.launch_date_local),
      date = launchDate.getDate(),
      month = launchDate.getMonth() + 1;

    date = date < 10 ? "0" + date : date;
    month = month < 10 ? "0" + month : month;

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

const PREVIOUS_LAUNCH_URL = `https://api.spacexdata.com/v3/launches/past`;
let previousLaunchesArray;

fetch(PREVIOUS_LAUNCH_URL)
  .then((response) => response.json())
  .then((data) => {
    previousLaunchesArray = data;
    displayPreviousLanuches(previousLaunchesArray);
  })
  .catch((error) => console.log(error));

function displayPreviousLanuches(previousLaunches) {
  const previousLaunchesContainer = document.querySelector(
    ".previous-container"
  );
  const previousLaunchContainer = document.querySelector(
    ".previous-launches-container"
  );
  previousLaunches.forEach((launch) => {
    let launchDate = new Date(launch.launch_date_local),
      date = launchDate.getDate(),
      month = launchDate.getMonth() + 1;

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
</div>`
  });
}

const LANDING_PAD_LAUNCH_URL = `https://api.spacexdata.com/v3/launchpads`;
<<<<<<< HEAD
let landindPadsArray;
=======
let ;
>>>>>>> 6c5083a6ab6674bb8756b598e1f6c467f4388379
fetch(LANDING_PAD_LAUNCH_URL)
  .then((response) => response.json())
  .then((data) => {
    landindPadsArray = data;
    displayLanuchPads(landindPadsArray);
  })
  .catch((error) => console.log(error));

function displayLanuchPads(locationPads) {

  const californiaLocations = locationPads.filter(function (pad) {
    return pad.location.region === "California";
  });
  const floridaaLocations = locationPads.filter(function (pad) {
    return pad.location.region === "Florida";
  });
  const texasLocations = locationPads.filter(function (pad) {
    return pad.location.region === "Texas";
  });
  const mIslandLocations = locationPads.filter(function (pad) {
    return pad.location.region === "Marshall Islands";
  });


  const californiaLocationsContainer = document.querySelector(
    ".location-launches__info__ca"
  );
  const floridaLocationsContainer = document.querySelector(
    ".location-launches__info__fl"
  );
  const texasLocationsContainer = document.querySelector(
    ".location-launches__info__tx"
  );
  const mIslandsLocationsContainer = document.querySelector(
    ".location-launches__info__mi"
  );

  createLocationPads(californiaLocations, californiaLocationsContainer);
  createLocationPads(floridaaLocations, floridaLocationsContainer);
  createLocationPads(texasLocations, texasLocationsContainer);
  createLocationPads(mIslandLocations, mIslandsLocationsContainer);
}

function createLocationPads(array, container) {
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

const scrollToUp = document.querySelector('.scroll-up')

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 100) {
    scrollToUp.classList.add('active')
  } else {
    scrollToUp.classList.remove('active')
  }
})

scrollToUp.addEventListener('click', scrollToTop)
function scrollToTop (event) {
  window.scrollTo({
    top:0,
    lef: 0,
    behavior: "smooth"
  });
}
