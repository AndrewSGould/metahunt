import Game from '../../types/game.type';

type BcmCompletionHistory = {
  id: number;
  gameId?: number;
  siteRatio?: number;
  game?: Game;
};

export default BcmCompletionHistory;
