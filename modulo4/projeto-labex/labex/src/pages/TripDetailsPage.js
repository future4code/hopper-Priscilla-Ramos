import React, { useEffect, useState } from "react";
import api from "../components/ConfigApi";
import styled from "styled-components"


export default function TripDetailsPage(props) {

    const [detail, setDetail] = useState([])
    const [id, setId] = useState("")

    //para renderizar assim que entrar na página

    useEffect = (() => {getTripDetail()}, [])

    //para pegar os detalhes da viagem - endpoint do get trip detail

    const getTripDetail = async () => {

        try {
            const response = await api.get(`/trip/O5HMGknqGB3ILnd0j5YG`, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
            // setDetail([response.data.trip])
            console.log(response.data.trip)
        } catch (error) {
            console.log(error.response)
        }
    }

    //map para renderizar

    // const listaDetail = detail.map((viagem)=>{
    //     return <div key={viagem.id}>
    //     <h3>Viagem: {viagem.name}</h3>
    //     <p><strong>Descrição:</strong> {viagem.description}</p>
    //     <p><strong>Planeta:</strong> {viagem.planet}</p>
    //     <p><strong>Data:</strong> {viagem.date}</p>
    //     <p><strong>Duração:</strong> {viagem.durationInDays}</p>
    // </div>
    // })

        return (
            <div>
                <h2>Trip Detail Page</h2>
                {/* {listaDetail} */}
            </div>
        )
    }
