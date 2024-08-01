import {Routes, Route } from "react-router-dom";


import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";


function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
             <Route path="/register" element={<Register/>}></Route>
        </Routes>
    )
} 

export {AllRoutes};