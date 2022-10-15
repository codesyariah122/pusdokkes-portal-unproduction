<template>
  <div class="visi__misi" :style="`background-image: url(${bg_image});`">
    <mdb-container>
      <mdb-row class="row justify-content-center visi-misi__header">
        <mdb-col lg="12">
          <center>
            <h1 :class="`${$device.isMobile ? 'mt-5 mb-5' : 'mt-5 mb-5'}`">Tentang Kami</h1>
          </center>
        </mdb-col>
      </mdb-row>

      <mdb-row class="row visi-misi__content">
        <mdb-col class="mb-5" sm="8" md="8" lg="8">
          <h1>Visi</h1>
          <p v-if="content.visi">{{ content.visi }}</p>
          <br />
          <h1>Misi</h1>
          <ol v-if="content.misi">
            <li v-for="n in content.misi.length-1" v-if="n >! content.misi.length">
              {{ content.misi[n] }}
            </li>
          </ol>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
  import { FetchData } from "@/helpers";
  import BgImage from "~/assets/images/homepage/visi-misi-bg.jpg";

  export default {
    data() {
      return {
        bg_image: BgImage,
        content: {
          visi: null,
          misi: null
        }
      };
    },

    beforeMount() {
      this.ConfigApiUrl();
    },

    mounted() {
      this.visimisiContent();
    },

    methods: {
      ConfigApiUrl() {
        const url = process.env.NUXT_ENV_API_URL;
        this.$store.dispatch("config/storeConfigApiUrl", url);
      },
      visimisiContent(){
        this.$axios.get(`${this.api_url}/web/visimisi`)
        .then(({data}) => {
          this.content.visi = data.result.visi
          this.content.misi = data.result.misi
          const split = data.result.misi.split(".", data.result.misi.length-1)
          this.content.misi = [...split]
        })
        .catch(err => console.error(err))
      }
    },

    computed: {
      api_url() {
        return this.$store.getters["config/ConfigApiUrl"];
      },
    },
  };
</script>

<style scoped>
  .visi__misi .visi-misi__content h1 {
    margin-left: 45px !important;
    text-align: left;
  }

  .visi__misi .visi-misi__content p {
    width: 100%;
  }

  .col-lg-8 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .visi__misi:before {
    background-color: #004899;
  }
</style>
