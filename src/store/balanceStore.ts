import { makeAutoObservable } from "mobx";

interface Transaction {
  id: number;
  value: number;
  updatedBalance: number;
  date: Date;
}

export class BalanceStore {
  balance: number;
  transactions: Transaction[];

  constructor() {
    makeAutoObservable(this)
    this.balance = 5000;
    this.transactions = [];

    setInterval(() => {
      const value = Math.floor(Math.random() * 100) + 1;
      this.addTransaction(value, new Date())
    }, 10000)
  }

  setBalance = (value: number) => {
    this.balance = value;
  }

  addTransaction = (value: number, date: Date) => {
    this.setBalance(this.balance + value);
    this.transactions.unshift({ id: this.transactions.length, updatedBalance: this.balance, date, value });
  }

  cleanTransactions = () => {
    this.transactions.length = 0;
  }
}

export const balanceStore = new BalanceStore();