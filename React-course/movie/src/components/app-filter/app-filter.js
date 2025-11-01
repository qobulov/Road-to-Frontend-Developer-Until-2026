import "./app-filter.css";
import React from "react";
import { useContext } from "react";
import { Context } from "../../context/context";

export const AppFilter = () => {
  const { dispatch } = useContext(Context);

  const updateFilter = (name) => {
    dispatch({ type: "ON_FILTER", payload: name });
  };

  return (
    <div className="btn-group">
      {btnsArr.map((btn) => (
        <button
          key={btn.name}
          className="btn btn-info"
          onClick={() => updateFilter(btn.name)}
          type="button"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

const btnsArr = [
  { name: "all", label: "Barcha kinolar" },
  { name: "popular", label: "Mashhur kinolar" },
  { name: "mostViewed", label: "Ko'proq ball olganlar" },
];
export default AppFilter;
