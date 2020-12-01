export default class AccountStatement {
  constructor() {
    this.statement = []
  }

  private

  record(type, amount, balance) {
    let date = this.getCurrentDate();
    if(type === "debit") {
      this.recordDebit(date, amount, balance)
    } else {
      this.recordCredit(date, amount, balance)
    }
  }

  recordDebit(date, amount, balance) {
    this.statement.push({ date: date, credit: "", debit: amount, balance: balance })
  }

  recordCredit(date, amount, balance) {
    this.statement.push({ date: date, credit: amount, debit: "", balance: balance })
  }

  statement() {
    return this.statement
  }

  getCurrentDate() {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return `${date}/${month}/${year}`
  }
}
