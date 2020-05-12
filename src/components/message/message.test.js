import { mount, shallow, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Message from './message.vue'
const localVue = createLocalVue()
localVue.use(Vuex)
describe('Message Components and Vuex Process Test', () => {
  let store, state, actions, mutations;
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
  })

  // 導入測試 components
  
  // it('[測試] store mapState called', () => {
    // const wrapper = mount(Message, { store, localVue })
    // wrapper.vm.setComputed({
    //   getUDNData:{
    //     title: "聯經數位一組",
    //     description: "Front-end development"
    //   }
    // })
    // const spyFn = jest.spyOn(wrapper.vm.sum)
    // wrapper.find('#SetData').trigger('click');
    // console.log(wrapper.vm)
    // wrapper.vm.getUDNData
    // // console.log(wrapper.vm.TitleMode = true)
    // // console.log(wrapper.vm.TitleMode)

    // let getUDNData = jest.fn().mockReturnValue({
    //   title: "聯經數位一組",
    //   description: "Front-end development"
    // })
    // getUDNData()

    // const spy = jest.spyOn(wrapper,'play').mockImplementation(() => customImplementation)
    // const spy = wrapper['getUDNData'] = jest.fn()
    // console.log(spy)
    // wrapper.vm.getUDNData
    // const spy = jest.spyOn(wrapper,'play')
    // const spy = jest.spyOn(wrapper,'getUDNData')
    // await wrapper.vm.$nextTick();
    // expect(spy).toHaveBeenCalled()
    // spy.mockRestore();
  // })

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
    expect(mutations.initState.mock.calls).toHaveLength(1)
  })
  it('[測試] Vuex 非同步功能', () => {
    const wrapper = shallowMount(Message, { store, localVue })
    wrapper.find('#getData').trigger('click')
    expect(actions.getTestData.mock.calls).toHaveLength(1)
  })
})