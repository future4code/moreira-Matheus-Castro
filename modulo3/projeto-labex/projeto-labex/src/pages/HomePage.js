import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate = useNavigate()

  const goToAdminPage = () => {
    navigate('/admin')
  }

  const goToTripsPage = () => {
    navigate('/trips')
  }

  return (
    <div>HomePage
      <button onClick={goToTripsPage}> Ver Viagens </button>
      <button onClick={goToAdminPage}> Área de Admin </button>

    </div>
  )
}

export default  HomePage