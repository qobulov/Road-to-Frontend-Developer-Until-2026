import { Stack, Box, Link } from "@mui/material";
import { logo } from "../constants";
import { SearchBar } from "../";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      height={"10vh"}
      sx={{ position: "sticky", top: 0, background: "#fff", zIndex: 1000 }}
    >
      <Link to="/">
        <img src={logo} alt="logo" height={50} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
