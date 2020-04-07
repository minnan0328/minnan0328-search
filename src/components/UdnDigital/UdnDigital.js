import { mapState } from 'vuex';
import moment from 'moment'
export default {
	name: 'Caplitomo',
	data(){
		return {
			title: '聯經數位一組',
			description: 'Front-end development'
		};
	},
	computed:{
		...mapState({
			getUdnDigitalData: state => state.UdnDigital.UdnData
		}),
		copyright:(() => {
			return `${moment().year()} © UDN Digital`
		})
	},
	created(){
		this.$store.dispatch('getUdnDigitalData')
	},
	mounted(){},
	methods:{}
}