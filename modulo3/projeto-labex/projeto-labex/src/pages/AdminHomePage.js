import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { url } from '../constants/urls'
import ProtectToken from '../hook/protect'

const Main = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  margin: -150px 0 0 -150px;
  width: 400px;
  text-align: center;
  align-items: center;
`

const Button = styled.button`
  font-size: 20px;
  border-radius: 15px;
  border: 0px;
  background-color: lightblue;
  font-weight: bold;
  padding: 10px;

  :hover{
    transform: scale(1.1);
    background-color: lightgray;
  }
`

const ButtonTrip = styled.button`
  width: 250px;
  text-align: initial;
`

const DivBox = styled.button`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
  padding: 10px 10px 10px 20px;
  margin-bottom: 20px;
  width: 540px;
  border-radius: 20px;
  text-align: initial;
  font-size: 17px;
`

export default function AdminHomePage(props) {
  

  const [trips, setTrips] = useState([])
  const [deleteItem, setDeleteItem] = useState(0)

    
  const getTrips = () => {
    const token = localStorage.getItem('token')
    axios
    .get(`${url}/trips`, {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      setTrips(res.data.trips)  
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const DeleteTrip = (id) => {
    const token = localStorage.getItem('token')
    axios
    .delete(`${url}/trips/${id}`, {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      alert('Viagem deletada!')
    })
    .catch((err) => {
      console.log("erro", err.response)
    })
    setDeleteItem(deleteItem+1)
  }

  const GetTripDetail = (id) => {
    const token = localStorage.getItem('token')
    axios
    .get(`${url}/trip/${id}`, {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      localStorage.setItem('id', res.data.trip.id)
      navigate('/detailstrips')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {

    getTrips()
  
  }, [DeleteTrip])

  const navigate = useNavigate()

  const goLokin = () => {
      navigate('/login')
      localStorage.removeItem('token')
  }

  const backPage = () => {
    navigate(-1)
  }

  const createTrip = () => {
    navigate('/createtrips')
  }

  return (
    <Main>
      <h2>Painel Administrativo</h2>
      <Button onClick={backPage}> Voltar</Button>
      <Button onClick={createTrip}> Criar Viagem </Button>
      <Button onClick={goLokin}> Logout </Button>
      {trips && trips.length > 0 ? trips.map(({id, name}) =>{
       return <div key={id}> 
         <ButtonTrip onClick={() => GetTripDetail(id)}>{name} </ButtonTrip><button onClick={() => DeleteTrip(id)}>X</button>
       </div>  }) : <p>Carregando...</p>}
      
    </Main>
  )
}
