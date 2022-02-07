import React from 'react';
import axios from 'axios';
import Musicas from '../Musicas';
import styled from 'styled-components';

const ButtonPlaylist = styled.button`
    background-color: white;
    border-color: lightgrey;
    border-width: 1px;
    border-radius: 5px;
    margin: 20px;
    height: 30px;
    font-weight: bold;

    :hover{
        color: white;
        background-color: lightblue;
        box-shadow: 4px 4px 5px 1px;
    }
`

const DivPlaylist = styled.div`
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
`

const ButtonDelete = styled.button`
    height: 30px;
    margin: 20px;
    background-color: white;
    border-radius: 5px;
    border-width: 1px;
    font-weight: bold;
    
    :hover{
        background-color: red;
        color: white;
    }
`

const InputMusica = styled.input`
    border-radius: 5px;
    border-color: lightgray;
    border-width: 1px;
    padding: 5px;
    margin:10px 20px 10px 20px; 
    height: 20px;
    width: 230px;
`

const DivInput = styled.div`
    display: flex;
    justify-content: center;
    
`

const Label = styled.label `
    width:50px ;
    margin-top: 13px;
`

const ButtonAdd = styled.button`
    background-color: white;
    border-color: lightgrey;
    border-width: 1px;
    border-radius: 5px;
    margin: 20px;
    height: 30px;
    font-weight: bold;

    :hover{
        color: white;
        background-color: lightgreen;
        box-shadow: 4px 4px 5px 1px;
    }
`

const urlMusicas = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"

const headers = {
    headers: {
        Authorization: "matheus-castro-moreira"
    }
}

export default class Playlist extends React.Component {

    state = {
        playlists: [],
        inputPlaylist: "",
        id: Date.now(),
        listaMusic: [],
        playlistSelecionada: "",
        inputNome: "",
        inputArtista: "",
        inputUrl: "",
    }

    componentDidMount() {
        this.puxaPlaylist()
    }

    componentDidUpdate() {
        this.puxaPlaylist()
    }

    listaDeMusicas = (playlistid) => {

        const url = `${urlMusicas}${playlistid}/tracks`
        axios
            .get(url, headers)
            .then((res) => this.setState({ listaMusic: res.data.result.tracks }))
            .then((res) => this.setState({ playlistSelecionada: `${playlistid}` }))
            .catch((err) => console.log(err.response))
    }

    puxaPlaylist = () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios
            .get(url, headers)
            .then((res) => this.setState({ playlists: res.data.result.list }))
            .catch((err) => console.log(err.response))
    }

    playlistVazia = () => {
        if (this.state.playlistSelecionada !== null && this.state.playlistSelecionada !== "") {
            if (this.state.listaMusic.length > 0) {
                return this.state.listaMusic.map((music) => {
                    return <Musicas key={music.id} musicaSelecionada={music.id} playlistSelecionada={this.state.playlistSelecionada} deletaMusica={this.confirmaDeleteMusica} name={music.name} url={music.url} artista={music.artist} />
                })
            } else {
                return <h4>Não há musicas nessa playlist</h4>
            }
        }
    }

    mostrarInput = () => {
        if (this.state.playlistSelecionada !== null && this.state.playlistSelecionada !== "") {
            return <div>
                <h4>Adicione uma Música com o link do YouTube</h4>
                <DivInput>                 
                    <InputMusica
                        value={this.state.inputNome}
                        onChange={this.OnChangeInputNome}
                        placeholder='Nome'>
                    </InputMusica>

                </DivInput>
                <DivInput>
                    <InputMusica
                        value={this.state.inputArtista}
                        onChange={this.OnChangeInputArtista}
                        placeholder='Artista'>
                    </InputMusica>
                </DivInput>
                <DivInput>
                    <InputMusica
                        value={this.state.inputUrl}
                        onChange={this.OnChangeInputUrl}
                        placeholder='Url'>
                    </InputMusica>
                </DivInput>
                <ButtonAdd onClick={this.adicionaMusica}>Adicionar</ButtonAdd>
            </div>
        }
    }

    OnChangeInputNome = (event) => {
        this.setState({ inputNome: event.target.value })
    }

    OnChangeInputArtista = (event) => {
        this.setState({ inputArtista: event.target.value })
    }

    OnChangeInputUrl = (event) => {
        this.setState({ inputUrl: event.target.value })
    }

    adicionaMusica = () => {

        const url = `${urlMusicas}${this.state.playlistSelecionada}/tracks`
        const body = {
            name: this.state.inputNome,
            artist: this.state.inputArtista,
            url: this.state.inputUrl
        }
        axios
            .post(url, body, headers)
            .then((res) => {
                alert(`A música ${this.state.inputNome} foi adicionada com sucesso`)
                this.setState({ listaMusic: [] })
                /* this.listaDeMusicas(this.state.playlistSelecionada) */
                this.setState({ inputNome: "" })
                this.setState({ inputArtista: "" })
                this.setState({ inputUrl: "" })
            })

            .catch((err) => {
                alert(err.response.data.message)
                this.setState({ inputNome: "" })
                this.setState({ inputArtista: "" })
                this.setState({ inputUrl: "" })
            })
    }

    confirmaDeleteMusica = (playlistid, trackId) => {
        if (window.confirm("Deseja excluir essa música?") === true) {
            this.deletaMusica(playlistid, trackId)
        }
    }

    confirmaDeletePlaylist = (playlistid) => {
        if (window.confirm("Deseja excluir essa playlist?") === true) {
            this.deletePlaylist(playlistid)
        }
    }


    deletaMusica = (playlistid, trackId) => {
        const url = `${urlMusicas}${playlistid}/tracks/${trackId}`

        axios
            .delete(url, headers)
            .then((res) => {
                this.listaDeMusicas(playlistid)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    deletePlaylist = (playlistid) => {
        const url = `${urlMusicas}${playlistid}`

        axios
            .delete(url, headers)
            .then((res) => {
                this.puxaPlaylist()
                this.setState({ playlistSelecionada: "" })
            })

            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        const listaPlaylist = this.state.playlists.map((lista) => {
            return <DivPlaylist key={lista.id}><ButtonPlaylist onClick={() => this.listaDeMusicas(lista.id)}>
                {lista.name.toUpperCase()}
            </ButtonPlaylist>
                <ButtonDelete onClick={() => this.confirmaDeletePlaylist(lista.id)}>Excluir</ButtonDelete>
            </DivPlaylist>
        })
        return <div>
            {listaPlaylist}
            {this.mostrarInput()}
            {this.playlistVazia()}

        </div>
    }
}
