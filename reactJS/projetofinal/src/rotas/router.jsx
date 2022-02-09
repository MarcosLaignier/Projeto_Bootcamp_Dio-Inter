import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Contact from "../Pages/contato";
import Teste from "../Pages/api";

const Rotas = () =>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" exact = {true} element={<Home/>} />
        <Route path="/contato" exact = {true} element={<Contact/>} /> 
        <Route path="/api" exact = {true} element={<Teste/>} />             
        </Routes>
        </BrowserRouter>
    )
}
export default Rotas;