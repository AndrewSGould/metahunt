import BcmPlayer from './bcmPlayer.type';

type JanRecap = {
  id: number;
  rank: number;
  gamertag: string;
  bucket1Points?: number;
  bucket1Comps?: number;
  bucket2Points?: number;
  bucket2Comps?: number;
  bucket3Points?: number;
  bucket3Comps?: number;
  bucket4Points?: number;
  bucket4Comps?: number;
  allBuckets: boolean;
  communityBonus: boolean;
  totalPoints: number;
  playerId: number;
  bcmPlayer?: BcmPlayer;
};

export default JanRecap;
