import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MovieAddForm from "../movie-add-form/movie-add-form";
import "./app.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Transformers",
          views: 989,
          favourite: true,
          like: false,
        },
        { id: 2, name: "Avatar", views: 1234, favourite: false, like: true },
        {
          id: 3,
          name: "Inception",
          views: 5678,
          favourite: false,
          like: false,
        },
      ],
      term: "",
      filter: "all",
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id === id);
      // data.splice(index, 1);
      const newData = data.filter((movie) => movie.id !== id);
      return {
        data: newData,
      };
    });
  };

  addForm = (item) => {
    this.setState(({ data }) => {
      const newItem = [
        ...data,
        { ...item, id: Date.now(), favourite: false, like: false },
      ];
      return {
        data: newItem,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  onSearchChange = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  updateTerm = (term) => {
    this.setState({ term });
  };

  filterMovies = (data, filter) => {
    switch (filter) {
      case "popular":
        return data.filter((movie) => movie.like);
      case "mostViewed":
        return data.filter((movie) => movie.views > 1000);
      default:
        return data;
    }
  };

  updateFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data } = this.state;
    const allMoviesCount = data.length;
    const FavouriteCount = data.filter((movie) => movie.favourite).length;
    const visibleData = this.filterMovies(
      this.onSearchChange(data, this.state.term),
      this.state.filter
    );
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo
            allMoviesCount={allMoviesCount}
            FavouriteCount={FavouriteCount}
          />
          <div className="search-panel">
            <SearchPanel updateTerm={this.updateTerm} />
            <AppFilter updateFilter={this.updateFilter} />
          </div>
          <MovieList
            data={visibleData}
            onDelete={this.onDelete}
            onToggleProp={this.onToggleProp}
          />
          <MovieAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}
export default App;
