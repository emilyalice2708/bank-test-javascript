import Printer from './printer.js'

describe('Printer', () => {
  let printer;
  let mockStatement;

  beforeEach(() => {
    printer = new Printer();
    mockStatement = [{date: '21/10/2015', type: "credit", amount: 100}, {date: '21/10/2015', type: "debit", amount: 50}]
    global.console = {
      log: jest.fn(),
    }
  })

  describe('printHeader', () => {
    it('prints the header', () => {
      printer.printHeader()
      expect(global.console.log).toHaveBeenCalledWith("date || credit || debit || balance")
    })
  })
})