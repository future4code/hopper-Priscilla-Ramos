import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.3em;
`


class Etapa1 extends React.Component {
 
   
    render() {
       
        return (
            <MainContainer>

            
                <h3>Etapa 1 - Dados Gerais:</h3>

                <div>
                    <p>1. Qual seu nome?</p>
                    <input type = 'text' />
                </div>   

                <div> 
                    <p>2. Qual sua Idade?</p>
                    <input type = 'number' />
                </div>   

                <div>
                    <p>3. Qual seu e-mail?</p>
                    <input type = 'text' />
                </div> 

                <div>
                    <p>4. Qual sua escolaridade?</p>
                        <select>
                            <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                            <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                            <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                            <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                        </select>
                </div>         
              

            </MainContainer>

        );
    }
}

export default Etapa1;
