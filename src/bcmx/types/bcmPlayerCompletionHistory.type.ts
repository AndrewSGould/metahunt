import { Game } from '../../types';
import BcmPlayer from './bcmPlayer.type';

type BcmPlayerCompletionHistory = {
  id: number;
  completionDate: Date;
  playerId: number;
  bcmPlayer?: BcmPlayer;
  gameId?: number;
  game?: Game;
};

export default BcmPlayerCompletionHistory;
