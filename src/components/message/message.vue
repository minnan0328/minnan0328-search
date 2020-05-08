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
		}
	},
	props:{
		subtitle: String
	},
	computed:{
		...mapState({
			getUDNData: state => state.TestData.UdnData
		})
	},
	methods:{
		sum(){
			return 'text'
		},
		getData(){
			this.$store.dispatch('getTestData')
		},
		initState(){
			this.$store.commit('initState')
		},
		SetData(){
			this.$store.commit('setTestData',{
					UdnData: {
					// title: this.TitleMode || this.getUDNData.title,
					// description: this.DescriptionMode || this.getUDNData.description
				}
			})
			this.TitleMode = null
			this.DescriptionMode = null
		}
	}
}
</script>