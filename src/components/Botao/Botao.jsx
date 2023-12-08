import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import boia1 from "../../assets/boia1.svg"

const StyledButton = styled(Button)({
  color: 'black',
  width: '600px',
  height: '80px',
  border: '5px solid black',
  fontWeight: 'bold',
  fontSize: '30px',
});

const OutlinedButton = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <StyledButton sx={{
        fontFamily: 'Roboto Condensed, sans-serif',
        display: 'block',
        margin: 'auto',
      }} variant="outlined">
        GOT ANY QUESTION? NEED HELP?
      </StyledButton>
      <Typography variant="body1" sx={{ fontFamily: 'Roboto Condensed, sans-serif', marginTop:'2em' }}>
      We are here to help. Get in touch!
      </Typography>
      <img src={boia1} style={{ marginTop:'1em'}} />
    </div>
  );
}

export default OutlinedButton;