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
        <!-- <MoleculesLayoutMoleculesBrand /> -->
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

        <mdb-dropdown  tag="li" class="nav-item">
          <mdb-dropdown-toggle
          tag="a"
          navLink
          color="white"
          slot="toggle"
          waves-fixed
          class="no-caret"
          >
          Tentang Kami <mdb-icon icon="angle-down" size="sm" />
        </mdb-dropdown-toggle>
        <mdb-dropdown-menu :class="`${$device.isDesktop ? 'mt-3' : ''}`">
          <mdb-dropdown-item v-for="item in links" :key="item.id">
            <nuxt-link :to="item.link">
              {{ item.name }}
            </nuxt-link>
          </mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>

         <mdb-dropdown  tag="li" class="nav-item">
          <mdb-dropdown-toggle
          tag="a"
          navLink
          color="white"
          slot="toggle"
          waves-fixed
          class="no-caret"
          >
          Layanan <mdb-icon icon="angle-down" size="sm" />
        </mdb-dropdown-toggle>
        <mdb-dropdown-menu :class="`${$device.isDesktop ? 'mt-3' : ''}`">
          <mdb-dropdown-item v-for="item in services" :key="item.id">
            <nuxt-link :to="item.link">
              {{ item.name }}
            </nuxt-link>
          </mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>

        <mdb-dropdown  tag="li" class="nav-item">
          <mdb-dropdown-toggle
          tag="a"
          navLink
          color="white"
          slot="toggle"
          waves-fixed
          class="no-caret"
          >
          Faskes  <mdb-icon icon="angle-down" size="sm" />
        </mdb-dropdown-toggle>
        <mdb-dropdown-menu :class="`${$device.isDesktop ? 'mt-3' : ''}`">
          <mdb-dropdown-item v-for="item in hospitals" :key="item.id">
            <nuxt-link :to="item.link">
              {{ item.name }}
            </nuxt-link>
          </mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>


      <mdb-nav-item active waves-fixed>
        <nuxt-link to="/pusdokkes/berita" tag="li" navLink > Berita </nuxt-link>
      </mdb-nav-item>

      <mdb-nav-item active waves-fixed>
        <nuxt-link to="/pusdokkes/gallery" tag="li" navLink > Gallery </nuxt-link>
      </mdb-nav-item>
        

        <mdb-nav-item v-if="token.accessToken" waves-fixed>
          <nuxt-link tag="li" navLink  :to="`/profile/${$username(slug)}/events`">
            Akses Pelatihan
          </nuxt-link>
        </mdb-nav-item>

      <mdb-nav-item waves-fixed>
        <nuxt-link to="/pusdokkes/pengaduan" tag="li" navLink > Pengaduan </nuxt-link>
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
      class="my__btn-secondary rounded-pill btn btn-block btn-md shadow-none"
      size="md"
      >Login</nuxt-link>
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
    props: ["token", "profiles", "slug", "event_id", "event_path"],
    data() {
      return {
        links: [
        { id: 1, name: 'Pesan Kapusdokkes', link: '/pusdokkes/pesan-kapusdokkes'},
        { id: 2, name: 'Program Prioritas', link: '/pusdokkes/program-priorita'},
        { id: 3, name: 'Kapusdokkes Dari Masa Ke Masa', link: '/pusdokkes/history-kapusdokkes'},
        { id: 4, name: "Sejarah Dokkes", link: "/pusdokkes/sejarah" },
        { id: 5, name: "Visi & Misi", link: "/pusdokkes/visi-misi" },
        { id: 6, name: "Struktur Organisasi", link: "/pusdokkes/struktur-organisasi" },
        { id: 7, name: "Satker Pusdokkes", link: "/pusdokkes/fasilitas" },
        { id: 8, name: "Bidokkes Polda", link: "/pusdokkes/testimoni" },
        { id: 9, name: "Mitra Pusdokkes", link: "/pusdokkes/fasilitator" }
        ],
        services: [
        { id: 1, name: 'Rikes Anggota', link: '/pusdokkes/rikes'},
        { id: 2, name: 'Surat Rekomendasi Bebas Narkoba', link: '/pusdokkes/surat-rekomendasi'}
        ],
        hospitals: [
        { id:1, name: 'Rumkit Bhayangkara', link: ''},
        { id:2, name: 'FKTP (Klinik) Polri', link: ''}
        ]
      };
    },

    mounted() {
      console.log(this.event_id ? this.event_id : "-");
    },

    methods: {
      Logout() {
        this.$emit("logout-profile");
      },

      GoToLogin() {
        if (this.event_id === this.$route.params.id) {
          const data = {
            event_id: this.event_id,
            event_path: this.event_path,
          };
          this.SetEventLogin(data);
        } else {
          this.$router.push({ name: "auth-login" });
        }
      },

      GoToRegistrasi() {
        this.$router.push({ name: "auth-registrasi" });
      },

      SetEventLogin(data) {
        this.$store.dispatch("config/setEventToLogin", JSON.stringify(data));
        this.$router.push({
          name: "auth-login",
        });
      },
    },

    computed: {
      set_event() {
        return this.$store.getters["config/ConfigSetEventLogin"];
      },
    },
  };
</script>