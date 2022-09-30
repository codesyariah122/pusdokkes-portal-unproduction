<style scoped>
.body-berita {
  white-space: pre-wrap;
  font-size: 16px;
  line-height: 31px;
}
</style>
<template>
  <div class="pages__web" :style="berita__list_style">
    <mdb-container v-if="loading">
      <mdb-row class="row justify-content-center mt-3">
        <mdb-col lg="7" sm="10">
          <b-skeleton animation="wave" width="85%"></b-skeleton>
          <b-skeleton animation="wave" width="55%"></b-skeleton>
          <b-skeleton animation="wave" width="70%"></b-skeleton>
        </mdb-col>
        <mdb-col lg="5" sm="12">
          <b-skeleton-img></b-skeleton-img>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <mdb-container v-else>
      <mdb-row v-if="$device.isDesktop" class="row justify-content-center">
        <mdb-col lg="7" sm="10" class="pages__context">
          <h2 style="font-weight: 700">Program Prioritas</h2>
          <div class="body-berita" v-html="result.description"></div>
        </mdb-col>
        <mdb-col lg="5" sm="12" class="pages__image">
          <img :src="result.foto_url" class="img-fluid z-depth-1" />
        </mdb-col>
      </mdb-row>

      <mdb-row v-else>
        <mdb-col lg="5" sm="12" class="pages__image">
          <h2 style="font-weight: 700">Program Prioritas</h2>
          <img :src="result.foto_url" class="img-fluid z-depth-1 mt-2" />
        </mdb-col>
        <mdb-col lg="7" sm="10" class="pages__context mt-3">
          <div class="body-berita" v-html="result.description"></div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        result: {},
        berita__list_style: this.$device.isDesktop
        ? "margin-top: 8rem;margin-bottom: 5rem;"
        : "margin-top: 6rem; margin-bottom: 5rem;",
        deskripsi: null,
        loading: null,
      };
    },

    mounted() {
      this.ConfigApiUrl(), this.pesanPusdokkes();
    },

    methods: {
      ConfigApiUrl() {
        const api_url = process.env.NUXT_ENV_API_URL;
        this.$store.dispatch("config/storeConfigApiUrl", api_url);
      },

      pesanPusdokkes() {
        this.loading = true;
        this.$axios
        .get(`${this.api_url}/web/programprioritas`)
        .then(({ data }) => {
          this.result = data.result;
          const split = data.result.description.split(
            ".",
            data.result.description.length - 1
            );
          this.deskripsi = [...split];
          setTimeout(() => {
            this.loading = false;
          }, 1500);
        })
        .catch((err) => console.error(err));
      },
    },
    computed: {
      api_url() {
        return this.$store.getters["config/ConfigApiUrl"];
      },
    },
  };
</script>