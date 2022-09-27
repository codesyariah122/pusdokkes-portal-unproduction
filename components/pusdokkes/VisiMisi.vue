<style scoped>
.content-desc{
  white-space: pre-wrap;
  font-size: 16px;
}
</style>

<template>
  <div class="pages__web" :style="berita__list_style">
    <mdb-container v-if="loading">
      <mdb-row class="row justify-content-center">
        <mdb-col lg="7" sm="10">
          <b-card>
            <b-skeleton animation="wave" width="85%"></b-skeleton>
            <b-skeleton animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
          </b-card>
        </mdb-col>
        <mdb-col lg="5" sm="12">
          <b-skeleton-img></b-skeleton-img>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <mdb-container v-else>
      <mdb-row class="row justify-content-end">
        <mdb-col lg="7" sm="10" class="pages__context">
          <h2 style="font-weight: 700;">
            Visi & Misi
          </h2>
          <h5>Visi</h5>
          <p class="content-desc" v-html="contents.visi"></p>
          <br>
          <h5>Misi</h5>
          <div class="content-desc" v-html="contents.misi"></div>
        </mdb-col>

        <mdb-col lg="5" sm="12" class="pages__image">
          <img :src="contents.foto" class="img-fluid z-depth-1">
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        berita__list_style: this.$device.isDesktop
        ? "margin-top: 8rem;margin-bottom: 5rem;"
        : "margin-top: 6rem; margin-bottom: 5rem;",
        loading: null,
        contents: {}
      }
    },

    mounted(){
      this.ConfigApiUrl(),
      this.visimisiContent()
    },

    methods: {
      visimisiContent(){
        this.loading = true
        this.$axios.get(`${this.api_url}/web/visimisi`)
        .then(({data}) => {
          console.log(data)
          this.contents.foto = data.result.foto_url
          this.contents.visi = data.result.visi
          this.contents.misi = data.result.misi
          setTimeout(() => {
            this.loading = false
          }, 1500)
        })
        .catch(err => console.error(err))
      },

      ConfigApiUrl() {
        const api_url = process.env.NUXT_ENV_API_URL;
        this.$store.dispatch("config/storeConfigApiUrl", api_url);
      }
    },

    computed: {
      api_url() {
        return this.$store.getters["config/ConfigApiUrl"];
      }
    }
  }
</script>

<style scoped>
.content-desc {
  text-align: justify !important;
  white-space: pre-wrap;
  font-size: 16px;
  line-height: 35px !important;
}
</style>
