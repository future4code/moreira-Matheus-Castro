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

const EstiloH3 = styled.h3`
    font-size: 20px;
`

const EstiloH4 = styled.h4`
    font-size: 15px;
    text-align: center;
    font-weight: 450;
`
const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`

export class Etapa2 extends React.Component {
    state = {

        perguntasEtapa2:
            [
                {
                    inputCurso: "",
                    inputUnidade: ""
                }
            ],

    }

    onChangeCurso = (event) => {
        this.setState({ inputCurso: event.target.value })
    }

    onChangeUnidade = (event) => {
        this.setState({ inputUnidade: event.target.value })
    }



    render() {


        return (
            <Container>
                <EstiloH3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</EstiloH3>
                <OrganizacaoInput>
                    <EstiloH4>5. Qual curso?</EstiloH4>
                    <EstiloInput
                        value={this.state.inputCurso}
                        onChange={this.onChangeCurso}
                    />
                    <EstiloH4>6. Qual a unidade de ensino?</EstiloH4>
                    <EstiloInput
                        value={this.state.inputUnidade}
                        onChange={this.onChangeUnidade}
                    />
                </OrganizacaoInput>
            </Container>
        )
    }
}
