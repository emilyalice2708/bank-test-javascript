import BankAccount from './bankAccount.js';
import AccountHistory from './accountHistory.js'

import { jest } from '@jest/globals';

jest.mock('./accountHistory.js')

describe('bankAccount', () => {
  let account;
  let mockHistory;

  beforeEach(() => {
    account = new BankAccount();
    mockHistory = new AccountHistory();
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
      expect(mockHistory.record.mock.calls[0][0]).toEqual("credit", 50)
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
      expect(mockHistory.record.mock.calls[0][0]).toEqual("debit", 20)
    })
  })
})