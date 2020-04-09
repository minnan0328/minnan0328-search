<template src="./vuex.html"></template>
<style lang="scss" scoped src="./vuex.scss"></style>
<script>
import { mapState } from 'vuex';
export default {
	name: 'vuex',
	data(){
		return {
			TitleMode: null,
			DescriptionMode: null
		};
	},
	computed:{
		...mapState({
			getTestData: state => state.TestData.UdnData
		}),
	},
	methods:{
		getData(){
			this.$store.dispatch('getTestData')
		},
		initState(){
			this.$store.commit('initState')
		},
		SetData(data){
			this.$store.commit('setTestData',{
				UdnData:{
					title: this.TitleMode || this.getTestData.title,
					description: this.DescriptionMode || this.getTestData.description
				}
			})
			this.TitleMode = null
			this.DescriptionMode = null
		}
	}
}
</script>