import React, { useEffect, useState } from "react";
import api from "../components/UrlBase";
import { useProtectedPage } from "../Hooks/useProtectedPage"
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useRequestData } from "../Hooks/UseRequestData"

export default function TripDetailsPage(props) {

    useProtectedPage();

    const [detail, setDetail] = useState({})
    const [candidatos, setCandidatos] = useState({})
    const { id } = useParams()


    useEffect(() => {
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
    }, [])

    console.log(id)

    return (
        <div>
            <Header
                nome={"trips detail"}
            />

            <h3>Viagem: {detail.name}</h3>
            <p><strong>Descrição:</strong>{detail.description}</p>
            <p><strong>Planeta:</strong>{detail.planet}</p>
            <p><strong>Data:</strong>{detail.date}</p>
            <p><strong>Duração:</strong>{detail.durationInDays}</p>



        </div>
    )
}
