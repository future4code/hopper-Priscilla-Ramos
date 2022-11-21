import React, { useState } from "react";
import { URL_BASE } from "../components/UrlBase";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import Header from "../components/Header";
import axios from "axios";
import Button from '@mui/material/Button';


export default function CreateTripPage() {

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
            const response = await axios.post(`${URL_BASE}/trips`, body, {
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
                    onChange={(e) => setName(e.target.value)}
                    value={name}></input>

                <input
                    placeholder="Nome Planeta"
                    onChange={(e) => setPlanet(e.target.value)}
                    value={planet}></input>

                <input
                    placeholder="Data Viagem"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}></input>

                <input
                    placeholder="Descrição Viagem"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}></input>

                <input
                    placeholder="Duração em dias"
                    onChange={(e) => setDurationInDays(e.target.value)}
                    value={durationInDays}></input>

                <Button variant="outlined" onClick={() => createTrip()}>Enviar</Button>
            </form>
        </div>
    )
}
