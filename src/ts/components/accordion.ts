export const accordion = (launch: any, container: string) => {
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
            <p class="info__name">Mission Name</p>
          </div>
          <div class="info-container upcoming">
        <p class="info__text">${date}</p>
        <p class="info__text">${launch.rocket.rocket_name}</p>
        <p class="info__text">${launch.launch_site.site_name}</p>
        <a class="info__text">${launch.mission_name}</a>
           </div>

      </div>
    <hr class="hr-break">
  </div>`;
};

export function locationAccordion<T extends Pads>(
  locations: T[],
  locationToMatch: string,
  container: string
): void {
  const location = locations.filter(
    (pad: Pads) => pad.location.region === locationToMatch
  );

  const element = document.querySelector(container) as HTMLElement;
  locations.forEach((item: any) => {
    let status = item.status[0].toUpperCase() + item.status.slice(1);

    element.innerHTML += `
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
