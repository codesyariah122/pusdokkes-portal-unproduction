<style lang="scss">
.section-tittle{
  .flex__title{
    margin-left: -1rem;
    .text{
      margin-left: -2.5rem;
      a{
        color: $second-black;
        &:hover{
          color: $color-link;
        }
      }
    }
  }
}

.instagram__feed{
  .col-feed{
    position:relative;
    img{
      height: 300px;
      width: 500px;
      cursor: pointer;
      opacity: 1;
      display: block;
      transition: .5s ease;
      backface-visibility: hidden;
    }
    video{
      height: 400px;
      width: 300px;
      cursor: pointer;
      opacity: 1;
      display: block;
      transition: .5s ease;
      backface-visibility: hidden;
    }

    .middle {
      z-index: 333;
      transition: .5s ease;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      text-align: center;
      .popover{
        z-index: 1;
      }
    }

    &:hover img, &:hover video {
      opacity: 0.3;
    }

    &:hover .middle {
      opacity: 1;
    }

    .button{
      font-size: 11px;
    }

  }
}

@media (min-width: 992px) {
  .instagram__feed{
    .col-feed{
      position:relative;
      img{
        height: 100px;
        width: 150px;
        cursor: pointer;
        opacity: 1;
        display: block;
        transition: .5s ease;
        backface-visibility: hidden;
      }
      video{
        height: 100px;
        width: 100px;
        cursor: pointer;
        opacity: 1;
        display: block;
        transition: .5s ease;
        backface-visibility: hidden;
      }

      .middle {
        z-index: 333;
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
        .popover{
          z-index: 1;
        }
      }

      &:hover img, &:hover video {
        opacity: 0.3;
      }

      &:hover .middle {
        opacity: 1;
      }

      .button{
        font-size: 11px;
      }

    }
  }
}
</style>

<template>
  <div class="trending-area fix">
    <div class="container">
      <div class="trending-main">
        <div class="row">
          <div class="col-lg-12 col-sm-12">
            <div class="trending-tittle">
              <strong>Berita Dokkes</strong>
            </div>
          </div>
        </div>

        <div class="row" :style="`${$device.isDesktop ? 'margin-top: -2rem;' : 'margin-top: 1rem;'}`">
          <div v-if="loading" class="col-lg-8 col-sm-12">
            <div class="trending-top mb-5">
              <div class="trend-top-img">
                <b-skeleton-img></b-skeleton-img>
              </div>
            </div>
            <div class="trending-bottom">
              <div class="row">
                <div v-for="n in news.length" class="col-lg-4 col-sm-12">
                  <div class="single-bottom mb-35">
                    <div class="trend-bottom-img mb-30">
                      <b-skeleton-img></b-skeleton-img>
                    </div>
                    <div class="trend-bottom-cap">
                     <b-skeleton animation="wave" width="85%"></b-skeleton>
                     <b-skeleton animation="wave" width="55%"></b-skeleton>
                     <b-skeleton animation="wave" width="70%"></b-skeleton>
                   </div>
                 </div>
               </div>
             </div>
             <div class="row justify-content-center mb-5" :style="`${$device.isDektop ? '`margin-top: 8rem;' : 'margin-top: 1rem;'}`">
              <div class="col-lg-12 col-sm-12">
                <b-skeleton type="button"></b-skeleton>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="col-lg-8 col-sm-12">
          <div v-for="(item, index) in news">
            <!-- Trending Top -->
            <div v-if="index == news.length - 1" class="trending-top mb-5">
              <div class="trend-top-img">
                <img :src="item.foto_url" alt="">
                <div class="trend-top-cap mt-2">
                  <h2><nuxt-link :to="{
                      name: `detail-berita-id-slug`,
                      params: {
                        id: item.id,
                        slug: $slug(item.judul),
                      },
                    }">{{item.judul}}</nuxt-link></h2>
                  <p>
                    {{$moment(item.created_at).format("LL")}}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Trending Bottom -->
          <div class="trending-bottom">
            <div class="row">
              <div v-for="(item, index) in news.slice(0, 10)" v-if="index !== news.length - 1" class="col-lg-12 col-sm-12 mb-4">
                <div class="row single-bottom">
                  <div class="col-md-4 col-sm-12 trend-bottom-img">
                    <img :src="item.foto_url" :alt="item.title" class="img-fluid"/>
                  </div>
                  <div class="col-md-6 col-sm-12 trend-bottom-cap">
                    <h4 style="font-weight: 700;"><nuxt-link :to="{
                      name: `detail-berita-id-slug`,
                      params: {
                        id: item.id,
                        slug: $slug(item.judul),
                      },
                    }"> {{item.judul}} </nuxt-link></h4>
                    <p style="color: #4B5563!important;font-weight: 400;">{{$moment(item.created_at).format("LL")}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center mb-5" :style="`${$device.isMobile ? 'margin-top: 1rem; margin-bottom: 2rem;' : 'margin-top: 3rem;'}`">
              <div class="col-lg-8 col-sm-12">
                <nuxt-link to="/pusdokkes/berita" class="btn my__btn-primary btn-md btn-block  rounded-pill shadow-none">Lihat Semua Berita</nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Riht content -->
        <div class="col-lg-4 col-sm-12">
          <div class="trand-right-single section-tittle">
            <b-button style="background :#00923f!important; color: #fff; font-size: 14px;" :class="`btn btn-block ${$device.isDesktop ? 'btn-md' : 'btn-sm'} rounded`">
              pesan kapusdokkes
            </b-button>
          </div>

          <div class="trand-right-single" style="margin-top: -2.5rem;">
            <iframe :width="`${$device.isDesktop ? '337' : '300'}`" height="250" src="https://www.youtube.com/embed/Pw_HBvCESdw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div class="trand-right-single section-tittle">
            <a style="background :#00923f!important; color: #fff; font-size: 14px;" :class="`btn btn-block ${$device.isDesktop ? 'btn-sm' : 'btn-sm'} rounded`" href="https://www.instagram.com/pusdokkespolri/?hl=id" target="_blank">
              Follow Me On Instagram <i class="fab fa-instagram fa-lg fa-fw"></i>
            </a>
          </div>
          <div  class="trand-right-single d-flex">
            <div class="trand-right-img" :style="`${$device.isMobile ? 'margin-left: -.3rem;' : ''}`">
              <div v-if="loading" class="row instagram__feed">
                <div  v-for="n in feeds.length" class="col-md-4 col-sm-4 mb-3 col-feed">
                  <b-skeleton-img></b-skeleton-img>
                </div>
              </div>
              <div v-else class="row instagram__feed">
                <div v-if="feedIndex <= feeds.length" v-for="feedIndex in feedToShow" class="col-md-4 col-sm-2 mb-3 col-feed">
                  <img v-if="feeds[feedIndex-1].type === 'image'" :src="feeds[feedIndex-1].images" class="img-thumbnail">
                  <video v-else :src="feeds[feedIndex-1].images"></video>
                  <div class="middle">
                    <!-- <mdb-popover trigger="click" :options="{placement: 'left'}">
                      <span slot="header">@pusdokkespolri</span>
                      <span slot="body" v-html="feeds[feedIndex-1].desc"></span>
                      <mdb-btn size="sm" slot="reference">
                        View Feed
                      </mdb-btn>
                    </mdb-popover> -->
                    <a :href="feeds[feedIndex-1].link" target="_blank" class="btn btn-sm" style="background :#00923f!important; color: #fff; font-size: 10px;">
                      Lihat
                    </a>
                  </div>
                </div>
                <div v-if="feeds.length > feedToShow" class="col-sm-12 col-md-12 mt-2">
                  <b-button @click="feedToShow += 3" style="background :#00923f!important; color: #fff; font-size: 14px;" class="btn rounded-pill btn-sm btn-block">
                    Lebih Banyak
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import {feeds} from '@/helpers'

  export default {
    data(){
      return {
        loading: null,
        news: [],
        feeds: [],
        feedIndex: null,
        feedToShow: 23,
        placement: 'topright'
      }
    },

    head(){
      return {
        script: [
        {src: '//www.instagram.com/embed.js'}
        ]
      }
    },

    mounted(){
      this.beritaLists(),
      this.feedContents()
    },

    methods: {
      beritaLists(){
        this.loading = true
        const base_url = process.env.NUXT_ENV_API_URL
        this.$axios.get(`${base_url}/web/berita/page?start=0`)
        .then(({data}) => {
          this.news = data.list_data
        })
        .catch(err => console.error(err.response))
        .finally(() => {
          setTimeout(() => {
            this.loading = false
          }, 1500)
        })
      },

      feedContents(){
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 1500)

        this.feeds = feeds.reverse()
      }
    }
  }
</script>