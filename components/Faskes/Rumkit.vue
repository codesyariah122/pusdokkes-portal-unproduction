<template>
	<div
	ref="fasilitator_square"
	class="pages__web"
	:style="berita__list_style"
	>
	<div class="container mb-5 bg-light">
		<h1 class="px-5 pt-5 mx-lg-5">Rumkit Bhayangkara</h1>
		<hr />

		<div v-if="configLoading.first" class="row mx-5 mb-5 px-5">
			<div v-for="n in lists.length" class="col-lg-12 col-sm-12 mb-3">
				<b-skeleton width="85%"></b-skeleton>
				<b-skeleton width="55%"></b-skeleton>
				<b-skeleton width="70%"></b-skeleton>
			</div>
		</div>
		<div v-else class="row mx-5 mb-5 px-5">
			<div v-for="(item, index) in lists" :key="index" class="col-lg-12 col-sm-12">
				<div class="accordion" id="accordionPolda">
					<div id="headpolda1" class="my-3 border-bottom">
						<div class="row justify-content-start">
							
							<div class="col-lg-2 col-md-2 col-sm-2">
								<img v-if="isLoaded" @load="loadImage"
								class="pb-2"
								:src="item.photo"
								alt=""
								height="50"
								width="80"
								/>
							</div>
							<div class="col-lg-10 col-md-10 col-sm-10">
								<h5 style="margin: 0">
									{{ item.name }}
								</h5>
								<p>{{ item.address }}</p>
								<p v-if="item.telp">{{ item.telp }}</p>
								<p v-if="item.kodeprofile">{{ item.kodeprofile }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<mdb-row v-if="configLoading.next" class="row justify-content-center">
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

	<mdb-row
	v-if="error"
	class="row justify-content-center header__ppkc-list-page"
	>
	<mdb-col lg="12" xs="12" sm="12">
		<button type="button"  class="btn btn-info">
			Load More
		</button>
	</mdb-col>
</mdb-row>
</div>
</div>
</template>

<script>
	export default {
		head(){
			return {
				title: 'Pusdokkes Polri - Rumkit Bhayangkara'
			}
		},
		data() {
			return {
				isLoaded: false,
				lists: [],
				configLoading: {
					first: null,
					next: null
				},
				start: 0,
				error: null,
				end: null,
				berita__list_style: this.$device.isDesktop
				? "margin-top: 8rem;margin-bottom: 5rem;"
				: "margin-top: 6rem; margin-bottom: 5rem;",
			};
		},


		beforeMount(){
			this.ConfigApiUrl(),
			this.getListContent()
		},

		mounted() {
			this.getNextContent()
		},

		methods: {
			loadImage(){
				this.isLoaded = true
			},
			ConfigApiUrl() {
				const api_url = process.env.NUXT_ENV_API_URL;
				this.$store.dispatch("config/storeConfigApiUrl", api_url);
			},

			getListContent(){
				this.configLoading.first = true 
				const url = `${this.api_url}/web/hospital?start=${this.start}`
				this.$axios
				.get(url)
				.then(({data}) => {
					if (data.list_data.length > 0) {
						this.lists = data.list_data
					}else {
						this.end = true;
					}
				})
				.catch(err => {
					this.error = true 
					console.error(err)
				})
				.finally(() => {
					setTimeout(() => {
						this.configLoading.first = false
					}, 1500)
				})
			},

			nextListContent(page){
				this.next = true
				this.configLoading.next = true 
				const url = `${this.api_url}/web/hospital?start=${page}`
				this.$axios
				.get(url)
				.then(({data}) => {
					console.log(data.list_data)
					if (data.list_data.length > 0) {
						data.list_data.map(d => {
							this.lists.push(d)
						})
					} else {
						this.end = true;
					}
				})
				.catch(err => console.error(err))
				.finally(() => {
					setTimeout(() => {
						this.configLoading.next = false
					}, 1500)
				})
			},

			getNextContent() {
				window.onscroll = () => {
					if (!this.configLoading.first && !this.end && !this.error) {
						// console.log(this.$refs.fasilitator_square.getBoundingClientRect().bottom)
						if (
							this.$refs.fasilitator_square.getBoundingClientRect().bottom <= 250
							) {
							this.start += 1
						this.nextListContent(this.start)
					}
				}
			}
		},
	},

	computed: {
		api_url() {
			return this.$store.getters["config/ConfigApiUrl"];
		}
	}
}
</script>


<style lang="css">
.truncate {
	display: -webkit-box;
	-webkit-line-clamp: var(--line-clamp, 3);
	-webkit-box-orient: vertical;
	word-break: var(--word-break, "none");
	overflow: hidden;
	hyphens: auto;
	text-align: var(--align, left);

	--is-single-line: 1 - Clamp(0, Calc(var(--line-clamp) - 1), var(--line-clamp));
	--delay: Calc(-1s * (var(--is-single-line, 1) - 1));
	animation: states 1s var(--delay) paused;

	@keyframes states {
		0% {
			word-break: break-all;
		}
	}
}

.content-desc {
	white-space: pre-wrap;
	font-size: 14px;
}

.popover {
	white-space: pre-wrap !important;
	max-width: 500px !important;
	text-align: left;
}
</style>
