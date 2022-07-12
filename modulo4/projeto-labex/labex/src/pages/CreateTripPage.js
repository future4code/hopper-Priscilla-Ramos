import React, { useEffect, useState } from "react";
import api from "../components/ConfigApi";
import styled from "styled-components"
import { useProtectedPage } from "../components/useProtectedPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";


export default function CreateTripPage() {

    const navigate = useNavigate()

    useProtectedPage();

    const [name, setName] = useState('')
    const [planet, setPlanet] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [durationInDays, setDurationInDays] = useState('')

    //endpoint create trip

    const createTrip = async () => {

        const body =
        {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays
        }

        try {
            const response = await api.post(`/trips`, body, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            });
            console.log(response.data)
            alert("deu certo")
            limpaInput()
        } catch (error) {
            console.log(error.response)
            alert("deu errado")
        }
    }

    //onChange para controlar os inputs

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangePlanet = (event) => {
        setPlanet(event.target.value)
    }

    const onChangeDate = (event) => {
        setDate(event.target.value)
    }

    const onChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const onChangeDurationInDays = (event) => {
        setDurationInDays(event.target.value)
    }

    
    //função para limpar os inputs após envio do formulário

    const limpaInput = () => {
        return setName(""),
            setPlanet(""),
            setDate(""),
            setDescription(""),
            setDurationInDays("")
    }

    return (
        <div>
            <Header
            nome={"create trip"}
            />
           
            <form>
                <input
                    placeholder="Nome Viagem"
                    onChange={onChangeName}
                    value={name}></input>

                <input
                    placeholder="Nome Planeta"
                    onChange={onChangePlanet}
                    value={planet}></input>

                <input
                    placeholder="Data Viagem"
                    onChange={onChangeDate}
                    value={date}></input>

                <input
                    placeholder="Descrição Viagem"
                    onChange={onChangeDescription}
                    value={description}></input>

                <input
                    placeholder="Duração em dias"
                    onChange={onChangeDurationInDays}
                    value={durationInDays}></input>

                <button onClick={() => createTrip()}>Enviar</button>
            </form>
        </div>
    )
}
