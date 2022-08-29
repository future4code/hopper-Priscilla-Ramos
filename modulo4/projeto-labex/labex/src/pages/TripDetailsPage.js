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
    const { id } = useParams()

    console.log(candidatos)

    useEffect(() => {
        axios.get(`${URL_BASE}/trip/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setDetail(response.data.trip)
                setCandidatos(response.data.trip.candidates)
                console.log(response.data.trip.candidates.id)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }, [id]);

    // const IdCandidato = candidatos && candidatos.map((candidato) => {
    //     return <div>{candidato.id}</div>
    // });

    const decideCandidate = (approve, id) => {
        const body = {
            "approve": approve
        }

        axios.put(`${URL_BASE}/trips/${id}/candidates/:candidateID/decide`, body, {   //od dois id tão voltando undefined
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(() => {
            alert("Candidato aprovado!")
        }).catch((error) => {
            console.log(error.response.data)
        })

    }


    const listaVazia = () => {
        return <h4><strong>Candidatos:</strong></h4>
    }

    const listaCandidatos = candidatos.map((cand) => {
        return <div key={cand.id}>
            <h4><strong>Candidatos:</strong></h4>
            <p>Nome:{cand.name}</p>
            <p>Texto: {cand.applicationText}</p>
            <p>Idade: {cand.age}</p>
            <p>País: {cand.country}</p>
            <button onClick={() => decideCandidate(cand.id)}>aceitar</button>
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
            {listaCandidatos}
        </div>
    )
}
