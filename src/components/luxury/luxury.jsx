import styles from "./luxury.module.css";
import Typography from '@mui/material/Typography';
import sol from "../../assets/guardasol.svg"
import navio from "../../assets/navio.svg"
import carteira from "../../assets/carteira.svg"

const Luxury = () => {
  return (
    <div className={styles.container1}>
     <div className={styles.sol}>
      <img src={sol}alt="" />
      <Typography sx={{
        fontWeight:'bold',
      }}level="h1">THE BEST LUXURY HOTELS</Typography>
      <Typography 
      sx={{
        whiteSpace: 'pre-line',
        maxWidth:'16em', 
      }}
      level="h2">From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few  subway stops away from your home.</Typography>
     </div>

     <div className={styles.navio}>
      <img src={navio}alt="" />
      <Typography sx={{
        fontWeight:'bold',
      }}level="h1">NEW EXPERIENCES</Typography>
      <Typography 
      sx={{
        whiteSpace: 'pre-line',
        maxWidth:'14em', 
      }}
      level="h2">Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike.</Typography>
     </div>


     <div className={styles.carteira}>
      <img src={carteira}alt="" />
      <Typography sx={{
        fontWeight:'bold',
      }}level="h1">EXCLUSIVE RATES</Typography>
      <Typography 
      sx={{
        whiteSpace: 'pre-line',
        maxWidth:'14em', 
      }}
      level="h2">By registering, you will access specially negotiated rates that you will not find anywhere else.</Typography>
     </div>


    </div>
  );
};

export default Luxury;
