import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Main, Channel, VideoDetail, SearchBar, Navbar } from "../";

const App = () => {
  return (
    <Box>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/search/:name" element={<SearchBar />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </Box>
  );
};

export default App;
