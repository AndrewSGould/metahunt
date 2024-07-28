import BcmPlayer from './bcmPlayer.type';

type JulyRecap = {
  id: number;
  rank: number;
  gamertag: string;
  teaCount: number;
  communityBonus: boolean;
  participation: boolean;
  totalPoints: number;
  playerId: number;
  bcmPlayer?: BcmPlayer;
};

export default JulyRecap;
