import MovieListItem from "../movie-list-item/movie-list-item";
import './movie-list.css';

const MovieList = () => {
  return (
    <ul className="movie-list">
      <MovieListItem name= "Transformers" views={989}/>
      <MovieListItem name= "Avatar" views={1234} />
      <MovieListItem name= "Inception" views={5678} />
    </ul>
  );
};

export default MovieList;
