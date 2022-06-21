import React, { useEffect, useState } from "react";
import api from "../components/ConfigApi";
import axios from "axios";
import styled from "styled-components"
import ApplicationFormPage from "./ApplicationFormPage";

// const CardViagens = styled.span`
/* display: flex; */
/* justify-content: center; */
/* border: 2px solid grey; */
//  `    
/* TA QUEBRANDO O CÓDIGO!!! */

export default function ListTripsPage() {

    const [trip, setTrip] = useState([])
    // const [id, setId] = useState("")
    const [cont, setCont] = useState(false)

    useEffect(() => { getTrip() }, [])

    //PUXA AS VIAGENS CRIADAS --- endpoint do Get Trips

    const getTrip = async () => {
        try {
            const response = await api.get("/trips")
            setTrip(response.data.trips)
            console.log(response.data.trips)
        } catch (error) {
            console.log(error)
        }
    }

    //troca valor entre true e false do contador, para abrir formulário em cada viagem

    const trocaValor = () => {
        setCont(!cont)
    }

    //map para renderizar na tela cada uma das informaçoes da viagem

    const listaViagens = trip.map((viagem) => {
        
        return <div key={viagem.id}>
            <h3>Viagem: {viagem.name}</h3>
            <p><strong>Descrição:</strong> {viagem.description}</p>
            <p><strong>Planeta:</strong> {viagem.planet}</p>
            <p><strong>Data:</strong> {viagem.date}</p>
            <p><strong>Duração:</strong> {viagem.durationInDays}</p>
            <button onClick={() => trocaValor()}>+</button>
            {cont === false ? "" : <ApplicationFormPage id={viagem.id} />}
        </div>
    })

    return (
        <div>
            <h1>Lista Viagens</h1>
            {listaViagens}
        </div>
    )
}