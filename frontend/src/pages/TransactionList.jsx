import React from 'react';
import '../styles/Transaction.css';

const TransactionList = ({ transactions }) => {
  if (!transactions.length) {
    return <p>No transactions found.</p>;
  }

  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      <table className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td>{new Date(transaction.date).toLocaleDateString()}</td>
                  <td>{transaction.name}</td>
                  <td>${transaction.amount}</td>
                  <td>{transaction.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  );
};

export default TransactionList;