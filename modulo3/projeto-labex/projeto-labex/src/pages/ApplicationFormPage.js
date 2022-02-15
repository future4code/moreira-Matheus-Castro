import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ApplicationFormPage() {

  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }

  return (
    <div>ApplicationFormPage
      <button onClick={backPage}> Voltar</button>
      <button> Enviar </button>
    </div>
  )
}
