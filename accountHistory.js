export default class AccountHistory {
  constructor() {
    this.history = []
  }

  record(type, amount) {
    let date = this.getCurrentDate();
    this.history.push({ date: date, type: type, amount: amount })
  }

  history() {
    return this.history
  }

  getCurrentDate() {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return `${date}/${month}/${year}`
  }
}
