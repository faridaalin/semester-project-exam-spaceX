import { locations } from "../utils/constants";
import { locationAccordion, accordion } from "../components/accordion";
import banner from "../components/banner";

export function createUpcomingLaunches<T extends IUpcomingLaunches>(
  data: T
): void {
  data.launchesUpcoming.forEach((launch: Launch) => {
    accordion(launch, ".upcoming-launches-container");
  });
}
export function createPreviousLanuches<T extends IPreviousLaunches>(
  data: T
): void {
  data.launchesPast.forEach((launch: Launch) => {
    accordion(launch, ".previous-launches-container");
  });
}

export function createLanuchPads<T extends ILaunchPads>(data: T): void {
  locationAccordion(
    data.launchpads,
    locations.CALIFORNIA,
    ".location-launches__info__ca"
  );
  locationAccordion(
    data.launchpads,
    locations.FLORIDA,
    ".location-launches__info__fl"
  );
  locationAccordion(
    data.launchpads,
    locations.TEXAS,
    ".location-launches__info__tx"
  );
  locationAccordion(
    data.launchpads,
    locations.MI,
    ".location-launches__info__mi"
  );
}

export function displayNextLaunch<T extends INextLaunch>(result: T): void {
  banner(result.launchNext);
}
