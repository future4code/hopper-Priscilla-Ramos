import React, { useEffect, useState } from "react";
import api from "../components/ConfigApi";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../components/useProtectedPage";
import { useNavigate } from "react-router-dom";

export default function AdminHomePage() {

    const [trip, setTrip] = useState([])
    const navigate = useNavigate()
    const {id} = useParams
    
    useProtectedPage();

    useEffect(() => { getTrip() }, [])

    //PUXA AS VIAGENS CRIADAS --- endpoint do Get Trips

    const getTrip = async () => {
        try {
            const response = await api.get("/trips")
            setTrip(response.data.trips)
            console.log(response.data.trips.id)
        } catch (error) {
            console.log(error)
        }
    }

    //map pra renderizar a lista

    const listaViagens = trip.map((viagem) => {

        return <div key={viagem.id}>
            <h3 onClick={() => navigate(`/admin/trips/${viagem.id}`)}> Viagem: {viagem.name}</h3>
            <button onClick={() => deleteTrip(id)}>Delete</button>
        </div>
    })

    //Deleta viagens - endpoint delete trip

    const deleteTrip = () => {
            api.delete(`/trips/${id}`, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            }).then((response)=>{
                console.log("deu certo!")
                getTrip()
            }).catch ((error)=>{
            console.log(error.data)
            alert("deu errado!")
        })
    }

    return (
        <div>
            <h2>Admin Page</h2>
            <button onClick={() => navigate("/admin/trips/create")}>Criar Viagem</button>
            {listaViagens}
            <button onClick={() => navigate("/login")}>Voltar</button>
        </div>
    )
}