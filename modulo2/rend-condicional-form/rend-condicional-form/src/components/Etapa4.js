import React from 'react'
import styled from 'styled-components'

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

export class Etapa4 extends React.Component {
   
    render() {

        return (
            <Container>
                <EstiloH3>O FORMULÁRIO ACABOU</EstiloH3>
                
                    <EstiloH4>Muito obrigado por participar! Entraremos em contato!</EstiloH4>
                  
            </Container>
        )
    }
}