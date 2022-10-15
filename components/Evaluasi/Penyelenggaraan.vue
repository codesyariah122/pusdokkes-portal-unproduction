<template>
  <div class="pre__test">
    <mdb-container>
      <div v-if="loading_soal">
        <mdb-row col="12" class="row justify-content-center">
          <mdb-col lg="12">
            <b-progress
              :max="max"
              height="2rem"
              :striped="true"
              show-progress
              :animated="true"
              class="mb-3"
            >
              <b-progress-bar :value="value" variant="success">
                <h5 v-if="value > 0" class="text-white">Loading</h5>
              </b-progress-bar>
            </b-progress>
          </mdb-col>
        </mdb-row>
      </div>

      <div v-else>
        <mdb-row
          v-if="is_already_post_test == 0"
          col="12"
          class="row justify-content-center"
        >
          <mdb-col lg="12" xs="12" sm="12">
            <mdb-alert color="primary">
              <mdb-icon icon="info-circle" size="lg" /> Anda belum menyelesaikan
              post test. Mohon mengikuti post test untuk mengisi evaluasi
            </mdb-alert>
          </mdb-col>
        </mdb-row>

        <div v-else>
          <mdb-row
            v-if="is_already == 1"
            col="12"
            class="row justify-content-center"
          >
            <mdb-col lg="12" xs="12" sm="12">
              <mdb-alert color="primary">
                <mdb-icon icon="info-circle" size="lg" /> Anda telah
                menyelesaikan evaluasi penyelenggaraan ini !
              </mdb-alert>
            </mdb-col>
          </mdb-row>

          <mdb-row col="12" class="row justify-content-center mb-3">
            <mdb-col lg="12" xs="12" sm="12">
              <small class="text-primary">
                Mohon isi evaluasi untuk penyelenggaraan berikut
              </small>
            </mdb-col>
          </mdb-row>

          <mdb-row
            col="12"
            class="row justify-content-center"
            v-for="(item, index) in lists"
            :key="item.id"
          >
            <mdb-col lg="12" class="test__content">
              <h4>No. {{ item.urutan }}</h4>
              <p>{{ item.aspek_dinilai }}</p>
              <div class="">
                <form method="POST" class="">
                  <div class="d-flex">
                    <fieldset
                      v-for="(choice_item, index_choice) in choice_list"
                      :key="choice_item"
                      class="ml-3"
                    >
                      <input
                        type="radio"
                        :value="choice_item"
                        v-model="item.jawaban"
                        required
                        @change="ChangeJawaban(item)"
                        :disabled="is_already == 1"
                      />
                      <label class="answer__item">
                        <b>{{ choice_item }}</b>
                      </label>
                    </fieldset>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Jawaban Custom"
                    v-model="item.jawaban_custom"
                    autofocus
                    :disabled="item.is_disabled || is_already == 1"
                  />
                </form>
              </div>
            </mdb-col>
          </mdb-row>

          <h4>Hal-hal yang sudah baik:</h4>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            :readonly="is_already == 1"
            v-model="hal_sudah_baik"
          ></textarea>

          <h4 class="mt-4">Hal-hal yang memerlukan perbaikan:</h4>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            :readonly="is_already == 1"
            v-model="hal_perlu_perbaikan"
          ></textarea>

          <h4 class="mt-4">Saran</h4>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            :readonly="is_already == 1"
            v-model="saran"
          ></textarea>

          <mdb-row
            v-if="is_already == 0"
            col="12"
            class="row justify-content-center mt-4"
          >
            <mdb-col lg="12">
              <div class="mb-2">
                <a
                  href=""
                  class="btn btn-primary btn-md rounded btn-block"
                  @click.prevent="SubmitTest"
                >
                  <div v-if="loading_answer">
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    loading_answer...
                  </div>
                  <div v-else>Submit <mdb-icon far icon="paper-plane" /></div>
                </a>
              </div>
            </mdb-col>
          </mdb-row>
        </div>
      </div>
    </mdb-container>
  </div>
</template>

<script>
export default {
  props: [
    "id_test",
    "token",
    "api_url",
    "pelatihans",
    "details",
    "username",
    "kegiatan_id",
  ],

  data() {
    return {
      loading_soal: null,
      loading_answer: null,
      is_already: 0,
      is_already_post_test: 0,
      lists: [],
      profiles: [],
      timer: 0,
      value: 0,
      max: 100,
      choice_list: ["50", "60", "70", "80", "90", "100", "custom"],
      saran: null,
      hal_sudah_baik: null,
      hal_perlu_perbaikan: null,
    };
  },

  mounted() {
    this.Evaluasi();
    this.UserProfileData();
  },

  methods: {
    UserProfileData() {
      if (this.token) {
        const url = `${this.api_url}/web/user`;
        this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`;
        this.$axios
          .get(url)
          .then(({ data }) => {
            this.profiles = data.user;
          })
          .catch((err) => console.log(err.response ? err.response : ""));
      }
    },

    ChangeJawaban(item) {
      if (item.jawaban == "custom") {
        item.is_disabled = false;
      } else {
        item.is_disabled = true;
        item.jawaban_custom = "";
      }
    },

    Evaluasi() {
      this.loading_soal = true;
      const url = `${this.api_url}/web/kegiatan/evaluasi-penyelenggaraan/list?kegiatan_id=${this.kegiatan_id}`;
      this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`;
      this.$axios
        .get(url)
        .then(({ data }) => {
          console.log(data.evaluasi_saran);
          if (data.evaluasi_saran) {
            this.saran = data.evaluasi_saran.saran;
            this.hal_sudah_baik = data.evaluasi_saran.hal_sudah_baik;
            this.hal_perlu_perbaikan = data.evaluasi_saran.hal_perlu_perbaikan;
          } else {
            this.saran = "";
            this.hal_sudah_baik = "";
            this.hal_perlu_perbaikan = "";
          }

          this.lists = data.list_data;
          this.is_already = data.is_already;
          this.is_already_post_test = data.is_already_post_test;

          this.lists.forEach((entry) => {
            entry.is_disabled = true;
            console.log(entry.jawaban);
            if (["50", "60", "70", "80", "90", "100"].includes(entry.jawaban)) {
              entry.jawaban = entry.jawaban;
            } else {
              if (entry.jawaban != null && entry.jawaban) {
                entry.jawaban_custom = entry.jawaban;
                entry.jawaban = "custom";
              } else {
                entry.jawaban_custom = "";
              }
            }
          });
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this.startTimer();
          this.loading_soal = false;
        });
    },

    SubmitTest() {
      //check if already filled all question
      var isFilled = 1;
      this.lists.forEach((entry) => {
        if (entry.jawaban == "custom") {
          if (entry.jawaban_custom == null || !entry.jawaban_custom.trim()) {
            isFilled = 0;
          }
        } else {
          if (entry.jawaban == null) {
            isFilled = 0;
          }
        }
      });

      if (isFilled == 0) {
        this.$swal("Mohon isi semua hasil evaluasi", "", "success");
        return;
      }

      window.scrollTo(0, 0);
      this.loading_soal = true;

      this.$swal({
        title: "Apakah Anda yakin ingin mengirimkan hasil evaluasi ini ?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Ya, Kumpulkan jawaban saya",
        denyButtonText: `Tidak`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.KirimJawaban();
        } else if (result.isDenied) {
          this.loading_soal = false;
        }
      });
    },

    KirimJawaban() {
      window.scrollTo(0, 0);
      const url = `${this.api_url}/web/kegiatan/evaluasi-penyelenggaraan/jawaban`;
      this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`;

      var paramJawaban = [];
      this.lists.forEach((entry) => {
        if (entry.jawaban == "custom") {
          paramJawaban.push({
            kegiatan_id: this.kegiatan_id,
            pelatihan_evaluasi_penyelenggaraan_id: entry.id,
            jawaban: entry.jawaban_custom,
          });
        } else {
          paramJawaban.push({
            kegiatan_id: this.kegiatan_id,
            pelatihan_evaluasi_penyelenggaraan_id: entry.id,
            jawaban: entry.jawaban,
          });
        }
      });

      var params = {
        kegiatan_id: this.kegiatan_id,
        saran: this.saran,
        hal_sudah_baik: this.hal_sudah_baik,
        hal_perlu_perbaikan: this.hal_perlu_perbaikan,
        jawabans: paramJawaban,
      };
      this.$axios
        .post(url, params)
        .then(({ data }) => {
          console.log(data);
          this.$swal(data.message, "", "success");
          this.is_already = 1;
        })
        .catch((err) => {
          console.log(err);
          this.$swal("Gagal menyimpan evaluasi. Coba lagi", "", "success");
        })
        .finally(() => {
          setTimeout(() => {
            this.loading_answer = false;
            this.loading_soal = false;
          }, 2500);
        });
    },

    startTimer() {
      let vm = this;
      let timer = setInterval(function () {
        vm.value += 6;
        if (vm.value >= vm.max) clearInterval(timer);
      }, 100);
      vm.value = 0;
    },
  },
};
</script>
