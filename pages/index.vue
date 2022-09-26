<template>
  <main id="content" role="main" :style="`${$device.isDesktop ? 'margin-top: 61px;' : 'margin-top:57px;'}`">
    <div id="carouselHome" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://polri.go.id/assets/images/headers/header-default.png">
          <div class="carousel-caption d-none d-md-block">
            <span style="color:#fff; background-color: #c1801e; font-size: 2em;">Kepolisian Negara Republik Indonesia</span>
            <p style="font-size: 3rem;">MELINDUNGI</p>
            <p style="font-size: 3rem; margin-top: -35px;">MENGAYOMI DAN</p>
            <p style="font-size: 3rem; margin-top: -35px">MELAYANI MASYARAKAT</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://polri.go.id/assets/images/headers/sdm.jpg">
          <div class="carousel-caption d-none d-sm-block text-right" style="padding-bottom: 40px">
            <a href="/dokumen" class="btn btn-primary btn-lg" style="margin-right: 10%;">Lihat Laporan</a>
          </div>
          <div class="carousel-caption d-none d-block d-sm-none text-right" style="padding-bottom: 0px;">
            <a href="/dokumen" class="btn btn-primary btn-xs" >Lihat Laporan</a>
          </div>
        </div>
      </div>
    </div>


    <div class="bg-dark">
      <div class="row py-2 m-0">
        <div class="col-3 d-none d-sm-block text-right small" style="color:#FFD700; font-size: 15px;">
          <b>PENGUMUMAN</b>
        </div>
        <div class="col-md-7 col-xs-12 text-light small">
          <div id="carouselPengumuman" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item overflow-information active" style="font-size: 15px;">
                <a id="pengumuman" href="https://polri.go.id/assets/images/pengumuman/pengumuman-632b1171a0d63.pdf" target="_blank" style="color: white;">SAKIP REN AKSI SSDM POLRI TAHUN 2022</a>
              </div>
              <div class="carousel-item overflow-information " style="font-size: 15px;">
                <a id="pengumuman" href="https://polri.go.id/assets/images/pengumuman/pengumuman-632b1140db164.pdf" target="_blank" style="color: white;">SAKIP RENJA SSDM POLRI TAHUN 2022</a>
              </div>
              <div class="carousel-item overflow-information " style="font-size: 15px;">
                <a id="pengumuman" href="https://polri.go.id/assets/images/pengumuman/pengumuman-632b112c4a607.pdf" target="_blank" style="color: white;">SAKIP PK SSDM 2022</a>
              </div>
              <div class="carousel-item overflow-information " style="font-size: 15px;">
                <a id="pengumuman" href="https://polri.go.id/assets/images/pengumuman/pengumuman-632b10c7878e8.pdf" target="_blank" style="color: white;">SAKIP MANUAL IKU SSDM POLRI</a>
              </div>
              <div class="carousel-item overflow-information " style="font-size: 15px;">
                <a id="pengumuman" href="https://polri.go.id/assets/images/pengumuman/pengumuman-632b10b18aa41.pdf" target="_blank" style="color: white;">SAKIP BUKU RENSTRA SSDM POLRI TAHUN 2020-2024</a>
              </div>
              <div class="carousel-item overflow-information " style="font-size: 15px;">
                <a id="pengumuman" href="https://polri.go.id/assets/images/pengumuman/pengumuman-6316a8332bcd3.pdf" target="_blank" style="color: white;">PELELANGAN UMUM INTERNASIONAL DENGAN PRAKUALIFIKASI PENGADAAN SARANA PRASARANA KOMUNIKASI WILAYAH PERBATASAN DAN PULAU TERLUAR</a>
              </div>
              <div class="carousel-item overflow-information " style="font-size: 15px;">
                <a id="pengumuman" href="https://polri.go.id/assets/images/pengumuman/pengumuman-631559dcb4359.pdf" target="_blank" style="color: white;">PELELANGAN UMUM INTERNASIONAL DENGAN PRAKUALIFIKASI PENGADAAN PERALATAN PENGAMANAN JARINGAN IT SUMBER PEMBIAYAAN PINJAMAN LUAR NEGERI T.A. 2021 TAHAP III</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <mdb-container>
      <mdb-row class="justify-content-center mt-5">
        <mdb-col lg="12" sm="12" xs="12">
          <HomepageTrending/>
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