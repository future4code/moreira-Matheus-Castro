import React, { useState } from 'react'
import Home from './components/Home/Home'
import Match from './components/Match/Match'
import axios from 'axios'

const App = (props) => {

  const [reset, setReset] = useState({})

  const [tela, setTela] = useState('home')

  const vizualizarHome = () => {
    setTela('home')
  }

  const vizualizarMatch = () => {
    setTela('match')
  }

  const trocaTela = () => {
    switch (tela) {
      case 'home':
        return <Home vizualizarMatch={vizualizarMatch} clear={clear}/>;
      case 'match':
        return <Match vizualizarHome={vizualizarHome}/>;
      default:
        return <Home />
    }
  }

  const clear = ()  => {
    axios
    .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lalalala/clear')
    .then((res) => {
      setReset(res.data)
    })
    .catch((err) => `{
      console.log(err)
    }`)
  }

  return (
    <div>
      
      {trocaTela()}
      
    </div>
  )
}

export default App