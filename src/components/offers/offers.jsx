import styles from "./offers.module.css";
import casa from "../../assets/casa.svg";
import ball from "../../assets/bolinhas.svg";
import Typography from "@mui/material/Typography";
import Textfield from "../textfield/textfield";
import TextField from '@mui/material/TextField';


const Offers = () => {
  return (
    <div className={styles.ofertas}>
      <div className={styles.bolas}>
        <img src={ball} className="bolis" alt="bola" />
      </div>

      <div>
        <img src={casa} className={styles.casaimg} alt="Vite logo" />
      </div>

      <div className={styles.recieve}>
        <Typography
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            // maxWidth: "10px",
          }}
          variant="h3"
          gutterBottom
        >
          Receive offers
        </Typography>
        <p>Taste the holidays of the everyday close to home</p>
      </div>
      <div>
       <Textfield></Textfield>
      </div>
    </div>
  );
};

export default Offers;
