import Game from './game.type';
import Genre from './genre.type';
import GenreList from './genreList.enum';

type GameGenre = {
  gameId: number;
  game?: Game;
  lastSync?: Date;
  genreId: GenreList;
  genre?: Genre;
};

export default GameGenre;
