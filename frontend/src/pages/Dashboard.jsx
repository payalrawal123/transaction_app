import React, { useState, useEffect } from 'react';
import { getLedgers, getTransactions } from '../services/api';
import AddLedger from './AddLedger';
import AddTransaction from './AddTransaction';
import LedgerList from './LedgerList';
// import TransactionList from './TransactionList';
import Modal from './Modal';
import '../styles/Dashboard.css';
import LedgerTransactions from './TransactionList';
import axios from 'axios';

const Dashboard = ({ token }) => {
  const [ledgers, setLedgers] = useState([]);
  const [selectedLedger, setSelectedLedger] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isLedgerModalOpen, setIsLedgerModalOpen] = useState(false);
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  useEffect(() => {
    const fetchLedgers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/ledger");
        setLedgers(response.data);
      } catch (error) {
        console.error('Fetching ledgers failed:', error);
      }
    };

    fetchLedgers();
  }, []);

  const handleAddLedger = (ledger) => {
    setLedgers([...ledgers, ledger]);
    setIsLedgerModalOpen(false);
  };

  // const handleSelectLedger = async (ledger) => {
  //   setSelectedLedger(ledger);
  //   try {
  //     const data = await getTransactions(ledger._id, null, null, token); // Fetch all transactions
  //     setTransactions(data);
  //   } catch (error) {
  //     console.error('Fetching transactions failed:', error);
  //   }
  // };

  const handleAddTransactionClick = (ledger) => {
    setSelectedLedger(ledger);
    setIsTransactionModalOpen(true);
  };

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    setIsTransactionModalOpen(false);
  };

  const handleFetchTransactions = async () => {
    if (selectedLedger) {
      try {
        console.log('Fetching transactions with:', {
          ledgerId: selectedLedger._id,
          startDate,
          endDate,
        });
        const data = await getTransactions(selectedLedger._id, startDate, endDate, token);
        console.log('Fetched transactions:', data);
        setTransactions(data);
      } catch (error) {
        console.error('Fetching transactions failed:', error);
      }
    }
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button onClick={() => setIsLedgerModalOpen(true)} className='add_ledger'>Add Ledger</button>
      <Modal isOpen={isLedgerModalOpen} onClose={() => setIsLedgerModalOpen(false)}>
        <AddLedger token={token} onAddLedger={handleAddLedger} />
      </Modal>
      <LedgerList
        ledgers={ledgers}
        onAddTransactionClick={handleAddTransactionClick}
      />
   
      <Modal isOpen={isTransactionModalOpen} onClose={() => setIsTransactionModalOpen(false)}>
        <AddTransaction token={token} ledgerId={selectedLedger?._id} onAddTransaction={handleAddTransaction} />
      </Modal>
    </div>
  );
};

export default Dashboard;
