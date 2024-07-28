import Game from './game.type';

type FeatureList = {
  id: number;
  oneXEnhanced?: boolean;
  backwardsCompat?: boolean;
  notBackwardsCompat?: boolean;
  playAnywhere?: boolean;
  smartDelivery?: boolean;
  optimizedForSeries?: boolean;
  crossplay?: boolean;
  hdr?: boolean;
  xCloudTouch?: boolean;
  gamePass?: boolean;
  cloudGaming?: boolean;
  pcGamePass?: boolean;
  eaPlay?: boolean;
  gamePreview?: boolean;
  idAtXbox?: boolean;
  onSteam?: boolean;
  gamesWithGold?: boolean;
  transferableProgress?: boolean;
  featureListOfGameId?: number;
  game?: Game;
};

export default FeatureList;
