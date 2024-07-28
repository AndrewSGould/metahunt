import { Game } from '../../types';
import BcmPlayer from './bcmPlayer.type';

type MonthlyExclusion = {
  challenge: number;
  playerId: number;
  bcmPlayer?: BcmPlayer;
  gameId?: number;
  game?: Game;
};

export default MonthlyExclusion;
