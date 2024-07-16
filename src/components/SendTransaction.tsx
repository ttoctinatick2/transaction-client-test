import React, { useState } from 'react';
import {balanceStore} from "../store/balanceStore";
import {observer} from "mobx-react-lite";

const SendTransaction = () => {
  const { addTransaction } = balanceStore;
  const [sendAmount, setSendAmount] = useState<number>(0);
  const [receiveAmount, setReceiveAmount] = useState<number>(0);

  const handleSendTransaction = (e: any) => {
    addTransaction(-sendAmount, new Date())
    e.preventDefault();
  }
  const handleReceiveTransaction = (e: any) => {
    addTransaction(receiveAmount, new Date())
    e.preventDefault();
  }

  return (
    <React.Fragment>
      <form typeof="submit">
        <h2>Send transaction</h2>
        <input
          type="number"
          value={sendAmount}
          onChange={(e) => setSendAmount(Number(e.target.value))}
          placeholder="Amount"
          min={0}
        />
        <button onClick={handleSendTransaction}>Отправить</button>
      </form>
      <form typeof="submit">
        <h2>Receive transaction</h2>
        <input
          type="number"
          value={receiveAmount}
          onChange={(e) => setReceiveAmount(Number(e.target.value))}
          placeholder="Amount"
          min={0}
        />
        <button onClick={handleReceiveTransaction}>Отправить</button>
      </form>
    </React.Fragment>
  );
};

export default observer(SendTransaction);