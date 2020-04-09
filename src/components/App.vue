<template src="./App.html"></template>
<style lang="scss" src="./App.scss"></style>
<script>
	import NavBar from './Utilities/NavBar/NavBar.vue'
	import moment from 'moment'
	export default {
		name: 'app',
		data(){
			return{
				title: '聯經數位一組',
				description: 'Front-end development'
			}
		},
		components: {NavBar},
		computed: {copyright: (() => { return `${moment().year()} © UDN Digital` })}
	}
</script>

