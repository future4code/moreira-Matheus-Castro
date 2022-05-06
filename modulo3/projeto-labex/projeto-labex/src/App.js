import React from 'react'
import AdminHomePage from './pages/AdminHomePage'
import ApplicationFormPage from './pages/ApplicationFormPage'
import CreateTripPage from './pages/CreateTripPage'
import HomePage from './pages/HomePage'
import ListTripsPage from './pages/ListTripsPage'
import LoginPage from './pages/LoginPage'
import TripDetailsPage from './pages/TripDetailsPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

export default function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage />} /> 
        <Route path='/trips' element={<ListTripsPage />} />
        <Route path='/form/:id' element={<ApplicationFormPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/admin' element={<AdminHomePage />} />
        <Route path='/detailstrips' element={<TripDetailsPage />} />
        <Route path='/createtrips' element={<CreateTripPage />} />
        
      </Routes>
    </BrowserRouter>

  )
}
