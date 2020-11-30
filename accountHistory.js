export default class AccountHistory {
  constructor() {
    this.history = []
  }

  record(type, amount) {
    this.history.push({ type: type, amount: amount })
  }

  history() {
    return this.history
  }
}