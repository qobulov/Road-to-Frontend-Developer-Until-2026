import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MovieAddForm from "../movie-add-form/movie-add-form";
import "./app.css";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../context/context";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { dispatch } = useContext(Context);
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
        dispatch({ type: "SET_DATA", payload: newData });
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        {isLoading ? <h2>Loading...</h2> : null}
        <MovieList />
        <MovieAddForm />
      </div>
    </div>
  );
};
export default App;