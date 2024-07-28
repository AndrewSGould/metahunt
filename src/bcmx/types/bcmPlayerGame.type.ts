import { Game, Ownership, Platform } from '../../types';
import BcmPlayer from './bcmPlayer.type';

type BcmPlayerGame = {
  platform?: Platform;
  trueAchievement?: number;
  gamerscore?: number;
  achievementCount?: number;
  startedDate?: Date;
  completionDate?: Date;
  lastUnlock?: Date;
  ownership?: Ownership;
  notForContests?: boolean;
  bcmPoints?: number;
  playerId: number;
  bcmPlayer?: BcmPlayer;
  gameId?: number;
  game?: Game;
};

export default BcmPlayerGame;
