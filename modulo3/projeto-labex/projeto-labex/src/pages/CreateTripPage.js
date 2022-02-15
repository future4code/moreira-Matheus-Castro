import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateTripPage() {

  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }

  return (
    <div>CreateTripPage
      <button onClick={backPage}> Voltar</button>
      <button> Criar </button>
    </div>
  )
}
