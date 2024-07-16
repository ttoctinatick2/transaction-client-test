import React from 'react';
import BalanceChart from "./BalanceChart";
import {balanceStore} from "../store/balanceStore";
import {observer} from "mobx-react-lite";

const Balance = () => {
  const { balance } = balanceStore;

  return (
    <div>
      <h2>Your balance</h2>
      <h3>
        {balance !== null ? <p>{balance} USDT</p> : <p>Loading...</p>}
      </h3>
      <BalanceChart />
    </div>
  );
};

export default observer(Balance);