import React from "react";
import axios from "axios";

export default function Delete() {

    const limpaMatch = async () => {

        try {
            const response = await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:priscilla/clear")
        console.log("Apagado" + response)
        }catch (error){
        console.log(error.response)
        }}

    return (
        <div>
           <button onClick={limpaMatch}> Limpa Match </button>

        </div>
    )
}