import React from 'react';
import styled from 'styled-components';


const Pequeno = styled.img `
    width: 40px;
    height: 40px;
`

const PequenoDiv = styled.div `
    border: 1px solid black;
    height: 70px;
    padding: 10px;
    padding-top: 13px;
    margin-bottom: 20px;
    display: flex;
    width: 768px;
    `

const PequenoH3 = styled.h3 `
    padding-top: 7px;
    padding-left: 12px;
    font-weight: bolder;
    font-size: 18px;
`

const PequenoP = styled.p `
    padding-left: 12px;
    font-size: 18px;
    padding-top: 6px;
`





function CardPequeno(props) {
    return (
        <PequenoDiv>
            <Pequeno src={ props.imagem }/>
            <PequenoH3>Email:</PequenoH3> <PequenoP> { props.texto }</PequenoP>
        </PequenoDiv>

    )
}

export default CardPequeno;