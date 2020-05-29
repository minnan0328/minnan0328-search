/* 相等比對 */
// .toBe(value)
// .toEqual(value)
// .toContain(item)
// .toContainEqual(item)
// .toStrictEqual(value)

const obj1 = { flavor: 'grapefruit', ounces: 12 }
const obj2 = { flavor: 'grapefruit', ounces: 12 }
const obj3 = { food: 'beef', ounces: 12 }
const array1 = ['Bob', 'Someone', 'Casper']
const array2 = [{ flavor: 'grapefruit', ounces: 12 }, 'Casper']

describe('[ 測試 ] 相等驗證', () => {

  //toBe and toEqual 差異
  describe('toBe and toEqual', () => {
    //toBe e.g.
    test('[ e.g. ] 比對值相等', () => {
      expect(obj1.ounces).toBe(12)
    })
    test('[ e.g. ] 深度比對兩個物件內容不相等', () => {
      expect(obj1).not.toBe(obj2)
    })

    // toEqual e.g.
    test('[ e.g. ] 深度比對兩個物件相等', () => {
      expect(obj1).toEqual(obj2)
      expect(obj1).not.toEqual(obj3)
    })
    test('[ e.g. ] 比對值相等', () => {
      expect(obj1.flavor).toEqual('grapefruit')
      expect(obj1.ounces).toEqual(obj2.ounces)
    })
  })

  describe('toContain and toContainEqual', () => {
    // toContain e.g.
    test('[ e.g. ] 比對字串內容', () => {
      expect('Bob').toContain('Bob')
      expect('Bob').toContain('o')
      expect('Bob').not.toContain('z')
    })
    test('[ e.g. ] 比對陣列成員', () => {
      expect(array1).toContain('Bob')
    })

    //toContainEqual e.g.
    test('[ e.g. ] 比對物件內容', () => {
      expect(array1).toContainEqual(array2[1])
      expect(array2).toContainEqual(obj2)
    })
  })

  describe('toStrictEqual', () => {
    // toStrictEqual e.g.
    test('[ e.g. ] 嚴格相等檢查', () => {
      expect({}).toStrictEqual({})
      expect({ a: 2 }).toStrictEqual({ a: 2 })
      expect(obj2).toStrictEqual(obj1)
      expect(5).toStrictEqual(5)

      //toStrictEqual 與 toEqual 差異
      //檢查物件是否包含 undefined 值
      expect({ a: 2, b: undefined }).not.toStrictEqual({ a: 2 })
      expect({ a: 2, b: undefined }).toEqual({ a: 2 })
      //檢查陣列成員是否缺少?
      expect([, 1]).not.toStrictEqual([undefined, 1])
      expect([, 1]).toEqual([undefined, 1])

      expect([undefined, 1]).not.toStrictEqual([1])
    })
  })
})