<template src="./UdnDigital.html"></template>
<style lang="scss" scoped src="./UdnDigital.scss"></style>
<script>
import { mapState } from 'vuex';
export default {
	name: 'UdnDigital',
	data(){
		return {
			title: '聯經數位一組',
			description: 'Front-end development'
		};
	},
	components: {},
	computed:{
		...mapState({
			getUdnDigitalData: state => state.UdnDigital.UdnData
		}),
	},
	created(){
		this.$store.dispatch('getUdnDigitalData')
	},
	mounted(){},
	methods:{}
}
</script>