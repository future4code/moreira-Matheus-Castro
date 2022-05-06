import React from 'react' 
import styled from 'styled-components'

const OrganizacaoInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
`
const EstiloInput = styled.input`
    width: 200px;
    border: 1px solid gray;
    margin-top: -10px;
    margin-bottom: -10px;
    border-radius: 5px;
`
const EstiloH4 = styled.h4`
    font-size: 15px;
    text-align: center;
    font-weight: 450;
`

const EstiloH3 = styled.h3`
    font-size: 20px;
`
const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`

const Select = styled.select`
    border-radius: 5px;
    width: 206px;
`
 export class Etapa3 extends React.Component {
    state = {

        perguntasEtapa3:
            [
                {
                    inputGraduacao: "" 
                }
            ],

    }



    onChangeGraduacao = (event) => {
        this.setState({inputGraduacao: event.target.value})
    }

    render(){

        
        return(
        <Container>
            <EstiloH3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</EstiloH3>
            <OrganizacaoInput>
            <EstiloH4>5. Por que você não terminou um curso de graduação?</EstiloH4>  
            <EstiloInput
                value={this.state.inputGraduacao}
                onChange={this.onChangeGraduacao}
            />
           </OrganizacaoInput>
            <EstiloH4>6. Você fez algum curso complementar?</EstiloH4>
            <Select>
                <option value="Nenhum">Nenhum
                </option>
                <option value="Curso Técnico">Curso Técnico
                </option>
                <option value="Curso de Inglês">Curso de Inglês
                </option>
            </Select>
        </Container>
        )
    }
}