import { menu } from './script';
import endpoints, { storage } from './config';
import { countDownTimer } from './countdown';

countDownTimer(storage.NEXT_LAUNCH, endpoints.NEXT_LAUNCH);
menu();
