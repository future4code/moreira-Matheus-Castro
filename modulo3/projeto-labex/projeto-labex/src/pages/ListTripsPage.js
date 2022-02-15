import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ListTripsPage() {

  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }

  const goToFormPage = () => {
    navigate('/form')
  }

  return (
    <div>ListTripsPage
      <button onClick={backPage}> Voltar</button>
      <button onClick={goToFormPage}> Inscrever-se </button>

    </div>
  )
}
