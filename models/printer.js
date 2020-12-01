export default class Printer {
  printStatement(statement) {
    this.printHeader();
    statement.map((transaction) => {
      console.log(
        transaction.date +
          " || " +
          transaction.credit +
          " || " +
          transaction.debit +
          " || " +
          transaction.balance
      );
    });
  }

  printHeader() {
    console.log("date || credit || debit || balance");
  }
}
