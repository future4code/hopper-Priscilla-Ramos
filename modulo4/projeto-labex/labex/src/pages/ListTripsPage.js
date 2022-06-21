import React, { useEffect, useState } from "react";
import api from "../components/ConfigApi";
import styled from "styled-components"
import ApplicationFormPage from "./ApplicationFormPage";
import { useNavigate } from "react-router-dom";
import AdminHomePage from "./AdminHomePage";

// const CardViagens = styled.span`
/* display: flex; */
/* justify-content: center; */
/* border: 2px solid grey; */
//  `    
/* TA QUEBRANDO O CÓDIGO!!! */

export default function ListTripsPage() {

    const navigate = useNavigate()

    const [trip, setTrip] = useState([])
    const [id, setId] = useState("")

    useEffect(() => { getTrip() }, [])

    //PUXA AS VIAGENS CRIADAS --- endpoint do Get Trips

    const getTrip = async () => {
        try {
            const response = await api.get("/trips")
            setTrip(response.data.trips)
            setId(response.data.trips.id)

        } catch (error) {
            console.log(error)
        }
    }

    
    //map para renderizar na tela cada uma das informaçoes da viagem

    const listaViagens = trip.map((viagem) => {
        
        return <div key={viagem.id}>
            <h3>Viagem: {viagem.name}</h3>
            <p><strong>Descrição:</strong> {viagem.description}</p>
            <p><strong>Planeta:</strong> {viagem.planet}</p>
            <p><strong>Data:</strong> {viagem.date}</p>
            <p><strong>Duração:</strong> {viagem.durationInDays}</p>
            <button onClick={()=> navigate ("/trips/application")}>Aplicar</button>
        </div>
    })

    //passa ID para o formulário de aplicação

    const passaInfos = () => {
        return <ApplicationFormPage
        id = {id} />,
        <AdminHomePage 
        id = {id}
        trip = {trip} />
    }

    // //passa getTrip para admin home page   !!!VER SE AINDA PRECISA!!!

    // const passaGetTrip = () => {
    //     return <AdminHomePage 
    //     getTrip = {getTrip()}/>
    // }

    return (
        <div>
            <h1>Lista Viagens</h1>
            {listaViagens}
            {passaInfos()}
            {/* {passaGetTrip()} */}
        </div>
    )
}