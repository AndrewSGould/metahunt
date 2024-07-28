import BcmPlayer from './bcmPlayer.type';

type BcmRgsc = {
  id: number;
  issued?: Date;
  poolSize: number;
  rerolled: boolean;
  rerollDate?: Date;
  gameId?: number;
  previousGameId?: number;
  challenge?: number;
  bcmPlayerId: number;
  bcmPlayer?: BcmPlayer;
};

export default BcmRgsc;
