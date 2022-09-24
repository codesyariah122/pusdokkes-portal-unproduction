<template>
	<div>
		<mdb-row class="justify-content-start pembayaran__card">
			<mdb-col lg="8" xs="10" sm="12" class="mb-3">
				<b-card no-body class="overflow-hidden shadow-none">
					<b-row v-if="$device.isDesktop" no-gutters class="mt-2 row justify-content-start ml-2 rincian__event-table">
						<h5>Ringkasan Belanja Pelatihan</h5>
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
										{{kegiatan.kegiatan_title}}
									</td>
									<td>
										{{$moment(details.tanggal_awal).format("LLLL")}} - {{$moment(details.tanggal_akhir).format("LLLL")}}
									</td>
									<td>
										{{kegiatan.harga}}
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
									<h2> {{$format(kegiatan.harga)}} </h2>
								</b-card-text>
							</b-card>
						</b-col>
					</b-row>
					<b-row v-else  no-gutters class="mt-2 row justify-content-start ml-2 rincian__event-table">
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
										{{kegiatan.kegiatan_title}}
									</td>
									<td>
										{{$moment(details.tanggal_awal).format("LLLL")}} - {{$moment(details.tanggal_akhir).format("LLLL")}}
									</td>
									<td>
										{{kegiatan.harga}}
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
									<h2> {{$format(kegiatan.harga)}} </h2>
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
											<b-col md="4" class="mt-5">
												<b-card-img :src="require('~/assets/images/bank/logo-bank-bca.svg')" alt="Image" class="rounded-0"></b-card-img>
											</b-col>
											<b-col md="8">
												<b-card-body title="Transfer Bank">
													<b-card-text>
														<h6 class="mt-2">Bank {{pembayaran.bank.nama}} </h6>
														<p> a.n : <span class="text-capitalize">{{pembayaran.bank.nama_rek}}</span> </p>

														<h5>
															{{pembayaran.bank.no_rek}}
														</h5>
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
														<h6 class="mt-2">Bank {{pembayaran.bank.nama}} </h6>
														<p> a.n : <span class="text-capitalize">{{bank.nama_rek}}</span> </p>

														<h5>
															{{pembayaran.bank.no_rek}}
														</h5>
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
							
							<form>
								<div v-if="photo" class="form-group">
									<mdb-row class="row justify-content-center">
										<mdb-col md="12" class="mt-2 mb-2">
											<b-badge pill variant="primary">Bukti Bayar Anda</b-badge>
										</mdb-col>
										<mdb-col md="12" class="mb-2">
											<img :src="photo" width="350" class="img-fluid img-thumbnail">
										</mdb-col>
										<mdb-col md="12" class="mb-4 mt-5">
											<div class="file-input-2">
												<input type="file" id="file" class="rounded-pill file" @change="FileImage($event)">
												<label for="file">
													<mdb-icon icon="upload" size="lg"/>&nbsp; Ubah Bukti Pembayaran
												</label>
											</div>
										</mdb-col>
										<mdb-col md="12">
											<mdb-btn @click="LanjutPendaftaran" class="btn my__btn-primary rounded-pill btn-block text-white btn-md"><mdb-icon far icon="credit-card" size="lg" />&nbsp; Lanjutkan Pendaftaran</mdb-btn>
										</mdb-col>

									</mdb-row>
								</div>

								<div v-else class="form-group mt-3">
									<div v-if="status_pembayaran" class="form-group">
										<mdb-alert color="info">
											{{new_message}}
										</mdb-alert>
									</div>
									<div class="file-input">
										<input type="file" id="file" class="rounded-pill file" @change="FileImage($event)">
										<label for="file">
											<mdb-icon icon="upload" size="lg"/>&nbsp; Unggah Bukti Pembayaran
										</label>
									</div>
								</div>

							</form>
						</mdb-col>
					</b-card-text>
					
				</b-card>
			</mdb-col>
		</mdb-row>

	</div>
</template>


<script>

	export default{
		props: ['id', 'kegiatan', 'bank', 'token', 'api_url', 'loading', 'details'],

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
				},
				data_bank: {},
				data_kegiatan: {}
			}
		},

		mounted(){
			this.CheckPembayaranUser()
		},

		methods: {
			FileImage(e){
				this.field.photo = e.target.files[0]
				this.field.preview = URL.createObjectURL(e.target.files[0])
				let formData = new FormData()
				formData.append("photo", this.field.photo)
				this.form_data = formData
				this.photo = URL.createObjectURL(e.target.files[0])
				console.log(this.photo)
			},

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

			LanjutPendaftaran(){
				const config = {
					headers: {'content-type' : 'multipart/form-data'}
				}
				this.$axios.post(`${this.api_url}/web/event/${this.id}/buktibayar`, this.form_data, config)
				.then(({data}) => {
					this.new_preview = data.kegiatan_peserta.bukti_bayar

					this.total_bayar = data.kegiatan_peserta.total_bayar

					this.$swal({
						position: 'top-end',
						icon: 'success',
						title: "Kami akan segera memverifikasi pembayaran anda",
						showConfirmButton: false,
						timer: 1500
					})

					this.status_bayar = true

					const data_storage = {
						data: data.kegiatan_peserta,
						message: "Proses pembayaran Anda sedang di check oleh admin kami. Anda dapat mengakses kelas yang Anda beli, Setelah pembayaran Anda di verifiksi oleh sistem kami.",
						bank: this.pembayaran.bank,
						kegiatan: this.pembayaran.kegiatan
					}

					localStorage.setItem("success", JSON.stringify(data_storage))

					this.$router.push({
						name: 'events-id-success',
						params: {
							id: this.id,
							check: false,
							data_storage: data_storage
						}
					})

				})
				.catch(err => console.log(err))
				.finally(() => {
					console.log("Ok")
				})
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
				.catch(err => console.error(err.response))
			}
		}
	}
</script>