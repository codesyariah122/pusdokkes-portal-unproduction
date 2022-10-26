<style lang="scss">
.underline__title{
    display: inline-block;
    position: relative;
    left: 0;
    right: 0;
    margin-top: 1rem;
    h4{
      font-family: 'Rubik', sans-serif;
      letter-spacing: 1px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 18px;
    }
    .underline{
      content: '';
      display: flex;
      margin: auto;
      margin-top: 5px;
      position: relative;
      width: 100%;
      height: 3px;
      background:#000;
      &:after{
        content: '';
        display: block;
        margin: auto;
        position: relative;
        margin-top: -.1px;
        width: 10%;
        height: 3px;
        background:rgb(255, 99, 78);
      }
    }
  }
  .papper__fold{
    font-family: 'Rubik', sans-serif;
    text-rendering: optimizeLegibility;
    position: relative;
    display: inline-block;
    width: 80%;
    padding-top: 0;
    padding-bottom: 0;
    line-height: 45px;
    background-color: $bg-primary!important;
    border: 0px;
    cursor: pointer;
    transition: 0.5s;
    clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%);
    border-bottom-right-radius: 15px;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    color: $default;
    margin-left: 1rem;
    &:before {
      content: '';
      position: absolute;
      display: inline-block;
      width: 30px;
      height: 30px;
      background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0, rgba(0,0,0,.4) 27px, #025364);
    // background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0, rgba(0,0,0,.4)) no-repeat 100% 0;
    // background-color: rgba(0,0,0,.4);
    left: -1px;
    top: -3px;
    border-bottom-right-radius: 5px;
    box-shadow: 1px 1px 2px 0px $black;
    transition: 0.5s;
  }
  &:hover::before
  {
    width: 0px;
    height: 0px;
  }
  &:hover
  {
   clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
 }

}

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
      height: auto;
      width: 100%;
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
      opacity: 1;
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
      opacity: 0.7;
    }

    &:hover .middle {
      opacity: 1;
    }

    .button{
      font-size: 31px;
    }

  }
}

@media (min-width: 992px) {
  .underline__title{
    display: inline-block;
    position: relative;
    left: 0;
    right: 0;
    margin-left: -23rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    h4{
      font-family: 'Rubik', sans-serif;
      letter-spacing: 1px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
    }
    .underline{
      content: '';
      display: flex;
      margin: auto;
      margin-top: 5px;
      position: relative;
      margin-bottom:2rem;
      width: 65%;
      height: 3px;
      background:#000;
      &:after{
        content: '';
        display: block;
        margin: auto;
        position: relative;
        margin-top: -.1px;
        width: 10%;
        height: 3px;
        background:rgb(255, 99, 78);
      }
    }
  }
  .papper__fold{
    font-family: 'Rubik', sans-serif;
    text-rendering: optimizeLegibility;
    position: relative;
    display: inline-block;
    width: 80%;
    padding-top: 0;
    padding-bottom: 0;
    line-height: 45px;
    background-color: $bg-primary!important;
    border: 0px;
    cursor: pointer;
    transition: 0.5s;
    clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%);
    border-bottom-right-radius: 15px;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    color: $default;
    margin-left: 2rem;
    &:before {
      content: '';
      position: absolute;
      display: inline-block;
      width: 30px;
      height: 30px;
      background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0, rgba(0,0,0,.4) 27px, #025364);
    // background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0, rgba(0,0,0,.4)) no-repeat 100% 0;
    // background-color: rgba(0,0,0,.4);
    left: -1px;
    top: -3px;
    border-bottom-right-radius: 5px;
    box-shadow: 1px 1px 2px 0px $black;
    transition: 0.5s;
  }
  &:hover::before
  {
    width: 0px;
    height: 0px;
  }
  &:hover
  {
   clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
 }

}
  .instagram__feed{
    .col-feed{
      position:relative;
      img{
        height: auto;
        width: 100%;
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
        opacity: 0.8;
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
        opacity: 0.7;
      }

      &:hover .middle {
        opacity: 3;
      }

      .button{
        border-radius: 100%;
        background-color: transparent;
        font-size: 25px;
      }

    }
  }
}


</style>

<template>
  <div class="trending-area fix" :style="`${$device.isDesktop ? 'margin-top: -5rem;' : ''}`">
    <div class="container">
      <div class="trending-main">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-sm-12 underline__title">
            <h4>Berita Dokkes</h4>
            <h1 class="underline"></h1>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-lg-12 col-sm-12">
            <div class="trending-tittle">
              <strong>Berita Dokkes</strong>
            </div>
          </div>
        </div> -->

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
          <div v-for="(item, index) in news.reverse()">
            <!-- Trending Top -->
            <div v-if="index == news.length - 1" class="trending-top mb-3">
              <div class="trend-top-img">
                <img :src="item.foto_url" alt="">
                <div class="trend-top-cap mt-2">
                  <h4><nuxt-link :to="{
                    name: `detail-berita-id-slug`,
                    params: {
                      id: item.id,
                      slug: $slug(item.judul),
                    },
                  }">{{item.judul}}</nuxt-link></h4>
                  <p>
                    Oleh Pusdokkes | {{$moment(item.created_at).format("LL")}}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Trending Bottom -->
          <div class="trending-bottom">
            <div class="row">
              <div v-for="(item, index) in news.slice(0, 10).reverse()" v-if="index !== news.length - 1" :class="`col-lg-12 col-sm-12 ${$device.isDesktop ? 'mb-4' : 'mb-2'}`">
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
                    <p style="color: #4B5563!important;font-weight: 400;">Oleh Pusdokkes | {{$moment(item.created_at).format("LL")}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-start mb-5" :style="`${$device.isMobile ? 'margin-top: 1rem; margin-bottom: 2rem;' : 'margin-top: 2rem;'}`">
              <div class="col-lg-12 col-sm-12">
                <nuxt-link to="/pusdokkes/berita" class="fade-in-link" style="font-size: 18px;">Lihat Semua Berita...</nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Riht content -->
        <div class="col-lg-4 col-sm-6">
          <div class="trand-right-single">
          <!-- <b-button :style="`${$device.isDesktop ? 'background :#00923f!important; color: #fff; font-size: 14px;margin-left: -.2rem;' : 'background :#00923f!important; color: #fff; font-size: 14px; margin-left: -.5rem;'}`" :class="`btn btn-block ${$device.isDesktop ? 'btn-md btn-block' : 'btn-sm'} rounded`">
            pesan kapusdokkes
          </b-button> -->
          <h4 class="papper__fold" :style="`${$device.isMobile ? 'margin-top: 5rem;' : ''}`">
            pesan kapusdokkes
          </h4>
        </div>

        <div class="trand-right-single"  :style="`${$device.isDesktop ? 'margin-top: -1rem;' : 'margin-top: -2rem;'}`">
          <iframe :width="`${$device.isDesktop ? '337' : '300'}`" height="250" src="https://www.youtube.com/embed/Pw_HBvCESdw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="trand-right-single mt-3">
          <h4 class="papper__fold">
            pusdokkes feed
          </h4>
        </div>
        
        <div  :class="`trand-right-single d-flex ${$device.isDesktop ? 'mt-2' : ''}`">
          <div class="trand-right-img" :style="`${$device.isMobile ? 'margin-left: -.3rem; margin-top:2rem;' : ''}`">
            <div v-if="loading" class="row instagram__feed">
              <div v-for="n in feeds.length" class="col-md-4 col-sm-4 mb-3 col-feed">
                <b-skeleton-img></b-skeleton-img>
              </div>
            </div>
            <div v-else class="row instagram__feed">
              <div v-if="feedIndex <= feeds.length" v-for="feedIndex in feedToShow" class="col-md-4 col-sm-12 mb-3 col-feed">
                <img v-if="feeds[feedIndex-1].type === 'image'" :src="feeds[feedIndex-1].images" />
                <video v-else :src="feeds[feedIndex-1].images"></video>
                <div class="middle">
                    <!-- <mdb-popover trigger="click" :options="{placement: 'left'}">
                      <span slot="header">@pusdokkespolri</span>
                      <span slot="body" v-html="feeds[feedIndex-1].desc"></span>
                      <mdb-btn size="sm" slot="reference">
                        View Feed
                      </mdb-btn>
                    </mdb-popover> -->
                    <a :href="feeds[feedIndex-1].link" target="_blank" class="button btn btn-sm shadow-none">
                      <i v-if="feeds[feedIndex-1].type === 'image'" class="fas fa-clone fa-fw fa-lg text-white"></i>
                      <i v-else class="fas fa-play fa-fw fa-lg text-white"></i>
                    </a>
                  </div>
                </div>
                <div v-if="feeds.length > feedToShow" class="col-md-12 col-sm-12 mt-2">
                  <center>
                    <b-button @click="feedToShow += 3" style="background :#00923f!important; color: #fff; font-size: 14px;" class="btn rounded btn-sm">
                      Load more...
                    </b-button>
                  </center>
                </div>
                <div class="col-sm-12 col-md-12 mt-2">
                  <center>
                    <a :style="`${$device.isDesktop ? 'background :#00923f!important; color: #fff; font-size: 12px;' : 'background :#00923f!important; color: #fff; font-size: 14px;'}`" class="btn rounded" href="https://www.instagram.com/pusdokkespolri/?hl=id" target="_blank">
                      <i class="fab fa-instagram fa-lg fa-fw"></i> Follow On Instagram
                    </a>
                  </center>
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
        feedToShow: 21,
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