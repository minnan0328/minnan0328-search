<template src="./App.html"></template>
<style lang="scss" scoped src="./App.scss"></style>
<script>
	import NavBar from './Utilities/NavBar/NavBar.vue'
	import moment from 'moment'
	export default {
		name: 'App',
		components: {NavBar},
		computed: {copyright: (() => { return `${moment().year()} © UDN Digital` })}
	}
</script>

