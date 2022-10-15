<template>
  <div>
    <mdb-row class="row justify-content-center">
      <!-- bg content -->
      <mdb-col col="12" lg="12" xs="12" sm="12" class="bg__content">
        <img :src="require('~/assets/art/vector-5.png')" />
      </mdb-col>
    </mdb-row>

    <mdb-row class="row justify-content-center card__berita-list">
      <mdb-col
      v-for="(item, index) in lists"
      md="4"
      xs="12"
      sm="12"
      :key="item.id"
      class="mb-3"
      >
      <mdb-card v-if="index <= 3">
        <mdb-card-image
        :src="item.foto_url"
        alt="Card image cap"
        ></mdb-card-image>
        <mdb-card-body>
          <mdb-card-title>{{ item.judul }}</mdb-card-title>
          <mdb-card-text class="truncate2 mt-2">
            <span style="font-size: 12px"
            ><i class="fa fa-calendar fa-fw fa-lg" aria-hidden="true"></i>
            {{ $moment(item.created_at).format("LL") }}</span
            >
            <p class="mt-3 mb-2 truncate2">
              {{ item.konten }}
            </p>
          </mdb-card-text>
          <hr />

          <nuxt-link
          :to="{
            name: `detail-berita-id-slug`,
            params: {
              id: item.id,
              slug: $slug(item.judul),
            },
          }"
          class="mt-5 mb-2"
          >Baca Selengkapnya <mdb-icon icon="arrow-right"
          /></nuxt-link>
        </mdb-card-body>
      </mdb-card>
    </mdb-col>
  </mdb-row>

  <mdb-row class="row justify-content-center text-center">
    <mdb-col
    lg="12"
    xs="12"
    sm="12"
    :style="`${$device.isMobile ? 'width: 80%;' : 'width: 100%;'}`"
    :class="`${$device.isDesktop ? 'mb-5 mt-5 shadow-none' : 'mb-2 mt-2 ml-2'}`"
    >
    <nuxt-link
    to="/ppkc/berita"
    :class="`btn my__btn-primary rounded-pill ${
      $device.isMobile ? 'btn-block btn-sm btn__link' : 'btn-lg'
    }`"
    >Lihat Semua Berita <mdb-icon icon="arrow-right" size="lg"/></nuxt-link
    >
  </mdb-col>
</mdb-row>

</div>
</template>

<script>
  export default {
    props: ["lists"],
    data() {
      return {
        listToShow: 3,
      };
    },
  };
</script>