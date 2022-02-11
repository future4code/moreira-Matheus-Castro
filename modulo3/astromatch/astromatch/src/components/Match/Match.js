import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lalalala/matches"

const headers = {
  'Content-Type': "application/json"
}



 const Match = (props) => {

  
const [matches, setMatches]  = useState ([])


 
  const getMatches = ()  => {
    axios
    .get(url, headers)
    .then((res) => {
      setMatches(res.data.matches)
    })
    .catch((err) => `{
      console.log(err)
    }`)
  }
  
  useEffect(() => {

    getMatches()
  
  }, [])
  

  return (
    <div>
      {matches.map((user) =>{
       return <h1>{user.name}</h1>
      })}
      <button onClick={props.vizualizarHome}>Voltar</button>
      

    </div>
  )
}

export default Match