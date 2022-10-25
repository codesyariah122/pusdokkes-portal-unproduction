<template>
  <div class="berita__detail-content" :style="berita__list_style">
    <mdb-container>
      <mdb-row class="row justify-content-left">
        <mdb-col lg="12" xs="12" sm="12" class="col__berita-1">
          <h2 :style="`${$device.isDesktop ? 'line-height: 45px;' : 'line-height: 40px;'}`" class="text-capitalize font-weight-bold">{{ lists.berita.judul }}</h2>
          <p>{{ $moment(lists.berita.created_at).format("LLL") }}</p>
          <div class="d-flex justify-content-left">
            <img  :src="lists.berita.foto_url" class="image" />
          </div>
        </mdb-col>

        <mdb-col
        lg="12"
        xs="12"
        sm="12"
        class="col__berita-2"
        style="margin-top: 16px;"
        >
        <div class="content-desc" v-html="lists.berita.html"></div>
      </mdb-col>

      <mdb-col lg="12" xs="12" sm="12" class="mt-5">
        <b-dropdown-divider class="line"></b-dropdown-divider>
      </mdb-col>
    </mdb-row>

    <BeritapageBeritaLainnya :others="others"/>

  </mdb-container>
</div>
</template>

<script>
  import { SampleNews } from "@/helpers";
  import VueGallerySlideshow from "vue-gallery-slideshow";

  export default {
    name: "detail-berita-id-slug",
    layout: "default",

    components: {
      VueGallerySlideshow,
    },

    data() {
      return {
        berita__list_style: this.$device.isDesktop
        ? "margin-top: 8rem;margin-bottom: 5rem;"
        : "margin-top: 6rem;margin-bottom: 5rem;",
        id: this.$route.params.id,
        path: this.$route.name,
        berita: null,
        id_berita: this.$route.params.id,
        detail: {},
        images: [],
        index: null,
      };
    },

    async asyncData({ $axios, params }) {
      const lists = await $axios.$get(`/web/berita/${params.id}`);
      const others = await $axios.get(`/web/berita/lainnya/${params.id}`)
      console.log(others.data)
      return {
        lists,
        others
      };
    },

    beforeMount() {
      this.ConfigApiUrl();
    },

    methods: {
      ConfigApiUrl() {
        const api_url = process.env.NUXT_ENV_API_URL;
        this.$store.dispatch("config/storeConfigApiUrl", api_url);
      },

      DetailBeritaSample() {
        this.detail = SampleNews.filter((d) => d.id == this.id_berita)[0];
      },
    },

    head(){
      return {
        title: `Pusdokkes Berita - ${this.title}`
      }
    },

    computed: {
      api_url() {
        return this.$store.getters["config/ConfigApiUrl"];
      },
      title(){
        return this.lists.berita.judul
      }
    }
  };
</script>

<style scoped>
.image {
  width: 100%;
  height: auto;
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid lightgray;
  object-fit: contain;
}

.content-desc{
  width: 100%;
}
.content-desc >>> img{
  width: 100%;
  border-radius: 5px;
}
.content-desc >>> p {
  font-size: 18px;
  line-height: 31px;
  word-spacing: 3px;
  text-align: left;
}
@media (min-width: 992px) {
  .image {
    width: 100%;
    height: auto;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid lightgray;
    object-fit: contain;
  }

  .content-desc{
    width: 100%;
  }

  .content-desc >>> img{
    width: 100%;
    border-radius: 5px;
  }

  .content-desc >>> p {
    font-size: 18px;
    line-height: 35px;
    word-spacing: 2px;
    text-align: left;
  }
}
</style>
