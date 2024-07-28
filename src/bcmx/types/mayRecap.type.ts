import BcmPlayer from './bcmPlayer.type';

type MayRecap = {
  id: number;
  rank: number;
  gamertag: string;
  games?: string[]; // List of games as strings
  floors: number;
  highestRatio: number;
  communityBonus: boolean;
  participation: boolean;
  totalPoints: number;
  playerId: number;
  bcmPlayer?: BcmPlayer;
};

export default MayRecap;
