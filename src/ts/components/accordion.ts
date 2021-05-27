const accordion = (launch: any, container: string) => {
  console.log("launch", launch);
  console.log("container", container);
  const element = document.querySelector(container) as HTMLDivElement;

  let date = Intl.DateTimeFormat(navigator.language, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(launch.launch_date_local));

  element.innerHTML += `

    <div class="container">
      <div class="launches_container">

          <div class="info-container heading">
            <p class="info__name">Launch Date</p>
            <p class="info__name">Rocket Name</p>
            <p class=" info__name">Launch Pad</p>
            <p class="info__name">Video</p>
          </div>
          <div class="info-container upcoming">
        <p class="info__text">${date}</p>
        <p class="info__text">${launch.rocket.rocket_name}</p>
        <p class="info__text">${launch.launch_site.site_name}</p>
        <a class="info__link" href=${launch.links.video_link} >Youtube</a>
           </div>

      </div>
    <hr class="hr-break">
  </div>`;
};

export function createUpcomingLaunches<T extends IUpcomingLaunches>(
  data: T
): void {
  data.launchesUpcoming.forEach((launch: Prev) => {
    accordion(launch, ".upcoming-launches-container");
  });
}
export function createPreviousLanuches<T extends IPreviousLaunches>(
  data: T
): void {
  data.launchesPast.forEach((launch: Prev) => {
    accordion(launch, ".previous-launches-container");
  });
}
