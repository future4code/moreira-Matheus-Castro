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
 export class Etapa1 extends React.Component {
    state = {

        perguntasEtapa1:
            [
                {
                    inputNome: "",
                    inputIdade: "",
                    inputEmail: ""
                }
            ],

    }



    onChangeNome = (event) => {
        this.setState({inputNome: event.target.value})
    }

    onChangeIdade = (event) => {
        this.setState({inputIdade: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    render(){

        
        return(
        <Container>
            <EstiloH3>ETAPA 1 - DADOS GERAIS</EstiloH3>
            <OrganizacaoInput>
            <EstiloH4>1. Qual o seu nome?</EstiloH4>  
            <EstiloInput
                value={this.state.inputNome}
                onChange={this.onChangeNome}
            />
            <EstiloH4>1. Qual a sua idade?</EstiloH4>  
            <EstiloInput
                value={this.state.inputIdade}
                onChange={this.onChangeIdade}
            />
            <EstiloH4>1. Qual o seu email?</EstiloH4>  
            <EstiloInput
                value={this.state.inputEmail}
                onChange={this.onChangeEmail}
            />
            </OrganizacaoInput>
            <EstiloH4>4. Qual a sua escolaridade?</EstiloH4>
            <Select>
                <option value="Ensino médio incompleto">Ensino médio incompleto
                </option>
                <option value="Ensino médio completo">Ensino médio completo
                </option>
                <option value="Ensino médio incompleto">Ensino superior incompleto
                </option>
                <option value="Ensino médio incompleto">Ensino superior completo
                </option>
            </Select>
        </Container>
        )
    }
}

 