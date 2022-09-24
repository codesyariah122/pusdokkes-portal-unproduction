<template>
	<div :class="`${$device.isDesktop ? 'event__detail mb-5' : 'event__detail mb-5'}`">
		<mdb-container>
			
			<!-- Event detail content -->
			<mdb-row class="row event__detail-content">
				<mdb-col v-if="token.accessToken" lg="12">
					<EventpageLoginDetailEvent :loading="loading" :details="details" :data_event="data_event" :status_pendaftaran="status_pendaftaran" :token="token" @registrasi-event="RegistrasiEvent" :profiles="profiles" :schedules="schedules"/>
				</mdb-col>
				<mdb-col v-else lg="12">
					<EventpageDetailEventNoAuth :events="events" :loading="loading"/>
				</mdb-col>
			</mdb-row>

			<mdb-row class="event__detail-list">
			</mdb-row>
		</mdb-container>
	</div>
</template>

<script>
	import {FetchData} from '@/helpers'

	export default{
		name: 'detail-event-id-slug',
		layout: 'default',
		data(){
			return {
				profiles: {},
				details: [],
				lists: [],
				schedules: [],
				listToShow: 3,
				loading:null,
				currentPage: 1,
				status_pendaftaran: '',
				id: this.$route.params.id,
				data_event_path: {
					event_id: this.$route.params.id,
					event_path: this.$route.path
				},
				p1: true
			}
		},

		async asyncData({$axios, params}){
			const events =  await $axios.$get(`/web/event/no-auth/${params.id}`)
			console.log(events)
			return {
				events,
			}
		},

		beforeMount(){
			this.SetEventLogin(this.data_event_path)
			this.ConfigApiUrl(),
			this.CheckToken(),
			this.UserProfileData()
		},

		mounted(){
			this.StatusPembayaran(),
			this.DetailEventProfileLogin(),
			this.GetEventDataLogin(),
			this.CheckLogout()
		},

		methods: {
			CheckToken(){
				this.$store.dispatch('config/checkAuthLogin', 'token')
			},

			ConfigApiUrl(){
				const url = process.env.NUXT_ENV_API_URL
				this.$store.dispatch('config/storeConfigApiUrl', url)
			},
			CheckLogout(){
				this.$store.dispatch('config/getProfileLogout', 'logout')
			},

			DetailEventProfileLogin(){
				if(this.token.accessToken){
					const url = `${this.api_url}/web/event/${this.$route.params.id}`

					this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`
					this.$axios.get(url)
					.then(({data}) => {
						console.log(data)
						this.details = data.kegiatan
						this.schedules = data.pelatihans
					})
					.catch(err => console.log(err))
				}
			},



			LoadEvent(page){
				if(page == 1){
					page = 0
				}
				this.ListEvent(page, '', '', '')
			},

			SetEventLogin(data){
				data = {
					event_id: data.event_id,
					event_path: data.event_path
				}
				this.$store.dispatch('config/setEventToLogin', JSON.stringify(data))
				// this.$router.push({
				// 	name: 'auth-login'
				// })
			},

			GetEventDataLogin(){
				this.$store.dispatch('config/getEventDataToLogin', 'event')
			},

			RegistrasiEvent(id){
				this.$router.push({
					name: 'events-id-registrasi',
					params: {
						id: id
					}
				})
			},

			StatusPembayaran(){
				if(this.token.accessToken){
					this.loading=true
					const url = `${this.api_url}/web/event/${this.id}`
					this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`
					this.$axios.get(url)
					.then(({data}) => {
						console.log(data)
						this.status_pendaftaran = data.kegiatan.status_pendaftaran_value
					})
					.catch(err => console.log(err))
					.finally(() => {
						setTimeout(() => {
							this.loading=false
						}, 1000)
					})
				}
			},

			UserProfileData(){
				if(this.token){
					this.loading=true					
					const url = `${this.api_url}/web/user`
					this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`
					this.$axios.get(url)
					.then(({data}) => {
						this.profiles = data.user
					})
					.catch(err => console.log(err.response ? err.response : ''))
					.finally(() => {
						setTimeout(() => {
							this.loading=false
						},1500)
					})
				}
			},

		},

		computed: {
			token(){
				return this.$store.getters['config/ConfigCheckLogin']
			},
			api_url(){
				return this.$store.getters['config/ConfigApiUrl']
			},
			set_event(){
				return this.$store.getters['config/ConfigSetEventLogin']
			},
			data_event(){
				return this.$store.getters['config/ConfigEventDataLogin']
			},
			logout_data(){
				return this.$store.getters['config/ConfigProfileDataLogout']
			}
		}

	}
</script>