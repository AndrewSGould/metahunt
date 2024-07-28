import BcmPlayer from './bcmPlayer.type';

type JunRecap = {
  id: number;
  rank: number;
  gamertag: string;
  qualifiedGames: number;
  communityBonus: boolean;
  participation: boolean;
  totalPoints: number;
  playerId: number;
  bcmPlayer?: BcmPlayer;
};

export default JunRecap;
