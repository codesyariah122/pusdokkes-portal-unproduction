<template>
	<div>
		<mdb-row cols="12" class="justify-content-end filtering__form-data">
			<mdb-col md="2">
				<h5>Filter</h5>
			</mdb-col>
			<mdb-col md="10">
				<form @submit.prevent="FilterSertifikat">
					<mdb-row  :class="`${$device.isDesktop ? 'd-flex justify-content-between' : ''}`">
						<mdb-col col="12" md="3">
							<select selected :value="undefined" @change="ChangeCategoryChild($event)">
								<option value="">Jenis Pelatihan</option>
								<option v-for="item in categories" :key="item.id" :value="item.code">
									{{item.value}}
								</option>
							</select>
						</mdb-col>
						<mdb-col col="12" md="3">
							<select selected :value="undefined" @change="ChangeMonthChild($event)">
								<option value="">Bulan Pelatihan</option>
								<option v-for="(month, index) in $moment.months()" :key="month" :value="index + 1">
									{{month}}
								</option>
							</select>
						</mdb-col>
						<mdb-col col="12" md="4">
							<mdb-btn size="sm" type="submit">
								<!-- <div v-if="loading">
									<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
									Loading...
								</div> -->
								<div>
									<mdb-icon icon="filter" size="sm"/> Terapkan Filter		
								</div>
							</mdb-btn>
						</mdb-col>
					</mdb-row>
				</form>
			</mdb-col>
		</mdb-row>
		<mdb-row v-if="loading" class="row justify-content-center">
			<div class="spinner-grow text-primary mt-3" size="md" style="width: 5rem; height: 5rem; background: coral;" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</mdb-row>

		<mdb-row v-else col="12" class="row justify-content-center">
			<mdb-col lg="12" xs="12" sm="12">
				<mdb-card v-if="sertifikats.length === 0" class="card-body" style="width: 100%; margin-top: 1rem;">
					<mdb-row>
						<mdb-col lg="12" xs="12" sm="12">
							<mdb-alert color="warning" v-if="p1" @closeAlert="p1=false" dismiss>
								<strong>Oopps!</strong> Sertifikat tidak tersedia.
							</mdb-alert>
						</mdb-col>
					</mdb-row>
				</mdb-card>

				<mdb-card v-else v-for="item in sertifikats" class="card-body" style="width: 100%; margin-top: 1rem;" :key="item.id">
					<mdb-row>
						<mdb-col lg="12" xs="12" sm="12">
							<mdb-card-title>{{item.kegiatan_title}}</mdb-card-title>
							<small class="mt-2">
								{{$moment(item.tanggal_awal).format("LL")}} - {{$moment(item.tanggal_akhir).format("LL")}}
							</small>
						</mdb-col>
						<mdb-col lg="12" xs="12" sm="12">
							<mdb-btn size="sm" outline="primary" @click.native="downloadSertifikat(item)"><mdb-icon icon="download" /> Unduh Sertifikat</mdb-btn>
						</mdb-col>
					</mdb-row>
				</mdb-card>
			</mdb-col>
		</mdb-row>
	</div>
</template>

<script>
	export default{
		props: ['categories'],

		data(){
			return {
				loading: true,
				sertifikats: [],
				p1: true,
				loading_filter: null,
				empty_filter: null
			}
		},

		beforeMount(){
			this.ConfigApiUrl(),
			this.UserProfileData(),
			this.EventSertifikat()
		},

		mounted(){
			this.CheckToken()
		},

		methods: {
			ConfigApiUrl(){
				const api_url = process.env.NUXT_ENV_API_URL
				this.$store.dispatch('config/storeConfigApiUrl', api_url)
			},

			CheckToken(){
				this.$store.dispatch('config/checkAuthLogin', 'token')
			},

			UserProfileData(){
				if(this.token){
					this.loading=true					
					const url = `${this.api_url}/web/user`
					this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`
					this.$axios.get(url)
					.then(({data}) => {
						this.username = this.$username(data.user.nama)
					})
					.catch(err => console.log(err.response ? err.response : ''))
					.finally(() => {
						setTimeout(() => {
							this.loading=false
						},1500)
					})
				}
			},

			EventSertifikat(page=0, category='', month=''){
				this.loading = true
				this.loading_filter = true
				this.empty_filter = false
				const url = `${this.api_url}/web/sertifikat/list?start=${page}&jenis_pelatihan=${category}&bulan_pelatihan=${month}`
				this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`
				this.$axios.get(url)
				.then(({data}) => {
					// console.log(data);
					if(data.list_data.length > 0){
						this.sertifikats = data.list_data
					}else{
						this.empty_filter = true
					}
				})

				.catch(err => console.log(err))

				.finally(() => {
					setTimeout(() => {
						this.loading_filter=false
						this.loading = false
					}, 1500)
				})
			},

			downloadSertifikat(item){
				this.loading = true
				const url = `${this.api_url}/web/sertifikat/download/${item.kegiatan_id}`
				this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`
				this.$axios.get(url)
				.then(({data}) => {
					// console.log(data);

					// console.log(data.sertifikat.file);
					if(data)
						window.open(data.sertifikat.file, '_blank').focus();
				})

				.catch(err => console.log(err))

				.finally(() => {
					this.loading=false
				})
			}
		},

		computed: {
			token(){
				return this.$store.getters['config/ConfigCheckLogin']
			},
			api_url(){
				return this.$store.getters['config/ConfigApiUrl']
			},
		}
	}
</script>