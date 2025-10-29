import { Component } from "react";
import "./movie-list-item.css";

class MovieListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
      like: false,
    };
  }

  onFavourite = () => {
    this.setState(({ favourite }) => ({
      favourite: !favourite,
    }));
  };

  onLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    const { name, views } = this.props;
    const { favourite, like } = this.state;
    return (
      <li
        className={`list-group-item d-flex ${favourite && "favourites"} ${
          like && "like"
        }`}
      >
        <span onClick={this.onLike} className="movie-list-item-label">
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
            onClick={this.onFavourite}
          >
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

// const MovieListItem = ({ name, views, favourite }) => {
//   return (
//     <li className={`list-group-item d-flex ${favourite && 'favourites'}`}>
//       <span className="movie-list-item-label">{name}</span>
//       <input
//         type="number"
//         className="movie-list-item-input"
//         defaultValue={views}
//       />
//       <div className="controls">
//         <button type="button" className="btn-cookie btn-sm">
//           <i className="fas fa-cookie" />
//         </button>
//         <button type="button" className="btn-trash btn-sm">
//           <i className="fas fa-trash" />
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// };

export default MovieListItem;
