<style lang="scss">
.underline__title--full{
  display: inline-block;
  position: relative;
  left: 0;
  right: 0;
  margin-top: 1rem;
  margin-bottom: 2rem;
  h4{
    font-family: 'Rubik', sans-serif;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
  }
  .underline__full{
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
@media (min-width: 992px) {
  .underline__title--full{
    display: inline-block;
    position: relative;
    left: 0;
    right: 0;
    margin-top: 1rem;
    margin-bottom: 2rem;
    h4{
      font-family: 'Rubik', sans-serif;
      letter-spacing: 1px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
    }
    .underline__full{
      content: '';
      display: flex;
      margin: auto;
      margin-top: 5px;
      position: relative;
      margin-bottom:2rem;
      width: 100%;
      height: 3px;
      background:#000;
      &:after{
        content: '';
        display: block;
        margin: auto;
        position: relative;
        margin-top: -.1px;
        width: 5%;
        height: 3px;
        background:rgb(255, 99, 78);
      }
    }
  }
    .img-size{
      height: 450px;
      width: 700px;
      background-size: cover;
      overflow: hidden;
    }
    .modal-content {
     width: 700px;
     border:none;
   }
   .modal-body {
     padding: 0;
   }

   .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23009be1' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
    width: 30px;
    height: 48px;
  }
  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23009be1' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
    width: 30px;
    height: 48px;
  }
}
</style>

<template>
  <div id="gallery" class="portfolio">
    <div class="container">

            <!-- <div class="trending-tittle">
              <strong>Gallery Dokkes</strong>
            </div> -->
            <div class="row justify-content-center">
              <div class="col-lg-12 col-sm-12 underline__title--full">
                <h4>Gallery Dokkes</h4>
                <h1 class="underline__full"></h1>
              </div>
            </div>
            <div v-if="loading" class="row portfolio-container">
              <div v-for="(item, idx) in galleries" class="col-lg-4 col-md-6 portfolio-item">
                <b-skeleton-img></b-skeleton-img>
              </div>
            </div>
            <div v-else class="row portfolio-container">
              <div v-for="(item, idx) in galleries" class="col-lg-4 col-md-6 portfolio-item">
                <div class="portfolio-img">
                  <img :src="item.alamat" class="img-fluid" alt="">
                </div>
                <div class="portfolio-info" :style="`${$device.isMobile ? 'height: 330px!important;' : 'height: 340px!important;'}`">
                  <mdb-btn @click="showGalleryItems(item.list_image, item.id); index = idx"  class="portfolio-lightbox shadow-none preview-link" style="background-color: transparent;">
                   <i class="fas fa-clone fa-fw fa-lg"></i>
                 </mdb-btn>
                 
                 <!-- <vue-gallery-slideshow v-if="show"
                 :images="items"
                 :index="index"
                 @close="index = null; show = false"
                 ></vue-gallery-slideshow> -->

                 <b-modal :id="`gallery-image-${item.id}`" hide-footer hide-header>
                   <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                     <div class="carousel-inner">
                      <div v-for="(item, index) in items.images" :class="`carousel-item ${index === 0 ? 'active' : ''}`">
                        <img :src="item" class="d-block w-100 image-size" alt="laptop satu">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </button>
                  </div>
                </b-modal>
              </div>
            </div>

          </div>
        </div>
      </div>
    </template>

    <script>
      import VueGallerySlideshow from "vue-gallery-slideshow";

      export default {
        components: {
          VueGallerySlideshow
        },

        data(){
          return {
            index: null,
            galleries: [],
            loading: null,
            show: null,
            items: []
          }
        },

        mounted(){
          this.ConfigApiUrl(),
          this.contentGallery()
        },

        methods: {
          ConfigApiUrl() {
            const url = process.env.NUXT_ENV_API_URL;
            this.$store.dispatch("config/storeConfigApiUrl", url);
          },

          showGalleryItems(items, id){

            this.$bvModal.show(`gallery-image-${id}`)
            this.show = true

            const filter = this.galleries.filter(d => d.id === id)

            const stagedImage = {
              id: id,
              images: filter[0].list_image.map(d => d),
              alt: "Images - "+id
            }

            this.items=stagedImage

          },

          contentGallery(page=0){
            this.loading = true
            this.$axios.get(`${this.api_url}/web/galeri?start=${page}`)
            .then(({data}) => {
              this.galleries = data.list_data
            })
            .catch(err => console.error(err))
            .finally(() => {
              setTimeout(() => {
                this.loading = false
              }, 1500)
            })
          }
        },

        computed: {
          api_url() {
            return this.$store.getters["config/ConfigApiUrl"];
          },

          images(){
            let images = []
            const parents = this.galleries.map((item, idx) => {
              return idx
            })
            const childs = this.galleries.map(item => item.list_image)
            const findImage = childs.map((d, idx) => {
             return d[parents[0]]
           })
            images = findImage
            return images
          }
        },
      }
    </script>