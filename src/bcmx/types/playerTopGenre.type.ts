import { GenreList } from '../../types';

type PlayerTopGenre = {
  playerId: number;
  rank: number;
  genreId: GenreList;
};

export default PlayerTopGenre;
