import BankStatement from "../models/bankStatement.js";
import Printer from "../models/printer.js";
import BankAccount from "../models/bankAccount.js";

jest.mock("../models/bankStatement.js");
jest.mock("../models/printer.js");

describe("BankAccount", () => {
  let account;
  let mockStatement;
  let mockPrinter;

  beforeEach(() => {
    account = new BankAccount();
    mockStatement = new BankStatement();
    mockPrinter = new Printer();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("deposit", () => {
    it("increments account balance by deposit value", () => {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    });

    it("calls record on account history", () => {
      account.deposit(50);
      expect(mockStatement.record).toHaveBeenCalledWith("credit", 50, 50);
    });
  });

  describe("withdraw", () => {
    it("reduces account balance by withdrawal value", () => {
      account.deposit(100);
      account.withdraw(50);
      expect(account.balance).toEqual(50);
    });

    it("calls record on account history", () => {
      account.deposit(100);
      account.withdraw(20);
      expect(mockStatement.record).toHaveBeenCalledWith("debit", 20, 80);
    });

    it("raises an error if withdrawal value is more than current balance", () => {
      expect(() => {
        account.withdraw(50);
      }).toThrow();
    });
  });

  describe("printStatement", () => {
    it("calls for the printer class to print statement", () => {
      account.printStatement();
      expect(mockPrinter.printStatement.mock.calls[0][0]).toEqual([
        "statement array",
      ]);
    });
  });
});
