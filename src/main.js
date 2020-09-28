import Vue from "vue";
import App from '@/components/App.vue';
import router from '@/service/routers/index';
import { store } from '@/service/store/index';

new Vue({
	render: h => h(App),
	router, store
}).$mount('#app');