import BankAccount from './bankAccount.js';
import BankStatement from './bankStatement.js'
import Printer from './printer.js'

jest.mock('./bankStatement.js')
jest.mock('./printer.js')

describe('BankAccount', () => {
  let account;
  let mockStatement;
  let mockPrinter;

  beforeEach(() => {
    account = new BankAccount();
    mockStatement = new BankStatement();
    mockPrinter = new Printer();
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('begins with a bank balance of 0', () => {
    expect(account.balance).toEqual(0)
  })

  describe('deposit', () => {
    it('increments account balance by deposit value', () => {
      account.deposit(100)
      expect(account.balance).toEqual(100)
    })

    it('calls record on account history', () => {
      account.deposit(50)
      expect(mockStatement.record.mock.calls[0][0]).toEqual("credit", 50)
    })
  })

  describe('withdraw', () => {
    it('reduces account balance by withdrawal value', () => {
      account.deposit(100)
      account.withdraw(50)
      expect(account.balance).toEqual(50)
    })

    it('calls record on account history', () => {
      account.withdraw(20)
      expect(mockStatement.record.mock.calls[0][0]).toEqual("debit", 20)
    })
  })

  describe('printStatement', () => {
    it('calls for the printer class to print statement', () => {
      account.Statement()
      expect(mockPrinter.printStatement.mock.calls[0][0]).toEqual(mockStatement)
    })
  })
})