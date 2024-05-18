import React from "react";
import { Container, Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { blue } from "@mui/material/colors";

function Home() {
  return (
    <Container sx={{ py: { xs: 8, sm: 16 } }}>
      
        <Typography variant="h1" align="center" fontWeight="bold">
          Hello! I'm Jenny.
        </Typography>
        <Box sx={{
            display: "flex",
            justifyContent: "center",
        }}>
            <IconButton size="large">
              <GitHubIcon sx={{fontSize: 60}} aria-label="https://github.com/Jay7ne3" onClick={() => window.open('https://github.com/Jay7ne3')}/>
            </IconButton>
            <IconButton>
              <LinkedInIcon sx={{fontSize: 60, color: blue[600]}} aria-label="https://www.linkedin.com/in/jenny-phan-6995a1304/" onClick={() => window.open('https://www.linkedin.com/in/jenny-phan-6995a1304/')}/>
            </IconButton>
        </Box>
    </Container>
  )
}

export default Home;