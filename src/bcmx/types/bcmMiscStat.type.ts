import BcmPlayer from './bcmPlayer.type';

type BcmMiscStat = {
  id: number;
  historicalStats?: string;
  playerId: number;
  bcmPlayer?: BcmPlayer;
};

export default BcmMiscStat;
