import React from "react";
import axios from "axios";

export default function Delete() {

    const LimpaMatch = async () => {

        try {
            const response = await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/priscilla/clear")
        }[catch (error){
            console.log(error.data)
        }]

    return (
        <div>

        </div>
    )
}