<template>
  <div id="testimoni-list" class="testimoni__list mt-5">
    <mdb-container>
      <mdb-row class="row justify-content-between header__inside-content">
        <!-- colomn header testimoni -->
        <mdb-col col="12" md="7">
          <h5 class="text-capitalize">
            <strong class="font-weight-bold">testimoni</strong>
          </h5>
        </mdb-col>

        <mdb-col v-if="$device.isDesktop" col="12" md="4" >
          <nuxt-link to="/ppkc/testimoni" class="btn btn-sm  rounded-pill">Lihat Semua Testimoni &nbsp;<mdb-icon icon="arrow-right" size="lg"/></nuxt-link>
        </mdb-col>

        <!-- <mdb-col md="4"></mdb-col> -->
        <mdb-col md="12" xs="12" sm="12" :class="`text-capitalize ${$device.isDesktop ? '' : ''}`">
          <h2>Cerita sukses member kami</h2>
          
        </mdb-col>

        <mdb-col v-if="$device.isMobile" col="12" md="3" sm="12" class="mt-2">
          <nuxt-link to="/ppkc/testimoni" class="btn btn-sm rounded-pill">Lihat Semua Testimoni&nbsp;<mdb-icon icon="arrow-right" size="lg"/></nuxt-link>
        </mdb-col>
      </mdb-row>

      <!-- column card testimoni -->
      <!-- Testimoni card components -->
      <MoleculesHomepageMoleculesCardTestimoni v-if="lists.length > 0" :lists="lists"/>

      <MoleculesHomepageMoleculesListTestimoniSample v-else/>


      </mdb-container>
    </div>
  </template>

  <script>
    export default{
      props: ['lists']
    }
  </script>
