import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminHomePage() {

  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }

  const createTrip = () => {
    navigate('/createtrips')
  }

  return (
    <div>AdminHomePage
      <button onClick={backPage}> Voltar</button>
      <button onClick={createTrip}> Criar Viagem </button>
      <button> Logout </button>
    </div>
  )
}
