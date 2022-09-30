<template>
    <div id="gallery" class="portfolio">
        <div class="container">

            <div class="trending-tittle">
              <strong>Gallery Dokkes</strong>
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
                        <mdb-btn @click="index = idx"  class="portfolio-lightbox preview-link" >
                           Lihat
                       </mdb-btn>
                       <vue-gallery-slideshow
                       :images="images"
                       :index="index"
                       @close="index = null"
                       ></vue-gallery-slideshow>
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

        head(){
            return {
                link: [
                ],
                script: [
                ]
            }
        },

        data(){
            return {
                index: null,
                galleries: [],
                images: [],
                loading: null
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

            contentGallery(page=0){
                this.loading = true
                this.$axios.get(`${this.api_url}/web/galeri?start=${page}`)
                .then(({data}) => {
                    this.galleries = data.list_data
                    console.log(data.list_data)
                    data.list_data.map(d => this.images.push(d.alamat))
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
            }
        },
    }
</script>