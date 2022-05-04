import React from "react";

class SuperiorIncompleto extends React.Component {

    render() {
        return (
            <div>

                <h3>Informações Escolares:</h3>

                <div>
                    Por que você não terminou sua graduação?
                    <input type='text' />
                </div>

                <div>
                    Qual sua escolaridade?
                    <select>
                        <option value="Curso técnico">Curso técnico</option>
                        <option value="Cursos de inglês">Cursos de inglês</option>
                        <option value="Não fiz curso complementar">Não fiz curso complementar</option>
                    </select>
                </div>
            </div>

        );
    }
}

export default SuperiorIncompleto;