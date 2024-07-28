import { User } from '../../types';
import AprRecap from './aprRecap.type';
import BcmMiscStat from './bcmMiscStat.type';
import BcmPlayerCompletionHistory from './bcmPlayerCompletionHistory.type';
import BcmPlayerGame from './bcmPlayerGame.type';
import BcmRgsc from './bcmRgsc.type';
import BcmStat from './bcmStat.type';
import FebRecap from './febRecap.type';
import JanRecap from './janRecap.type';
import JulyRecap from './julyRecap.type';
import JunRecap from './junRecap.type';
import MayRecap from './mayRecap.type';
import MonthlyExclusion from './monthlyExclusion.type';

type BcmPlayer = {
  id: number;
  userId: number;
  user?: User;
  trueAchievementId: number;
  lastSync?: Date;
  bcmPlayerGames?: BcmPlayerGame[];
  monthlyExclusions?: MonthlyExclusion[];
  bcmPlayerCompletionHistories?: BcmPlayerCompletionHistory[];
  bcmStats?: BcmStat;
  janRecap?: JanRecap;
  febRecap?: FebRecap;
  aprRecap?: AprRecap;
  mayRecap?: MayRecap;
  junRecap?: JunRecap;
  julyRecap?: JulyRecap;
  bcmMiscStats?: BcmMiscStat;
  bcmRgscs?: BcmRgsc[];
};

export default BcmPlayer;
