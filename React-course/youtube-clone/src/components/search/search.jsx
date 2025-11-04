import { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onSearch(value);
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        display: "flex",
        alignItems: "center",
        width: { xs: "100%", sm: "400px" }
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          padding: "10px"
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;