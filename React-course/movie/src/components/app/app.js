import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MovieAddForm from "../movie-add-form/movie-add-form";
import "./app.css";
import React, { useEffect } from "react";

const App = () => {
  const [data, setData] = React.useState([]);
  const [term, setTerm] = React.useState("");
  const [filter, setFilter] = React.useState("all");

  useEffect(() => {
    fetch("https://dummyjson.com/posts?start=0&&limit=10")
      .then((res) => res.json())
      .then((json) => {
        const newData = json.posts.map((post) => ({
          id: post.id,
          name: post.title,
          views: post.views * 10,
          favourite: false,
          like: post.views < 1000 ? true : false,
        }));
        setData(newData);
      });
  }, []);

  const onDelete = (id) => {
    setData(data.filter((movie) => movie.id !== id));
  };

  const addForm = (item) => {
    setData((prevData) => [
      ...prevData,
      { ...item, id: Date.now(), favourite: false, like: false },
    ]);
  };

  const onToggleProp = (id, prop) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      })
    );
  };
  const onSearchChange = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };
  const updateTerm = (term) => {
    setTerm(term);
  };

  const filterMovies = (data, filter) => {
    switch (filter) {
      case "popular":
        return data.filter((movie) => movie.like);
      case "mostViewed":
        return data.filter((movie) => movie.views > 10000);
      default:
        return data;
    }
  };

  const updateFilter = (filter) => {
    setFilter(filter);
  };

  const visibleData = filterMovies(onSearchChange(data, term), filter);
  const allMoviesCount = data.length;
  const FavouriteCount = data.filter((movie) => movie.favourite).length;
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo
          allMoviesCount={allMoviesCount}
          FavouriteCount={FavouriteCount}
        />
        <div className="search-panel">
          <SearchPanel updateTerm={updateTerm} />
          <AppFilter updateFilter={updateFilter} />
        </div>
        <MovieList
          data={visibleData}
          onDelete={onDelete}
          onToggleProp={onToggleProp}
        />
        <MovieAddForm addForm={addForm} />
      </div>
    </div>
  );
};
export default App;

// const arrayOfMovies = [
//   {
//     id: 1,
//     name: "Transformers",
//     views: 989,
//     favourite: true,
//     like: false,
//   },
//   { id: 2, name: "Avatar", views: 1234, favourite: false, like: true },
//   {
//     id: 3,
//     name: "Inception",
//     views: 5678,
//     favourite: false,
//     like: false,
//   },

//   {
//     id: 4,
//     name: "The Dark Knight",
//     views: 2345,
//     favourite: true,
//     like: true,
//   },
//   { id: 5, name: "Pulp Fiction", views: 876, favourite: false, like: false },
// ];
