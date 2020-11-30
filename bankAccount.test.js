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
      account.deposit(100)
      expect(account.balance).toEqual(100)
    })
  })

  describe('withdraw', () => {
    it('reduces account balance by withdrawal value', () => {
      account.deposit(100)
      account.withdraw(50)
      expect(account.balance).toEqual(50)
    })
  })
})