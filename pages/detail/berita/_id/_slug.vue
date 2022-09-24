<template>
  <div class="berita__detail" :style="berita__list_style">
    <mdb-container>
      <!-- header -->
      <mdb-row class="row justify-content-center">
        <mdb-col lg="12" xs="12" sm="12" class="col__berita-1">
          <h2 class="text-capitalize">{{ lists.berita.judul }}</h2>
          <p>{{ $moment(lists.berita.created_at).format("LLL") }}</p>
          <!-- Image content -->
          <div class="d-flex justify-content-center">
            <img class="img-thumbnail" :src="lists.berita.foto_url" />
          </div>

          <div id="slideshow">
            <img
              class="image"
              v-for="(image, i) in lists.list_image"
              :src="image"
              :key="i"
              @click="index = i"
            />
            <vue-gallery-slideshow
              :images="lists.list_image"
              :index="index"
              @close="index = null"
            ></vue-gallery-slideshow>
          </div>
        </mdb-col>

        <mdb-col
          lg="12"
          xs="12"
          sm="12"
          class="col__berita-2"
          style="margin-top: 16px"
        >
          <div class="content-desc" v-html="lists.berita.konten"></div>
        </mdb-col>

        <mdb-col lg="12" xs="12" sm="12" class="mt-5">
          <b-dropdown-divider class="line"></b-dropdown-divider>
        </mdb-col>
      </mdb-row>

      <!-- Content second -->
      <!-- <GlobalsOptionSlug :next="next" /> -->
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
        ? "margin-top: 8rem;"
        : "margin-top: 6rem;",
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
    console.log(lists);
    const next_id = parseInt(params.id) + 1;
    const next = await $axios.$get(`/web/berita/${next_id}`);
    console.log(next);
    return {
      lists,
      next,
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

  computed: {
    api_url() {
      return this.$store.getters["config/ConfigApiUrl"];
    },
  },
};
</script>

<style scoped>
.image {
  width: 100px;
  height: 100px;
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid lightgray;
  object-fit: contain;
}
</style>
