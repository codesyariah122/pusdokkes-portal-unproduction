<style scoped>
.content-desc{
  white-space: pre-wrap;
  font-size: 16px;
  line-height: 31px;
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
      <mdb-row class="row justify-content-center">
        <mdb-col lg="7" sm="10" class="pages__context">
          <h2 style="font-weight: 700;">
            Sejarah Pusdokkes Polri
          </h2>
          <div class="content-desc text-justify" v-html="contents.description" :style="`${$device.isDesktop ? 'width: 550px;' : ''}`"></div>
        </mdb-col>

        <mdb-col lg="5" sm="12" class="pages__image">
          <img :src="contents.foto" class="img-fluid" />
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
  export default {
    props: ["path"],
    data() {
      return {
        berita__list_style: this.$device.isDesktop
        ? "margin-top: 8rem;"
        : "margin-top: 6rem;",
        loading: null,
        contents: {}
      }
    },
    mounted(){
      this.ConfigApiUrl(),
      this.sejarahContent()
    },

    methods: {
      ConfigApiUrl() {
        const api_url = process.env.NUXT_ENV_API_URL;
        this.$store.dispatch("config/storeConfigApiUrl", api_url);
      },
      sejarahContent(){
        this.loading = true
        this.$axios.get(`${this.api_url}/web/sejarah`)
        .then(({data}) => {
          console.log(data)
          this.contents.foto = data.result.foto_url
          this.contents.description = data.result.description
          setTimeout(() => {
            this.loading = false
          }, 1500)
        })
        .catch(err => console.error(err))
      }
    },

    computed: {
      api_url() {
        return this.$store.getters["config/ConfigApiUrl"];
      }
    }
  }
</script>
