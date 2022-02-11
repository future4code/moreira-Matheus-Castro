import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 250px;
    border: 1px solid gray;
    border-radius: 15px;
    width: 320px;
    margin-left: auto;
    margin-right: auto;
`

const Headers = styled.div`
  border-bottom: 1px solid black;
  width: 320px;
  text-align: center;
`

const P1 = styled.span`
  color: mediumseagreen;
  font-size: 18px;
  font-weight: bold;
`

const P2 = styled.span`
  color: darkorchid;
  font-size: 18px;
  font-weight: bold;
`

const Main = styled.div`
  height: 60px;
  padding: 10px ;
  display: flex;
  justify-content: space-between;
  width: 300px;
  font-weight: bold;
  font-size: 15px;
  border-bottom: 1px solid lightgray;
  :hover{
    cursor: pointer;
    background-color: lightgray;
  }

`

const IMG = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`

const Button = styled.button`
    margin: 20px;
    border-radius: 5px;
    border: 1px solid lightgray;
    font-size: 18px;
    background-color: ligthgray;
    font-weight: bold;

    :hover {
        cursor: pointer;
    }
`



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
    <MainContainer>
      <Headers><h2><P1>Astro</P1><P2>Match</P2></h2></Headers>
      {matches.map((user) =>{
       return <Main> <IMG src={user.photo}/> <p>{user.name}</p></Main>  })}
      <Button onClick={props.vizualizarHome}>Voltar</Button>
      

    </MainContainer>
  )
}

export default Match