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
			console.log('actions')
			axios.get('./../../static/data/TestData.json')
			.then(response => {
				console.log('then')
				let result = response.data;
				if (response.status !== 200 && response.statusText !== 'OK') console.log('AJAX Error')
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