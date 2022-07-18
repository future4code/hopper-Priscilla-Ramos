import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToLogin, goToTripsList } from "../Routes/RouteFunctions";
import Button from '@mui/material/Button';


export default function HomePage() {

   const navigate = useNavigate();
   
    return (
        <div>
          
    <Header 
    nome={"home"}
    />
    
    <Button variant="contained" onClick={() => goToLogin(navigate)}>Login</Button>
    <Button variant="contained" onClick={() => goToTripsList(navigate)}>Ver Viagens</Button>
    
        </div>
    )
}
