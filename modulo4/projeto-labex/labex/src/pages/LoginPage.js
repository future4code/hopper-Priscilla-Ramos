import React, { useEffect, useState } from "react";
import api from "../components/ConfigApi";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";


export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //endpoint login

    const submitLogin = async () => {

        const body = {
            email: email,
            password: password
        }

        try {
            const response = await api.post(`/login`, body)
            console.log(response.data)
            localStorage.setItem("token", response.data.token)
            navigate ("/admin/trips/:id")
        } catch (error) {
            console.log(error.response)
        }
    };

    //inputs controlados - onchange

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    //função muda de pagina

   const navigate = useNavigate ()

    return (
        <div>
            <h2>Login Page</h2>

            <input
                type="email"
                value={email}
                onChange={onChangeEmail}
                placeholder="e-mail"
            />

            <input
                type="password"
                value={password}
                onChange={onChangePassword}
                placeholder="senha"
            />

            <button onClick={() => submitLogin()}>enviar</button>
        </div>
    )
}
