import React, { useEffect, useState } from "react";
import api from "../components/ConfigApi";
import styled from "styled-components";


export default function AdminHomePage(props) {

    // useEffect(() => { deleteTrip () }, [])

    //Deleta viagens

    const deleteTrip = async () => {

        try {
            await api.del(`/trips/${props.id}`)
            console.log("deu certo!")
        } catch (error) {
            console.log(error.data)
        }
    }

    return (
        <div>
            <h2>Admin Page</h2>

        </div>
    )
}
