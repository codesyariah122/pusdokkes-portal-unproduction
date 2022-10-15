<template>
  <div class="embed__file">
    <!-- <pre>
			{{detail_webinar.pelatihan_detail_id == id_webinar}}
		</pre> -->
    <div v-if="loading">
      <mdb-container>
        <mdb-row col="12" class="webinar__content">
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
            <b-skeleton-img></b-skeleton-img>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
    <div v-else>
      <mdb-container>
        <mdb-row
          v-if="detail_webinar.status == 0"
          col="12"
          class="row justify-content-center"
        >
          <mdb-col lg="12" xs="12" sm="12">
            <mdb-row col="12" class="row justify-content-center mb-2 mt-2">
              <mdb-col lg="12" xs="12" sm="12" class="box__intro-test">
                <ul style="list-style: none; margin-top: -0.5rem">
                  <li>
                    <blockquote class="blockquote-footer mb-2 mt-2">
                      Waktu pelaksanaan Webinar :
                    </blockquote>
                    Tanggal :
                    <time>
                      {{
                        $moment(detail_webinar.waktu_webinar_awal).format("LL")
                      }}
                    </time>
                  </li>
                  <li>
                    Mulai :
                    <time>
                      {{
                        $moment(detail_webinar.waktu_webinar_awal).format(
                          "hh:mm A"
                        )
                      }}
                    </time>
                  </li>
                  <li>
                    Berakhir :
                    <time>
                      {{
                        $moment(detail_webinar.waktu_webinar_akhir).format(
                          "hh:mm A"
                        )
                      }}
                    </time>
                  </li>
                </ul>
              </mdb-col>
            </mdb-row>

            <div v-if="is_can_check_in == 0">
              <mdb-row col="12" class="row justify-content-center mb-3">
                <mdb-col lg="12" xs="12" sm="12">
                  <small class="text-primary" style="font-size: 24px">
                    Webinar bisa dihadiri sesuai tanggal
                  </small>
                </mdb-col>
              </mdb-row>
            </div>
            <div v-else>
              <mdb-alert color="info">
                <mdb-icon icon="info-circle" /> Silahkan klik tombol checkin di
                bawah untuk mengakses kembali webinar anda !
              </mdb-alert>

              <b-button @click="CheckIn" variant="primary" block pill>
                <div v-if="loading">
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </div>
                <div v-else>
                  <mdb-icon far icon="calendar-check" size="lg" /> Check In
                </div>
              </b-button>
              <b-dropdown-divider
                style="list-style: none; margin-top: 2.5rem"
              ></b-dropdown-divider>
            </div>
          </mdb-col>
        </mdb-row>
        <mdb-row
          v-else-if="detail_webinar.status == 1"
          col="12"
          class="row justify-content-center"
        >
          <mdb-col lg="12">
            <mdb-row
              col="12"
              class="webinar__content row justify-content-center"
            >
              <mdb-col lg="12">
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  :src="`https://www.youtube-nocookie.com/embed/${details.url}?autoplay=0&version=3&enablejsapi=1&showinfo=0&controls=0&rel=0&showinfo=0&disablekb=1&iv_load_policy=3&modestbranding=0`"
                  allowfullscreen
                ></b-embed>
              </mdb-col>

              <!-- Informasi webinar -->
              <mdb-col lg="12" class="mt-5">
                <mdb-list-group>
                  <mdb-list-group-item>
                    <h4>Informasi Webinar</h4>
                  </mdb-list-group-item>
                  <mdb-list-group-item>
                    <strong
                      ><b>Judul : </b>
                      <p class="grey-text lead">
                        {{ detail_webinar.judul }}
                      </p>
                      <blockquote class="blockquote-footer">
                        {{ detail_webinar.deskripsi }}
                      </blockquote>
                    </strong>
                  </mdb-list-group-item>
                  <mdb-list-group-item>
                    <strong
                      ><b>Check In : </b
                      ><span class="grey-text">{{
                        $moment(detail_webinar.checkin_datetime).format("LLLL")
                      }}</span></strong
                    >
                  </mdb-list-group-item>
                  <mdb-list-group-item>
                    <strong
                      ><b> Link Room : </b
                      ><a :href="detail_webinar.link_room">Link Webinar Room</a>
                    </strong>
                  </mdb-list-group-item>
                  <mdb-list-group-item>
                    <strong
                      ><b>Meeting ID : </b
                      ><span class="grey-text">{{
                        detail_webinar.username_room
                      }}</span></strong
                    >
                  </mdb-list-group-item>
                  <mdb-list-group-item>
                    <strong
                      ><b>Passcode : </b
                      ><span class="grey-text">
                        {{ detail_webinar.password_room }}
                      </span></strong
                    >
                  </mdb-list-group-item>
                  <mdb-list-group-item>
                    <strong
                      ><b>Penyelenggara : </b
                      ><span class="grey-text">
                        {{ detail_webinar.penyelenggara }}
                      </span></strong
                    >
                  </mdb-list-group-item>
                  <mdb-list-group-item>
                    <strong
                      ><b>Total Peserta : </b
                      ><span class="grey-text">
                        {{ detail_webinar.total_peserta }} Peserta
                      </span></strong
                    >
                  </mdb-list-group-item>
                </mdb-list-group>
              </mdb-col>

              <mdb-col lg="12" xs="12" sm="12">
                <b-dropdown-divider
                  style="list-style: none; margin-top: 2rem"
                ></b-dropdown-divider>
              </mdb-col>

              <mdb-col lg="12" xs="12" sm="12" class="mt-2">
                <b-button varian="danger" block pill @click="CheckOut()">
                  <div v-if="loading">
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </div>
                  <div v-else>
                    <mdb-icon icon="sign-out-alt" size="lg" /> Check Out
                  </div>
                </b-button>
                <b-dropdown-divider
                  style="list-style: none; margin-top: 2.5rem"
                ></b-dropdown-divider>
              </mdb-col>
            </mdb-row>

            <mdb-row col="12" class="row justify-content-center">
              <!-- Komentar -->
              <mdb-col lg="12" sm="12" xs="12">
                <EventWebinarKomentar
                  :profiles="profiles"
                  :api_url="api_url"
                  :token="token"
                />
              </mdb-col>

              <mdb-col lg="12" xs="12" sm="12">
                <b-dropdown-divider
                  style="list-style: none; margin-top: 2rem"
                ></b-dropdown-divider>
              </mdb-col>

              <mdb-col lg="12" sm="12" xs="12">
                <EventWebinarPertanyaan
                  :profiles="profiles"
                  :api_url="api_url"
                  :token="token"
                />
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>

        <mdb-row
          v-else-if="detail_webinar.status == 2"
          col="12"
          class="row justify-content-center"
        >
          <mdb-col lg="12">
            <mdb-row col="12" class="row justify-content-center mb-2 mt-2">
              <mdb-col lg="12" xs="12" sm="12" class="box__intro-test">
                <ul style="list-style: none; margin-top: -0.5rem">
                  <li>
                    <blockquote class="blockquote-footer mb-2 mt-2">
                      Waktu pelaksanaan Webinar :
                    </blockquote>
                    Tanggal :
                    <time>
                      {{
                        $moment(detail_webinar.waktu_webinar_awal).format("LL")
                      }}
                    </time>
                  </li>
                  <li>
                    Mulai :
                    <time>
                      {{
                        $moment(detail_webinar.waktu_webinar_awal).format(
                          "hh:mm A"
                        )
                      }}
                    </time>
                  </li>
                  <li>
                    Berakhir :
                    <time>
                      {{
                        $moment(detail_webinar.waktu_webinar_akhir).format(
                          "hh:mm A"
                        )
                      }}
                    </time>
                  </li>
                </ul>
              </mdb-col>
            </mdb-row>
            <mdb-row col="12" class="row justify-content-center">
              <mdb-col lg="12" xs="12" sm="12">
                Anda telah checkout pada :
                {{ $moment(detail_webinar.jam_keluar).format("LLLL") }}<b></b>
              </mdb-col>

              <!-- Komentar -->
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
  </div>
</template>

<style lang="scss">
.webinar__content {
  .list-group {
    width: 100%;
    .list-group-item {
      border: 0;
    }
  }
}
</style>

<script>
export default {
  props: [
    "id_webinar",
    "token",
    "api_url",
    "profiles",
    "details",
    "detailed_data",
  ],

  data() {
    return {
      detail_webinar: {
        status: 0,
        checkin_datetime: "",
      },
      loading: null,
      timer: 0,
      value: 0,
      max: 100,
      pelatihan_detail_id: "",
      is_can_check_in: 0,
    };
  },
  beforeMount() {
    this.WebinarDetail();
  },
  mounted() {
    this.startTimer();
  },

  methods: {
    SetupEmbed() {
      var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var player;
      player = new YT.Player("ytplayer", {
        height: "360",
        width: "640",
        host: "https://www.youtube-nocookie.com",
        videoId: "M7lc1UVf-VE",
        rel: "0",
        controls: "0",
        showinfo: "0",
        autoplay: "0",
        iv_load_policy: "3",
      });
    },
    WebinarDetail() {
      this.loading = true;
      const url = `${this.api_url}/web/webinar/${this.id_webinar}`;
      this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`;
      this.$axios
        .get(url)
        .then(({ data }) => {
          this.is_can_check_in = data.is_can_check_in;
          this.detail_webinar = data.webinar;
          this.pelatihan_detail_id = data.webinar.pelatihan_detail_id;
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 2500);
        });
    },

    CheckIn() {
      window.scrollTo(0, 0);
      this.loading = true;
      const url = `${this.api_url}/web/webinar/check-in`;

      this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`;
      this.$axios
        .post(url, {
          pelatihan_detail_id: JSON.stringify(this.pelatihan_detail_id),
        })
        .then(({ data }) => {
          this.detail_webinar.status = 1;
          this.detail_webinar.checkin_datetime = data.created_at;
          console.log(this.detail_webinar);
        })
        .catch((err) => console.log(err.message))
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 2500);
        });
    },

    CheckOut(id, title) {
      window.scrollTo(0, 0);
      this.loading = true;
      this.$swal({
        title: `Apakah anda ingin check out ?`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Checkout",
        denyButtonText: `Cancel`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          const url = `${this.api_url}/web/webinar/check-out`;

          this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`;
          this.$axios
            .post(url, {
              webinar_id: this.detail_webinar.id,
            })
            .then(({ data }) => {
              this.detail_webinar.status = 2;
              this.detail_webinar.jam_keluar = data.jam_keluar;
            })
            .catch((err) => console.log(err.message))
            .finally(() => {
              this.$swal(`Anda berhasil checkout`, "", "success");
              setTimeout(() => {
                this.loading = false;
              }, 2500);
            });
        } else if (result.isDenied) {
          this.$swal("Changes are not saved", "", "info");
          setTimeout(() => {
            this.loading = false;
          }, 1500);
        }
      });
    },

    startTimer() {
      let vm = this;
      let timer = setInterval(function () {
        vm.value += 6;
        if (vm.value >= vm.max) clearInterval(timer);
      }, 100);
    },

    LightBox(video) {
      GLightbox({
        href: video,
        type: "video",
        source: "youtube", //vimeo, youtube or local
        width: 800,
        autoplayVideos: true,
      });
    },
  },
};
</script>