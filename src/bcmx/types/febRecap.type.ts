import BcmPlayer from './bcmPlayer.type';

type FebRecap = {
  id: number;
  rank: number;
  gamertag: string;
  biCompletion: number;
  biPoints: number;
  triCompletion: number;
  triPoints: number;
  quadCompletion: number;
  quadPoints: number;
  quintCompletion: number;
  quintPoints: number;
  sexCompletion: number;
  sexPoints: number;
  sepCompletion: number;
  sepPoints: number;
  octCompletion: number;
  octPoints: number;
  decCompletion: number;
  decPoints: number;
  undeCompletion: number;
  undePoints: number;
  duodeCompletion: number;
  duodePoints: number;
  communityBonus: boolean;
  participation: boolean;
  totalPoints: number;
  playerId: number;
  bcmPlayer?: BcmPlayer;
};

export default FebRecap;
