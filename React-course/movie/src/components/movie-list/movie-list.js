import MovieListItem from "../movie-list-item/movie-list-item";
import "./movie-list.css";

const MovieList = ({ data, onDelete, onToggleProp }) => {
  return (
    <ul className="movie-list">
      {data.map((movie) => (
        <MovieListItem
          key={movie.id}
          {...movie}
          onDelete={() => onDelete(movie.id)}
          onToggleProp={(e) => onToggleProp(movie.id,e.currentTarget.getAttribute('data-toggle'))}
        />
      ))}
    </ul>
  );
};

export default MovieList;
