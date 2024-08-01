import React, { useState } from 'react';
import { BrowserRouter as Routes, Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AllRoutes } from './Component/AllRoutes';
import Navbar from './Component/Navbar';


const App = () => {

  return (
    <>
     <Navbar/>
  <AllRoutes/>
    </>
  )
};

export default App;
