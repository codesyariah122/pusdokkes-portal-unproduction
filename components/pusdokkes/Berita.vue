<template>
    <div ref="berita_square" class="card__list" :style="berita__list_style">
      <mdb-container>
        <mdb-row class="row justify-content-center header__ppkc-list-page">
          <mdb-col lg="12" xs="12" sm="12" style="margin-top: 32px">
            <h2 style="font-weight: 700">Berita</h2>
          </mdb-col>
          <mdb-col lg="12" xs="12" sm="12">
            <p>
              Ikuti kegiatan dan berita dari PUSDOKKES - POLRI
            </p>
          </mdb-col>
        </mdb-row>

          <mdb-row v-if="loadingCard" class="row justify-content-center mt-2 mb-5 webinar__content">
            <mdb-col lg="12" sm="12" xs="12">
              <div class="card__list">
                <div class="card__content">
                  <mdb-row>
                    <mdb-col v-for="item in lists" md="4" xs="12" sm="12" :key="item.id" :style="`${$device.isMobile ? 'margin-bottom: 2rem;' : ''}`" class="column">
                      <b-skeleton-img></b-skeleton-img>
                    </mdb-col>
                  </mdb-row>
                </div>
              </div>
            </mdb-col>
          </mdb-row>

          <mdb-row v-else class="row justify-content-center mt-2 mb-5 webinar__content">
            <mdb-col lg="12" xs="12" sm="12">
              <div class="card__list">
                <div class="card__content">
                  <mdb-row>
                    <mdb-col
                    id="show-event"
                    v-for="(item, index) in lists"
                    md="4"
                    xs="12"
                    sm="12"
                    :key="index" :style="`${$device.isMobile ? 'margin-bottom: 2rem;' : ''}`" class="column"
                    >
                    <div class="effect">
                      <div class="effect-img">
                        <img :src="item.foto_url" :alt="item.judul">
                      </div>
                      <div class="effect-text">
                        <div class="inner">
                          <nuxt-link :to="{
                              name: `detail-berita-id-slug`,
                              params: {
                                id: item.id,
                                slug: $slug(item.judul)
                              }
                            }">
                            <h2>{{ item.judul }}</h2>
                          </nuxt-link>
                          <span class="mt-3">Oleh Pusdokkes | {{ $moment(item.created_at).format("LL") }}</span>
                          <p  class="mt-3 truncate2">
                            {{item.konten}}
                          </p>
                        </div>
                      </div>
                    </div>
                  </mdb-col>
                </mdb-row>
              </div>
            </div>
          </mdb-col>
        </mdb-row>

        <mdb-row v-if="loading" class="row justify-content-center">
          <mdb-col lg="12" xs="12" sm="12">
            <div class="d-flex justify-content-center mt-5 mb-5">
              <div
              class="spinner-grow text-primary"
              role="status"
              style="width: 3rem; height: 3rem"
              >
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </mdb-col>
      </mdb-row>

      <mdb-row
      v-if="error"
      class="row justify-content-center header__ppkc-list-page"
      >
      <mdb-col lg="12" xs="12" sm="12">
        <button type="button" @click="LoadBerita" class="btn btn-info">
          Load More
        </button>
      </mdb-col>
    </mdb-row>
  </mdb-container>
  </div>
</template>

<script>
  export default {
    props: ["lists", "loading", "error", "end", "loadingCard"],
    head(){
      return {
        title: 'Pusdokkes Polri - Berita Pusdokkes'
      }
    },
    data() {
      return {
        currentPage: 1,

        berita__list_style:
        this.$router.path == "berita" && this.$device.isDesktop
        ? "margin-top: 7rem;"
        : "margin-top: 5rem;",
      };
    },

    mounted() {
      this.getNextBerita()
    },

    methods: {

      getNextBerita() {
        window.onscroll = () => {
          if (!this.loading && !this.end && !this.error) {
            if (this.$refs.berita_square.getBoundingClientRect().bottom <= 450) {
              this.$emit("load-more-berita", true);
            }else{
              console.log("out")
            }
          }
        }
      }

    }
  }
</script>
