import { Stack, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../constants";
import { SearchBar } from "../";
import MenuIcon from "@mui/icons-material/Menu";

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
        backgroundColor: "#fff",
        zIndex: 999,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        flexWrap: "wrap", // elementlar pastga tushishi uchun
      }}
    >
      {/* Logo va menu */}
      <Stack direction="row" alignItems="center" spacing={1}>
        {/* Hamburger icon faqat kichik ekranlar uchun */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>

        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="logo"
            height={40}
            style={{
              objectFit: "contain",
            }}
          />
        </Link>
      </Stack>

      {/* SearchBar */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          mt: { xs: 1.5, md: 0 }, 
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <SearchBar onSearch={onSearch} />
      </Box>

      {/* Right side placeholder */}
      <Box
        sx={{
          width: { xs: 0, sm: "100px" },
          display: { xs: "none", sm: "block" },
        }}
      />
    </Stack>
  );
};

export default Navbar;
