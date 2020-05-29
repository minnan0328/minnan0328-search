/* Setup and Teardown */
beforeAll(() => {console.log('全域 beforeAll => 全域第一個執行')})
afterAll(() => {console.log('全域 afterAll => 全域最後一個執行')})
beforeEach(() => {console.log('全域 beforeEach => 每一次測試前都會執行，優先度大於區域')})
afterEach(() => { console.log('全域 afterEach => 每次測試後都會執行，優先度低於區域')})
test('全域 test', () => { console.log('全域 test => 大於區域的 test')})
describe('Utils Test',() => {
  beforeAll(() => { console.log('區域 beforeAll => 區域第一個執行') })
  afterAll(() => { console.log('區域 afterAll => 區域最後一個執行') })
  beforeEach(() => { console.log('區域 beforeEach => 每一次測試前都會執行，優先度低於全域') })
  afterEach(() => { console.log('區域 afterEach => 每次測試後都會執行，優先度大於全域') })
  test('區域 test', () => { console.log('區域 test => 小於全域的 test') })
})


/* 作用域測試 */
let state = false
let count = 0
beforeAll(() => {console.log(`全域 beforeAll / ${state = true}`)})
afterAll(() => {console.log(`全域 afterAll / ${state = false}`)})
beforeEach(() => {console.log(`全域 beforeEach：第${count = count + 1}次設置開始 / ${state}`)})
afterEach(() => {console.log(`全域 afterEach：第${count}次設置結束 / ${state}`)})
test('全域 test A', () => {
  console.log(`全域 test A：第${count}次測試 / ${state}`)
  expect(state).toBeTruthy()
})
describe('Utils Test',() => {
  let state = false
  let count = 0
  beforeAll(() => {console.log(`區域 beforeAll / ${state = true}`)})
  afterAll(() => {console.log(`區域 afterAll / ${state = false}`)})
  beforeEach(() => {console.log(`區域 beforeEach：第${count = count + 1}次設置開始 / ${state}`)})
  afterEach(() => {console.log(`區域 afterEach：第${count}次設置結束 / ${state}`)})
  test('區域 test', () => {
    console.log(`區域 test A：第${count}次測試 / ${state}`)
    expect(state).toBeTruthy()
  })
})
test('全域 test B', () => {
  console.log(`全域 test B：第${count}次測試 / ${state}`)
  expect(state).toBeTruthy()
})