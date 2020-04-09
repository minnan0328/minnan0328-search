"use strict"
import axios from 'axios'
import initState from './initState'
export default {
	//Object.assign({}, initState.UdnData)
	state: {
		UdnData: initState.UdnData
	},
	actions: {
		getTestData({ commit }) {
			axios.get('./../../static/data/TestData.json')
				.then(response => {
					let result = response.data;
					if (response.status !== 200 && response.statusText !== 'OK') console.log('AXJX Error')
					else commit('setTestData', result)
				})
				.catch(error => {
					console.log(error)
				})
				.finally(() => {
					return
				})
		}
	},
	mutations: {
		setTestData: (state, payload) => {
			state.UdnData = payload.UdnData
		},
		initState(state) {
			state.UdnData = initState.UdnData
		}
	}
}

//元件用法
//模擬介面
//新人訓練