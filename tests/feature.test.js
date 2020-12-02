import BankStatement from "../models/bankStatement.js";
import Printer from "../models/printer.js";
import BankAccount from "../models/bankAccount.js";

describe('Bank', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount();
    const mockDate = new Date("October 21, 2015 01:15:00");
    const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    global.console = {
      log: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('allows user to deposit money view their transaction', () => {
    account.deposit(20)
    account.printStatement()
    expect(global.console.log.mock.calls[0][0]).toBe(
      "date || credit || debit || balance"
    );
    expect(global.console.log.mock.calls[1][0]).toBe(
      "21/10/2015 || 20.00 || || 20.00"
    );
  })

  it('allows user to deposit, withdraw and view transactions in reverse order', () => {
    account.deposit(20)
    account.withdraw(5.5)
    account.printStatement()
    expect(global.console.log.mock.calls[1][0]).toBe(
      "21/10/2015 || || 5.50 || 14.50"
    );
    expect(global.console.log.mock.calls[2][0]).toBe(
      "21/10/2015 || 20.00 || || 20.00"
    );
  })
})