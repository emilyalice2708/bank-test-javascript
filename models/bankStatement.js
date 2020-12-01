export default class BankStatement {
  constructor() {
    this.statement = []
  }

  record(type, amount, balance) {
    let date = this.getCurrentDate();
    type === "debit" ? this.recordDebit(date, amount, balance) : this.recordCredit(date, amount, balance)
  }

  recordDebit(date, amount, balance) {
    this.statement.push({ date: date, credit: "", debit: amount, balance: balance })
  }

  recordCredit(date, amount, balance) {
    this.statement.push({ date: date, credit: amount, debit: "", balance: balance })
  }

  getCurrentDate() {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return `${date}/${month}/${year}`
  }
}