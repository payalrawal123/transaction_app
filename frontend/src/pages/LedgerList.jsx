import React from 'react';
import '../styles/Ledger.css';

const LedgerList = ({ ledgers, onSelectLedger, onAddTransactionClick }) => {
  return (
    <div className="ledger-list">
      <h3>Ledgers</h3>
      <ul className="list">
        {ledgers.map((ledger) => (
          <li key={ledger._id}>
            {ledger.name}
            <div>
              <button onClick={() => onAddTransactionClick(ledger)}>Add Transaction</button>
              <button onClick={() => onSelectLedger(ledger)}>View Transactions</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LedgerList;
