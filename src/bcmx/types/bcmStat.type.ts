import BcmPlayer from './bcmPlayer.type';

type BcmStat = {
  id: number;
  rank?: number;
  rankMovement?: number;
  completions?: number;
  averageRatio?: number;
  highestRatio?: number;
  averageTimeEstimate?: number;
  highestTimeEstimate?: number;
  averagePoints?: number;
  basePoints?: number;
  bonusPoints?: number;
  totalPoints?: number;
  playerId: number;
  bcmPlayer?: BcmPlayer;
};

export default BcmStat;
