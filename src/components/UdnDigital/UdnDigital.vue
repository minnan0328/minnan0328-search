<template src="./UdnDigital.html"></template>
<style lang="scss" scoped src="./UdnDigital.scss"></style>
<script>
import { mapState } from 'vuex';
export default {
	name: 'UdnDigital',
	data(){
		return {};
	},
	components: {},
	computed:{
		...mapState({
			getTestData: state => state.TestData.UdnData
		}),
	},
	created(){},
	mounted(){},
	methods:{
		getData(){
			this.$store.dispatch('getTestData')
		},
		initState(){
			this.$store.commit('initState')
		}
	}
}
</script>