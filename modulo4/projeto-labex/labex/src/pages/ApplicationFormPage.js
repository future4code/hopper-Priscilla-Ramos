import React, { useEffect, useState } from "react";
import api from "../components/ConfigApi";
import axios from "axios";
import styled from "styled-components"



function ApplicationFormPage (props) {

    //o "estado"

    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [text, setText] = useState("");
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")


    useEffect(() => { apllyToTrip() }, [])

    //POST PARA ENVIAR DADOS DO VIAJANTE

    const apllyToTrip = async () => {

        const body = {
            "name": name,
            "age": age,
            "applicationText": text,
            "profession": profession,
            "country": country
        }

        try {
            await api.post("/trips/:id/apply", body)
            confereAge()
            console.log("deu certo!!")
            setName("")
            setAge("")
            setText("")
            setProfession("")
            setCountry("")         
        } catch (error) {
            console.log(error.response)
        }
    }


    //onChange


    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeAge = (event) => {
        setAge(event.target.value)
    }

    const onChangeApplyText = (event) => {
        setText(event.target.value)
    }

    const onChangeProfession = (event) => {
        setProfession(event.target.value)
    }

    const onChangeCountry = (event) => {
        setCountry(event.target.value)
    }


    //FUNÇÃO PARA VERIFICAR SE TEM MAIS DE 18 ANOS

    const confereAge = () => {
        if (age < 18) {
            alert("você não pode se inscrever, é menor de idade")
        }
    }



    return (
        <div>

            <input value={name}
                onChange={onChangeName}
                placeholder="Digite seu nome completo"></input>
            <input value={age}
                onChange={onChangeAge}
                placeholder="Digite sua idade"></input>
            <input value={text}
                onChange={onChangeApplyText}
                placeholder="Digite o porquê quer viajar"></input>
            <input value={profession}
                onChange={onChangeProfession}
                placeholder="Digite seua profissão"></input>
            <input value={country}
                onChange={onChangeCountry}
                placeholder="Digite seu país"></input>

            <button onClick={() => apllyToTrip(props.id)}>Apply</button>

        </div>
    )
}

export default ApplicationFormPage;
