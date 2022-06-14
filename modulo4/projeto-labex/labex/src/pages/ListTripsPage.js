import React, { useEffect, useState } from "react";
import api from "../components/ConfigApi";
import axios from "axios";
// import styled from "styled-components"

// const CardViagens = styled.div`
//     display: flex;
//     justify-content: center;
//     border: 2px solid grey;
// `    TA QUEBRANDO O CÓDIGO!!!

export default function ListTripsPage() {

    const [trip, setTrip] = useState([])

    useEffect(() => { getTrip() }, [])

    const getTrip = async () => {
        try {
           const response = await api.get("/trips")
            setTrip(response.data.trips)
        } catch (error) {
            console.log(error)
        }
    }


    const listaViagens = trip.map((viagem) => {
        return <div key={viagem.id}>
            <p>{viagem.name}</p>
            <p>{viagem.description}</p>
            <p>{viagem.planet}</p>
            <p>{viagem.date}</p>
            <p>{viagem.duration}</p>
        </div>
    })

    return (
        <div>
            <h1>Lista Viagens</h1>
            {listaViagens}
        </div>
    )
}