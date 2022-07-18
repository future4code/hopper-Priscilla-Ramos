import React, { useEffect, useState } from "react";
import { URL_BASE } from "../components/UrlBase";
import { useProtectedPage } from "../Hooks/useProtectedPage"
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";


export default function TripDetailsPage() {

    useProtectedPage();

    const [detail, setDetail] = useState({})
    const [candidatos, setCandidatos] = useState([])
    const [idCandidatos, setIdCandidatos] = useState([])
    const [idTrip, setIdTrip] = useState("")
    const { id } = useParams()


    useEffect(() => {
        axios.get(`${URL_BASE}/trip/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setDetail(response.data.trip)
                setCandidatos(response.data.trip.candidates)
                setIdCandidatos(response.data.trip.candidates.map(data => data.id))
                setIdTrip(response.data.trip.id)
                console.log(response.data.trip.candidates.map(data => data.id))
            })
            .catch((error) => {
                console.log(error.response)
            })
    }, [id]);


    const decideCandidate = (approve) => {
        const body = {
            "approve": approve
        }
        axios.put(`${URL_BASE}/trips/${idTrip}/candidates/${idCandidatos}/decide`, body, {   //como deixar só 1 id selecionado?
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(() => {
            alert("Candidato aprovado!")
        }).catch((error) => {
            console.log(error.response.data)
        })

    }


    const listaCandidatos = candidatos.map((cand) => {
        return <div key={cand.id}>
            <p>Nome:{cand.name}</p>
            <p>Texto: {cand.applicationText}</p>
            <p>Idade: {cand.age}</p>
            <p>País: {cand.country}</p>
            <button onClick={() => decideCandidate(true)} >aceitar</button>
            <button onClick={() => decideCandidate(false)} >reprovar</button>
            {/* {decideCandidate === true ? listaCandidatos : listaVazia} */}
        </div>
    })

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
            <h3><strong>Candidatos:</strong></h3>
            {listaCandidatos}
        </div>
    )
}
