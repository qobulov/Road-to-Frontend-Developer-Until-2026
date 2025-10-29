import { Component } from "react";
import "./movie-list-item.css";

class MovieListItem extends Component {
  render() {
    const { name, views, color } = this.props;
    return (
      <li className={`list-group-item d-flex ${color && "colors"}`}>
        <span className="movie-list-item-label">{name}</span>
        <input
          type="number"
          className="movie-list-item-input"
          defaultValue={views}
        />
        <div className="controls">
          <button type="button" className="btn-cookie btn-sm">
            <i className="fas fa-cookie" />
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fas fa-trash" />
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}
export default MovieListItem;