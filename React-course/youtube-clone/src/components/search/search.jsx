import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{boxShadow:"none", pl:2, border : "1px solid #ff0000ff" }}
    >
      <input type="text" placeholder="Search..." className="search-bar"/>
      <IconButton>
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
