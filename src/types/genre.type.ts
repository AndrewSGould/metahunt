import GameGenre from './gameGenre.type';
import GenreList from './genreList.enum';

type Genre = {
  id?: GenreList;
  name?: string;
  gameGenres?: GameGenre[];
};

export default Genre;
