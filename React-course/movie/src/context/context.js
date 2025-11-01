import { createContext, useReducer } from "react";

const initialValue = {
  data: [],
  term: "",
  filter: "all",
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ON_DELETE":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== payload),
      };
    case "ADD_FORM":
      const addForm = {
        name: payload.name,
        views: payload.views,
        id: Date.now(),
        favourite: false,
        like: false,
      };
      console.log(addForm);
      return { ...state, data: [...state.data, addForm] };
    case "ON_TOGGLE_PROP":
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === payload.id) {
            return { ...item, [payload.prop]: !item[payload.prop] };
          }
          return item;
        }),
      };
    case "SET_TERM":
      return { ...state, term: payload };
    case "ON_FILTER":
      return { ...state, filter: payload };
    case "SET_DATA":
      return { ...state, data: payload };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
