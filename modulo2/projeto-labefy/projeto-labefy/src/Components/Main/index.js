import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Playlist from '../Playlists';

const Input = styled.input `
    border-radius: 5px;
    border-color: lightgray;
    border-width: 1px;
    padding: 5px;
    margin:10px 20px 10px 20px; 
    height: 20px;
`

const Button = styled.button `
    border-color: lightgray;
    border-radius: 5px;
    border-width: 1px;
    background-color: white;
    font-weight: bold;
    padding: 5px;
    margin: 10px 20px 10px 20px;
    height: 30px;
    :hover{
        color: white;
        background-color: lightgreen;
        box-shadow: 4px 4px 5px 1px;
    }
`

const Container = styled.div `
    border: 2px solid black;
    display: flex;
    justify-content: center;
    background-color: lightgray ;
    width: 500px;
    margin: 0 auto;
    flex-direction: column;
    text-align: center;
    
`
const H2 = styled.h2`
    margin: 10px 0px 0px 0px;
    padding: 0px 0px 10px 0px;
    color: gray;
    margin-bottom: 0px;
    border-bottom: 2px white solid;
`

const H3 = styled.h3`
    color: black;
    
`

const DivCentral = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 2px white solid;    
`

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
    headers: {
        Authorization: "matheus-castro-moreira"
    }
}

export default class Main extends React.Component {

    state = {
        playlists: [],
        inputPlaylist: "",
        id: Date.now()
    }

    createPlaylist = () => {
        const body = {
            name: this.state.inputPlaylist,
        }

        axios
            .post(url, body, headers)
            .then((res) => {
                alert(`A playlist ${this.state.inputPlaylist} foi criada com sucesso`)
                this.setState({ inputPlaylist: "" })
            })
            .catch((err) => {
                alert(err.response.data.message)
                this.setState({ inputPlaylist: "" })
            })
    }

    OnChangeInputPlaylist = (event) => {
        this.setState({ inputPlaylist: event.target.value })
    }

    render() {
        return <Container>
            <H2>LabeFy</H2>
            <H3>Adiocionar Nova Playlsit</H3>
            <DivCentral>  
            <Input
                value={this.state.inputPlaylist}
                onChange={this.OnChangeInputPlaylist}
                placeholder='Nome'
            >
            </Input>
            <Button onClick={this.createPlaylist}>Adicionar</Button>
            </DivCentral>
            <div>
            <Playlist />
            </div>
        </Container>;
    }
}
