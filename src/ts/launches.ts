import displayComponents from "./lib/displayComponents";
import { launchesPast, launchesUpcoming, launchpads } from "./utils/query";
import { toggleAccordion, menu } from "./script";
import { storage } from "./utils/constants";
import { countDownTimer } from "./countdown";
import { scrollToUp } from "./lib/scrollHandler";
import {
  createPreviousLanuches,
  createUpcomingLaunches,
  createLanuchPads,
} from "./lib/launches";
import loader from "./lib/loader";

loader();
countDownTimer();
toggleAccordion();
menu();
scrollToUp();

// PREVIOUS_LAUNCH
displayComponents(
  storage.PREVIOUS_LAUNCH,
  createPreviousLanuches,
  launchesPast
);

//UPCOMING_LAUNCH
displayComponents(
  storage.UPCOMING_LAUNCH,
  createUpcomingLaunches,
  launchesUpcoming
);

// PAD_LOCATIONS
displayComponents(storage.PAD_LOCATIONS, createLanuchPads, launchpads);
