import React from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../Hooks/UseRequestData";
import Header from "../components/Header";
import { goToAplly } from "../Routes/RouteFunctions";
import { URL_BASE } from "../components/UrlBase";
import Button from '@mui/material/Button';


export default function ListTripsPage() {

    const navigate = useNavigate()

    const [data, loading, error] = useRequestData(`${URL_BASE}/trips`)

    const listaViagens = data && data.map((viagem) => {
        return <div key={viagem.id}>
            <h3 >Viagem: {viagem.name}</h3>
            <p ><strong>Descrição:</strong> {viagem.description}</p>
            <p ><strong>Planeta:</strong> {viagem.planet}</p>
            <p ><strong>Data:</strong> {viagem.date}</p>
            <p ><strong>Duração:</strong> {viagem.durationInDays}</p>
            <Button onClick={() => goToAplly(navigate, viagem.id)}>Inscrever</Button>
        </div>
    })

     return (
        <div>
            <Header
            nome={"list trips"}
            />
       
            {loading && <p>Carregando...</p>}
            {!loading && error && <p>Deu Ruim!</p>}
            {!loading && data && data.length > 0 && listaViagens}
            {!loading && data && data.length === 0 && <p>Não há viagens!</p>}
            
                  
        </div>
    )
}