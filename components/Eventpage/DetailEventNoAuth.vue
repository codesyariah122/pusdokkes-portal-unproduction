<template>
	<div>
		<mdb-row v-if="loading" col="12" class="mt-5">
			<mdb-col lg="12">
				<b-card>
					<b-row>
						<b-col cols="4">
							<b-skeleton-img></b-skeleton-img>
						</b-col>
						<b-col cols="8">							
							<b-skeleton animation="wave" width="85%"></b-skeleton>
							<b-skeleton animation="wave" width="55%"></b-skeleton>
							<b-skeleton animation="wave" width="70%"></b-skeleton>
						</b-col>
					</b-row>
				</b-card>
			</mdb-col>
			<mdb-col lg="12" class="mt-2">
				<b-progress :max="max" height="2rem" :striped="true" show-progress :animated="true">
					<b-progress-bar :value="value" variant="success">
						<h5 v-if="value > 0">Loading</h5>
					</b-progress-bar>
				</b-progress>
			</mdb-col>
		</mdb-row>

		<div v-else>
			<mdb-row :class="`${$device.isMobile ? 'row justify-content-center' : ''}`">
				<mdb-col v-if="$device.isMobile" lg="4" xs="4" sm="12" col="12" class="event__flyer">
					<img :src="events.kegiatan.photo">
				</mdb-col>
				<mdb-col lg="6" xs="6" sm="12" class="event__info">
					<mdb-badge
					class="mb-2 badge__category shadow-none"
					>{{ events.kegiatan.kegiatan_value }}</mdb-badge
					>			
					<h1>
						{{events.kegiatan.kegiatan_title}}
					</h1>
					<h4 class="mt-3 idr__color">
						{{events.kegiatan.harga ? $format(events.kegiatan.harga) : 'Rp. -'}}
					</h4>
					<p>
						{{events.kegiatan.kegiatan_desc}}
					</p>
					<mdb-row col="12">
						<mdb-col md="6" sm="4">
							<h5>Waktu</h5>
							<p>
								{{$moment(events.kegiatan.tanggal_awal).format("LL")}} - {{$moment(events.kegiatan.tanggal_akhir).format("LL")}}
							</p>
						</mdb-col>
						<mdb-col md="6" sm="4">
							<h5>Nilai SKP</h5>
							<p>
								{{events.kegiatan.nomor_skp ? events.kegiatan.nomor_skp : '-'}}
							</p>
						</mdb-col>
					</mdb-row>
					<mdb-row class="mt-3" col="12">
						<mdb-col md="12" xs="12" sm="12" col="12">
							<mdb-btn class="btn my__btn-secondary rounded-pill btn-block mb-2" :size="`${$device.isDesktop ? 'md' : 'sm'}`" @click="GoToLogin"><mdb-icon far icon="credit-card" size="lg"/>&nbsp; Beli kelas
							</mdb-btn>
						</mdb-col>
					</mdb-row>
				</mdb-col>

				<!-- image flyer row -->
				<mdb-col v-if="$device.isDesktop" lg="4" xs="4" sm="12" class="event__flyer">
					<img :src="events.kegiatan.photo">
				</mdb-col>
			</mdb-row>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['events', 'loading'],

		data(){
			return {
				timer: 0,
				value: 0,
				max: 100,
			}
		},

		mounted(){
			this.startTimer()
		},

		methods: {

			GoToLogin() {
				if (this.event_id === this.$route.params.id) {
					const data = {
						event_id: this.event_id,
						event_path: this.event_path,
					};
					this.SetEventLogin(data);
				} else {
					this.$router.push({ name: "auth-login" });
				}
			},

			SetEventLogin(data) {
				this.$store.dispatch("config/setEventToLogin", JSON.stringify(data));
				this.$router.push({
					name: "auth-login",
				});
			},
			startTimer() {
				let vm = this;
				let timer = setInterval(function() {
					vm.value += 6;
					if (vm.value >= vm.max) clearInterval(timer);
				}, 100);
			},
		},

		computed: {
			set_event() {
				return this.$store.getters["config/ConfigSetEventLogin"];
			}
		},
	}
</script>