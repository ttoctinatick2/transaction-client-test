import React from 'react';
import './App.css';
import Balance from "./components/Balance";
import SendTransaction from "./components/SendTransaction";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <div className="main-container">
      <TransactionHistory />
      <div>
        <Balance />
        <SendTransaction/>
      </div>
    </div>
  );
}

export default App;
