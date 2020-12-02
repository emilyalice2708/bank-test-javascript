export default class Printer {
  printStatement(statement) {
    this.printHeader();
    statement.reverse().map((transaction) => {
      console.log(
        transaction.date +
          " ||" +
          this.format(transaction.credit) +
          " ||" +
          this.format(transaction.debit) +
          " ||" +
          this.format(transaction.balance)
      );
    });
  }

  printHeader() {
    console.log("date || credit || debit || balance");
  }

  format(value) {
    if(value !== "") {
      return " " + (Math.round(value * 100) / 100).toFixed(2);
    } else {
      return ""
    }
  }
}
