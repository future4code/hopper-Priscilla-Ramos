import Home from "./components/Home";
import React, { useState } from "react";
import Matches from "./components/Matches";
import styled from "styled-components";
import Delete from "./components/Delete";

const Botao = styled.button`
  display: flex;
`

function App() {

  const [tela, setTela] = useState("Home")
  
  // alternar entre telas  ??????????????????????????

   const escolheTela = () => {
    switch (tela) {
      case "Home":
        return <Home />
      case "Match": 
        return <Matches />
      default:
        return <Home />
    }
  }


  const mudaTela = (nomeTela) => {
    setTela(nomeTela)
  }


  return (
    <div>

      
      {escolheTela () }

      <Botao>
      <button onClick={()=>mudaTela("Match")}>Lista Matches</button>
      <button onClick={()=>mudaTela("Home")}>Voltar</button>
      
      <Delete />
      </Botao>

    </div >
  );

}

export default App;
