<template>
  <div>
    <button @click="sendMessag" id="sendMessage"></button>
    <p v-text="message" id="message_p01"></p>
    <p v-text="'ssss'" id="message_p02"></p>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name:'JestTest',
  data(){
    return{
      message: ''
    }
  },
  computed:{
		...mapState({
			getTestData: state => state.TestData.UdnData
		})
	},
  methods:{
    sendMessag(){
      this.message = 'Test Messsage'
    },
    changeMessage(){
      this.message = 'Change Message'
    },
    getStore(){
      this.$store.dispatch('getTestData')
    }
  }
}
</script>
