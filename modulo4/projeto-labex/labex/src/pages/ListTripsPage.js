import React, { useEffect, useState } from "react";
import api from "../components/ConfigApi";
import styled from "styled-components"
import ApplicationFormPage from "./ApplicationFormPage";
import { useNavigate } from "react-router-dom";
import AdminHomePage from "./AdminHomePage";
import TripDetailsPage from "./TripDetailsPage";

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
            <button onClick={() => navigate("/trips/application")}>Aplicar</button>
        </div>
    })

    //passa ID para o formulário de aplicação

    const passaInfosAppForm = () => {
        return <ApplicationFormPage
            id={id} />
    }        

    const passaInfosAdminPage = () =>{
            <AdminHomePage
                id={id}
                lista={listaViagens}
            />
    }

    const passaInfosTripDetail = () => {
            <TripDetailsPage
                id={id} />
    }

    console.log(listaViagens)

    // //passa getTrip para admin home page   !!!VER SE AINDA PRECISA!!!


    return (
        <div>
            <h1>Lista Viagens</h1>
            {listaViagens}
            {passaInfosAppForm()}
            {passaInfosAdminPage()}
            {passaInfosTripDetail()}
        </div>
    )
}