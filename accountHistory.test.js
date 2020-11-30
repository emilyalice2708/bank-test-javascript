import AccountHistory from './accountHistory';

describe('AccountHistory', () => {
  let accountHistory;
  
  beforeEach(() => {
    accountHistory = new AccountHistory();
    const mockDate = new Date("October 21, 2015 01:15:00")
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate)
  })

  describe('record', (() => {
    it('updates history array with deposits', () => {
      accountHistory.record("credit", 100)
      expect(accountHistory.history).toEqual([{date: '21/10/2015', type: "credit", amount: 100}])
    })

    it('updates history array with withdrawals', () => {
      accountHistory.record("debit", 50)
      expect(accountHistory.history.pop()).toEqual({date: '21/10/2015', type: "debit", amount: 50})
    })
  }))

  describe('getCurrentDate', () => {
    it('returns the date', () => {
      expect(accountHistory.getCurrentDate()).toEqual('21/10/2015')
    })
  })
})