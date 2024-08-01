import React, { useState } from 'react';
import { addTransaction } from '../services/api';

const AddTransaction = ({ token, ledgerId, onAddTransaction }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('Given');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const transactionData = { ledgerId, amount, date, type };
    try {
      const data = await addTransaction(transactionData, token);
      onAddTransaction(data);
      setAmount('');
      setDate('');
    } catch (error) {
      console.error('Adding transaction failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Given">Given</option>
        <option value="Taken">Taken</option>
      </select> <br />
      <button type="submit" className='a_btn'>Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
