<template>
  <div>
    <mdb-container v-if="data.success">
      <mdb-row col="12" class="row justify-content-center">
        <mdb-col lg="12" xs="12" sm="12">
          <mdb-alert color="success">
            <mdb-icon icon="check" size="lg" /> {{ data.success }}
          </mdb-alert>
        </mdb-col>
      </mdb-row>
    </mdb-container>

    <div v-if="loading">
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
        <div class="row">
          <div class="col-12">
            <b-button
              v-b-modal="`modal-rtl`"
              size="sm"
              style="width: 150px; margin-left: 20px"
              ref="btnShow"
              class="btn float-right"
              >Add</b-button
            >
          </div>
        </div>
        <div id="table-rtl" class="table-responsive">
          <table class="table table-hover" style="overflow-x: hidden">
            <thead>
              <tr>
                <th
                  v-for="(item, index) in data.fields"
                  :key="index + 1"
                  scope="col"
                >
                  {{ item.title }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="loading">
                <td colspan="5">
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border text-primary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr v-else v-for="(item, index) in data.rows" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.jenis_kegiatan }}</td>
                <td>{{ $moment(item.tanggal_kegiatan).format("LL") }}</td>
                <td>{{ item.sasaran }}</td>
                <td>{{ item.keterangan }}</td>
                <td>
                  <b-button
                    @click="openModalEdit(item)"
                    size="sm"
                    ref="btnShow"
                    class="btn"
                    >Edit</b-button
                  >
                  <b-button
                    @click="openModalDelete(item)"
                    size="sm"
                    ref="btnShow"
                    class="btn"
                    >Hapus</b-button
                  >
                </td>
              </tr>
            </tbody>
          </table>

          <b-modal
            :id="`modal-rtl`"
            ref="modalRtl"
            hide-footer
            v-model="dialogRtl"
          >
            <b-row>
              <b-col cols="12">
                <h4 class="card-title">Evaluasi RTL</h4>
                <form>
                  <div class="form-group">
                    <label for="sasaran"> Jenis Kegiatan </label>
                    <input
                      type="text"
                      class="form-control"
                      id="input_no_anggota"
                      autofocus
                      v-model="data.form.jenis_kegiatan"
                    />
                  </div>
                  <div class="form-group">
                    <label for="sasaran"> Tanggal Kegiatan </label>
                    <input
                      type="date"
                      class="form-control"
                      id="input_nama_ktp"
                      v-model="data.form.tanggal_kegiatan"
                    />
                  </div>
                  <div class="form-group">
                    <label for="sasaran"> Sasaran </label>
                    <textarea
                      id="sasaran"
                      class="form-control"
                      v-model="data.form.sasaran"
                    >
                    </textarea>
                  </div>
                  <div class="form-group">
                    <label for="sasaran"> Keterangan </label>
                    <textarea
                      id="keterangan"
                      class="form-control"
                      v-model="data.form.keterangan"
                    >
                    </textarea>
                  </div>
                  <div class="form-group m-3">
                    <button
                      type="button"
                      class="btn btn-block rounded-pill btn-primary"
                    >
                      <div v-if="loading_input">
                        <span
                          class="spinner-border spinner-border-sm text-primary"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Loading...
                      </div>
                      <div v-else @click="SendingData">Simpan</div>
                    </button>
                  </div>
                </form>
              </b-col>
            </b-row>
          </b-modal>

          <b-modal ref="modalDeleteRtl" hide-footer v-model="dialogDelete">
            <b-row>
              <b-col cols="12">
                <h4 class="card-title">HapusEvaluasi RTL</h4>
                <form>
                  <p>Apakah anda akan menghapus evaluasi ini?</p>
                  <div class="form-group m-3">
                    <button
                      type="button"
                      class="btn btn-block rounded-pill btn-primary"
                    >
                      <div v-if="loading_input">
                        <span
                          class="spinner-border spinner-border-sm text-primary"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Loading...
                      </div>
                      <div v-else @click="HapusData">Hapus</div>
                    </button>
                  </div>
                </form>
              </b-col>
            </b-row>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: [
    "api_url",
    "token",
    "kegiatan_id",
    "pelatihan_id",
    "tests",
    "evaluasi",
  ],
  data() {
    return {
      dialogRtl: false,
      dialogDelete: false,
      data: {
        fields: [
          { title: "#" },
          { title: "Jenis Kegiatan" },
          { title: "Tanggal Kegiatan" },
          { title: "Sasaran" },
          { title: "Keterangan" },
          { title: "Action" },
        ],
        rows: [],
        send: {
          title: "",
        },
        form: {
          id: null,
          jenis_kegiatan: "",
          tanggal_kegiatan: "",
          sasaran: "",
          keterangan: "",
          kegiatan_id: "",
        },
        jawabans: [],
        success: "",
      },
      showModal: true,
      loading: null,
      loading_input: null,
      is_already: null,
      is_already_post_test: 0,
      style: `${
        this.$device.isDesktop ? "margin-top: -.3rem;" : "margint-top:0;"
      }`,
    };
  },

  mounted() {
    this.ListsData();
  },

  methods: {
    ListsData() {
      this.loading = true;
      const url = `${this.api_url}/web/kegiatan/evaluasi-rtl/list?kegiatan_id=${this.kegiatan_id}`;
      this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`;
      this.$axios
        .get(url)
        .then(({ data }) => {
          // console.log(data)
          this.data.rows = data.list_data;
          // console.log(this.data.rows)
          this.data.rows.forEach((item, index) => {
            if (item.sasaran && item.keterangan)
              this.data.jawabans.push({
                kegiatan_id: this.kegiatan_id,
                pelatihan_id: item.id,
                sasaran: item.sasaran,
                keterangan: item.keterangan,
              });
          });
          // console.log(this.data.jawabans)
          this.is_already = data.is_already;
          this.is_already_post_test = data.is_already_post_test;

          this.IsAlready(this.is_already);
        })
        .catch((err) => console.log(err.response))
        .finally(() => {
          this.loading = false;
        }, 2500);
    },

    PressData(e) {
      this.data.jawabans.push(e.target.value);
      console.log(this.data.jawabans);
    },

    SendingData() {
      this.loading_input = true;

      this.data.form.kegiatan_id = this.kegiatan_id;

      if (this.data.form.id) {
        const url = `${this.api_url}/web/kegiatan/evaluasi-rtl-new/jawaban/${this.data.form.id}`;
        this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`;
        this.$axios
          .put(url, this.data.form)
          .then(({ data }) => {
            console.log(data);
            this.data.success = data.message;
            this.$swal(data.message, "", "success");

            this.ListsData();
            this.data.form.jenis_kegiatan = "";
            this.data.form.tanggal_kegiatan = "";
            this.data.form.sasaran = "";
            this.data.form.keterangan = "";
            this.data.form.id = null;

            this.dialogRtl = false;
          })
          .catch((err) => console.log(err.response))
          .finally(() => {
            setTimeout(() => {
              this.loading_input = false;
            }, 2500);
          });
      } else {
        const url = `${this.api_url}/web/kegiatan/evaluasi-rtl-new/jawaban`;
        this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`;
        this.$axios
          .post(url, this.data.form)
          .then(({ data }) => {
            console.log(data);
            this.data.success = data.message;
            this.$swal(data.message, "", "success");

            this.ListsData();
            this.data.form.jenis_kegiatan = "";
            this.data.form.tanggal_kegiatan = "";
            this.data.form.sasaran = "";
            this.data.form.keterangan = "";
            this.data.form.id = null;

            this.dialogRtl = false;
          })
          .catch((err) => console.log(err.response))
          .finally(() => {
            setTimeout(() => {
              this.loading_input = false;
            }, 2500);
          });
      }
    },

    HapusData() {
      this.loading_input = true;

      const url = `${this.api_url}/web/kegiatan/evaluasi-rtl-new/jawaban/${this.data.form.id}`;
      this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`;
      this.$axios
        .delete(url)
        .then(({ data }) => {
          console.log(data);
          this.data.success = data.message;
          this.$swal(data.message, "", "success");

          this.data.form.id = null;
          this.ListsData();

          this.dialogDelete = false;
        })
        .catch((err) => console.log(err.response))
        .finally(() => {
          setTimeout(() => {
            this.loading_input = false;
          }, 2500);
        });
    },

    IsAlready(already) {
      let tableRTL = document.querySelector("#table-rtl");
      if (already === 1) {
        tableRTL.scrollIntoView();
      }
    },

    openModalEdit(item) {
      this.data.form.id = item.id;
      this.data.form.jenis_kegiatan = item.jenis_kegiatan;
      this.data.form.tanggal_kegiatan = moment(item.tanggal_kegiatan).format(
        "YYYY-MM-DD"
      );
      this.data.form.sasaran = item.sasaran;
      this.data.form.keterangan = item.keterangan;

      this.dialogRtl = true;
    },

    openModalDelete(item) {
      this.data.form.id = item.id;

      this.dialogDelete = true;
    },
  },
};
</script>
