import { Link } from "react-router-dom";
import { Button, Stack, Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import {Category} from '../';


const Main = () => {
  const [category, setCategory]= useState('New');
  return <Stack>
      <Category/>
      <Box p={20} sx={{height: "90vh"}}>
        <Container maxWidth="90vh">
          <Typography variant="h4" component="h1" fontWeight="bold" mb={4}> 
            {category} <span style={{color: "red"}}>videos</span>
          </Typography>
        </Container>
      </Box>
    </Stack>;
};
export default Main;
