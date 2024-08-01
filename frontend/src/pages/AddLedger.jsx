import React, { useState } from 'react';
import { createLedger } from '../services/api';

const AddLedger = ({ token, onAddLedger }) => {
    const [ledgers, setLedgers] = useState([]);
  
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ledgerData = { name };
    try {
      const data = await createLedger(ledgerData, token);
      onAddLedger(data);
      setName('');
    } catch (error) {
      console.error('Adding ledger failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Ledger Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <button type="submit" className='a_btn'>Add Ledger</button>
    </form>
  );
};

export default AddLedger;
