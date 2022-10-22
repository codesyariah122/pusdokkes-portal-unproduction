<template>
	<div class="card__list" :style="berita__list_style">
		<mdb-container>
			<mdb-row class="row justify-content-center header__ppkc-list-page">
				<mdb-col lg="12" xs="12" sm="12" style="margin-top: 32px">
					<h2 style="font-weight: 700">Pengaduan</h2>
				</mdb-col>
				<mdb-col lg="12" xs="12" sm="12">
					<p>
						Kirimkan pengaduan anda seputar dokkes polri melalui form di bawah ini.
					</p>
				</mdb-col>
			</mdb-row>
			<!-- delay looping data with loader spinner -->

			<!-- show card berita -->
			<mdb-row class="row justify-content-center mt-3 mb-5 form__content">
				<!-- List berita inside global-components -->
				<mdb-col lg="8" xs="8" sm="12">
					<b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
						<b-form-group id="input-group-2" label="Nama :" label-for="input-2">
							<b-form-input
							id="input-2"
							v-model="form.nama"
							placeholder="Inputkan nama / nama lengkap Anda"
							required autocomplete="off"
							></b-form-input>
						</b-form-group>

						<b-form-group
						id="input-group-1"
						label="No KTP :"
						label-for="input-1"
						description="Harap isi dengan no kartu tanda penduduk Anda."
						>
						<b-form-input
						id="input-1"
						v-model="form.no_ktp"
						type="number"
						placeholder="Inputkan No KTP Anda"
						required autocomplete="off"
						></b-form-input>
					</b-form-group>

						<b-form-group
						id="input-group-1"
						label="No Telephone :"
						label-for="input-1"
						description="Harap isi dengan no telephone yang aktif Anda gunakan."
						>
						<!-- <b-form-input
						id="input-1"
						v-model="form.no_telepon"
						type="number"
						placeholder="Inputkan No Telephone Anda"
						required autocomplete="off"
						></b-form-input> -->
						<client-only>
							<vue-tel-input
							v-model="form.no_telepon"
							></vue-tel-input>
						</client-only>
					</b-form-group>

					<b-form-group id="input-group-3" label="Pengaduan :" label-for="input-3">
						<b-form-textarea
						id="textarea"
						v-model="form.pengaduan"
						placeholder="Inputkan pengaduan Anda ..."
						rows="6"
						max-rows="6" autocomplete="off"
						></b-form-textarea>
					</b-form-group>

					<b-button class="mt-3" type="submit" variant="primary">
						<span v-if="loading">
							<b-spinner small type="grow"></b-spinner>
							Loading...
						</span>
						<span v-else>Submit</span>
					</b-button>
					<b-button class="mt-3" type="reset" variant="danger" @click="onReset">Cancel</b-button>
				</b-form>
				<b-alert class="mt-5" v-if="pengaduan !== null" show variant="success">
					<h4 class="alert-heading">Terima kasih</h4>
					<hr>
					<p class="mb-0">
						Terima kasih <strong>{{pengaduan.nama}}</strong>, dengan nomor telepon : <strong> {{pengaduan.no_telepon}} </strong>, pengaduan Anda segera kami proses.
					</p>
				</b-alert>
			</mdb-col>
		</mdb-row>
	</mdb-container>
</div>
</template>


<script>
	export default {
		data() {
			return {
				loading: null,
				berita__list_style:
				this.$router.path == "berita" && this.$device.isDesktop
				? "margin-top: 7rem;"
				: "margin-top: 5rem;",
				form: {
					nama: '',
					no_ktp: '',
					no_telepon: '',
					pengaduan: null
				},
				show: true,
				pengaduan: null
			};
		},

		beforeMount(){
			this.ConfigApiUrl()
		},

		mounted() {
		},

		methods: {
			ConfigApiUrl() {
				const api_url = process.env.NUXT_ENV_API_URL;
				this.$store.dispatch("config/storeConfigApiUrl", api_url);
			},

			onSubmit(event) {
				if(this.form.no_ktp.length === 16 && this.form.no_telepon === 13){
					this.pengaduan = JSON.stringify(this.form)
					this.loading = true 
					this.$axios
					.post(`${this.api_url}/web/pengaduan`, {
						"nama": this.form.nama,
						"no_telepon": this.form.no_telepon,
						"pengaduan": this.form.pengaduan
					}, {
						"headers": {
							"content-type": "application/json",
						}
					})
					.then(({data}) => {
						this.$swal({
							position: 'top-end',
							icon: 'success',
							title: `Terima kasih, Pengaduan Anda Segera Di Proses`,
							showConfirmButton: false,
							timer: 1500
						})
						setTimeout(() => {
							this.pengaduan = data.pengaduan
							this.form.no_telepon = ''
							this.form.no_ktp = ''
							this.form.nama = ''
							this.form.pengaduan = null
						}, 1500)
					})
					.catch(err => console.error(err))
					.finally(() => {
						setTimeout(() => {
							this.loading = false
						}, 1500)
					})
				}else{
					this.$swal({
						icon: 'error',
						title: 'Oops...',
						text: 'Digit No Telephone / No KTP kurang atau tidak sesuai !'
					})
				}
			},
			onReset(event) {
				this.pengaduan = null
				event.preventDefault()
				this.form.no_telepon = ''
				this.form.no_ktp = ''
				this.form.nama = ''
				this.form.pengaduan = null
				this.show = false
				this.$nextTick(() => {
					this.show = true
				})
			}
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
	text-transform: capitalize;
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

.truncate2 {
	display: -webkit-box;
	-webkit-line-clamp: var(--line-clamp, 2);
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
</style>