<template src="./home.html"></template>
<style lang="scss" scoped src="./home.scss"></style>
<script>

	import vuex from '../vuex/vuex'
	export default {
		name: 'home',
		data(){
			return{
				title: '聯經數位一組',
				description: 'Front-end development',
			}
		},
		components: {vuex}
	}
</script>