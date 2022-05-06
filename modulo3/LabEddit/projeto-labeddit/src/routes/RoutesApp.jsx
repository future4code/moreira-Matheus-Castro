import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Feed from "../pages/Feed";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Signup from "../pages/Signup";
import Coments from "../pages/Coments";
import Header from '../components/Header'
import Footer from "../components/Footer";
import ErrorPage from "../pages/ErrorPage";


const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/signup' element={<Signup />} /> 
        <Route path='/comments/:id' element={<Coments />} />
        <Route exact path="*" element={<ErrorPage />} />
 
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default RoutesApp