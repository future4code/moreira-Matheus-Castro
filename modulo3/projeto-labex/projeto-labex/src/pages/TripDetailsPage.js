import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { url } from '../constants/urls'
import ProtectToken from '../hook/protect'


const TripDetailsPage = () => {

  ProtectToken()

  const getDetailsTrips = (id) => {

  const token = localStorage.getItem('token')
    axios
    .get(`${url}/trip/${id}`, {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) =>{
      console.log(err.response)
    })
      
  }
  useEffect (() => {

    getDetailsTrips()
    
  },[])
  

 
  return (
    <div>TripDetailsPage
      <button> Voltar</button>
      <button> Aprovar </button>
      <button> Reprovar </button>
    </div>
  )
}

export default TripDetailsPage