<style scoped>
.body-berita{
	white-space: pre-wrap;
	font-size: 16px;
}
</style>
<template>
	<div class="pages__web" :style="berita__list_style">
		<div class="container mb-5 bg-light">
			<h1 class="px-5 pt-5 mx-lg-5">Satker Pusdokkes</h1>
			<hr>
			<div class="row mx-5 mb-5 px-5">
				<div v-for="(item, index) in lists" class="col-12">
					<div class="accordion" id="accordionPolda">
						<div id="headpolda1" class="my-3 border-bottom">
							<div class="row">
								<div class="col-lg-2 text-center">
									<img class="pb-2" :src="item.foto_url" alt="POLDA ACEH" height="100" />
								</div>
								<div class="col-lg-10">
									<h5 style="margin:0;">
										{{item.nama}}
									</h5>
									{{item.alamat}}
									<br>{{item.telp}}
									<br>
									<a href="https://aceh.polri.go.id/" target="_blank"><sup><i class="fa fa-external-link-alt"></i></sup></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

		data(){
			return {
				lists: {},
				berita__list_style: this.$device.isDesktop
				? "margin-top: 8rem;margin-bottom: 5rem;"
				: "margin-top: 6rem; margin-bottom: 5rem;",
				deskripsi: null
			}
		},

		mounted(){
			this.ConfigApiUrl(),
			this.pesanPusdokkes()
		},

		methods: {
			ConfigApiUrl() {
				const api_url = process.env.NUXT_ENV_API_URL;
				this.$store.dispatch("config/storeConfigApiUrl", api_url);
			},

			pesanPusdokkes(){
				this.$axios.get(`${this.api_url}/web/satuankerja?start=0`)
				.then(({data}) => {
					console.log(data)
					this.lists = data.list_data
				})
				.catch(err => console.error(err))
			}
		},
		computed: {
			api_url() {
				return this.$store.getters["config/ConfigApiUrl"];
			},
		},
	}
</script>