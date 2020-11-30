import BankAccount from './bankAccount.js';

import { jest } from '@jest/globals';


describe('bankAccount', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount();
  })

  it('begins with a bank balance of 0', () => {
    expect(account.balance).toEqual(0)
  })

  describe('deposit', () => {
    it('increments account balance by deposit value', () => {
      expect(account.balance).toEqual(0)
      account.deposit(100)
      expect(account.balance).toEqual(100)
    })
  })
})