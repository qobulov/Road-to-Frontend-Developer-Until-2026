import './movie-list-item.css';

const MovieListItem = () => {
  return (
    <li className="list-group-item">
      <span className="movie-list-item-label">Film nomi</span>
      <input
        type="number"
        className="movie-list-item-input"
        defaultValue={989}
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
};

export default MovieListItem;
