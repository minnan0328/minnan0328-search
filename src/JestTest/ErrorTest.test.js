//錯誤測試
// .toThrow(error ?)
// .toThrowErrorMatchingSnapshot(hint ?)
// .toThrowErrorMatchingInlineSnapshot(inlineSnapshot)

import Compute from './index'

describe('[ 測試 ] throw error mmessage ', () => {
  let ErrorSpy = jest.spyOn(Compute, 'ErrorFn')

  // let ErrorFn = (count) => {
  //   if (count === 0) {
  //     throw 'count error'
  //   }
  // }

  test('[ e.g. ] throw error', () => {
    expect(() => {
      Compute.ErrorFn(0)
    }).toThrow()

    function err() {
      Compute.ErrorFn(0)
    }

    expect(err).toThrow('error')
    expect(err).toThrow(/count/)
  })
})