<style lang="scss">
.section-tittle{
	margin-bottom: 3rem;
	.flex__title{
		margin-left: -1rem;
		.text{
			margin-left: -2.5rem;
			a{
				color: $second-black;
				&:hover{
					color: $color-link;
				}
			}
		}
	}
}
</style>

<template>
	<div class="trending-area fix">
		<div class="container">
			<div class="trending-main">
				<div class="row">
					<div class="col-lg-12">
						<div class="trending-tittle">
							<strong>Berita</strong>
							<!-- <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->
							<div class="trending-animated">
								<ul id="js-news" class="js-hidden">
									<li class="news-item">Berita Dan Informasi Terupdate</li>
									<li class="news-item">Seputar PUSDOKKES POLRI</li>
									<li class="news-item"></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-8">
						<div v-for="(item, index) in news">
							<!-- Trending Top -->
							<div v-if="index == news.length - 1" class="trending-top mb-3">
								<div class="trend-top-img">
									<img :src="item.foto_url" alt="">
									<div class="trend-top-cap">
										<span>Appetizers</span>
										<h2><a href="details.html">{{item.judul}}</a></h2>
									</div>
								</div>
							</div>
						</div>
						<!-- Trending Bottom -->
						<div class="trending-bottom">
							<div class="row">
								<div v-for="(item, index) in news.slice(0, 3)" v-if="index !== news.length - 1" class="col-lg-4">
									<div class="single-bottom mb-35">
										<div class="trend-bottom-img mb-30">
											<img :src="item.foto_url" alt="">
										</div>
										<div class="trend-bottom-cap">
											<span class="color1">Lifestyple</span>
											<h4><a href="details.html"> {{item.judul}} </a></h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Riht content -->
					<div class="col-lg-4">
						<div class="trand-right-single section-tittle">
							<div class="d-flex flex__title">
								<div class="col-lg-3 icon">
									<img
									:src="require('~/assets/icons/socials/instagram.svg')"
									/>
								</div>
								<div class="col-lg-2 text">
									<h4><a href="https://www.instagram.com/p/Ciy42q2LgMY/?hl=id">pusdokkespolri</a></h4>
								</div>
							</div>
						</div>
						<div class="trand-right-single d-flex">
							<div class="trand-right-img">
								<img :src="require('~/assets/images/new-content/trending/right1.jpg')" alt="">
							</div>
							<div class="trand-right-cap">
								<span class="color1">Concert</span>
								<h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
							</div>
						</div>
						<div class="trand-right-single d-flex">
							<div class="trand-right-img">
								<img :src="require('~/assets/images/new-content/trending/right2.jpg')" alt="">
							</div>
							<div class="trand-right-cap">
								<span class="color3">sea beach</span>
								<h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
							</div>
						</div>
						<div class="trand-right-single d-flex">
							<div class="trand-right-img">
								<img :src="require('~/assets/images/new-content/trending/right3.jpg')" alt="">
							</div>
							<div class="trand-right-cap">
								<span class="color2">Bike Show</span>
								<h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
							</div>
						</div> 
						<div class="trand-right-single d-flex">
							<div class="trand-right-img">
								<img :src="require('~/assets/images/new-content/trending/right4.jpg')" alt="">
							</div>
							<div class="trand-right-cap">
								<span class="color4">See beach</span>
								<h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
							</div>
						</div>
						<div class="trand-right-single d-flex">
							<div class="trand-right-img">
								<img :src="require('~//assets/images/new-content/trending/right5.jpg')" alt="">
							</div>
							<div class="trand-right-cap">
								<span class="color1">Skeping</span>
								<h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
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
				news: []
			}
		},

		mounted(){
			this.beritaLists()
		},

		methods: {
			beritaLists(){
				const base_url = process.env.NUXT_ENV_API_URL
				this.$axios.get(`${base_url}/web/berita/page?start=0`)
				.then(({data}) => {
					console.log(data)
					this.news = data.list_data
				})
				.catch(err => console.error(err.response))
			}
		}
	}
</script>