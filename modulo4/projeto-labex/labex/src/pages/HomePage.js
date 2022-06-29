import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";


export default function HomePage() {

    const navigate = useNavigate ()
    
    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/trips/list")}>Ver Viagens</button>
        </div>
    )
}
