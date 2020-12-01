import Printer from './printer.js'
import BankStatement from './bankStatement.js'
// const { Printer } = require('./printer.js')
// const { BankStatement } = require('./bankStatement.js')

export default class BankAccount {
  constructor() {
    this.balance = 0
    this.statement = new BankStatement();
  }

  deposit(amount) {
    this.balance += amount
    this.statement.record("credit", amount, this.balance)
  }

  withdraw(amount) {
    if(amount <= this.balance) {
      this.balance -= amount
     this.statement.record("debit", amount, this.balance)
    } else { 
      throw("Insufficient funds")
    }
  }

  printStatement() {
    const printer = new Printer();
    printer.printStatement(this.statement.statement);
  }

  balance() {
    return this.balance
  }
}