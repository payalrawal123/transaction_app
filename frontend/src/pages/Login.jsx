import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/user/login', {
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); // Redirect to home or other page
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login">
    <form onSubmit={handleSubmit} >
      <h2 className='l-h2'>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" className='l_btn'>Login</button>
    </form>

    </div>
  );
};

export default Login;
