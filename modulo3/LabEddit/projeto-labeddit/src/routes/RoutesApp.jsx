import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Feed from "../pages/Feed";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Signup from "../pages/Signup";

const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/signup' element={<Signup />} />  
    </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp