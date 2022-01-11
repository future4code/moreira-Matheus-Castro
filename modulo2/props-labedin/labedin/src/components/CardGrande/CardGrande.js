import React from 'react';
import styled from 'styled-components';

const BigcardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ImagemCardGrande = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const H4CardGrande =  styled.h4 `
    margin-bottom: 15px;
`


function CardGrande(props) {
    return (
        <BigcardContainer>
            <ImagemCardGrande src={ props.imagem } />
            <div>
                <H4CardGrande>{ props.nome }</H4CardGrande>
                <p>{ props.descricao }</p>
            </div>
        </BigcardContainer>
    )
}

export default CardGrande;