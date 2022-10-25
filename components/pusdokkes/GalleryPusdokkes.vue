<template>
	<div class="gallery__pages portfolio" ref="gallery_content" :style="berita__list_style">
		<mdb-container>
			<mdb-row class="justify-content-start">
				<mdb-col lg="12" sm="12">
					<h2>Gallery Pusdokkes</h2>
					<p>Gallery dan dokumentasi PUSDOKKES - POLRI</p>
				</mdb-col>
			</mdb-row>

			<mdb-row v-if="loading && !loadingMore" class="justify-content-start portfolio-container">
				<div v-for="(item, idx) in galleries" class="col-lg-4 col-md-6 portfolio-item">
					<b-skeleton-img></b-skeleton-img>
				</div>
			</mdb-row>

			<mdb-row v-else class="justify-content-start portfolio-container">
				<div v-for="(item, idx) in galleries" class="col-lg-4 col-md-6 portfolio-item">
					<div class="portfolio-img">
						<img :src="item.alamat" class="img-fluid" alt="">
					</div>
					<div class="portfolio-info">
						<mdb-btn @click="index = idx"  class="portfolio-lightbox preview-link" >
							<i class="fas fa-clone fa-fw fa-lg"></i>
						</mdb-btn>
						<vue-gallery-slideshow
						:images="images"
						:index="index"
						@close="index = null"
						></vue-gallery-slideshow>
					</div>
				</div>
			</mdb-row>

			<mdb-row v-if="loadingMore" class="row justify-content-center">
				<mdb-col lg="12" xs="12" sm="12">
					<div class="d-flex justify-content-center mt-5 mb-5">
						<div
						class="spinner-grow text-primary"
						role="status"
						style="width: 3rem; height: 3rem"
						>
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			</mdb-col>
		</mdb-row>
	</mdb-container>
</div>
</template>

<script>
	import VueGallerySlideshow from "vue-gallery-slideshow"

	export default {
		components: {
			VueGallerySlideshow
		},
		head(){
			return {
				title: 'Pusdokkes Polri - Gallery Pusdokkes'
			}
		},
		data(){
			return {
				berita__list_style: this.$device.isDesktop
				? "margin-top: 7rem;"
				: "margin-top: 5rem;",
				loading: null,
				loadingMore: null,
				error: false,
				end: false,
				galleries: [],
				images: [],
				repeat: 0,
				index: null
			}
		},

		mounted(){
			this.ConfigApiUrl(),
			this.galleryContent(),
			this.loadMoreGallery()
		},

		methods: {
			ConfigApiUrl() {
				const api_url = process.env.NUXT_ENV_API_URL;
				this.$store.dispatch("config/storeConfigApiUrl", api_url);
			},
			galleryContent(more=false){
				this.loading = !more ? true : false
				this.loadingMore = more ? true : false
				this.$axios.get(`${this.api_url}/web/galeri?start=${this.galleries.length}`)
				.then(({data}) => {
					if(data.list_data.length > 0){
						this.galleries = data.list_data
						data.list_data.map(d => this.images.push(d.alamat))
					}else{
						this.end = true;
					}
				})
				.catch(err => {
					this.error = true
					console.error(err)
				})
				.finally(() => {
					setTimeout(() => {
						this.loading = false
						this.loadingMore = false
					}, 1500)
				})
			},

			loadMoreGallery() {
				window.onscroll = () => {
					if (!this.loading && !this.end && !this.error) {
						if (this.$refs.gallery_content.getBoundingClientRect().bottom <= 450) {
							this.galleryContent(true)
						}else{
							console.log("out")
							setTimeout(() => {
								this.loadingMore = false
							}, 1500)
						}
					}
				}
			}
		},

		computed: {
			api_url() {
				return this.$store.getters["config/ConfigApiUrl"];
			}
		}
	}
</script>