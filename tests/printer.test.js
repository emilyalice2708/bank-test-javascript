import Printer from '../models/printer.js'

describe('Printer', () => {
  let printer;
  let mockStatement;

  beforeEach(() => {
    printer = new Printer();
    mockStatement = [{date: '21/10/2015', credit: 100, debit: "", balance: 150}, {date: '21/10/2015', debit: 50, credit: "", balance: 20}]
    global.console = {
      log: jest.fn(),
    }
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  describe('printHeader', () => {
    it('prints the header', () => {
      printer.printHeader()
      expect(global.console.log).toHaveBeenCalledWith("date || credit || debit || balance")
    })
  })

  describe('printStatement', () => {
     it('prints the statement and header', () => {
       printer.printStatement(mockStatement)
       expect(global.console.log).toHaveBeenCalledWith("date || credit || debit || balance")
       expect(global.console.log).toHaveBeenCalledWith("21/10/2015 ||  || 50 || 20")
       expect(global.console.log).toHaveBeenCalledWith("21/10/2015 || 100 ||  || 150")
     })
   })
})