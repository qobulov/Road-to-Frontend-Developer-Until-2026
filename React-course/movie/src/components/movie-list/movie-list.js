import MovieListItem from "../movie-list-item/movie-list-item";
import './movie-list.css';

const MovieList = ({data}) => {
  return (
    <ul className="movie-list">
      {data.map((movie) => (
        <MovieListItem key={movie.id} {...movie} />
      ))}
    </ul>
  );
};


export default MovieList;
