import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToTripsList } from "../Routes/RouteFunctions";
import Button from '@mui/material/Button';
import { ContainerGeral, ContainerBotoes } from "./HomeStyled";



export default function HomePage() {

    const navigate = useNavigate();

    return (
        <ContainerGeral>
            <ContainerBotoes>
                <h2>Bem vindo ao LABEX</h2>
                <Button variant="contained" size="large" onClick={() => goToLogin(navigate)}>Login</Button>
                <Button variant="contained" size="large" onClick={() => goToTripsList(navigate)}>Ver Viagens</Button>
            </ContainerBotoes>
        </ContainerGeral>
    )
}
