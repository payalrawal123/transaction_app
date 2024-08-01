import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllTransactions, getTransactions } from '../services/api';
import TransactionList from './TransactionList';
import '../styles/Transaction.css';

const TransactionsPage = ({ token }) => {
  const { ledgerId } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getAllTransactions(ledgerId, null, null, token);
        setTransactions(data);
      } catch (error) {
        console.error('Fetching transactions failed:', error);
      }
    };

    fetchTransactions();
  }, [ledgerId, token]);

  const handleFetchTransactions = async () => {
    try {
      const data = await getTransactions(ledgerId, startDate, endDate, token);
      setTransactions(data);
    } catch (error) {
      console.error('Fetching transactions failed:', error);
    }
  };

  return (
    <div className="transactions-page">
      <h2>Transactions</h2>
      <div className="date-inputs">
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        <button onClick={handleFetchTransactions}>Filter Transactions</button>
      </div>
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default TransactionsPage;
