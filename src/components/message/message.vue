<template src="./message.html"></template>
<style lang="scss" scoped src="./message.scss"></style>
<script>
import { mapState } from 'vuex';
export default {
	name: 'message',
	data(){
		return {
			TitleMode: null,
			DescriptionMode: null
		};
	},
	computed:{
		...mapState({
			getTestData: state => state.TestData.UdnData
		})
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