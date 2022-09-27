<template>
  <div class="weekly-news-area pt-50">
        <div class="container">
           <div class="weekly-wrapper">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="section-tittle mb-30">
                            <h3>Gallery</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="row">
                           
                        </div>
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
                index: null
            }
        },

        head(){
            return {
                script: [
                ]
            }
        },

        data(){
            return {
                galleries: [],
                modalContent: {}
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
                this.$axios.get(`${this.api_url}/web/galeri?start=${page}`)
                .then(({data}) => {
                    this.galleries = data.list_data
                })
                .catch(err => console.error(err))
            },

            showGallery(id, content){
              console.log(content)
                this.$bvModal.show(id)
                this.modalContent = content
            }
        },

        computed: {
            api_url() {
                return this.$store.getters["config/ConfigApiUrl"];
            }
        },
    }
</script>