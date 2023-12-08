import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
  sx={{
    background: "#28282A"
  }}     position="static">
    
        <Toolbar>
          <Typography
          align='center'
           variant="h6"
            component="div"
             sx={{ flexGrow: 1 ,
             fontWeight:700,
             margin: 'auto', 
      display: 'block', //
      marginRight:'-9em'
             }}>
            ONEPIRATE
          </Typography>
          <Button sx={{ 
             fontWeight:700,
             color:"inherit"
             }}>  sign in</Button>

          <Button sx={{ 
             fontWeight:700,
             color:'#FF3366'
             }}>sign up</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}