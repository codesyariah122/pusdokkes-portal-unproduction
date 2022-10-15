<!-- Component base on directory /components/ppkc -->
<template>
  <div>
    <ppkcVisiMisi :path="path" :lists="lists" :visi="visi" :misi="misi" />
  </div>
</template>

<script>
export default {
  name: "ppkc-visi_misi",
  layout: "default",

  data() {
    return {
      path: this.$route.name,
    };
  },

  async asyncData({ $axios }) {
    const lists = await $axios.$get("/web/visimisi");
    const visi = lists.result.visi;
    const misi = lists.result.misi;

    return {
      lists,
      visi,
      misi,
    };
  },
};
</script>
