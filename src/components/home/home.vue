<template src="./home.html"></template>
<style lang="scss" scoped src="./home.scss"></style>
<script>
	import Message from './../message/message.vue'
	export default {
		name: 'home',
		data(){
			return{
				title: '聯經數位一組',
				description: 'Front-end development'
			}
		},
		components: {Message}
	}
</script>