import MovieListItem from "../movie-list-item/movie-list-item";
import { useContext } from "react";
import { Context } from "../../context/context";
import "./movie-list.css";
import { filterHandler, searchHandler } from "../../utilities/data";

const MovieList = () => {
  const { state } = useContext(Context);
  const data = filterHandler(
    searchHandler(state.data, state.term),
    state.filter
  );

  return (
    <ul className="movie-list">
      {data.map((movie) => (
        <MovieListItem key={movie.id} {...movie} />
      ))}
    </ul>
  );
};

export default MovieList;
