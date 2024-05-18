import React from "react";
import { Box, Button, Card, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
    margin: "0 auto",
    maxWidth: 400,
    marginTop: 50,
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: 10,
    padding: '2rem',
    background: '#fff',
    
  });
  
  const StyledButton = styled(Button)({
    backgroundColor: '#005A9C', // A deep blue color; replace with your preferred choice
    '&:hover': {
      backgroundColor: '#003C6C', // A darker shade for hover effect
    },
    mt: 2,
    py: 1.5,
    color: '#fff',
  });

function Contact() {
    const [firstName, setfirstName] = React.useState('');
    const [lastName, setlastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    
    const submitClick = async () => {

    }
    
    return (
      <StyledCard>
      <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}
          >
          <Typography
            gutterBottom
            variant="h4"
            component="h1"
            sx={{ fontWeight: 'bold', color: '#3E7CB1' }}
          >
            Contact Me
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
            component="p"
          >
            Fill out the form and I will get back to you
          </Typography>
          <Box component="form" sx={{ mt: 5 }}>
              <Grid container spacing={1}>
                  <Grid item xs={12} >
                      <TextField
                      label="First name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                      sx={{ input: { color: '#555' }, label: { color: '#777' } }} // Adjust colors for text and label
                      value={firstName}
                      onChange={(event) => {
                          setfirstName(event.target.value);
                      }}
                      />
                  </Grid>
                  <Grid item xs={12} >
                      <TextField
                      label="Last name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                      sx={{ input: { color: '#555' }, label: { color: '#777' } }} // Adjust colors for text and label
                      value={lastName}
                      onChange={(event) => {
                          setlastName(event.target.value);
                      }}
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                      sx={{ input: { color: '#555' }, label: { color: '#777' } }} // Adjust colors for text and label
                      value={email}
                      onChange={(event) => {
                          setEmail(event.target.value);
                      }}
                      />
                  </Grid>
                  <Grid xs={12}>
                    <TextField 
                      label="Message"
                      variant="outlined"
                      multiline 
                      rows={4}
                      fullWidth
                      margin="normal"
                      required
                      sx={{ input: { color: '#555' }, label: { color: '#777' } }} // Adjust colors for text and label
                      value={message}
                      onChange={(event) => {
                          setMessage(event.target.value);
                      }}
                    />
                  </Grid>
                  <StyledButton onClick={submitClick} variant="contained">Submit</StyledButton>
              </Grid>
          </Box>
      </Box>
    </StyledCard>
    )
}

export default Contact;