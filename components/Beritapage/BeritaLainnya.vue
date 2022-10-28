<template>
	<div>		
		<mdb-row :class="`${$device.isDesktop ? 'justify-content-start' : 'justify-content-center' }`">
			<mdb-col lg="4" xs="4" sm="12" :style="`margin-top: 15px;${$device.isDesktop ? 'margin-left: -2rem;' : 'margin-left: -1.5rem;'}`">
				<h4 class="papper__fold" style="font-weight: 700">Berita Lainnya</h4>
			</mdb-col>
		</mdb-row>
		<mdb-row class="justify-content-start mt-3 mb-5">
			<mdb-col lg="12" xs="12" sm="12">
				<div class="card__content">
					<mdb-row v-for="(item, index) in others.data" :key="index">
						<mdb-col
						id="show-event"
						v-for="str in item"
						md="4"
						xs="12"
						sm="12"
						:key="str.id" :style="`${$device.isMobile ? 'margin-bottom: 2rem;' : ''}`" class="column"
						>
						<div class="effect">
							<div class="effect-img">
								<img :src="str.foto_url" :alt="str.judul">
							</div>
							<div class="effect-text">
								<div class="inner">
									<nuxt-link :to="{
										name: `detail-berita-id-slug`,
										params: {
											id: str.id, slug: $slug(str.judul)
										}
									}">
									<h2>{{ str.judul }}</h2>
								</nuxt-link>
								<span class="mt-3">Oleh Pusdokkes | {{ $moment(str.created_at).format("LL") }}</span>
								<p  class="mt-3 truncate2">
									{{str.konten}}
								</p>
							</div>
						</div>
					</div>
				</mdb-col>
			</mdb-row>
		</div>
	</mdb-col>
</mdb-row>
</div>
</template>

<script>
	export default {
		props: ['others'],

		methods: {
			slug(str){
				console.log(str)
				this.$slug(str)
			}
		}
	}
</script>