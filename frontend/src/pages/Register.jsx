import React, { useState } from 'react';
import { register } from '../services/api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/user/register', {
        name,
        email,
        password,
      });

      console.log('Signup successful:', response.data);
      alert('User registered successfully!');
      navigate('/login'); // Redirect to home or other page
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login">

    <form onSubmit={handleSubmit}>
      <h2 className='l-h2'>Register</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" className='l_btn'>Register</button>
    </form>
    </div>
  );
};

export default Register;
