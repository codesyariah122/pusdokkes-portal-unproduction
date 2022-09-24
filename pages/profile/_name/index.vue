<template>
	<div>
		<Profilepage :profiles="profiles" :genders="genders" :jobs="jobs" :studs="studs" :works="works" :maritals="maritals"  :categories="categories" :api_url="api_url" :loading="loading" :token="token" :username="username"/>
	</div>
</template>

<script>
	import {FetchData} from '@/helpers'

	export default {
		name: 'profile-name',
		layout: 'profile',

		data(){
			return {
				profiles: {},
				genders: [],
				jobs: {},
				studs: {},
				works: [],
				maritals: [],
				categories: [],
				empty_filter: false,
				loading: null,
				start_submit: null,
				username: ''
			}
		},

		mounted(){
			this.ConfigApiUrl(),
			this.CheckToken(),
			this.IsLoggedIn(),
			this.CheckLogout(),
			this.UserProfileData(),
			this.EventCategories()
		},

		methods: {

			IsLoggedIn(){
				if(!this.token.accessToken){
					this.$swal({
						icon: 'error',
						title: 'Oops...',
						text: 'Anda tidak mempunyai hak akses ke halaman ini! / sesi login telah habis, silahkan login kembali',
					})
					setTimeout(() => {
						this.$router.push({
							name: 'auth-login'
						})
					}, 1300)
				}
			},

			LogoutProfile() {
				this.$swal({
					title: `Keluar sebagai ${this.profiles.nama}?`,
					text: "Anda akan keluar dari halaman profile!",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "Ya, Lanjut keluar!",
				}).then((result) => {
					if (result.isConfirmed) {
						this.$store.dispatch("config/storeConfigAuth", "");
						this.$store.dispatch("config/setEventToLogin", "");
						this.$store.dispatch(
							"config/setProfileLogout",
							JSON.stringify({
								logout: true,
								username: this.$username(this.profiles.nama),
							})
							);
						this.$swal(
							"Logout!",
							`Anda berhasil keluar dari profile ${this.profiles.nama}.`,
							"success"
							);

						this.$router.push({
							path: this.$route.path,
						});
						setTimeout(() => {
							location.reload();
						}, 900);
					}
				});
			},

			CheckToken(){
				this.$store.dispatch('config/checkAuthLogin', 'token')
			},

			CheckLogout(){
				this.$store.dispatch('config/getProfileLogout', 'logout')
			},

			ConfigApiUrl(){
				const api_url = process.env.NUXT_ENV_API_URL
				this.$store.dispatch('config/storeConfigApiUrl', api_url)
			},

			FilterPekerjaan(works, user){
				const work = works.map(d => d).find(d => d.code == user.status_pekerjaan_id)
				this.works = work
			},

			UserProfileData(){
				if(this.token){
					this.loading=true					
					const url = `${this.api_url}/web/user`
					this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`
					this.$axios.get(url)
					.then(({data}) => {
						this.profiles = data.user
						this.username = this.$username(data.user.nama)

						this.FilterPekerjaan(data.statusPekerjaans, data.user)

						this.studs = data.pendidikan ? data.pendidikan : ''
						this.genders = data.jenisKelamins
						this.jobs = data.statusPekerjaans
						this.maritals = data.statusPernikahan
					})
					.catch(err => console.log(err.response ? err.response : ''))
					.finally(() => {
						setTimeout(() => {
							this.loading=false
						},1500)
					})
				}
			},



			EventCategories(page=1,keyword='',category='',month=''){
				const url = `${this.api_url}/web/event/paging?keyword=${keyword?keyword:''}&page=${page?page:1}&jenis_pelatihan=${category?category:''}&bulan_pelatihan=${month?month:''}`

				FetchData(url)
				.then((data) => {
					// console.log(data)
					// Ambil categories event
					this.categories = data.list_jenis_kegiatan
				})
				.catch(err => console.log(err))
			}
		},

		computed: {
			token(){
				return this.$store.getters['config/ConfigCheckLogin']
			},
			api_url(){
				return this.$store.getters['config/ConfigApiUrl']
			},
			logout_data(){
				return this.$store.getters['config/ConfigProfileDataLogout']
			}
		}
	}
</script>