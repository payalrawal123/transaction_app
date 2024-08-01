import {Routes, Route } from "react-router-dom";


import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TransactionsPage from "../pages/TransactionPage";


function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
             <Route path="/register" element={<Register/>}></Route>
             <Route path="/transaction/:id" element={<TransactionsPage/>} />
     
        </Routes>
    )
} 

export {AllRoutes};