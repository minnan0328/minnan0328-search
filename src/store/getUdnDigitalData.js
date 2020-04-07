"use strict"
import axios from 'axios'
import initState from './initState'
export default {
	state: Object.assign({}, initState.UdnData),
	actions: {
		getUdnDigitalData({ commit }) {
			axios.get('./../../static/data/UdndigitalData.json')
				.then(response => {
					let result = response.data;
					if (response.status !== 200 && response.statusText !== 'OK') console.log('AXJX Error')
					else commit('setUdnDigitalData', result)
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
		setUdnDigitalData: (state, payload) => {
			state.UdnData = payload.UdnData
		}
	}
}