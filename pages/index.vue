<template>
  <main id="content" role="main" :style="`${$device.isDesktop ? 'margin-top: 61px;' : 'margin-top:57.5px;'}`">
    
    <HomepageCarousel/>

    <mdb-container>
      <mdb-row class="justify-content-center mt-5">

        <mdb-col lg="12" sm="12" xs="12">
          <HomepageTrending/>
        </mdb-col>

        <mdb-col lg="12" sm="12" xs="12" class="mt-5">
          <HomepageWeeklyTop/>
        </mdb-col>

        <mdb-col lg="12" sm="12" xs="12" class="mt-5 mb-5">
          <HomepageWhatsNew/>
        </mdb-col>

      </mdb-row>
    </mdb-container>

  </main>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",

  data() {
    return {
      items: [],
      events: [],
      testimonis: [],
      news: [],
      listToShow: 2,
    };
  },

  async asyncData({ $axios }) {
    const lists = await $axios.$get("/web/home");
    return {
      lists,
    };
  },
  beforeMount() {
    this.CheckToken();
  },
  mounted() {
    this.CarouselItem();
  },

  methods: {
    scrollTo() {
      const element = document.querySelector("#testimoni-list");
      element.scrollIntoView();
    },
    CheckToken() {
      this.$store.dispatch("config/checkAuthLogin", "token");
    },

    CarouselItem() {
      this.items = [
      {
        img: true,
        src: require('~/assets/images/slider/header-default.png')
      },
      {
        img: true,
        src: require('~/assets/images/slider/sdm.jpg'),
      },
      ];
    },
  },

  computed: {
    token() {
      return this.$store.getters["config/ConfigCheckLogin"];
    },
  },
};
</script>