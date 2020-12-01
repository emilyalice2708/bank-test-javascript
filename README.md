# Bank Tech Test in Javascript


## Specification

- Should be able to interact with code via the Javascript console.
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory.

### Acceptance Criteria


Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
### Planning

## User Stories

```
As a person, 
so that I can add to my account,
I'd like to be able to make a deposit.
```

```
As a person,
so that I can have cash when I need it,
I'd like to be able to withdraw from my account.
```

```
As a person,
so that I can check my transaction history,
I'd like to be able to print a bank statement.
```

```
As a person,
so that I can check specific transactions,
I'd like each transaction to be printed with a date.
```

|Bank Account||
|----------|-----------|
|Deposit||
|Withdraw||
|Statement||

|Bank Statement||
|----------|-----------|
|Records transactions||
|Records the date||

|Printer||
|----------|-----------|
|Prints header||
|Prints statement||
