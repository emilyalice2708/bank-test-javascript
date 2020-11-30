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
    it('updates history array with account change', () => {
      accountHistory.record("deposit", 100)
      expect(accountHistory.history).toEqual([{date: '21/10/2015', type: "deposit", amount: 100}])
    })
  }))

  describe('getCurrentDate', () => {
    it('returns the date', () => {
      expect(accountHistory.getCurrentDate()).toEqual('21/10/2015')
    })
  })
})