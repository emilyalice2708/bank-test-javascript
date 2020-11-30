export default class BankAccount {
  constructor() {
    this.balance = 0
  }

  balance() {
    return this.balance
  }

  deposit(amount) {
    this.balance += amount
  }
}

//export { BankAccount };
