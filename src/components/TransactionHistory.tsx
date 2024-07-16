import './transactionHistory.css'

import React from 'react';
import {balanceStore} from "../store/balanceStore";
import {observer} from "mobx-react-lite";

const TransactionHistory = () => {
  const { transactions } = balanceStore

  return (
    <div>
      <h2>Transactions history</h2>
      <ul className="list">
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>{transaction.value > 0 ? 'incoming' : 'outgoing'}</p>
            <p className={transaction.value > 0 ? 'increase' : 'decrease'}>{transaction.value > 0 ? '+' : ''}{transaction.value} USDT</p>
            <p>Date: {new Date(transaction.date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default observer(TransactionHistory);