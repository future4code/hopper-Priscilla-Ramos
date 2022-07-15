import React from "react";
import Header from "../components/Header"


export default function HomePage() {

   
    return (
        <div>
          
    <Header 
    nome={"home"}
    />
    
    <button onClick={() => goToLogin(navigate)}>Login</button>
    <button onClick={() => goToTripsList(navigate)}>Ver Viagens</button>
    
        </div>
    )
}
