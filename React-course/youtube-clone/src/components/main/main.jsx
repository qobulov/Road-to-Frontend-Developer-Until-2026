import { useState, useEffect } from "react";
import { Stack, Box, Container, Typography } from "@mui/material";
import { Category, Videos, Navbar, ChannelCard } from "../";
import { ApiService } from '../service/api.service';

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const selectedCategoryHandler = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedCategory("");
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const query = searchTerm || selectedCategory;
        const data = await ApiService.fetching(
          `search?part=snippet&q=${query}&maxResults=50`
        );
        setVideos(data.items);
      } catch (error) {
        console.error("Video yuklashda xatolik:", error);
      }
    };
    getData();
  }, [selectedCategory, searchTerm]);

  return (
    <Stack>
      <Navbar onSearch={handleSearch} />

      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      
      <Box p={2} sx={{ height: "90vh", overflowY: "auto" }}>
        <Container maxWidth="90%">
          <Typography variant="h4" component="h1" fontWeight="bold" mb={2}>
            {searchTerm || selectedCategory}{" "}
            <span style={{ color: "red" }}>videos</span>
          </Typography>
          <Videos videos={videos} />
          <ChannelCard ChannelCard={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;