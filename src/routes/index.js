"use strict"
import Vue from 'vue'
import VueRouter from 'vue-router'
import UdnDigital from './../components/UdnDigital/UdnDigital.vue'
Vue.use(VueRouter)

export const routes = [
  { path: '/', redirect: '/UdnDigital' },
  { path: '/UdnDigital', component: UdnDigital},
]

export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})