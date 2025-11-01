import { useContext } from "react";
import "./movie-list-item.css";
import { Context } from "../../context/context";

const MovieListItem = (props) => {
  const { name, views, favourite, like, id } = props;

  const { dispatch } = useContext(Context);

  const onDelete = () => {
    dispatch({ type: "DELETE_MOVIE", payload: id });
  };

  const onToggleProp = (e) => {
    const prop = e.currentTarget.getAttribute("data-toggle");
    dispatch({ type: "TOGGLE_PROP", payload: { id, prop } });
  };
  return (
    <li
      className={`list-group-item d-flex ${favourite && "favourites"} ${
        like && "like"
      }`}
    >
      <span
        onClick={onToggleProp}
        className="movie-list-item-label"
        data-toggle="like"
      >
        {name}
      </span>
      <input
        type="number"
        className="movie-list-item-input"
        defaultValue={views}
      />

      <div className="controls">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleProp}
          data-toggle="favourite"
        >
          <i className="fas fa-cookie" />
        </button>

        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash" />
        </button>

        <i className={`fas fa-star ${like ? "active" : ""}`}></i>
      </div>
    </li>
  );
};

export default MovieListItem;
