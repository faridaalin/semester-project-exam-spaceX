import displayComponents from "./lib/displayComponents";
import { rockets } from "./utils/query";
import { menu } from "./script";
import { storage } from "./utils/constants";
import { countDownTimer } from "./countdown";
import { createRocketCards } from "./components/card";
import { scrollToUp } from "./lib/scrollHandler";
import loader from "./lib/loader";

loader();
countDownTimer();
menu();
scrollToUp();

displayComponents(storage.ROCKETS, createRocketCards, rockets);
