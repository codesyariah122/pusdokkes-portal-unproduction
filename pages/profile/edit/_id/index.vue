<template>
  <div class="berita__detail" :style="berita__list_style">
    <MoleculesProfilePageFormEditProfile/>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        id: this.$route.params.id,
        path: this.$route.name,
        berita__list_style: this.$device.isDesktop
        ? "margin-top: 8rem;"
        : "margin-top: 6rem;",
      }
    }
  }
</script>