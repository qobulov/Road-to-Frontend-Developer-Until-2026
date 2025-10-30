import "./search-panel.css";
import React from "react";

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  updateTerm = (e) => {
    const term = e.target.value.toLowerCase();
    this.setState({ term });
    this.props.updateTerm(term);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search movies..."
        className="form-control search-input"
        onChange={this.updateTerm}
        value={this.state.term}
      />
    );
  }
}

export default SearchPanel;
