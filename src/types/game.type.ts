import {
  BcmCompletionHistory,
  BcmPlayerCompletionHistory,
  PlayerTopGenre,
} from '../bcmx/types';
import FeatureList from './featureList.type';
import GameGenre from './gameGenre.type';

type Game = {
  id: number;
  trueAchievementId: number;
  url?: string;
  title?: string;
  trueAchievement?: number;
  gamerscore?: number;
  achievementCount?: number;
  publisher?: string;
  developer?: string;
  releaseDate?: Date;
  gamersWithGame?: number;
  gamersCompleted?: number;
  baseCompletionEstimate?: number;
  siteRatio?: number;
  siteRating?: number;
  unobtainables?: boolean;
  serverClosure?: Date;
  installSize?: number;
  fullCompletionEstimate?: number;
  manuallyScored?: boolean;
  featureList?: FeatureList;
  gameGenres?: GameGenre[];
  playerTopGenres?: PlayerTopGenre[];
  playerCompletionHistories?: BcmPlayerCompletionHistory[];
  bcmCompletionHistories?: BcmCompletionHistory[];
};

export default Game;
