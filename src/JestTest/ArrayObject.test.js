/* 物件與陣列比對 */
// expect.arrayContaining(array) //比對陣列成員
// expect.objectContaining(object) //比對物件屬性是否正確
// .toMatchObject(object)

describe('[ 測試 ] object and array 驗證 Key and Value', () => {
  const str = 'test string'
  const obj1 = { flavor: 'grapefruit', ounces: 12 }
  const obj2 = { flavor: 'grapefruit', ounces: 12 }
  const array1 = ['Bob', 'Someone', 'Casper']
  const array2 = [{ flavor: 'grapefruit', ounces: 12 }, 'Casper']

  test('[ e.g. ] expect.arrayContaining', () => {
    expect(array1).toEqual(expect.arrayContaining(['Someone', 'Casper']))
    expect(array1).not.toEqual(['Someone', 'Casper'])
    expect(array2).toEqual(expect.arrayContaining(['Casper']))
  })
  test('[ e.g. ] expect.objectContaining', () => {
    expect(obj1).toEqual(expect.objectContaining({ flavor: 'grapefruit' }))
    expect(obj1).toEqual(expect.not.objectContaining({name: 'name'}))
    expect(obj1).toEqual(expect.objectContaining(obj2))
    expect(obj2).toEqual(expect.objectContaining(array2[0]))
    expect(obj2).toEqual(expect.objectContaining({
      flavor: expect.any(String),
      ounces: expect.anything(Number)
    }))

  })
})