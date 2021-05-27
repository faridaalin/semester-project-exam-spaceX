import displayComponents from "./lib/displayComponents";
import { launch } from "./utils/query";
import { storage } from "./utils/constants";
import { toggleAccordion, menu } from "./script";
import { countDownTimer } from "./countdown";
import loader from "./lib/loader";
import { displayNextLaunch } from "./lib/launches";

loader();
countDownTimer();
toggleAccordion();
menu();

displayComponents(storage.NEXT_LAUNCH, displayNextLaunch, launch);
