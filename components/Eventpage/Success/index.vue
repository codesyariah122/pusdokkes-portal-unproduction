<template>
	<div>
		<mdb-row class="justify-content-start pembayaran__card">
			<mdb-col  lg="8" xs="10" sm="12" class="mb-3">
				<b-card no-body class="overflow-hidden shadow-none">
					<b-row v-if="$device.isDesktop" no-gutters class="mt-2 row justify-content-start ml-2 rincian__event-table">
						<h5>Ringkasan Belanja</h5>
						<table class="table table-borderless">
							<thead>
								<tr>
									<th scope="row">
										<b>Kelas</b>
									</th>
									<th scope="row">
										<b>Tanggal</b>
									</th>
									<th scope="row">
										<b>Subtotal</b>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										{{data_pendaftaran.kegiatan_title}}
									</td>
									<td>
										{{$moment(details.tanggal_awal).format("LLLL")}} - {{$moment(details.tanggal_akhir).format("LLLL")}}
									</td>
									<td>
										{{data_pendaftaran.harga}}
									</td>
								</tr>
							</tbody>
						</table>
						<b-col md="12" xs="12" sm="12">
							<div class="dropdown-divider"></div>
						</b-col>
						<b-col md="5" xs="12" sm="12">
							<b-card title="Total Harga" class="shadow-none rincian__bayar">
								<b-card-text>
									<h2> {{$format(data_pendaftaran.harga)}} </h2>
								</b-card-text>
							</b-card>
						</b-col>
					</b-row>
					<b-row v-else no-gutters class="mt-2 row justify-content-start rincian__event-table mb-3">
						<h5>Ringkasan Belanja</h5>
						<table class="table table-borderless">
							<thead>
								<tr>
									<th scope="row">
										<b>Kelas</b>
									</th>
									<th scope="row">
										<b>Tanggal</b>
									</th>
									<th scope="row">
										<b>Subtotal</b>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										{{data_pendaftaran.kegiatan_title}}
									</td>
									<td>
										{{$moment(details.tanggal_awal).format("LLLL")}} - {{$moment(details.tanggal_akhir).format("LLLL")}}
									</td>
									<td>
										{{data_pendaftaran.harga}}
									</td>
								</tr>
							</tbody>
						</table>
						<b-col md="12" xs="12" sm="12">
							<div class="dropdown-divider"></div>
						</b-col>
						<b-col md="5" xs="12" sm="12">
							<b-card title="Total Harga" class="shadow-none rincian__bayar">
								<b-card-text>
									<h2> {{$format(data_pendaftaran.harga)}} </h2>
								</b-card-text>
							</b-card>
						</b-col>
					</b-row>
				</b-card>
			</mdb-col>
		</mdb-row>
		<mdb-row  :class="`${$device.isDesktop ?  'row justify-content-end check__point' : 'row justify-content-center check__point'}`">
			<mdb-col col="12" lg="4" sm="12">
				<b-card class="shadow-none list__bank">
					<b-card-text>
						<div class="input__bank">
							<mdb-row v-if="error" class="row justify-content-center">
								<mdb-col md="12" class="mb-2">
									<mdb-alert v-if="validation" color="danger">
										{{validation.message}}
									</mdb-alert>
								</mdb-col>
							</mdb-row>
							<b-container>
								<div v-if="parseInt(pembayaran.bank.id) == 1">

									<b-card no-body class="shadow-none overflow-hidden card__bank-list">
										<b-row no-gutters>
											<b-col md="2" class="mt-5">
												<b-card-img :src="require('~/assets/images/bank/logo-bank-bca.svg') " alt="Image" class="img-fluid rounded-circle"></b-card-img>
											</b-col>
											<b-col md="10">
												<b-card-body title="Transfer Bank">
													<b-card-text>
														<b-list-group>
															<b-list-group-item button>
																Bank {{pembayaran.bank.nama}} 
															</b-list-group-item>
															<b-list-group-item button>
																a.n : <span class="text-capitalize">{{pembayaran.bank.nama_rek}}</span> 
															</b-list-group-item>
															<b-list-group-item button disabled>No Rek : {{pembayaran.bank.no_rek}}</b-list-group-item>
														</b-list-group>
													</b-card-text>
												</b-card-body>
											</b-col>
										</b-row>
									</b-card>
								</div>
								<div v-else>
									<b-card no-body class="shadow-none overflow-hidden card__bank-list">
										<b-row no-gutters>
											<b-col md="4" class="mt-5">
												<b-card-img :src="require('~/assets/images/bank/logo-bank-mandiri.svg')" alt="Image" class="rounded-0"></b-card-img>
											</b-col>
											<b-col md="8">
												<b-card-body title="Transfer Bank">
													<b-card-text>
														<b-list-group>
															<b-list-group-item button>
																Bank {{pembayaran.bank.nama}} 
															</b-list-group-item>
															<b-list-group-item button>
																a.n : <span class="text-capitalize">{{pembayaran.bank.nama_rek}}</span> 
															</b-list-group-item>
															<b-list-group-item button disabled>No Rek : {{pembayaran.bank.no_rek}}</b-list-group-item>
														</b-list-group>
													</b-card-text>
												</b-card-body>
											</b-col>
										</b-row>
									</b-card>
								</div>
								<div v-else>
									<small>No Bank History</small>
								</div>
								<div class="dropdown-divider mt-2"></div>
							</b-container>
						</div>
						<mdb-col lg="12" xs="12" sm="12" class="col__card-upload-file mt-2 mb-2">

							<div v-if="checks.data" class="form-group">
								<mdb-row class="row justify-content-center">
									<mdb-col md="12" class="mt-2 mb-2">
										<b-badge pill variant="primary">Bukti Bayar Anda</b-badge>
									</mdb-col>
									<mdb-col md="12" class="mb-4">
										<img :src="checks.data.bukti_bayar" width="350" class="img-fluid img-thumbnail">
									</mdb-col>

									<mdb-col md="12">
										<mdb-btn disabled :color="data_pendaftaran.status_pendaftaran_value === 'Terdaftar' ? 'success' : 'warning'" class="btn text-white rounded-pill btn-md btn-block shadow-none">{{data_pendaftaran.status_pendaftaran_value }} &nbsp; <mdb-icon icon="pause" size="lg"/> </mdb-btn>
									</mdb-col>

									<mdb-col md="12" class="mt-3">
										<nuxt-link :to="`/detail/event/${id}/${$slug(your_events.kegiatan_title ? your_events.kegiatan_title : '')}`" class="btn btn-primary btn-md rounded-pill btn-block">
											<div v-if='data_pendaftaran.status_pendaftaran_value === "Menunggu Konfirmasi"'><mdb-icon far icon="calendar-alt" size="lg"/>&nbsp; Check Status Pendaftaran
											</div>
											<div v-else>
												Selesai Terkonfirmasi &nbsp;  <mdb-icon icon="check-double" size="lg"/>
											</div>
										</nuxt-link>
									</mdb-col>

								</mdb-row>
							</div>

							<div v-else-if="data_pendaftaran.status_pendaftaran_value" class="form-group">
								<mdb-row class="row justify-content-center">
									<mdb-col md="12">
										<small class="text-danger mt-5 mb-2 blockquote-footer">
											{{data_pendaftaran.status_pendaftaran_value === 'Menunggu Konfirmasi' ? 'Admin kami akan segera mengkonfirmasi' : 'Terkonfirmasi' }}
										</small>
										<mdb-btn disabled :color="data_pendaftaran.status_pendaftaran_value === 'Terdaftar' ? 'success' : 'warning'" class="btn text-white rounded-pill btn-sm btn-block shadow-none">{{data_pendaftaran.status_pendaftaran_value }} &nbsp; <mdb-icon icon="pause" size="lg"/> </mdb-btn>
									</mdb-col>

									<mdb-col md="12" class="mt-3">
										<nuxt-link :to="`/detail/event/${id}/${$slug(your_events.kegiatan_title ? your_events.kegiatan_title : '')}`" class="btn btn-primary rounded-pill btn-sm btn-block shadow-none">
											<div v-if='data_pendaftaran.status_pendaftaran_value === "Menunggu Konfirmasi"'><mdb-icon far icon="calendar-alt" size="lg"/>&nbsp; Check Status Pendaftaran
											</div>
											<div v-else>
												Selesai Terkonfirmasi &nbsp;  <mdb-icon icon="check-double" size="lg"/>
											</div>
										</nuxt-link>
									</mdb-col>

								</mdb-row>
							</div>

							<div v-else class="form-group mt-3">
								<div v-if="status_pembayaran" class="form-group">
									<mdb-alert color="info">
										{{new_message}}
									</mdb-alert>
								</div>
							</div>

						</mdb-col>
					</b-card-text>

				</b-card>
			</mdb-col>
		</mdb-row>
	</div>
</template>


<script>

	export default{
		props: ['id', 'your_events', 'data_pendaftaran', 'kegiatan', 'bank', 'checks', 'token', 'api_url', 'loading', 'details'],

		data(){
			return{
				field: {},
				photo:null,
				new_message:'',
				status_pembayaran: '',
				new_preview: '',
				total_bayar: '',
				status_bayar: null,
				error: null,
				form_data:{},
				pembayaran: {
					bank: {},
					kegiatan: {}
				}
			}
		},

		mounted(){
			console.log(this.bank),
			this.CheckPembayaranUser()
		},

		methods: {

			CheckPembayaranUser(){
				const url = `${this.api_url}/web/event/${this.$route.params.id}/konfirmasi`
				this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`
				this.$axios.get(url)
				.then(({data}) => {
					this.pembayaran.kegiatan = data.kegiatan
					this.pembayaran.bank = data.bank
					this.CheckPembayaran(this.id, data.bank.id)
					
				})
				.catch(err => console.log(err))
			},

			CheckPembayaran(id, bank_id){
				const url = `${this.api_url}/web/event/${id}/daftar`
				this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`
				this.$axios.post(url, {
					bank_id: bank_id
				})
				.then(({data}) => {
					console.log(data)
					if(data.message === "Anda telah terdaftar pada event ini" || data.message === ""){
						this.status_pembayaran = true
						this.new_message = "Terima kasih telah mendaftar, segera lakukan pembayaran, kemudian unggah bukti pembayaran Anda melalui tombol di bawah ini !"
					}else{
						this.new_message = data.message
					}
				})
			}
		}
	}
</script>