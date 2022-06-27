import React, { useEffect, useState } from "react";
import api from "../components/ConfigApi";
import styled from "styled-components"
import { useProtectedPage } from "../components/useProtectedPage"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function TripDetailsPage(props) {

    const navigate = useNavigate();

    useProtectedPage();

    const [detail, setDetail] = useState({})
    const [candidatos, setCandidatos] = useState({})
    const { id } = useParams()

    //para renderizar assim que entrar na página

    useEffect(() => {
        getTripDetail()
    }, [])

    console.log(id)

    //para pegar os detalhes da viagem - endpoint do get trip detail

    const getTripDetail = () => {
        api.get(`/trip/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setDetail(response.data.trip)
                setCandidatos(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error.response)
            })

    }

    
    return (
        <div>
            <h2>Trip Detail Page</h2>

            <h3>Viagem: {detail.name}</h3>
            <p><strong>Descrição:</strong>{detail.description}</p>
            <p><strong>Planeta:</strong>{detail.planet}</p>
            <p><strong>Data:</strong>{detail.date}</p>
            <p><strong>Duração:</strong>{detail.durationInDays}</p>

            <button onClick={() => navigate("/admin/trips/list")}>Voltar</button>
            
        </div>
    )
}
