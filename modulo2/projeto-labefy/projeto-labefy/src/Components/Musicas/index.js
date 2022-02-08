import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const P = styled.p`
  font-weight: bold;
`
const Button = styled.button`
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

const ButtonDiv = styled.div`
  margin: 20px;
  align-items: center;
`

export default class Musicas extends React.Component {

  state = {
    videoUrl: ""
  }

  componentDidMount = () => {

    if (this.props.url.includes("www.youtube.com")) {
      const novaUrl = this.props.url.replace("watch?v=", "embed/")
      this.setState({ videoUrl: novaUrl })
    }
  }


  render() {
    return <div>
      <div>
        <P>{this.props.name}  </P>
        <P>{this.props.artista}</P>
        {this.state.videoUrl !== "null" && <iframe width="350" height="200" src={this.state.videoUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
        <ButtonDiv>
          <Button onClick={() => this.props.deletaMusica(this.props.playlistSelecionada, this.props.musicaSelecionada)}>Excluir Música</Button>
        </ButtonDiv>
      </div>
    </div>;
  }
}

