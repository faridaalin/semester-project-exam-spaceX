/*Mobile Navigation*/
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  this.classList.toggle("open");
  menu.classList.toggle("dropdown");
}

let prevScrollPosition = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPosition = window.pageYOffset;

  if (prevScrollPosition === 0 || prevScrollPosition > currentScrollPosition) {
    // document.querySelector('header').style.top ="0px";
    document.querySelector("header").style.visibility = "visible";
  } else {
    // document.querySelector('header').style.top ="-100px";
    document.querySelector("header").style.visibility = "hidden";
  }
  prevScrollPosition = currentScrollPosition;
};

/*Accordion*/
const accordionBtn = document.querySelectorAll(".accordion_btn");
accordionBtn.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const tabContent = button.nextElementSibling;
    if (tabContent.style.maxHeight === "") {
      tabContent.style.maxHeight = tabContent.scrollHeight + "px";
    } else {
      tabContent.style.maxHeight = "";
    }
  });
});

/*fetch*/

const NEXT_LAUNCH_URL = `https://api.spacexdata.com/v3/launches/next`;
nextLaunch = [];

fetch(NEXT_LAUNCH_URL)
  .then((response) => response.json())
  .then((data) => {
    nextLaunch = data;
    displayNextLaunch(nextLaunch);
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
  <p class="info__name">Rocket Name</p>
  <p class="info__text">${data.rocket.rocket_name}</p>
</div>

<div class="info-container">
  <p class="info__name">Location</p>
  <p class="info__text">${data.launch_site.site_name}</p>
</div>

<div class="info-container">
  <p class=" info__name">Mission Name</p>
  <p class="info__text highlighted">${data.mission_name}</p>
</div>`;

  nextLaunchDetails.innerHTML = `<p>${launchDetails}</p>`;

  dateCountdown(launchDate);
  currentSiteLocation(data)
}

function dateCountdown(date) {
  const countDownDate = new Date(date).getTime();

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

    const countDownContainer = document.querySelector("#countDown");

    countDownContainer.innerHTML = `
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
</div>`;
  }, 1000);
}

function currentSiteLocation(data) {
  const siteLocationFromApi = data.launch_site.site_name;

  const california = document.querySelector('#california')
  const florida = document.querySelector('#florida')
  const texas = document.querySelector('#texas')
  const marshalIslands = document.querySelector('#marshallIslands')

  console.dir(california.dataset)

}
