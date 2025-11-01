import "./search-panel.css";
import React from "react";



const SearchPanel = (props) => {
  const [term, setTerm] = React.useState("");
  const updateTerm = (e) => {
    const term = e.target.value.toLowerCase();
    setTerm(term);
    props.updateTerm(term);
  };

  return (
    <input
      type="text"
      placeholder="Search movies..."
      className="form-control search-input"
      onChange={updateTerm}
      value={term}
    />
  );
};

export default SearchPanel;