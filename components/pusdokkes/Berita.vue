<style>
.truncate {
  text-transform: capitalize;
  display: -webkit-box;
  -webkit-line-clamp: var(--line-clamp, 3);
  -webkit-box-orient: vertical;
  word-break: var(--word-break, "none");
  overflow: hidden;
  hyphens: auto;
  text-align: var(--align, left);

  --is-single-line: 1 - Clamp(0, Calc(var(--line-clamp) - 1), var(--line-clamp));
  --delay: Calc(-1s * (var(--is-single-line, 1) - 1));
  animation: states 1s var(--delay) paused;

  @keyframes states {
    0% {
      word-break: break-all;
    }
  }
}

.truncate2 {
  display: -webkit-box;
  -webkit-line-clamp: var(--line-clamp, 2);
  -webkit-box-orient: vertical;
  word-break: var(--word-break, "none");
  overflow: hidden;
  hyphens: auto;
  text-align: var(--align, left);

  --is-single-line: 1 - Clamp(0, Calc(var(--line-clamp) - 1), var(--line-clamp));
  --delay: Calc(-1s * (var(--is-single-line, 1) - 1));
  animation: states 1s var(--delay) paused;

  @keyframes states {
    0% {
      word-break: break-all;
    }
  }
}
.column{
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 100%;
  max-width: 100%;
}
.section-title{
  position: relative;
  width: 100%;
  text-align: center;
  padding: 45px 0 30px 0;
}
.section-title::after{
  position: absolute;
  content: "";
  width: 100%;
  height: 1px;
  left: 0;
  background: #eeeeee;
}


.effect{
  position: relative;
  margin-bottom: 30px;
  overflow: hidden;
}
.effect .effect-img{
  font-size: 0;
  overflow: hidden;
}
/*.effect .effect-img img{
  width: 100%;
  height: auto;
  transition: all .3s;
}
*/
.effect .effect-img img{
  width: 100%;
  height: 350px;
  transition: all .3s;
}

.effect:hover .effect-img img{
  transform: scale(1.2);
}

.effect .effect-text{
  position: absolute;
  top: 15px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: rgba(0, 0, 0, .5);
  overflow: hidden;
  transition: all .3s ease-in;
  opacity: 1;
}
.effect .effect-text .inner{
  position: absolute;
  padding: 15px;
  z-index: 1;
}
.effect .effect-text:before,
.effect .effect-text:after{
  position: absolute;
  display: block;
  width: 100%;
  height: 0;
  content: '';
}
.effect .effect-text:before{
  border-top: 3px solid #ffffff;
  border-right: 3px solid #ffffff;
  left: -100%;
  top: 0;
}
.effect .effect-text:after{
  border-bottom: 3px solid #ffffff;
  border-left: 3px solid #ffffff;
  left: 100%;
  bottom: 0;
}
.effect:hover .effect-text{
  background: rgba(0, 0, 0, .7);
  opacity: 1;
}
.effect:hover .effect-text:after,
.effect:hover .effect-text:before{
  animation-delay: .1s;
  animation-duration: .5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
.effect:hover .effect-text:after{
  animation-name: left-up;
}
.effect:hover .effect-text:before{
  animation-name: right-dn;
}

@-webkit-keyframes left-up {
  0% {
    left: 100%;
    height: 0;
  }
  50% {
    left: 0;
    height: 0;
  }
  100% {
    height: 100%;
    left: 0;
  }
}

@-webkit-keyframes right-dn {
  0% {
    left: -100%;
    height: 0;
  }
  50% {
    left: 0;
    height: 0;
  }
  100% {
    height: 100%;
    left: 0;
  }
}

.effect .effect-text {
  text-align: left;
}

/*.effect .effect-text h2{
  height: 16px;
  color: #ffffff;
  font-size: 25px;
  margin: 0;
}

.effect .effect-text p{
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 20px;
}*/
.effect .effect-text h2{
  height: 15px;
  color: #ffffff;
  font-size: 18px;
  margin: 0;
  margin-bottom: 5rem;
  line-height: 25px;
}

.effect .effect-text p{
  margin-top: auto;
  color: #ffffff;
  font-size: 16px;
  margin-bottom: auto;
}

.effect .effect-text span{
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 20px;
}
.effect .effect-btn .btn{
  display: inline-block;
  height: 35px;
  padding: 7px 15px;
  color: #333333;
  background: #ffffff;
  margin-top: 3rem;
}
.effect .effect-btn .btn{
  display: inline-block;
  height: 35px;
  padding: 7px 15px;
  color: #333333;
  background: #ffffff;
}


/*@media (min-width:576px){
  .container{
    max-width: 540px;
  }
  .column{
    flex: 0 0 100%;
    max-width: 100%;
  }
  .effect .effect-text {
    text-align: left;
  }
  .effect .effect-text h2{
    height: 16px;
    color: #ffffff;
    font-size: 25px;
    margin: 0;
  }

  .effect .effect-text p{
    color: #ffffff;
    font-size: 14px;
    margin-bottom: 20px;
  }
}
@media (min-width: 768px){
  .container{
    max-width: 720px;
  }
  .column{
    flex: 0 0 50%;
    max-width: 50%;
  }
  .effect .effect-text {
    text-align: left;
  }
  .effect .effect-text h2{
    height: 16px;
    color: #ffffff;
    font-size: 25px;
    margin: 0;
  }

  .effect .effect-text p{
    color: #ffffff;
    font-size: 14px;
    margin-bottom: 20px;
  }
}*/


@media (min-width:992px){
  .container{
    max-width: 960px;
  }
  .column{
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .effect .effect-img img{
    width: 100%;
    height: 300px;
    transition: all .3s;
  }
  .effect .effect-text {
    text-align: left;
  }
  .effect .effect-text h2{
    height: 35%;
    color: #ffffff;
    font-size: 18px;
    margin: 0;
    margin-bottom: 22%;
  }

  .effect .effect-text p{
    color: #ffffff;
    font-size: 16px;
  }

  .effect .effect-text span{
    color: #ffffff;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .effect .effect-btn .btn{
    display: inline-block;
    height: 35px;
    padding: 7px 15px;
    color: #333333;
    background: #ffffff;
    margin-top: 3rem;
  }
}
@media (min-width:1200px){
  .container{
    max-width: 1140px;
  }

}
</style>

<template>
  <div>
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
        <!-- delay looping data with loader spinner -->

        <!-- show card berita -->
        <mdb-row class="row justify-content-center mt-2 mb-5 webinar__content">
          <!-- List berita inside global-components -->
          <mdb-col lg="12" xs="12" sm="12">
            <div class="card__list">
              <div class="card__content">
                <mdb-row>
                  <mdb-col
                  id="show-event"
                  v-for="item in lists"
                  md="4"
                  xs="12"
                  sm="12"
                  :key="item.id" :style="`${$device.isMobile ? 'margin-bottom: 2rem;' : ''}`" class="column"
                  >
                  <div class="effect">
                    <div class="effect-img">
                      <img :src="item.foto_url" :alt="item.judul">
                    </div>
                    <div class="effect-text">
                      <div class="inner">
                        <h2>{{ item.judul }}</h2>
                        <span class="mt-3">Oleh Pusdokkes | {{ $moment(item.created_at).format("LL") }}</span>
                        <p  class="mt-3 truncate2">
                          {{item.konten}}
                        </p>
                        <div class="effect-btn">
                          <!-- <a href="#" class="btn"><i class="fa fa-eye"></i> Read More</a> -->
                          <nuxt-link
                          :to="{
                            name: `detail-berita-id-slug`,
                            params: {
                              id: item.id,
                              slug: $slug(item.judul),
                            },
                          }"
                          class="mb-2 btn"
                          >Baca Selengkapnya <i class="fa fa-eye"></i></nuxt-link>
                        </div>
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
</div>
</template>

<script>
  export default {
    props: ["lists", "loading", "error", "end"],
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
      LoadBerita() {
        this.$emit("load-more-berita")
      },

      getNextBerita() {
        window.onscroll = () => {
          if (!this.loading && !this.end && !this.error) {
            if (this.$refs.berita_square.getBoundingClientRect().bottom <= 450) {
              this.$emit("load-more-berita");
            }else{
              console.log("out")
            }
          }
        }
      }

    }
  }
</script>
