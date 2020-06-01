<template src="./App.html"></template>
<style lang="scss" src="./App.scss"></style>
<script>
	import moment from 'moment'
	import NavBar from './Utilities/NavBar/NavBar'
	export default {
		name: 'app',
		data(){
			return{}
		},
		components:{NavBar},
		computed: {
			copyright() {return `${moment().year()} © UDN Digital`}
		}
	}
</script>

