import React, { useEffect, useState } from "react";
import { URL_BASE } from "../components/UrlBase";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"

export default function AdminHomePage() {

    const [data, loading, error] = useRequestData(`${URL_BASE}/trips`)
    const navigate = useNavigate()
    const { id } = useParams

    useProtectedPage();

    const listaViagens = data && data.map((viagem) => {
        return <div key={viagem.id}>
            <h3 onClick={() => navigate(`/admin/trips/${viagem.id}`)}> Viagem: {viagem.name}</h3>
            <button onClick={() => deleteTrip(id)}>Delete</button>
        </div>
    })


    const deleteTrip = () => {
        api.delete(`/trips/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((response) => {
            console.log("deu certo!")
            getTrip()
        }).catch((error) => {
            console.log(error.data)
            alert("deu errado!")
        })
    }

    return (
        <div>

            <Header
                nome={"admin home"}
            />
            {loading && <p>Carregando...</p>}
            {!loading && error && <p>Deu Ruim!</p>}
            {!loading && data && data.length > 0 && listaViagens}
            {!loading && data && data.length === 0 && <p>Não há viagens!</p>}
            
        </div>
    )
}