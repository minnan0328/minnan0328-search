import Vue from "vue"
import App from './components/App.vue'
import router from './routers/index'
import store from './store/index'

new Vue({
	render: h => h(App),
	router, store
}).$mount('#app');