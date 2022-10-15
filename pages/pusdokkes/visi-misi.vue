<template>
  <div>
    <pusdokkesVisiMisi :path="path"/>
  </div>
</template>

<script>
export default {
  name: "pusdokkes-visi_misi",
  layout: "default",

  data() {
    return {
      path: this.$route.name
    }
  },
}
</script>
