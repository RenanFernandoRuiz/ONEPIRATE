import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from "./idioma.module.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 ,
      marginLeft:110,
      marginTop:-10,
    }} size="small">
      <InputLabel id="demo-select-small-label"></InputLabel>
     
     
      <Typography sx={{
        fontFamily: 'Roboto Condensed, sans-serif', // Defina a fonte Roboto Condensed
    fontWeight: 'bold', // Torna o texto em negrito
      }}
      variant="h5" gutterBottom>
      LANGUAGE
    </Typography>


    <Typography sx={{
        fontFamily: 'Roboto Condensed, sans-serif', // Defina a fonte Roboto Condensed
    fontWeight: 'bold', // Torna o texto em negrito
    position: 'absolute', // Ou 'absolute', dependendo do layout desejado
    left: '-5em', // Ajuste o valor conforme necessário
      }}
      variant="h5" gutterBottom>
      LEGAL
    </Typography>
    <Typography sx={{
         textDecoration: 'underline',
         marginLeft:-15,
      }} variant="h6" gutterBottom>
        Terms
      </Typography>
      <Typography sx={{
        marginLeft:-15,
         textDecoration: 'underline',
      }}variant="h6" gutterBottom>
        Privacy
      </Typography>

      <Select sx ={{
        marginTop:-10,
        backgroundColor: 'white',
      }}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>English</MenuItem>
        <MenuItem value={20}>French</MenuItem>
        <MenuItem value={30}>Português</MenuItem>
      </Select>
    </FormControl>
    
  );
}

