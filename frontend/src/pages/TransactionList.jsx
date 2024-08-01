import React from 'react';
import '../styles/Transaction.css';

const TransactionList = ({ transactions }) => {
  if (!transactions.length) {
    return <p>No transactions found.</p>;
  }

  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            <span>{transaction.date}</span>
            <span>{transaction.amount}</span>
            <span>{transaction.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;