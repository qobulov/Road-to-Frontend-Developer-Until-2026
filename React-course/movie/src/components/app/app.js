import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from '../movie-list/movie-list'
import MovieAddForm from "../movie-add-form/movie-add-form";
import "./app.css";

const App = () => {
  const data = [
    { id: 1, name: "Transformers", views: 989, color: true },
    { id: 2, name: "Avatar", views: 1234, color: false },
    { id: 3, name: "Inception", views: 5678, color: false },
  ];
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
          <MovieList data={data} />
          <MovieAddForm />
      </div>
    </div>
  );
};

export default App;
