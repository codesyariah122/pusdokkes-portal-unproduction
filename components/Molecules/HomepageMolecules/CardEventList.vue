<template>
  <div>
    <div v-if="lists.length > 0">
      <mdb-row class="row justify-content-center card__content">
        <mdb-col
          v-for="item in lists.slice(0, 3)"
          col="12"
          md="4"
          class="mb-3"
          :key="item.kegiatan_id"
        >
          <mdb-card>
            <mdb-card-image
              :src="item.photo"
              alt="No image found"
            ></mdb-card-image>

            <mdb-card-body>
              <mdb-badge
                v-if="item.kategori_value"
                class="mb-2 badge__category shadow-none"
                >{{ item.kategori_value }}</mdb-badge
              >

              <mdb-badge v-else class="mb-2 badge__category shadow-none"
                >No Category</mdb-badge
              >

              <mdb-card-title class="">{{
                item.kegiatan_title
              }}</mdb-card-title>
              <mdb-card-text class="truncate2 mt-2">{{
                item.kegiatan_desc
              }}</mdb-card-text>

              <h6 class="mt-2 idr__color">
                {{ $format(item.harga) }}
              </h6>

              <span style="font-size: 12px; margin-top: 1.5rem"
                ><i class="fa fa-calendar fa-fw fa-lg" aria-hidden="true"></i>
                {{ $moment(item.tanggal_awal).format("LL") }} -
                {{ $moment(item.tanggal_akhir).format("LL") }}</span
              >

              <!-- <mdb-btn @click="ToDetailEvent(lists[listIndex-1].kegiatan_id)" block class="btn btn-outline-primary mt-3 mb-2" color="primary">Detail Event</mdb-btn> -->
              <hr />

              <nuxt-link
                :to="{
                  name: `detail-event-id-slug`,
                  params: {
                    id: item.kegiatan_id,
                    slug: $slug(item.kegiatan_title),
                  },
                }"
                :class="`btn my__btn-primary rounded-pill mt-3 mb-2 btn-block ${
                  $device.isMobile ? 'btn-sm' : ''
                }`"
                ><mdb-icon icon="calendar-day" size="lg"/>&nbsp; Detail Kelas</nuxt-link
              >
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      <mdb-row v-if="lists.length > 0" class="row justify-content-center mt-2">
        <mdb-col
          xl="5"
          lg="12"
          xs="12"
          sm="12"
          :class="`${$device.isDesktop ? 'mb-5 shadow-none' : 'mb-2'}`"
        >
          <nuxt-link
            to="/events"
            :class="`btn my__btn-primary rounded-pill  ${
              $device.isMobile ? 'btn-block btn-sm' : 'btn-block'
            }`"
            ><mdb-icon icon="chalkboard" size="lg"/>&nbsp; Lihat Semua Kelas</nuxt-link
          >
        </mdb-col>
      </mdb-row>
    </div>

    <mdb-row v-else col="12" class="justify-content-center card__content">
      <mdb-col lg="12" xs="12" sm="12">
        <mdb-alert color="info">
          <mdb-icon icon="info-circle" size="lg" /> Belum ada event terdekat !
        </mdb-alert>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import { SampleEvents } from "@/helpers";
export default {
  props: ["lists", "listsToShow"],
  data() {
    return {
      carts: [],
      username: "",
    };
  },
  mounted() {
    this.UserProfileData();
  },

  methods: {
    UserProfileData() {
      if (this.token.accessToken) {
        const url = `${this.api_url}/web/user`;
        this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`;
        this.$axios
          .get(url)
          .then(({ data }) => {
            this.username = this.$username(data.user.nama);
          })
          .catch((err) => console.log(err.response ? err.response : ""));
      } else {
        console.log("No-Login");
      }
    },

    CheckToken() {
      this.$store.dispatch("config/checkAuthLogin", "token");
    },
    ConfigApiUrl() {
      const api_url = process.env.NUXT_ENV_API_URL;
      this.$store.dispatch("config/storeConfigApiUrl", api_url);
    },
  },

  computed: {
    token() {
      return this.$store.getters["config/ConfigCheckLogin"];
    },
    api_url() {
      return this.$store.getters["config/ConfigApiUrl"];
    },
  },
};
</script>

<style lang="css">
.btn-outline-primary {
  border: 1px solid #3393ff !important;
}

.truncate {
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

.card__list .card__content .card .view {
  border-radius: 8px 8px 0px 0px !important;
}
</style>
