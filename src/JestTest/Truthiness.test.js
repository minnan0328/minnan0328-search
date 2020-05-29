/* 比對真假 */
// .toBeNull()
// .toBeDefined()
// .toBeFalsy()
// .toBeTruthy()
// .toBeUndefined()
// .toBeNaN()

import { TestScheduler } from "jest"


let Truthy = true
let Falsy = false
let str = ''
let strNull = null
let ATest = undefined

describe('[ 測試 ] boolean, null, defined, undefined, NaN', () => {
  test('[ e.g. ] toBeTruthy and toBeTruthy', () => {
    expect(Truthy).toBeTruthy()
    expect(Falsy).toBeFalsy()
    expect(Truthy).not.toBeFalsy()
    expect(Falsy).not.toBeTruthy()
  })

  test('[ e.g. ] toBeNull', () => {
    expect(strNull).toBeNull()
    expect(str).not.toBeNull()
  })

  test('[ e.g. ] toBeUndefined and toBeDefined', () => {
    expect(ATest).toBeUndefined()
    expect(ATest).not.toBeDefined()
    expect(str).toBeDefined()
    expect(Truthy).toBeDefined()
    expect(Falsy).toBeDefined()
    expect(strNull).toBeDefined()
  })
  test('[ e.g. ] null to boolean', () => {
    expect(null).toBeNull()
    expect(null).toBeDefined()
    expect(null).not.toBeUndefined()
    expect(null).not.toBeTruthy()
    expect(null).toBeFalsy()
  });

  xtest('[ e.g. ] 0 to boolean', () => {
    expect(0).not.toBeNull()
    expect(0).toBeDefined()
    expect(0).not.toBeUndefined()
    expect(0).not.toBeTruthy()
    expect(0).toBeFalsy()
  });
})