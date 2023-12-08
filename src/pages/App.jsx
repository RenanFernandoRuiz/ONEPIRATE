import React from "react";
import ButtonAppBar from "../components/head/head";
import Imagem from "../components/imagem/imagem";
import Luxury from "../components/luxury/luxury";
import Footer from "../components/footer/footer";
import Cont from "../components/container3/cont";
import Offers from "../components/offers/offers";
import Job from "../components/work/Job";
import OutlinedButton from "../components/Botao/Botao";


const App = () => {
  return (
    <>
      <div>
        <ButtonAppBar></ButtonAppBar>
      </div>
      <div>
        <Imagem></Imagem>
      </div>
      <div>
        <Luxury></Luxury>
      </div>
      <div>
        <Cont></Cont>
      </div>
      <div>
        <Job></Job>
      </div>

      <div>
        <Offers></Offers>
      </div>
      <div>
        <OutlinedButton></OutlinedButton>
      </div>

      <div>
        
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
