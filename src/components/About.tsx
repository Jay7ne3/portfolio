import React from "react";
import { Container, Box, Typography } from "@mui/material";

function About() {
  return (
    <Container sx={{ py: { xs: 8, sm: 16 } }}>
      <Box>
        <Typography variant="h1" align="center" fontWeight="bold">
          Hello! I'm Jenny.
        </Typography>

      </Box>
    </Container>
  )
}

export default About;