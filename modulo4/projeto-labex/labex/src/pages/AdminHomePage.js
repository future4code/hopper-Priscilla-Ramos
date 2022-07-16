import React from "react";
import { URL_BASE } from "../components/UrlBase";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"
import useRequestData from "../Hooks/UseRequestData"
import axios from "axios";

export default function AdminHomePage() {

    const [data, loading, error, GetTrip] = useRequestData(`${URL_BASE}/trips`)
    const navigate = useNavigate()
    const { id } = useParams

    useProtectedPage();

    
    const deleteTrip = (id) => {
        axios.delete(`${URL_BASE}/trips/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(() => {
            GetTrip()
            console.log("deu certo!")
        }).catch((error) => {
            console.log(error.data)
            alert("deu errado!")
        })
    }

    const listaViagens = data && data.map((viagem) => {
        return <div key={viagem.id}>
            <h3 onClick={() => navigate(`/admin/trips/${viagem.id}`)}> Viagem: {viagem.name}</h3>
            <button onClick={() => deleteTrip(viagem.id)}>Delete</button>
        </div>
    })

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