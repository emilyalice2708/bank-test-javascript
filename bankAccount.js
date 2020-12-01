import BankStatement from './bankStatement.js'
import Printer from './printer.js'

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
    this.balance -= amount
    this.statement.record("debit", amount, this.balance)
  }

  Statement() {
    const printer = new Printer()
    printer.printStatement(this.statement)
  }

  private

  balance() {
    return this.balance
  }
}
