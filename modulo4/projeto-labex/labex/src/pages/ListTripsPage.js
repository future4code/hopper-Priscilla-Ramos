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
    const [id, setId] = useState("")
    const [cont, setCont] = useState(false)

    useEffect(() => {getTrip()}, [])

    const getTrip = async () => {
        try {
           const response = await api.get("/trips")
            setTrip(response.data.trips)
        } catch (error) {
            console.log(error)
        }
    }

    const trocaValor = () => {
        setCont(!cont)
    }


    const listaViagens = trip.map((viagem) => {
        return <div key={viagem.id}>
            <h3>Viagem: {viagem.name}</h3>
            <p><strong>Descrição:</strong> {viagem.description}</p>
            <p><strong>Planeta:</strong> {viagem.planet}</p>
            <p><strong>Data:</strong> {viagem.date}</p>
            <p><strong>Duração:</strong> {viagem.duration}</p>
            <button onClick={() =>trocaValor()}>+</button>
            {cont === false ? "" : <ApplicationFormPage id={viagem.id}/>}
        </div>
    })

    
    

    return (
        <div>
            <h1>Lista Viagens</h1>
            {listaViagens}
        </div>
    )
}