import BankStatement from "../models/bankStatement.js";

describe("BankStatement", () => {
  let bankStatement;

  beforeEach(() => {
    bankStatement = new BankStatement();
    const mockDate = new Date("October 21, 2015 01:15:00");
    const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);
  });

  describe("record", () => {
    it("updates statement array with deposits", () => {
      bankStatement.record("credit", 100, 150);
      expect(bankStatement.statement).toEqual([
        { date: "21/10/2015", credit: 100, debit: "", balance: 150 },
      ]);
    });

    it("updates history array with withdrawals", () => {
      bankStatement.record("debit", 50, 20);
      expect(bankStatement.statement.pop()).toEqual({
        date: "21/10/2015",
        debit: 50,
        credit: "",
        balance: 20,
      });
    });
  });

  describe("getCurrentDate", () => {
    it("returns the date", () => {
      expect(bankStatement.getCurrentDate()).toEqual("21/10/2015");
    });
  });
});
