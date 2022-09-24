<!-- Component base on directory /components/ppkc -->
<template>
  <div>
    <ppkcFasilitas :path="path" :lists="lists" />
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
    const lists = await $axios.$get("/web/fasilitas");

    console.log(lists);

    return {
      lists,
    };
  },
};
</script>
