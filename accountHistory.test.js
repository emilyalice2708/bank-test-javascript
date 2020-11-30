import AccountHistory from './accountHistory';

describe('AccountHistory', () => {
  let accountHistory
  
  beforeEach(() => {
    accountHistory = new AccountHistory();
  })

  it('updates history array with account change', () => {
    accountHistory.record("deposit", 100)
    expect(accountHistory.history).toEqual([{type: "deposit", amount: 100}])
  })
})