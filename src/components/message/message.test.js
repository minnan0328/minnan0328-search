import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Message from './message.vue'
const localVue = createLocalVue()
localVue.use(Vuex)
describe('Message Components and Vuex Process Test', () => {
  let store, state, actions, mutations,spy;
  beforeEach(() => {
    state = {
      UdnData: {
        title: "聯經數位一組",
        description: "Front-end development"
      }
    }
    actions = {
      getTestData: jest.fn()
    }
    mutations = {
      setTestData: jest.fn(),
      initState: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        TestData: state
      },actions, mutations
    })
    // spy = jest.spyOn(Vuex, 'mapState').mockReturnValue(state.UdnData)
  })
  // afterEach(() => {
  //   spy.mockRestore()
  // })
  // 導入測試 components

  it('[測試] vuex mapState',() => {
    const wrapper = shallowMount(Message, { store, localVue })
    const stateData = wrapper.vm.getUDNData
    // expect(stateData).toEqual({
    //   title: "聯經數位一組",
    //   description: "Front-end development"
    // })
  })

  it('[測試] props 父子組件傳值', () => {
    const wrapper = shallowMount(Message, {
      propsData: {
        subtitle: 'Vuex'
      }
    },{ store, localVue })
    expect(wrapper.props().subtitle).toEqual(expect.any(String));
    expect(wrapper.props().subtitle).toBe('Vuex')
  })
  it('[測試] model 初始為 null', () => {
    const wrapper = shallowMount(Message, { store, localVue })
    expect(wrapper.vm.DescriptionMode).toBeNull()
    expect(wrapper.vm.TitleMode).toBeNull()
  })
  it('[測試] set input value', () => {
    const wrapper = shallowMount(Message, { store, localVue })
    wrapper.find('#inputTitle').setValue('測試輸入標題')
    expect(wrapper.vm.TitleMode).toBe('測試輸入標題')
    wrapper.find('#inputDescription').setValue('測試輸入描述')
    expect(wrapper.vm.DescriptionMode).toBe('測試輸入描述')
  })
  it('[測試] vuex 同步功能', () => {
    const wrapper = shallowMount(Message, { store, localVue })
    wrapper.find('#initState').trigger('click')
    // wrapper.find('#SetData').trigger('click')
    expect(mutations.initState.mock.calls).toHaveLength(1)
  })
  it('[測試] Vuex 非同步功能', () => {
    const wrapper = shallowMount(Message, { store, localVue })
    wrapper.find('#getData').trigger('click')
    expect(actions.getTestData.mock.calls).toHaveLength(1)
  })
})

