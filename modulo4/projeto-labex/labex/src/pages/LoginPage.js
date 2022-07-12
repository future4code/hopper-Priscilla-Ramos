import React, { useState } from "react";
import api from "../components/ConfigApi";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

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
            const response = await api.post(`/login`, body)
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

            <button onClick={() => submitLogin()}>enviar</button>
        </div>
    )
}
