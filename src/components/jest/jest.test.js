import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import JestComponents from './jest.vue'
// import Store from './../../store/index'

const localVue = createLocalVue()
localVue.use(Vuex)

// jest.mock('axios')
describe('Message Test', () => {
  // let store,state,actions;
  beforeEach(() => {
    // state = {
    //   UdnData: {}
    // }
    // actions = {
    //   getTestData: jest.fn()
    // }
    // store = new Vuex.Store({
    //   modules:{
    //     TestData: state.UdnData
    //   },
    //   // state,
    //   actions,
    //   // mutations:{
    //   //   setTestData: jest.fn(),
    //   //   initState: jest.fn()
    //   // }
    // })
  })
  // 導入測試 components
  const wrapper = shallowMount(JestComponents, { localVue })

  test('[測試] 點擊按鈕傳值驗證是否正確', async () => {
    wrapper.find('#sendMessage').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.message).toBe('Test Messsage')
    console.log(`JestComponents vm.message : ${wrapper.vm.message}`)
    expect(wrapper.find('#message_p01').text()).toBe('Test Messsage')
  })
  test('[測試] Call Function', () => {
    wrapper.vm.changeMessage()
    expect(wrapper.vm.message).toBe('Change Message')
    console.log(`JestComponents change vm.message : ${wrapper.vm.message}`)
  })
  test('[測試] Vuex 非同步與同步功能',() => {
    wrapper.vm.getStore()
  })
})