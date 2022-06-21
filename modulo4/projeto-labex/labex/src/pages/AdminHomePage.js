import React, { useEffect, useState } from "react";
import api from "../components/ConfigApi";
import axios from "axios";
import styled from "styled-components"


export default function AdminHomePage(props) {

    //Deleta viagens

    const deleteTrip = async () => {

        try {
            await api.del(`/trips/${props.id}`)
            console.log("deu certo!")
        } catch (error) {
            console.log(error.data)
        }
    }

    //Get Trip

    const listaComDelete = props.trip.map((viagem) => {
        return <div key={viagem.id}>
            <h3>Viagem: {viagem.name}</h3>
            <p><strong>Descrição:</strong> {viagem.description}</p>
            <p><strong>Planeta:</strong> {viagem.planet}</p>
            <p><strong>Data:</strong> {viagem.date}</p>
            <p><strong>Duração:</strong> {viagem.durationInDays}</p>
            <button onClick={() => deleteTrip()}>-</button>
        </div>
    })


    return (
        <div>
            <h2>Admin Page</h2>
            {listaComDelete}
        </div>
    )
}
