const searchHandler = (arr, term) => {
  if (term.length === 0) {
    return arr;
  }
  return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
};

const filterHandler = (data, filter) => {
  switch (filter) {
    case "popular":
      return data.filter((movie) => movie.like);
    case "mostViewed":
      return data.filter((movie) => movie.views > 10000);
    default:
      return data;
  }
};
export { searchHandler, filterHandler };
