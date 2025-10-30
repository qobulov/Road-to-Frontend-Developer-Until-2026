import "./movie-add-form.css";
import React from "react";

class MovieAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: "",
    };
  }

  changeHandlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addForm({ name: this.state.name, views: this.state.views });
  };

  render() {
    const { name, views } = this.state;
    return (
      <div className="movie-add-form">
        <h3>Add New Movie</h3>
        <form onSubmit={this.addFormHandler} className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Movie Title"
            onChange={this.changeHandlerInput}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Views"
            onChange={this.changeHandlerInput}
            name="views"
            value={views}
          />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    );
  }
}

export default MovieAddForm;
