import Printer from "./printer.js";
import BankStatement from "./bankStatement.js";

export default class BankAccount {
  constructor() {
    this.balance = 0;
    this.statement = new BankStatement();
  }

  deposit(amount) {
    this.balance += amount;
    this.statement.record("credit", amount, this.balance);
  }

  withdraw(amount) {
    amount <= this.balance
      ? this.completeWithdrawal(amount)
      : this.insufficientFunds();
  }

  completeWithdrawal(amount) {
    this.balance -= amount;
    this.statement.record("debit", amount, this.balance);
  }

  insufficientFunds() {
    throw "Insufficient funds";
  }

  printStatement() {
    const printer = new Printer();
    printer.printStatement(this.statement.statement);
  }

  balance() {
    return this.balance;
  }
}
