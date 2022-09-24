<template>
    <div v-if="$device.isDesktop" class="banner">
      <mdb-carousel
      :interval="8000"
      slide
      :items="items"
      controlls
      indicators
      fade
      dark
      class="jumbotron__home"
      customClass="rounded"
      >
    </mdb-carousel>
      <b-container class="container">
        <b-row>
          <b-col>
            <div class="caption__banner">
              <h2 class="display-6 text-capitalize white-text">
                Selamat datang di PPKC
              </h2>
              <p style="color: white;width: 50%;">
                Pusat Pengembangan Kesehatan Caroulus (PPKC) menyelenggarakan
                pelatihan di bidang kesehatan yang profesional, unggul dan
                berlandaskan I-CARE serta mampu berdaya saing di tingkat
                nasional.
              </p>
              <b-button v-if="!token.accessToken"
              class="my__btn-primary rounded btn-md"
              @click="$router.push({ name: 'auth-registrasi' })"
              >Daftar Sekarang&nbsp;<mdb-icon icon="user-plus" size="lg"/></b-button
              >
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- If Mobile using jumbotron -->
    <div v-else>
      <b-jumbotron
      class="jumbotron__home"
      :style="`background-image: url(${bg});`"
      >
      <b-container>
        <b-row>
          <b-col>
            <h2 class="display-6 text-capitalize">selamat datang di PPKC</h2>
            <p>
              Pusat Pengembangan Kesehatan Caroulus (PPKC) menyelenggarakan
              pelatihan di bidang kesehatan yang profesional, unggul dan
              berlandaskan I-CARE serta mampu berdaya saing di tingkat
              nasional. 
            </p>
            <b-button v-if="!token.accessToken"
            class="my__btn-primary rounded btn-sm"
            @click="$router.push({ name: 'auth-registrasi' })"
            >Daftar Sekarang</b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
    <div class="banner">
      
      <mdb-carousel
      :interval="8000"
      slide
      :items="items"
      controlls
      indicators
      fade
      dark
      class="jumbotron__home mb-5"
      customClass="rounded"
      >
      </mdb-carousel>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bg", "items", "token"]
}
</script>