import React from "react";
import { Container, Typography } from "@mui/material";

function About() {
    return (
        <Container id="about" sx={{ py: { xs: 8, sm: 16 } }}>
            <Typography variant="h1">
                Hello! My name is Jenny
            </Typography>
        </Container>
    )
}

export default About;