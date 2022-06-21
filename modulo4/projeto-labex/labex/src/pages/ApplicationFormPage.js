import React, { useEffect, useState } from "react";
import api from "../components/ConfigApi";
import axios from "axios";
import styled from "styled-components"



function ApplicationFormPage(props) {

    //o "estado"

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [text, setText] = useState("");
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")

     //POST PARA ENVIAR DADOS DO VIAJANTE -- endpoint do apply to trip

    const apllyToTrip = (id) => {

        const body = {
            "name": name,
            "age": age,
            "applicationText": text,
            "profession": profession,
            "country": country
        }

        api.post(`/trips/${id}/apply`, body)
            .then(() => {
                confereAge()
                console.log("deu certo!!")
                limpaInput()
            })
            .catch((error) => {
                console.log(error.response.data)
                limpaInput()
            })
    }

    //função para limpar os inputs após envio do formulário

    const limpaInput = () => {
        return setName(""),
            setAge(""),
            setText(""),
            setProfession(""),
            setCountry("")
    }


    //onChange para os Inputs controlados

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
            alert("voce nao pode se inscrever, e menor de idade")
        }
    }

    return (
        <div>
           <h1>Formulário de Inscrição</h1> 
           
            <form>
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
            </form>
            <button onClick={() => apllyToTrip(props.id)}>Apply</button>

        </div>
    )
}

export default ApplicationFormPage;
