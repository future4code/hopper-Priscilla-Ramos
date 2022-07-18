import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { URL_BASE } from "../components/UrlBase";
import axios from "axios";
import Button from '@mui/material/Button';

export default function LoginPage() {

    const navigate = useNavigate ()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //endpoint login

    const submitLogin = async () => {

        const body = {
            email: email,
            password: password
        }

        try {
            const response = await axios.post(`${URL_BASE}/login`, body)
            console.log(response.data)
            localStorage.setItem("token", response.data.token)
            navigate ("/admin/trips/list")
        } catch (error) {
            console.log(error.response)
        }
    };

    return (
        <div>
            <Header
            nome={"login"}
            />

            <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="e-mail"
            />

            <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="senha"
            />

            <Button onClick={() => submitLogin()}>enviar</Button>
        </div>
    )
}
