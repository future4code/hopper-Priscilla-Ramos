import React from "react";
import App from "../App";
import CursoSuperior from "./CursoSuperior";

class DadosGerais extends React.Component {
 
   
    render() {
       
        return (
            <div>
                <h3>Dados Gerais:</h3>

                <div>

                    <div>
                        Qual seu nome?
                        <input type = 'text' />
                    </div>

                    <div>
                        Qual sua Idade?
                        <input type = 'number' />
                    </div>

                    <div>
                        Qual seu e-mail?
                        <input type = 'text' />
                    </div>

                    <div>
                        Qual sua escolaridade?
                        <select>
                            <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                            <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                            <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                            <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                        </select>
                    </div>

                    

                </div>

            </div>

        );
    }
}

export default DadosGerais;
