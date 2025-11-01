import "./search-panel.css";
import { useContext, useState } from "react";
import { Context } from "../../context/context";

const SearchPanel = () => {
  const [term, setTerm] = useState("");
  const { dispatch } = useContext(Context);

  const updateTerm = (e) => {
    const term = e.target.value.toLowerCase();
    setTerm(term);
    dispatch({ type: "SET_TERM", payload: term });
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
