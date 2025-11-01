import "./app-info.css";
import { useContext } from "react";
import { Context } from "../../context/context";

const AppInfo = () => {
  const {state} = useContext(Context);
  return <div className="app-info">
    <p className="fs-3 text-uppercase">Barcha kinolar soni: {state.data.length} </p>
    <p className="fs-4 text-uppercase">Sevimli kinolar soni: {state.data.filter(movie => movie.favourite).length}</p>

  </div>;
};

export default AppInfo;
