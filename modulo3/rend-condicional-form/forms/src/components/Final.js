import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.3em;
`

function Final() {
    return (
        <MainContainer>
            <h2>Agradecemos suas respostas! Até mais!</h2>
        </MainContainer>

    );
}


export default Final;