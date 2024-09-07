import React, { useState } from 'react';
import { register } from '../services/api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();

    try {
      let responce = await axios.post("http://localhost:8080/user/register",{
        name,email,password
      })
      console.log(responce.data);
      alert("signup succesfully")
      navigate('/login')
    } catch (error) {
      console.error('Error during signup:', error.response?.data || error.message);
      //       alert(`Signup failed: ${error.response?.data?.message || 'Please try again.'}`);
    }
  }

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
