import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.3em;
`

class Etapa3 extends React.Component {

    render() {
        return (
            <MainContainer>

                <h3>Etapa 3 - Informações Escolares:</h3>

                <div>
                    <p>1. Por que você não terminou sua graduação?</p>
                    <input type='text' />
                </div>

                <div>
                    <p>2. Qual sua escolaridade?</p> 
                    <select>
                        <option value="Curso técnico">Curso técnico</option>
                        <option value="Cursos de inglês">Cursos de inglês</option>
                        <option value="Não fiz curso complementar">Não fiz curso complementar</option>
                    </select>
                </div>
            </MainContainer>

        );
    }
}

export default Etapa3;