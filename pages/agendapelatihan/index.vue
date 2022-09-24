<!-- Component base on directory /components/ppkc -->
<template>
  <div>
    <ppkcAgendaPelatihan :path="path" :lists="lists" />
  </div>
</template>

<script>
export default {
  name: "ppkc-agenda_pelatihan",
  layout: "default",

  data() {
    return {
      path: this.$route.name,
    };
  },

  async asyncData({ $axios }) {
    const lists = await $axios.$get("/web/agenda-pelatihan");

    return {
      lists,
    };
  },
};
</script>