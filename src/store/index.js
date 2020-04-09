"use strict"
import Vue from 'vue'
import Vuex from 'vuex'
import TestData from './getTestData'
Vue.use(Vuex)
export const store = new Vuex.Store({
	modules: {
		TestData
	}
})