import styles from "./Job.module.css"
import Typography from '@mui/material/Typography';
import mart from "../../assets/martelo.svg"
import etiqueta from "../../assets/etiqueta.svg"
import fone from "../../assets/megafone.svg";
import { Button } from "@mui/material";

const Job = () => {
  return (
    <div className={styles.container2}>
     
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-5em' }}>
      <Typography sx={{
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:'-2.7em',
        marginRight:'-19em'
      }}
      variant="h2" gutterBottom>
        HOW IT WORKS
      </Typography>
    </div>
<div className={styles.masterimg}>
      <div className={styles.martelo}>
      <img src={mart} alt="" />
      <Typography 
      sx={{
        whiteSpace: 'pre-line',
        maxWidth:'14em', 
      }}
      level="h2">Appointment every Wednesday 9am.</Typography>
      </div>


      <div className={styles.etiqueta}>
      <img src={etiqueta} alt="" />
      <Typography 
      sx={{
        whiteSpace: 'pre-line',
        maxWidth:'14em',
       
      }}
      level="h2">First come, first served. Our offers are in limited quantities, so be quick.</Typography>
      </div>

      
      <div className={styles.megafone}>
      <img src={fone} alt="" />
      <Typography 
      sx={{
        whiteSpace: 'pre-line',
        maxWidth:'14em', 
      }}
      level="h2">New offers every week. New experiences, new surprises. Your Sundays will no longer be alike.</Typography>
        

      </div>
      </div>
     
    <div>
    <Button sx={{
              backgroundColor:'#FF3366',
              width:'15em',
              height:'5em',
              margin: 'auto', 
      display: 'block', 
      marginTop:'30em',
      right:'30em'
      
            }}
            variant="contained">Get Started</Button>
      </div>
      </div>
  )
}

export default Job