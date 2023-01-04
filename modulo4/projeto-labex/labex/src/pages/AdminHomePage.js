import React from "react";
import { URL_BASE } from "../components/UrlBase";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"
import useRequestData from "../Hooks/UseRequestData"
import axios from "axios";
import { Button } from "@material-ui/core";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function AdminHomePage() {

    const [data, loading, error, GetTrip] = useRequestData(`${URL_BASE}/trips`)
    const navigate = useNavigate()
    const { id } = useParams

    useProtectedPage();


    const deleteTrip = (id) => {
        axios.delete(`${URL_BASE}/trips/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(() => {
            GetTrip()
            console.log("deu certo!")
        }).catch((error) => {
            console.log(error.data)
            alert("deu errado!")
        })
    }

    const listaViagens = data && data.map((viagem) => {
        return <div key={viagem.id}>
            <h3 onClick={() => navigate(`/admin/trips/${viagem.id}`)}> Viagem: {viagem.name}</h3>
            <Button variant="outlined" onClick={() => deleteTrip(viagem.id)}>Delete</Button>
        </div>
    })

    return (
        <div>

            <Header
                nome={"admin home"}
            />
            {loading && <CircularProgress />}
            {!loading && error && <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
            </Alert>}
            {!loading && data && data.length > 0 && listaViagens}
            {!loading && data && data.length === 0 && <p>Não há viagens!</p>}

        </div>
    )
}