import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToLogin, goToTripsList } from "../Routes/RouteFunctions";


export default function HomePage() {

   const navigate = useNavigate();
   
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
