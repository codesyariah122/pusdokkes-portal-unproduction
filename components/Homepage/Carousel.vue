<template>
	<div>
		<div id="carouselHome" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
				<div v-for="item in items" :class="`carousel-item ${item.id === 1 ? 'active' : ''}`">
					<img class="d-block w-100" :src="item.foto_url">
					<div class="carousel-caption d-none d-md-block">
						<span style="color:#fff; background-color: #c1801e; font-size: 2em;">
							{{item.deskripsi}}
						</span>
					</div>
				</div>
			</div>
		</div>


		<div class="bg-dark">
			<div class="row py-2 m-0">
				<div class="col-3 col-xs-12 d-none d-sm-block text-right small" style="color:#FFD700; font-size: 15px;">
					<b>PENGUMUMAN</b>
				</div>
				<div class="col-md-7 col-xs-12 text-light small">
					<div id="carouselPengumuman" class="carousel slide" data-ride="carousel">
						<div class="carousel-inner">
							<div class="carousel-item overflow-information active" style="font-size: 15px;">
								<a id="pengumuman" href="https://polri.go.id/assets/images/pengumuman/pengumuman-632b1171a0d63.pdf" target="_blank" style="color: white;">SAKIP REN AKSI SSDM POLRI TAHUN 2022</a>
							</div>
							<div class="carousel-item overflow-information " style="font-size: 15px;">
								<a id="pengumuman" href="https://polri.go.id/assets/images/pengumuman/pengumuman-632b1140db164.pdf" target="_blank" style="color: white;">SAKIP RENJA SSDM POLRI TAHUN 2022</a>
							</div>
							<div class="carousel-item overflow-information " style="font-size: 15px;">
								<a id="pengumuman" href="https://polri.go.id/assets/images/pengumuman/pengumuman-632b112c4a607.pdf" target="_blank" style="color: white;">SAKIP PK SSDM 2022</a>
							</div>
							<div class="carousel-item overflow-information " style="font-size: 15px;">
								<a id="pengumuman" href="https://polri.go.id/assets/images/pengumuman/pengumuman-632b10c7878e8.pdf" target="_blank" style="color: white;">SAKIP MANUAL IKU SSDM POLRI</a>
							</div>
							<div class="carousel-item overflow-information " style="font-size: 15px;">
								<a id="pengumuman" href="https://polri.go.id/assets/images/pengumuman/pengumuman-632b10b18aa41.pdf" target="_blank" style="color: white;">SAKIP BUKU RENSTRA SSDM POLRI TAHUN 2020-2024</a>
							</div>
							<div class="carousel-item overflow-information " style="font-size: 15px;">
								<a id="pengumuman" href="https://polri.go.id/assets/images/pengumuman/pengumuman-6316a8332bcd3.pdf" target="_blank" style="color: white;">PELELANGAN UMUM INTERNASIONAL DENGAN PRAKUALIFIKASI PENGADAAN SARANA PRASARANA KOMUNIKASI WILAYAH PERBATASAN DAN PULAU TERLUAR</a>
							</div>
							<div class="carousel-item overflow-information " style="font-size: 15px;">
								<a id="pengumuman" href="https://polri.go.id/assets/images/pengumuman/pengumuman-631559dcb4359.pdf" target="_blank" style="color: white;">PELELANGAN UMUM INTERNASIONAL DENGAN PRAKUALIFIKASI PENGADAAN PERALATAN PENGAMANAN JARINGAN IT SUMBER PEMBIAYAAN PINJAMAN LUAR NEGERI T.A. 2021 TAHAP III</a>
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
				items: []
			}
		},

		mounted(){
			this.carouselItem()
		},

		methods: {
			carouselItem(){
				const base_url = process.env.NUXT_ENV_API_URL
				this.$axios.get(`${base_url}/web/slider?start=0`)
				.then(({data}) => {
					console.log(data)
					this.items = data.list_data
				})
				.catch(err => console.error(err.response))
			}
		}
	}
</script>