import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom"; 
import { logo } from "../constants";
import { Search } from "../"; 

const Navbar = ({ onSearch }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      sx={{ 
        position: "sticky", 
        top: 0, 
        background: "#fff",
        zIndex: 999,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={50} />
      </Link>

      <Search onSearch={onSearch} />

      <Box sx={{ width: { xs: 0, sm: "100px" } }} />
    </Stack>
  );
};

export default Navbar;