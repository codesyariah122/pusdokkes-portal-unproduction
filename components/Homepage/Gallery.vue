<style lang="scss">
.portfolio #portfolio-flters li {
    cursor: pointer;
    display: inline-block;
    margin: 0 10px 10px 10px;
    font-size: 15px;
    font-weight: 600;
    line-height: 1;
    padding: 7px 10px;
    text-transform: uppercase;
    color: #444444;
    transition: all 0.3s ease-in-out;
    border: 2px solid #fff;
}

.portfolio #portfolio-flters li:hover,
.portfolio #portfolio-flters li.filter-active {
    color: #f3a200;
    border-color: #ffb727;
}
.portfolio #portfolio-flters {
    list-style: none;
    margin-bottom: 20px;
}

.portfolio #portfolio-flters li {
    cursor: pointer;
    display: inline-block;
    margin: 0 10px 10px 10px;
    font-size: 15px;
    font-weight: 600;
    line-height: 1;
    padding: 7px 10px;
    text-transform: uppercase;
    color: #444444;
    transition: all 0.3s ease-in-out;
    border: 2px solid #fff;
}

.portfolio #portfolio-flters li:hover,
.portfolio #portfolio-flters li.filter-active {
    color: #f3a200;
    border-color: #ffb727;
}

.portfolio .portfolio-item {
    position: relative;
    margin-bottom: 30px;
}

.portfolio .portfolio-item .portfolio-img {
    overflow: hidden;
}

.portfolio .portfolio-item .portfolio-img img {
    transition: all 0.8s ease-in-out;
}

.portfolio .portfolio-item .portfolio-info {
    opacity: 0;
    position: absolute;
    left: 15px;
    height: 340px;
    bottom: 0;
    z-index: 3;
    right: 15px;
    transition: all ease-in-out 0.3s;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 15px;
}

.portfolio .portfolio-item .portfolio-info h4 {
    font-size: 18px;
    color: #fff;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0px;
}

.portfolio .portfolio-item .portfolio-info p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    margin-bottom: 0;
}

.portfolio .portfolio-item .portfolio-info .preview-link,
.portfolio .portfolio-item .portfolio-info .details-link {
    position: absolute;
    right: 100px;
    font-size: 23px;
    text-transform: capitalize;
    top: calc(50% - 18px);
    color: #fff;
    transition: 0.3s;
    top: 35%;
    background-color: $bg-primary!important;
}

.portfolio .portfolio-item .portfolio-info .preview-link:hover,
.portfolio .portfolio-item .portfolio-info .details-link:hover {
    color: #ffc041;
}

.portfolio .portfolio-item .portfolio-info .details-link {
    right: 10px;
}

.portfolio .portfolio-item:hover .portfolio-img img {
    transform: scale(1.2);
}

.portfolio .portfolio-item:hover .portfolio-info {
    opacity: 1;
}

.portfolio-details {
    padding-top: 40px;
}

.vgs{
    .vgs__container{
        margin-top: 7rem!important;
    }
}
</style>

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
                <div class="portfolio-info">
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