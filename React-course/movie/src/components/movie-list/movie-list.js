import MovieListItem from "../movie-list-item/movie-list-item";
import './movie-list.css';

const MovieList = () => {
  return (
    <ul className="movie-list">
      <MovieListItem />
      <MovieListItem />
      <MovieListItem />
    </ul>
  );
};

export default MovieList;
