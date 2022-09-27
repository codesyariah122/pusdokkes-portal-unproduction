<template>
  <div  class="banner">
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
        const base_url = process.env.NUXT_ENV_API_URL
        this.$axios.get(`${base_url}/web/slider?start=0`)
        .then(({data}) => {
          data.list_data.map(d => {
            this.items.push({img: true, src: d.foto_url, label: "first media", caption: d.deskripsi})
          })
        })
        .catch(err => console.error(err.response))
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