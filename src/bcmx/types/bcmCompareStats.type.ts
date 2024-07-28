import { Game } from '../../types';

type BcmCompareStats = {
  avatar?: string;
  region?: string;
  totalBaseBcmPoints?: number;
  totalBonusPoints?: number;
  averageMonthlyPoints?: number;
  highestRatioGame?: Game;
  longestGame?: Game;
  bestBcmGame?: Game;
  bestBcmGamePoints?: number;
  bcmRank: number;
};

export default BcmCompareStats;
