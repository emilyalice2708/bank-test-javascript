import BankStatement from './bankStatement';

describe('AccountHistory', () => {
  let bankStatement;
  
  beforeEach(() => {
    bankStatement = new BankStatement();
    const mockDate = new Date("October 21, 2015 01:15:00")
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate)
  })

  describe('record', (() => {
    it('updates statement array with deposits', () => {
      bankStatement.record("credit", 100)
      expect(bankStatement.statement).toEqual([{date: '21/10/2015', type: "credit", amount: 100}])
    })

    it('updates history array with withdrawals', () => {
      bankStatement.record("debit", 50)
      expect(bankStatement.statement.pop()).toEqual({date: '21/10/2015', type: "debit", amount: 50})
    })
  }))

  describe('getCurrentDate', () => {
    it('returns the date', () => {
      expect(bankStatement.getCurrentDate()).toEqual('21/10/2015')
    })
  })
})