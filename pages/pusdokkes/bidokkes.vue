<template>
  <div>
    <PusdokkesBidokkes
      :path="path"
      :lists="lists"
      :loading="loading"
      :error="error"
      :end="end"
      @load-more-fasilitator="ListBidokkes"
    />
  </div>
</template>

<script>
export default {
  name: "bidokkes",
  layout: "default",
  data() {
    return {
      loading: null,
      lists: [],
      path: this.$route.name,
      error: false,
      end: false,
    };
  },

  beforeMount() {
    this.ConfigApiUrl();
  },

  mounted() {
    this.ListBidokkes();
  },

  methods: {
    async ListBidokkes() {
      this.loading = true;
      this.error = false;
      const url = `${this.api_url}/web/biddokkes?start=${this.lists.length}`;
      this.$axios
        .get(url)
        .then((res) => {
          if (res.data.list_data.length > 0) {
            this.lists.push(...res.data.list_data);

            this.lists.forEach((entry) => {
              if (entry.website) {
                if (!entry.website.includes("http")) {
                  entry.website = "http://" + entry.website;
                }
              }
            });
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
            this.loading = false;
          }, 800);
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
