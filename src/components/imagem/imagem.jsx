import styles from "./imagem.module.css";
import psi from "../../assets/grupo 3.svg";
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Imagem = () => {
  return (
   
    <div className={styles.tudo}>

      <div className={styles.imagemzinha}>
      <img src={psi} alt="imagem sobre nós" />
      </div>
      <div className={styles.titlezin}>
      <Typography sx={{
        fontWeight:'bold',
        color:'white',
      }}
       variant="h2" gutterBottom>
        UPGRADE YOUR SUNDAYS
      </Typography>
        </div>
        <div className={styles.line}>
        <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#FF3366', height: '1em', width: '7em' ,
      marginLeft:'14em'}} />
      </Container>
          </div>
          <div className={styles.subtypo}>
          <Typography sx={{
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'3em'
          }}
          variant="h5" gutterBottom>
          Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
            </div>
            <div>
            <Button sx={{
              backgroundColor:'#FF3366',
              width:'15em',
              height:'5em',
              margin: 'auto', // Centraliza horizontalmente
      display: 'block', //
      marginTop:'40px',
            }}
            variant="contained">Register</Button>
              </div>
              <div>
              <Typography sx={{
          color:'white',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          paddingTop:'10px',
              }}
               variant="caption" display="block" gutterBottom>
     Discover the experience
      </Typography>
                </div>
    </div>
  
  );
};

export default Imagem;
