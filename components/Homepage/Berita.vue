<template>
  <div class="berita__list">
    <mdb-container>     
      <mdb-row class="row justify-content-center header__inside-content">
        <!-- colomn header berita -->
        <mdb-col col="12" md="12" xs="12" sm="12">
          <h5 class="text-center">Berita</h5>
        </mdb-col>
        <mdb-col md="12" xs="12" sm="12">
          <h2 class="text-center" :style="`${$device.isDesktop ? 'margin-left:1rem;' : 'margin-left:-.7rem;'}`">
            Ikuti Berita dan Kegiatan Kami
          </h2>
        </mdb-col>
      </mdb-row>

      <mdb-row v-if="lists.length > 0" class="justify-content-center col__berita mt-3 mb-3">
        <MoleculesHomepageMoleculesCardBerita  :lists="lists" ref="childBerita"/> 
      </mdb-row>

      <MoleculesHomepageMoleculesListBeritaSample v-else />

    </mdb-container>

  </div>
</template>

<script>

  export default{
    props: ['lists']
  }
</script>
