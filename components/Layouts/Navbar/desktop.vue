<template>
  <div>
    <mdb-navbar
    class="fixed-top"
    light
    color="white"
    expand="large"
    togglerIcon=""
    animated
    animation="3"
    >
    <mdb-navbar-brand>
      <nuxt-link to="/">
        <img :src="require('~/assets/images/logo/pusdokkes-polri.png')" class="img-fluid">
      </nuxt-link>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right style="margin-right: 2rem;">
        <mdb-nav-item active waves-fixed>
          <nuxt-link to="/" tag="li" navLink > Home </nuxt-link>
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
  </mdb-container>
</mdb-dropdown-menu>
</mdb-dropdown>

<mdb-dropdown
v-if="token.accessToken"
tag="li"
class="nav-item nav-profile"
style="font-size: 31px !important"
>
<mdb-dropdown-toggle tag="a" navLink slot="toggle">
  {{profiles.nama}}
  <b-avatar v-if="profiles.photo != 'https://api.ppkc-online.com/image-profiles/function File() { [native code]}'" variant="primary" :src="profiles.photo"></b-avatar>
  <b-avatar v-else variant="primary" :text="slug.charAt(0)"></b-avatar>
  
</mdb-dropdown-toggle>
<mdb-dropdown-menu :class="`${$device.isDesktop ? 'mt-2' : 'mt-3'}`">
  <mdb-dropdown-item>
    <nuxt-link
    :to="{
      name: 'profile-name',
      params: { name: $username(slug) },
    }"
    class="text-center"
    >
    <b-avatar v-if="profiles.photo !== 'https://api.ppkc-online.com/image-profiles/function File() { [native code]}'" variant="primary" :src="profiles.photo" size="1.7rem"></b-avatar>
  <b-avatar v-else variant="primary" :text="slug.charAt(0)" size="1.7rem"></b-avatar> &nbsp; <b>{{ profiles.nama }}</b>
  </nuxt-link>
</mdb-dropdown-item>
<div class="dropdown-divider"></div>
<mdb-dropdown-item @click="Logout" class="text-center">
  <mdb-icon icon="sign-out-alt" /> Logout
</mdb-dropdown-item>
</mdb-dropdown-menu>
</mdb-dropdown>

<div v-else tag="li">
  <nuxt-link 
  to="/auth/login"
  class="btn my__btn-primary btn-block btn-md shadow-none" style="border-radius: 5px;"
  >Login</nuxt-link>
</div>
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
        {
          id: 1,
          name: "Pesan Kapusdokkes",
          link: "/pusdokkes/pesan-kapusdokkes",
        },
        {
          id: 2,
          name: "Program Prioritas",
          link: "/pusdokkes/program-prioritas",
        },
        {
          id: 3,
          name: "Kapusdokkes Dari Masa Ke Masa",
          link: "/pusdokkes/history-kapusdokkes",
        },
        { id: 4, name: "Sejarah Dokkes", link: "/pusdokkes/sejarah" },
        { id: 5, name: "Visi & Misi", link: "/pusdokkes/visi-misi" },
        {
          id: 6,
          name: "Struktur Organisasi",
          link: "/pusdokkes/struktur-organisasi",
        },
        {
          id: 7,
          name: "Satker Pusdokkes",
          link: "/pusdokkes/satker-pusdokkes",
        },
        { id: 8, name: "Bidokkes Polda", link: "/pusdokkes/bidokkes" },
        { id: 9, name: "Mitra Pusdokkes", link: "/pusdokkes/mitra-pusdokkes" },
      ],
      services: [
        { id: 1, name: "Rikes Anggota", link: "/pusdokkes/rikes" },
        {
          id: 2,
          name: "Surat Rekomendasi Bebas Narkoba",
          link: "/pusdokkes/surat-rekomendasi",
        },
      ],
      hospitals: [
        { id: 1, name: "Rumkit Bhayangkara", link: "" },
        { id: 2, name: "FKTP (Klinik) Polri", link: "" },
      ],
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