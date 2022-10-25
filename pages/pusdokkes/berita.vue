<template>
  <div>
    <PusdokkesBerita
      :path="path"
      :lists="lists"
      :loading="loading"
      :error="error"
      :end="end"
      :loadingCard="loadingCard"
      @load-more-berita="ListBerita"
    />
  </div>
</template>

<script>
export default {
  name: "pusdokkes-berita",
  layout: "default",

  data() {
    return {
      loading: null,
      loadingCard: null,
      error: false,
      end: false,
      lists: [],
      listToShow: 9,
      repeat: 0,
      path: this.$route.name,
    };
  },

  beforeMount() {
    this.ConfigApiUrl();
  },

  mounted() {
    this.ListBerita();
  },

  methods: {
    async ListBerita(more=false) {
      this.loadingCard = !more ? true : false;
      this.loading = more ? true : false
      this.error = false;
      const url = `${this.api_url}/web/berita/page?start=${this.lists.length}`;
      this.$axios
        .get(url)
        .then((res) => {
          if (res.data.list_data.length > 0) {
            this.lists.push(...res.data.list_data);
          } else {
            this.end = true;
          }
        })
        .catch((err) => {
          console.log(err.message);
          this.error = true;
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingCard = false;
            this.loading = false
          }, 1000);
        });
    },

    ConfigApiUrl() {
      const api_url = process.env.NUXT_ENV_API_URL;
      this.$store.dispatch("config/storeConfigApiUrl", api_url);
    },
  },

  computed: {
    api_url() {
      return this.$store.getters["config/ConfigApiUrl"];
    },
  },
};
</script>
