"use strict"
import Vue from 'vue'
import Vuex from 'vuex'
import UdnDigital from './getUdnDigitalData'
Vue.use(Vuex)
export const store = new Vuex.Store({
	modules: {UdnDigital}
})