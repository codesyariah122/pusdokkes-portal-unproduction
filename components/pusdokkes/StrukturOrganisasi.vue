<template>
  <div class="card__list" :style="berita__list_style">
    <mdb-container>
      <!-- header -->
      <mdb-row class="row justify-content-center header__ppkc-list-page">
        <mdb-col lg="12" xs="12" sm="12" class="text-center">
          <h2 style="font-weight: 700">
            Struktur Organisasi
          </h2>
        </mdb-col>
        <mdb-col v-if="loading" lg="12" xs="12" sm="12" class="ppkc__col-1">
          <b-skeleton-img no-aspect height="250px"></b-skeleton-img>
        </mdb-col>
        <mdb-col v-else lg="12" xs="12" sm="12" class="ppkc__col-1">
          <center>
            <img
              img
              :src="result.foto_url"
              class="img-fluid hover-shadow"
            />
          </center>
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
      result: {},
      berita__list_style: this.$device.isDesktop
        ? "margin-top: 8rem; margin-bottom: 5rem;"
        : "margin-top: 6rem; margin-bottom: 5rem;",
    }
  },
  mounted(){
    this.ConfigApiUrl(),
    this.fetchData()
  },
  methods: {
    ConfigApiUrl() {
      const api_url = process.env.NUXT_ENV_API_URL;
      this.$store.dispatch("config/storeConfigApiUrl", api_url);
    },

    fetchData(){
      this.loading = true
      this.$axios.get(`${this.api_url}/web/struktur-organisasi`)
      .then(({data}) => {
        console.log(data)
        this.result = data.result
      })
      .catch(err => console.error(err))
      .finally(() => {
        setTimeout(() => {
          this.loading = false
        }, 1500)
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
