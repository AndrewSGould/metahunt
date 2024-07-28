import BcmPlayer from './bcmPlayer.type';

type AprRecap = {
  id: number;
  rank: number;
  gamertag: string;
  communityBonus: number;
  participation: boolean;
  totalPoints: number;
  playerId: number;
  bcmPlayer?: BcmPlayer;
};

export default AprRecap;
