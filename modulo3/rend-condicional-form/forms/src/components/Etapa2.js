import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.3em;
`

class Etapa2 extends React.Component {

    render() {
        return (
            <div>
                <MainContainer>
                <h3>Etapa 2 - Curso Superior:</h3> 
                <div>
                    <p>1. Qual o Curso?</p>
                    <input type='text'/>
                    <button>Add Curso</button>
                </div>

                <div>
                    <p>2. Qual instituição de Ensino?</p>
                    <input type='text'/>
                    <button>Add Instituição</button>
                </div>
                
                </MainContainer>

                
            </div>

        );
    }
}

export default Etapa2;