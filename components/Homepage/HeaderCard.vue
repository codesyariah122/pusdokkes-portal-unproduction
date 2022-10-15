<template>
  <div v-if="loading" class="banner mt-3">
    <b-row>
      <b-col cols="12" class="mt-3">
        <b-skeleton-img no-aspect height="350px"></b-skeleton-img>
      </b-col>
    </b-row>
  </div>
  <div v-else class="banner">
    <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="4000"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="480"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
    class="jumbotron__home"
    >
      <b-carousel-slide v-for="(item, index) in items"
      :img-src="item.src" :key="item.id"
      >
        <h3 :style="`${$device.isMobile ? 'font-size: 12px;' : ''}`">{{item.caption}}</h3>
      </b-carousel-slide>
  </b-carousel>
</div>
</template>


<script>
  export default {
    props: ['token'],
    data(){
      return {
        loading: null,
        items: [],
        captions: [],
        slide: 0,
        sliding: null
      }
    },

    mounted(){
      this.carouselItem()
    },

    methods: {
      carouselItem(){
        this.loading = true
        const base_url = process.env.NUXT_ENV_API_URL
        this.$axios.get(`${base_url}/web/slider?start=0`)
        .then(({data}) => {
          data.list_data.map(d => {
            this.items.push({img: true, src: d.foto_url, caption: d.deskripsi})
          })
        })
        .catch(err => console.error(err.response))
        .finally(() => {
          setTimeout(() => {
            this.loading = false
          }, 1500)
        })
      },
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>