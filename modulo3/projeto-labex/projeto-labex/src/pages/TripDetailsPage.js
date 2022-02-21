import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { url } from '../constants/urls'
import ProtectToken from '../hook/protect'


const TripDetailsPage = () => {

  const navigate = useNavigate()

  ProtectToken()

  const [detailsTrip, setDetailsTrip] = useState({})

  const getDetailsTrips = () => {

    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    axios
      .get(`${url}/trip/${id}`, {
        headers: {
          auth: token
        }
      })
      .then((res) => {
        setDetailsTrip(res.data.trip)
        console.log(res.data.trip)
      })
      .catch((err) => {
        console.log(err.response)
      })

  }

  const approveCandidate = (event) => {

    const candidateId = event.target.id

    const body = {
      approve: true
    }

    const tripId = localStorage.getItem('id')

    const token = localStorage.getItem('token')

    axios
      .put(`${url}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {
          auth: token
        }
      })
      .then((res) => {
        alert("Candidato Aprovado")
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  const dispproveCandidate = (event) => {

    const candidateId = event.target.id

    const body = {
      approve: false
    }

    const tripId = localStorage.getItem('id')

    const token = localStorage.getItem('token')

    axios
      .put(`${url}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {
          auth: token
        }
      })
      .then((res) => {
        alert("Candidato Reprovado")
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

 


   const candidate = detailsTrip?.candidates?.map((candidate) => {
    console.log('candidate', candidate) 
    return <div key={candidate.id}>
   <p>Nome: {candidate.name}</p>
   <p>Descrição: {candidate.applicationText}</p>
   <p>Profissão: {candidate.profession}</p>
   <p>Idade: {candidate.age} anos</p>
   <p>País: {candidate.country}</p>
   <button id={candidate.id, true} onClick={approveCandidate}>Aprovar</button>
   <button id={candidate.id} onClick={dispproveCandidate}>Negar</button>
     </div>
   })
 
    

  useEffect(() => {

    getDetailsTrips()

  }, [])

  const backPage = () => {
    navigate(-1)
  }

  return (
    <div>
      <h1>Filtro</h1>
      <div>
        <p>Nome: {detailsTrip.name}</p>
        <p>Descrição: {detailsTrip.description}</p>
        <p>Planeta: {detailsTrip.planet}</p>
        <p>Duração: {detailsTrip.durationInDays} dias</p>
        <p>Data: {detailsTrip.date}</p>
      </div>
      <button onClick={backPage}>Voltar</button>
      
      {/* {detailsTrip.candidates.length > 0 ? candidate : <p>Não há candidatos para essa viagem !</p>} */}
      {candidate}
    </div>
  )
}

export default TripDetailsPage

{/* 
      
       */}