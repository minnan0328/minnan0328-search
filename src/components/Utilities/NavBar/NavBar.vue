<template src="./NavBar.html"></template>
<style lang="scss" scoped src="./NavBar.scss"></style>
<script>
import { ComponentRouters } from './../../../routers/index.js'
export default {
  name: 'NavBar',
  data(){
    return{}
  },
  computed:{
    routers(){
      return ComponentRouters
    }
  }
}
</script>


