import AccountHistory from './accountHistory.js'

export default class BankAccount {
  constructor() {
    this.balance = 0
    this.history = new AccountHistory();
  }

  balance() {
    return this.balance
  }

  deposit(amount) {
    this.balance += amount
    this.history.record("credit", amount)
  }

  withdraw(amount) {
    this.balance -= amount
    this.history.record("debit", amount)
  }
}

//export { BankAccount };
