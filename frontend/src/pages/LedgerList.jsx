import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Ledger.css';

const LedgerList = ({ ledgers, onAddTransactionClick }) => {
  const navigate = useNavigate();

  const handleSelectLedger = (ledger) => {
    navigate(`/transaction/${ledger._id}`);
  };

  return (
    <div className="ledger-list">
      <h3>Ledgers</h3>
      <ul className="list">
        {ledgers.map((ledger) => (
          <li key={ledger._id}>
            {ledger.name}
            <div>
              <button onClick={() => handleSelectLedger(ledger)}>View Transactions</button>
              <button onClick={() => onAddTransactionClick(ledger)}>Add Transaction</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LedgerList;
