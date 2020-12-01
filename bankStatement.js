export default class AccountStatement {
  constructor() {
    this.statement = []
  }

  private

  record(type, amount) {
    let date = this.getCurrentDate();
    this.statement.push({ date: date, type: type, amount: amount })
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
