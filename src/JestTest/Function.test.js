/* function called */

// .toHaveBeenCalled()
// .toHaveBeenCalledTimes(number)
// .toHaveBeenCalledWith(arg1, arg2, ...)
// .toHaveBeenLastCalledWith(arg1, arg2, ...)
// .toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)


// .toHaveReturned()
// .toHaveReturnedTimes(number)
// .toHaveReturnedWith(value)
// .toHaveLastReturnedWith(value)
// .toHaveNthReturnedWith(nthCall, value)

import Compute from './index'

describe('[ 測試 ] call function and Returned', () => {

  function drinkAll(callback, flavour) {
    if (flavour !== 'octopus') {
      callback(flavour);
    }
  }

  describe('toHaveBeenCalled and toHaveBeenCalledTimes', () => {
    test('[ e.g. ] jest.fn call mock function and call count check', () => {
      const drink = jest.fn()
      drinkAll(drink, 'lemon')

      expect(drink).toHaveBeenCalled()
      expect(drink).toHaveBeenCalledTimes(1)

    })

    test('[ e.g. ] jest.fn call function error and call count check', () => {
      const drink = jest.fn()
      drinkAll(drink, 'octopus')
      expect(drink).not.toHaveBeenCalled()
      expect(drink).toHaveBeenCalledTimes(0)
    })

    test('[ e.g. ] jest.spyOn call real environment function and call count check', () => {
      const SumSpy = jest.spyOn(Compute, 'sum')

      Compute.sum(4, 6)

      expect(SumSpy).toHaveBeenCalled()
      expect(SumSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('toHaveBeenCalledWith and toHaveBeenLastCalledWith', () => {
    const sendCountFn = counts => {
      counts.num(10)
    }
    const count = {
      num: () => { return 10 }
    }

    test('[ e.g. ] jest.fn toHaveBeenCalledWith()', () => {
      const mockNumber = {
        num: jest.fn()
      }
      sendCountFn(mockNumber)
      expect(mockNumber.num).toHaveBeenCalledWith(10)
    })

    test('[ e.g. ] jest.spyOn toHaveBeenCalledWith', () => {
      const numSpy = jest.spyOn(count, 'num')
      sendCountFn(count)
      expect(numSpy).toHaveBeenCalledWith(10)

    })
  })

  describe('toHaveBeenLastCalledWith and toHaveBeenNthCalledWith', () => {
    const sendCountFn = counts => {
      counts.num(10)
      counts.num(30)
      counts.num(50)
      counts.num('str')
      counts.num(70)
    }
    const count = {
      num: () => { return 10 }
    }
    test('[ e.g. ] jest.spyOn toHaveBeenLastCalledWith', () => {
      const numSpy = jest.spyOn(count, 'num')
      sendCountFn(count)
      expect(numSpy).toHaveBeenCalledWith(10)
      expect(numSpy).toHaveBeenLastCalledWith(70)
      expect(numSpy).toHaveBeenCalledTimes(5)
    })

    test('[ e.g. ] jest.spyOn toHaveBeenNthCalledWith', () => {
      const numSpy = jest.spyOn(count, 'num')
      sendCountFn(count)
      expect(numSpy).toHaveBeenNthCalledWith(1, 10)
      expect(numSpy).toHaveBeenNthCalledWith(2, 30)
      expect(numSpy).toHaveBeenNthCalledWith(3, 50)
      expect(numSpy).toHaveBeenNthCalledWith(4, 'str')
      expect(numSpy).toHaveBeenCalledTimes(10)
    })
  })

  describe('toHaveReturned and toHaveReturnedTimes and toHaveLastReturnedWith and toHaveLastReturnedWith and toHaveNthReturnedWith', () => {
    const MockFn = jest.fn(() => 'test return')
    MockFn()
    test('[ e.g. ] jest.fn mock function whether return value', () => {
      expect(MockFn).toHaveReturned()
      expect(MockFn).toHaveReturnedWith('test return')
      expect(MockFn).toHaveLastReturnedWith('test return')
      expect(MockFn).toHaveNthReturnedWith(1, 'test return')
      expect(MockFn).toHaveReturnedTimes(1)
    })
  })
  describe('[ 綜合測試 ] function => string , object, array , number , Boolean', () => {
    const payloadSpy = jest.spyOn(Compute, 'FilterShowData')
    test('[ e.g. ] String Test', () => {
      let str = Compute.FilterShowData(0)
      expect(str).toBe('str')
      expect(str).toHaveLength(3)
      expect(payloadSpy).toHaveBeenCalled()
      expect(payloadSpy).toHaveReturnedWith('str')
      expect(payloadSpy).toHaveBeenCalledTimes(1)
      expect(payloadSpy).toHaveReturnedTimes(1)

      expect(str).toEqual(expect.stringContaining('str'))
      expect(str).toEqual(expect.stringMatching(/str/))
      expect(str).toMatch('str')
      expect(str).toMatch(/str/)
    })
    test('[ e.g. ] Object Test', () => {
      let obj = Compute.FilterShowData(1)
      expect(obj).toEqual(expect.objectContaining({
        a: expect.any(Number),
        b: expect.any(Number),
        c: expect.any(Number)
      }))
      expect(payloadSpy).toHaveReturnedWith({
        a: expect.any(Number),
        b: expect.any(Number),
        c: expect.any(Number)
      })
      expect(payloadSpy).toHaveBeenCalled()
      expect(payloadSpy).toHaveBeenCalledTimes(2)
      expect(payloadSpy).toHaveReturnedTimes(2)
    })
    test('[ e.g. ] Array Test', () => {
      let arr = Compute.FilterShowData(2)
      expect(arr).toEqual(expect.arrayContaining([
        expect.objectContaining({
          b: expect.any(Number),
          f: expect.any(Boolean),
          t: expect.any(String)
        })
      ]))
      expect(arr).toHaveLength(3)
      expect(arr).toContain('TestArray')
      expect(arr).toContainEqual(123456)
      expect(payloadSpy).toHaveBeenCalled()
      expect(payloadSpy).toHaveBeenCalledTimes(3)
      expect(payloadSpy).toHaveReturnedTimes(3)
    })
    test('[ e.g. ] Number Test', () => {
      let num = Compute.FilterShowData(3) //20
      expect(num).not.toBeLessThan(0)
      expect(num).toBeLessThanOrEqual(20)
      expect(num).toBeGreaterThan(0)
      expect(num).toBeGreaterThanOrEqual(20)
      expect(num).toBe(20)
      expect(num).toEqual(20)
      expect(num).toEqual(expect.any(Number))
      expect(payloadSpy).toHaveBeenCalled()
      expect(payloadSpy).toHaveReturnedWith(20)
      expect(payloadSpy).toHaveReturnedWith(expect.any(Number))
      expect(payloadSpy).toHaveBeenCalledTimes(4)
      expect(payloadSpy).toHaveReturnedTimes(4)
      expect(0.1 + 0.2).toBeCloseTo(0.3)
    })
    test('[ e.g. ] boolean Test', () => {
      let boolean = Compute.FilterShowData(4)
      expect(boolean).toBeTruthy()
      expect(boolean).not.toBeFalsy()
      expect(payloadSpy).toHaveBeenCalled()
      expect(payloadSpy).toHaveBeenCalledTimes(5)
      expect(payloadSpy).toHaveReturnedTimes(5)
    })
  })
})