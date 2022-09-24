<template>
  <div>
    <mdb-navbar
    class="fixed-top lighten-4 navbar-9  text-primary"
    light
    color="white"
    expand="large"
    togglerIcon=""
    animated
    animation="2"
    >
    <!-- Navbar brand -->
    <mdb-navbar-brand>
      <nuxt-link to="/">
        <img :src="require('~/assets/images/logo/pusdokkes-polri.png')" class="img-fluid">
      </nuxt-link>
    </mdb-navbar-brand>
    <mdb-navbar-toggler class="mt-3 mb-2">
      <mdb-navbar-nav right>
        <mdb-nav-item active waves-fixed> 
          <nuxt-link to="/" tag="li" class="nav-item">
            Home     
          </nuxt-link>
        </mdb-nav-item>
        <mdb-nav-item waves-fixed> 
          <nuxt-link to="/events" tag="li" class="nav-item">
            Katalog Kelas     
          </nuxt-link>
        </mdb-nav-item>
        <mdb-nav-item waves-fixed> 
          <nuxt-link to="/agendapelatihan" tag="li" class="nav-item">
            Agenda Pelatihan    
          </nuxt-link>
        </mdb-nav-item>
        <mdb-nav-item
        v-if="token.accessToken"
        waves-fixed
        >
        <nuxt-link :to="`/profile/${$username(slug)}/events`" tag="li" class="nav-item">
          Akses Pelatihan
        </nuxt-link>
      </mdb-nav-item>
      <mdb-dropdown tag="li" class="nav-item">
        <mdb-dropdown-toggle tag="a" navLink slot="toggle" waves-fixed class="no-caret">
          Tentang PUSDOKKES <mdb-icon icon="external-link-alt" />
        </mdb-dropdown-toggle>
        <mdb-dropdown-menu :class="`${$device.isDesktop ? 'mt-4' : ''}`">
          <mdb-dropdown-item v-for="item in links" :key="item.id">
            <nuxt-link :to="item.link">
              {{ item.name }}
            </nuxt-link>
          </mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <mdb-nav-item waves-fixed>
        <nuxt-link to="/ppkc/berita" tag="li" navLink > Berita </nuxt-link>
      </mdb-nav-item>
    </mdb-navbar-nav>
    <!-- check user login -->

    <mdb-col lg="12">
     <div class="dropdown-divider"></div>
   </mdb-col>

   <mdb-row v-if="token.accessToken">
    <mdb-col col="12" sm="12">
      <mdb-dropdown tag="li" class="nav-item nav-profile mt-4 text-dark">
        <mdb-dropdown-toggle tag="a" navLink slot="toggle">
          <b-avatar
          v-if="
          profiles.photo !==
          'https://api.ppkc-online.com/image-profiles/null'
          "
          variant="primary"
          :src="profiles.photo"
          ></b-avatar>
          <b-avatar
          v-else
          variant="primary"
          :text="slug.charAt(0)"
          ></b-avatar>
          <!--   <b-img v-else :src="`${require('~/assets/images/profile/profile.svg')}`" rounded="circle" alt="Circle image" width="30" height="30"></b-img> -->
          {{ profiles.nama }}
        </mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <mdb-dropdown-item>
            <nuxt-link
            :to="{
              name: 'profile-name',
              params: { name: $username(slug) },
            }"
            class="text-center"
            >
            <b-avatar v-if="profiles.photo !== 'https://api.ppkc-online.com/image-profiles/null'" variant="primary" :src="profiles.photo" size="1.7rem"></b-avatar>
            <b-avatar v-else variant="primary" :text="slug.charAt(0)" size="1.7rem"></b-avatar> 
            &nbsp; <b>{{ profiles.nama }}</b>
          </nuxt-link>
          <!-- <mdb-icon far icon="user-circle" size="lg"/>  -->
                    <!-- <a :href="`/profile/${$username(slug)}`" class="text-center">
                    <mdb-icon icon="user-md" /> Profile
                  </a> -->
                </mdb-dropdown-item>
                <div class="dropdown-divider"></div>
                <mdb-dropdown-item @click="Logout" class="text-center">
                  <mdb-icon icon="sign-out-alt" /> Logout
                </mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-col>
        </mdb-row>

        <div v-else>
          <mdb-row class="row justify-content-center">
            <mdb-col col="12" lg="12" xs="12" sm="12" class="mt-2">
              <nuxt-link 
              to="/auth/login"
              class="btn my__btn-secondary btn-sm shadow-none rounded"
              size="md"
              >Masuk</nuxt-link>
            </mdb-col>
            <mdb-col lg="12" xs="12" sm="12" class="mt-2">
              <nuxt-link
              to="/auth/registrasi"
              class="btn my__btn-primary btn-sm shadow-none rounded"
              size="md"
              >Daftar</nuxt-link>
            </mdb-col>         
          </mdb-row>
        </div>

        <!-- end check -->
      </mdb-navbar-toggler>
    </mdb-navbar>
  </div>
</template>

<script>
  export default {
    props: ["token", "profiles", "slug"],
    data() {
      return {
        links: [
        { id: 1, name: "Sejarah", link: "/ppkc/sejarah" },
        { id: 2, name: "Visi & Misi", link: "/ppkc/visi-misi" },
        {
          id: 3,
          name: "Struktur Organisasi",
          link: "/ppkc/struktur-organisasi",
        },
        { id: 4, name: "Fasilitas", link: "/ppkc/fasilitas" },
        { id: 5, name: "Testimoni", link: "/ppkc/testimoni" },
        { id: 6, name: "Fasilitator", link: "/ppkc/fasilitator" },
        { id: 7, name: "Yayasan & Direksi", link: "/ppkc/yayasan-direksi" }
        ]
      }
    },

    methods: {
      Logout() {
        this.$emit("logout-profile");
      },
    },
  };
</script>
