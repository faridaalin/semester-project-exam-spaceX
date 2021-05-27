function banner(data: Launch): void {
  const nextLaunchContainer = document.querySelector(
    ".next-launch"
  ) as HTMLDivElement;
  const nextLaunchInfo = document.querySelector(
    ".next-launch-info__first-part"
  ) as HTMLDivElement;

  let launchDate = new Date(data.launch_date_local);
  let date = Intl.DateTimeFormat(navigator.language, {
    month: "short",
    day: "numeric",
  }).format(new Date(data.launch_date_local));

  const today = new Date().getTime();

  nextLaunchContainer.innerHTML = `<div>
    <p>${today > launchDate.getTime() ? "Latest Launch" : "Next Launch"}</p>
    <span class="year">${data.launch_year}</span>
    <span class="month">${date}</span>
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

  const nextLaunchDetails = document.querySelector(
    ".details"
  ) as HTMLDivElement;
  if (nextLaunchDetails) {
    nextLaunchDetails.innerHTML = ` <div class="accordion-item-content"><p class="info__text"></p>${data.details}</div`;
  }
}

export default banner;
