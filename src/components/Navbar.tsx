import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Developer Portfolio
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate('/about')}>About</Button>
          <Button color="inherit" onClick={() => navigate('/skills')}>Skills</Button>
          <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;