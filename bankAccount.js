import BankStatement from './bankStatement.js'
import Printer from './printer.js'

export default class BankAccount {
  constructor() {
    this.balance = 0
    this.statement = new BankStatement();
  }

  balance() {
    return this.balance
  }

  deposit(amount) {
    this.balance += amount
    this.statement.record("credit", amount)
  }

  withdraw(amount) {
    this.balance -= amount
    this.statement.record("debit", amount)
  }

  Statement() {
    const printer = new Printer()
    printer.printStatement(this.statement)
  }
}
