<template>
  <main id="content" role="main" :style="`${$device.isDesktop ? 'margin-top: 61px;' : 'margin-top:57.5px;'}`">
    <mdb-container v-if="$device.isDesktop">
      <mdb-row class="justify-content-center mt-5">
        <mdb-col lg="12" sm="12" xs="12">
          <HomepageHeaderCard :token="token" />
        </mdb-col>
      </mdb-row>
    </mdb-container>

    <HomepageHeaderCard v-else :token="token" />

    <mdb-container>
      <mdb-row class="justify-content-center mt-5">
        <mdb-col lg="12" sm="12" xs="12">
          <HomepageBerita/>
        </mdb-col>

        <mdb-col lg="12" sm="12" xs="12" class="mt-5">
          <HomepageGallery/>
        </mdb-col>

        <mdb-col lg="12" sm="12" xs="12" class="mt-5 mb-5">
          <HomepageYoutubeChannel/>
        </mdb-col>

      </mdb-row>
    </mdb-container>

    <!-- <HomepageVisiMisi/> -->

  </main>
</template>

<script>
  export default {
    name: "IndexPage",
    layout: "default",


    beforeMount() {
      this.CheckToken();
    },

    methods: {
      scrollTo() {
        const element = document.querySelector("#testimoni-list");
        element.scrollIntoView();
      },
      CheckToken() {
        this.$store.dispatch("config/checkAuthLogin", "token");
      }
    },

    computed: {
      token() {
        return this.$store.getters["config/ConfigCheckLogin"];
      },
    },
  };
</script>