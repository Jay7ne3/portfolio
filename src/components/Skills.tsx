import React from "react";
import { Container, Box, Typography, List, ListItemText, Card } from "@mui/material";

const progLangs = ["HTML", "CSS", "JS", "TS", "Java", "C++", "Python"];
const tools = ["Eclipse", "VS Code"];
const frameworks = ["React", "Bootstrap", "MUI"]

function Skills() {
  return (
    <Container>
        <Typography 
          variant="h1"
          sx= {{my: 4, textAlign: "center"}}
        >
          Skills
        </Typography>
        <Box 
          sx={{p: 3,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 4
          }}
        >
          <Card sx={{
            width: 300, // Set a fixed width
            height: 300, // Set a fixed height
            p: 3,
            display: "flex",
            flexDirection: "column"
          }}>
            <Typography variant="h6">
              Programming Languages
            </Typography>
              <List>
                {progLangs.map((language) => (
                  <ListItemText>
                    {language}
                  </ListItemText>
                ))}
              </List>
          </Card>
          <Card sx={{
            width: 300, // Set a fixed width
            height: 300, // Set a fixed height
            p: 3,
            display: "flex",
            flexDirection: "column"
          }}
          >
            <Typography variant="h6">
              Developer Tools
            </Typography>
            <List>
                {tools.map((tool) => (
                  <ListItemText>
                    {tool}
                  </ListItemText>
                ))}
              </List>
          </Card>
          <Card sx={{
            width: 300, // Set a fixed width
            height: 300, // Set a fixed height
            p: 3,
            display: "flex",
            flexDirection: "column"
          }}
          >
            <Typography variant="h6">
              Frameworks
            </Typography>
            <List>
                {frameworks.map((framework) => (
                  <ListItemText>
                    {framework}
                  </ListItemText>
                ))}
              </List>
          </Card>
        </Box>
    </Container>
  )
}

export default Skills;