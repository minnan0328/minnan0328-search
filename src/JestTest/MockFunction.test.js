// jest.fn(implementation) //建立 mock function
// jest.spyOn(object, methodName,accessType?) //spy or mock function
// jest.mock(moduleName, factory, options) //mock 整個 modules


// mockFn.mockReset() 重置 mock 到初始狀態
// mockFn.mockRestore() 重置 jest.spyOn 真實環境
// mockFn.mockImplementation(function)
// mockFn.mockImplementationOnce(function)

import Compute from './index'

describe('[ 測試 ] mock function', () => {

  test('[ e.g. ] jest.fn', () => {
    const myMockFn = jest.fn()
    myMockFn()
    expect(myMockFn).toHaveBeenCalled()
    const myMockFnReturn = jest.fn(() => {return 'test message'})
    // console.log(myMockFnReturn()) // test message
    myMockFnReturn()
    expect(myMockFnReturn).toHaveBeenCalled()
  })
  
  test('[ e.g. ] jest.spyOn()', () => {
    const myMockSpyFn = jest.spyOn(Compute,'FilterShowData')
    Compute.FilterShowData(0)
    myMockSpyFn.mockReturnValue('str')
    expect(myMockSpyFn).toHaveBeenCalled()
  })

  test('[ e.g. ] jest.spyOn() get and set',() => {
    const myMockSpyFnGet = jest.spyOn(Compute.DataState, 'getState','get')
    const myMockSpyFnSet = jest.spyOn(Compute.DataState, 'setState','set')
    Compute.DataState.setState = true //set value
    const getState = Compute.DataState.getState //get value
    expect(myMockSpyFnGet).toHaveBeenCalled()
    expect(myMockSpyFnSet).toHaveBeenCalled()
    expect(getState).not.toBeFalsy() //not equal false
    expect(getState).toBeTruthy() //true
  })

  test('[ e.g. ] jest.mock()', () => {
    jest.mock('axios')
    const myMockSpyFn = jest.spyOn(Compute, 'getArrayData')
    const ArrRes = [
      'str', { a: 2, b: 3, c: 5 },
      [{ b: 6, f: true, t: 'str' }, 'TestArray', 123456], 20, true
    ]
    myMockSpyFn.mockResolvedValue(ArrRes)
    Compute.getArrayData().then(response => {
      expect(response).toEqual(expect.arrayContaining(ArrRes))
      expect(response).toHaveLength(5)
    })
  })

  test('[ e.g. ] mockReturnValue', () => {
    const myMockFn = jest.fn()
    myMockFn.mockReturnValue('test mock return value')

    myMockFn()
    expect(myMockFn).toHaveBeenCalled()
    expect(myMockFn).toHaveReturnedWith('test mock return value')
    expect(myMockFn()).toBe('test mock return value')


    const spyMockFn = jest.spyOn(Compute, 'sum')
    Compute.sum(10, 20)
    expect(spyMockFn).toHaveBeenCalled()
    expect(spyMockFn).toHaveReturnedWith(30)
  })
  test('[ e.g. ] mockImplementation', () => {
    const myMockFn = jest.fn()
      .mockImplementation(x => 10 + x)

    myMockFn(3)
    myMockFn(7)
    expect(myMockFn).toHaveBeenCalled()
    expect(myMockFn).toHaveReturnedWith(13)
    expect(myMockFn).toHaveNthReturnedWith(2, 17)
    expect(myMockFn).toHaveReturnedTimes(2)
    expect(myMockFn()).toBeNaN()
  })
  test('[ e.g. ] mockImplementationOnce', () => {
    const myMockFn = jest.fn(x => 10 + x)
      .mockImplementationOnce(x => x + x)

    myMockFn(3)
    myMockFn(10)
    myMockFn(34)
    expect(myMockFn).toHaveBeenCalled()
    expect(myMockFn).toHaveReturnedWith(6)
    expect(myMockFn).toHaveNthReturnedWith(1, 6)
    expect(myMockFn).toHaveNthReturnedWith(2, 20)
    expect(myMockFn).toHaveReturnedTimes(3)
  })


  describe('[ 綜合測試 ] 驗證偶數相加', () => {
    test('[ e.g. ] 建立假 function',() => {
      const mockCheckNumber = jest.fn()
      mockCheckNumber
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false)

      let numbers = [1,2,3,4,5]
      expect(Compute.Calculation(numbers, mockCheckNumber)).toBe(6) 
      mockCheckNumber.mockReset()
    })
    test('[ e.g. ] 測試真實 function',() => {
      const mockCheckNumber = jest.spyOn(Compute, 'CheckNumber')
      let numbers = [1, 2, 3, 4, 5]
      expect(Compute.Calculation(numbers, mockCheckNumber)).toBe(6)
      mockCheckNumber.mockRestore()
    })
  })
})

describe('[ 測試 ] mockReset and mockRestore, mockClear', () => {
  describe('[ e.g. ] mockReset',() => {
    test('[ e.g. ] jest.spyOn() 測試', () => {
      const moduleFn = { api: () => { return true }}
      const mockCompute = jest.spyOn(moduleFn, 'api').mockImplementation(() => false)
      expect(moduleFn.api()).toBeFalsy()
      mockCompute.mockReset()
      expect(moduleFn.api()).toBeUndefined()
    })
    test('[ e.g. ] jest.fn() 測試', () => {
      const api = jest.fn(() => {return true})
      expect(api()).toBeTruthy()
      api.mockReset()
      expect(api()).toBeUndefined()
    })
  })
  describe('[ e.g. ] mockRestore',() => {
    test('[ e.g. ] jest.spyOn() 測試',() => {
      const moduleFn = { api: () => { return true } }
      const mockCompute = jest.spyOn(moduleFn, 'api').mockImplementation(() => false)
      expect(moduleFn.api()).toBeFalsy()
      mockCompute.mockRestore()
      expect(moduleFn.api()).toBeTruthy()
    })
    test('[ e.g. ] jest.fn() 測試',() => { // 尚未完成範例
      const api = jest.fn(() => { return true })
        .mockReturnValueOnce(false)
      expect(api()).toBeFalsy()
      api.mockRestore()
      expect(api()).toBeUndefined()
      api.mockReturnValue(true)
      expect(api).toBeTruthy()
    })
  })
  describe('[ e.g. ] mockClear',() => {
    test('[ e.g. ] jest.fn() 測試',() => {
      const api = jest.fn( x => { return x})
        .mockReturnValueOnce('test 2 message')

      api('test message')
      expect(api).toHaveReturnedWith('test 2 message')
      expect(api).toHaveBeenCalledTimes(1)

      api.mockClear()
      api('test message')
      expect(api).toHaveBeenCalledTimes(1)
      expect(api).toHaveReturnedWith('test message')

      api.mockReset()
      expect(api()).toBeUndefined()
    })
    test('[ e.g. ] jest.fn() 測試',() => {
      const message = jest.fn(() => { return 'message'})
        .mockReturnValueOnce('message => 1')
        .mockReturnValueOnce('message => 2')
        .mockReturnValueOnce('message => 3')
        .mockReturnValueOnce('message => 4')

      message()
      expect(message).toHaveNthReturnedWith(1, 'message => 1')
      message()
      expect(message).toHaveNthReturnedWith(2, 'message => 2')
      message()
      expect(message).toHaveNthReturnedWith(3, 'message => 3')
      expect(message).toHaveBeenCalledTimes(3)
      message.mockClear()
      message()
      expect(message).toHaveNthReturnedWith(1, 'message => 4')
      expect(message).toHaveBeenCalledTimes(1)
    })
  })
})