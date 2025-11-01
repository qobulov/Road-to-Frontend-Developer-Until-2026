import "./movie-add-form.css";
import React from "react";

const MovieAddForm = ({ addForm }) => {
  const [state, setState] = React.useState({ name: "", views: "" });
  const changeHandlerInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addFormHandler = (e) => {
    e.preventDefault();
    if (state.name === "" || state.views === "") return;
    addForm({ name: state.name, views: state.views });
    setState({ name: "", views: "" });
  };

  return (
    <div className="movie-add-form">
      <h3>Add New Movie</h3>
      <form onSubmit={addFormHandler} className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Movie Title"
          onChange={changeHandlerInput}
          name="name"
          value={state.name}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Views"
          onChange={changeHandlerInput}
          name="views"
          value={state.views}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieAddForm;
