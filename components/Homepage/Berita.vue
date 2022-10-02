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
                  <h2><a href="details.html">{{item.judul}}</a></h2>
                  <p class="text-white">
                    {{$moment(item.created_at).format("LL")}}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Trending Bottom -->
          <div class="trending-bottom">
            <div class="row">
              <div v-for="(item, index) in news.slice(0, 6)" v-if="index !== news.length - 1" class="col-lg-4 col-sm-12">
                <div class="single-bottom mb-35">
                  <div class="trend-bottom-img mb-30">
                    <img :src="item.foto_url" alt="" height="150">
                  </div>
                  <div class="trend-bottom-cap">
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
            <div class="row justify-content-center mb-5" :style="`${$device.isDesktop ? 'margin-top: 2rem;' : 'margin-top: 1rem;'}`">
              <div class="col-lg-8 col-sm-12">
                <nuxt-link to="/pusdokkes/berita" class="btn my__btn-primary btn-md btn-block  rounded-pill">Lihat Semua Berita</nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Riht content -->
        <div class="col-lg-4 col-sm-12">
          <div class="trand-right-single section-tittle">
            <b-button disable style="background :#00923f!important; color: #fff; font-size: 14px;" :class="`btn btn-block ${$device.isDesktop ? 'btn-md' : 'btn-sm'} rounded`">
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
                <div  v-for="n in feeds.length" class="col-md-4 col-sm-4 mb-2 col-feed">
                  <b-skeleton-img></b-skeleton-img>
                </div>
              </div>
              <div v-else class="row instagram__feed">
                <div v-if="feedIndex <= feeds.length" v-for="feedIndex in feedToShow" class="col-md-4 col-sm-2 mb-2 col-feed">
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
                      View Feed
                    </a>
                  </div>
                </div>
                <div v-if="feeds.length > feedToShow" class="col-sm-12 col-md-12 mt-2">
                  <b-button @click="feedToShow += feeds.length" style="background :#00923f!important; color: #fff; font-size: 14px;" class="btn rounded-pill btn-sm btn-block">
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
  export default {
    data(){
      return {
        loading: null,
        news: [],
        feeds: [],
        feedIndex: null,
        feedToShow: 15,
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

        this.feeds = [
        {
          id: 1,
          desc: `Turut Berduka Cita atas wafatnya Iptu dr. Lia
          Semoga amal ibadah beliau diterima disisi Nya. <br/>
          <a href='https://www.instagram.com/p/CjMp6Ddr5DZ/' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CjMp6Ddr5DZ/',
          type: 'image',
          images: require('~/assets/images/feeds/feed1.jpg')
        },
        {
          id: 2,
          desc: `Posted @withrepost • @dr.asephendradiana Saya mengucapkan Terima kasih atas ucapan doa dan dukungan nya serta kepercayaan kepada saya untuk menjadi ketua umum Perdatin Periode 2022- 2025.

          Semoga senantiasa di berikan kesehatan, kemampuan dan kesuksesan serta keberkahan dalam melaksanakan amanah tersebut.

          Salam
          Irjen Pol dr. Asep Hendradiana, Sp. An., KIC., M. Kes <br/>
          <a href='https://www.instagram.com/p/CjMJUqtv9vw/' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CjMJUqtv9vw/',
          type: 'image',
          images: require('~/assets/images/feeds/feed2.jpg')
        },
        {
          id: 3,
          desc: `Posted @withrepost • @dr.asephendradiana Selamat Hari Kesaktian Pancasila, 1 Oktober 2022.
          Bangkit Bergerak Bersama Pancasila. <br/>
          <a href='https://www.instagram.com/p/CjKlYXGB2e9/' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CjKlYXGB2e9/',
          type: 'image',
          images: require('~/assets/images/feeds/feed3.jpg')
        },
        {
          id: 4,
          desc: `Tim Medis Ops Damai Cartenz Bersama TNI Bantu Sehatkan Masyarakat Melalui Program Keladi Sagu

          Tim Medis Ops Damai Cartenz yang dipimpin Ipda dr Wahyu Aprianto, kali ini bersama dengan TNI gencarkan program Keladi Sagu dalam rangka memberikan pengobatan kepada masyarakat yang bertempat di Kampung Yokatapa, Distrik Sugapa, Kabupaten Intan Jaya. <br/>
          <a href='https://www.instagram.com/p/CjFb56SMqCM/' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CjFb56SMqCM/',
          type: 'video',
          images: require('~/assets/images/feeds/feed4.mp4')
        },
        {
          id: 5,
          desc: `Sambutan dan pesan Kapusdokkes Polri pada acara pemberian Sertifikat Akreditasi kepada Rumah Sakit Bhayangkara Tk. I Pusdokkes Polri dan Rumah Sakit Bhayangkara Tk. II Kediri dengan Standar Kementerian Kesehatan dengan tingkat:
          .
          PARIPURNA ⭐️⭐️⭐️⭐️⭐️ <br/>
          <a href='https://www.instagram.com/p/CjEcdNsLbDm/' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CjEcdNsLbDm/',
          type: 'video',
          images: require('~/assets/images/feeds/feed5.mp4')
        },
        {
          id: 6,
          desc: `Posted @withrepost • @spri_pusdokkespolri Kapusdokkes Polri menghadiri dan memberikan sambutan pada acara penerimaan sertifikat akreditasi Paripurna kepada Rumkit Bhayangkara Tk.I Pusdokkes Polri dan Rumkit Bhayangkara Tk.II Kediri sekligus penyematan Pin LAFKI dari Ketua LAFKI kepada Kapusdokkes Polri.

          Acara ini dilaksanakan secara Hybrid (offline & online) dihadiri oleh:
          1. Kapusdokkes Polri
          2. Karumkit Bhy Tk.I Pusdokkes Polri
          3. Sespusdokkes Polri
          4. Para Karo Pusdokkes Polri
          5. Ketua LAFKI
          6. Para Dewas Rumkit Bhayangkara
          7. Wakarumkit Bhy Tk.I Pusdokkes Polri
          8. Para PJU Pusdokkes Polri & Rumkit Bhy Tk.I Pusdokkes Polri
          9. Para Kabiddokkes Polda
          10.Para Karumkit Bhayangkara jajaran

          Merupakan pencapaian prestasi yang membanggakan bagi Pusdokkes Polri, hal ini diharapkan dapat memacu Rumkit Bhayangkara lainnya untuk lebih meningkatkan kinerja, mutu pelayanan publik & keselamatan pasien. Sebagai salah satu arahan pimpinan Polri dalam mewujudkan pelayanan masyarakat yang profesional, terpercaya dan terintegrasi.

          Dokkes PRESISI
          Profesional, Terpercaya, Terintegrasi
          Salam PRESISI<br/>
          <a href='https://www.instagram.com/p/CjETiGTvSMD/' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CjETiGTvSMD/',
          type: 'image',
          images: require('~/assets/images/feeds/feed6.jpg')
        },
        {
          id: 7,
          desc: `Selamat untuk Rumah Sakit Bhayangkara Tk. II Kediri atas tercapainya Akreditasi Standar Pelayanan Kesehatan dengan tingkat:
          .
          PARIPURNA ⭐️⭐️⭐️⭐️⭐️ <br/>
          <a href='https://www.instagram.com/p/CjDWAzYLYaW/' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CjDWAzYLYaW/',
          type: 'image',
          images: require('~/assets/images/feeds/feed7.jpg')
        },
        {
          id: 8,
          desc: `Posted @withrepost • @igdrspolri Selamat untuk Rumah Sakit Bhayangkara Tk. I Raden Said Sukanto / Pusdokkes Polri atas tercapainya Akreditasi Standar Pelayanan Kesehatan dengan Tingkat:
          .
          PARIPURNA ⭐⭐⭐⭐⭐ <br/>
          <a href='https://www.instagram.com/p/CjAfclYLIpM/' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CjAfclYLIpM/',
          type: 'image',
          images: require('~/assets/images/feeds/feed8.jpg')
        },
        {
          id: 9,
          desc: `Rapat Internal Membahas Dewas Rumkit Bhayangkara.

          Selasa, 27 September 2022 <br/>
          <a href='https://www.instagram.com/p/CjAfHWTLUVy/' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CjAfHWTLUVy/',
          type: 'image',
          images: require('~/assets/images/feeds/feed9.jpg')
        },
        {
          id: 10,
          desc: `Peninjauan Pembangunan Gedung Presisi DIV TIK Polri Tahap l.

          Selasa, 27 September 2022 <br/>
          <a href='https://www.instagram.com/p/CjAe-53rHgp/' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CjAe-53rHgp/',
          type: 'image',
          images: require('~/assets/images/feeds/feed10.jpg')
        },
        {
          id: 11,
          desc: `Posted @withrepost • @spri_pusdokkespolri Kapusdokkes Polri membuka kegiatan Pelatihan SAKTI Rumkit Bhayangkara BLU Polri Tahun 2022. (27/09/2022). Bertempat di Hotel Haris Suites Puri Mansion, Jakarta Barat
          PJU Pendamping:
          - Kapus Keu Polri
          - Karo Kespol Pusdokkes Polri
          - Karumkit Bhayangkara Tk.I Pusdokkes Polri
          - Kabid Analisa Pelaporan Puskeu Polri

          Dokkes PRESISI
          Profesional, Terpercaya, Terintegrasi
          Salam PRESISI <br/>
          <a href='https://www.instagram.com/p/CjAeZ-4riLT/' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CjAeZ-4riLT/',
          type: 'image',
          images: require('~/assets/images/feeds/feed11.jpg')
        },
        {
          id: 12,
          desc: `Harus tetap waspada terhadap Covid - 19 <br/> Pesan Bpk Presiden RI <br/> Ir. Joko Widodo <br/>
          <a href='https://www.instagram.com/p/Ciy42q2LgMY/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/Ciy42q2LgMY/?hl=id',
          type: 'image',
          images: require('~/assets/images/feeds/old/feed1.jpg')
        },
        {
          id: 13,
          desc: `Pembukaan dan Pengarahan Kapusdokkes Polri Kepada Siswa Dikbangspes Dokpol Bintara/PNS Gol ll Angkatan XXV T.A 2022. <br/> Aula Bagfarmapol, 19 September 2022 <br/> 
          <a href='https://www.instagram.com/p/CiwQeOwJoaB/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CiwQeOwJoaB/?hl=id',
          type: 'image',
          images: require('~/assets/images/feeds/old/feed2.jpg')
        },
        {
          id: 14,
          desc: `Tidak sulit memelihara kesehatan jantung <br/> Semoga bermanfaat <br/> 
          <a href='https://www.instagram.com/p/CivjBLNhXEu/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CivjBLNhXEu/?hl=id',
          type: 'video',
          images: require('~/assets/images/feeds/old/feed3.mp4')
        },
        {
          id: 15,
          desc: `<a href='https://www.instagram.com/p/CiuvzKmrRPF/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>`,
          link: 'https://www.instagram.com/p/CiuvzKmrRPF/?hl=id',
          type: 'image',
          images: require('~/assets/images/feeds/old/feed4.jpg')
        },
        {
          id: 16,
          desc: `STUNTING MENJADI MASALAH DUNIA KARENA IMPLIKASINYA MENENTUKAN MASA DEPAN BANGSA. MENURUT DATA DARI SURVEI STATUS GIZI INDONESIA TAHUN 2021 YANG DILAKUKAN OLEH KEMENTRIAN KESEHATAN TERCATAT ANGKA STUNTING DI INDONESIA SEBESAR 24 %. ANGKA INI MASIH JAUH DARI ANGKA TARGET YANG DITETAPKAN OLEH BADAN KESEHATAN DUNIA (WHO), SEHARUSNYA ANGKA STUNTING TIDAK LEBIH DARI 20%. POLRI BERSAMA DENGAN KEMENTRIAN KESEHATAN DAN BKKBN MENDUKUNG PROGRAM STRATEGI NASIONAL DALAM MENCAPAI TARGET PENURUNAN STUNTING DI INDONESIA. <br/> 
          <a href='https://www.instagram.com/p/Citp-E6rJz3/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/Citp-E6rJz3/?hl=id',
          type: 'image',
          images: require('~/assets/images/feeds/old/feed5.jpg')
        },
        {
          id: 17,
          desc: `STUNTING MENJADI MASALAH DUNIA KARENA IMPLIKASINYA MENENTUKAN MASA DEPAN BANGSA. MENURUT DATA DARI SURVEI STATUS GIZI INDONESIA TAHUN 2021 YANG DILAKUKAN OLEH KEMENTRIAN KESEHATAN TERCATAT ANGKA STUNTING DI INDONESIA SEBESAR 24 %. ANGKA INI MASIH JAUH DARI ANGKA TARGET YANG DITETAPKAN OLEH BADAN KESEHATAN DUNIA (WHO), SEHARUSNYA ANGKA STUNTING TIDAK LEBIH DARI 20%. POLRI BERSAMA DENGAN KEMENTRIAN KESEHATAN DAN BKKBN MENDUKUNG PROGRAM STRATEGI NASIONAL DALAM MENCAPAI TARGET PENURUNAN STUNTING DI INDONESIA.<br/>
          <a href='https://www.instagram.com/p/Citp-E6rJz3/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/Citp-E6rJz3/?hl=id',
          type: 'image',
          images: require('~/assets/images/feeds/old/feed6.jpg')
        },
        {
          id: 18,
          desc: `<a href='https://www.instagram.com/p/CijdRm3rq6C/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CijdRm3rq6C/?hl=id',
          type: 'image',
          images: require('~/assets/images/feeds/old/feed7.jpg')
        },
        {
          id: 19,
          desc: `<a href='https://www.instagram.com/p/CihJs66LUo4/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CihJs66LUo4/?hl=id',
          type: 'image',
          images: require('~/assets/images/feeds/old/feed8.jpg')
        },
        {
          id: 20,
          desc: `<a href='https://www.instagram.com/p/CighnMKP8Dx/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CighnMKP8Dx/?hl=id',
          type: 'image',
          images: require('~/assets/images/feeds/old/feed9.jpg')
        },
        {
          id: 21,
          desc: `<a href='https://www.instagram.com/p/Cige7jwvyum/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/Cige7jwvyum/?hl=id',
          type: 'image',
          images: require('~/assets/images/feeds/old/feed10.jpg')
        },
        {
          id: 22,
          desc: `<a href='https://www.instagram.com/p/CigcoZ9vvsh/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CigcoZ9vvsh/?hl=id',
          type: 'image',
          images: require('~/assets/images/feeds/old/feed11.jpg')
        },
        {
          id: 23,
          desc: `Latihan BHD (Bantuan Hidup Dasar) di RS Bhayangkara Lemdiklat Polri <br/> <a href='https://www.instagram.com/p/CigPBvxPeKd/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CigPBvxPeKd/?hl=id',
          type: 'image',
          images: require('~/assets/images/feeds/old/feed12.jpg')
        },
        {
          id: 24,
          desc: `<a href='https://www.instagram.com/p/CidhIBehwrl/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CidhIBehwrl/?hl=id',
          type: 'image',
          images: require('~/assets/images/feeds/old/feed13.jpg')
        },
        {
          id: 25,
          desc: `<a href='https://www.instagram.com/p/CicPK0FrTur/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CicPK0FrTur/?hl=id',
          type: 'image',
          images: require('~/assets/images/feeds/old/feed14.jpg')
        },
        {
          id: 26,
          desc: `<a href='https://www.instagram.com/p/CibFh3wvTmJ/?hl=id' target='_blank' class='btn btn-success btn-sm'>See My Feed</a>
          `,
          link: 'https://www.instagram.com/p/CibFh3wvTmJ/?hl=id',
          type: 'image',
          images: require('~/assets/images/feeds/old/feed15.jpg')
        }
        ]
      }
    }
  }
</script>