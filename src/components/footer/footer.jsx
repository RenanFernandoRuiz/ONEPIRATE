import styles from "./footer.module.css";
import face from "../../assets/face.svg";
import SelectSmall from '../../components/container/idioma/idioma.jsx'; // Substitua 'CaminhoParaSelectSmall' pelo caminho real do seu componente SelectSmall
import image2 from "../../assets/image 2.svg";
import Typography from '@mui/material/Typography';
import boia from "../../assets/boia.svg";

const Footer = () => {
  return (
    <div className={styles.foototal}>
    
      <div className={styles.icon}>

      <img src={face}  alt="Vite logo" />

      <img src={image2}  alt="Vite logo" />
      </div>
      <div>
      <SelectSmall />
      </div>
    <div className={styles.type}>
    <Typography sx={{
      textDecoration: 'underline',
    }}
    variant="subtitle1" gutterBottom>
    © Your Website 2023
      </Typography>
      </div>
      <div className={styles.cap}>
      <Typography variant="caption" display="block" gutterBottom>
      Icons made by Freepik from www.flaticon.com is licensed by CC 3.0 BY
      </Typography></div>
    </div>
      
  )
}

export default Footer
