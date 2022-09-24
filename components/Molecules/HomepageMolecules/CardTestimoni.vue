<template>
  <div>
    <!-- Testimoni content -->
    <mdb-row center class="col__testimoni">
      <mdb-col v-for="item in lists.slice(0, 2)" md="6" xs="12" sm="12" class="col__testimoni-card" :key="item.id">
        <b-card no-body class="overflow-hidden card__testimoni-content">
          <b-container>
            <b-row no-gutters>
              <b-col md="4" class="mt-2">
                <b-avatar variant="none" border-variant="none" v-if="item.foto_url !== null" :src="`https://api.ppkc-online.com/image-testimoni/${item.foto_url}`" size="10rem"></b-avatar>
                <b-avatar variant="none" border-variant="none" v-else :src="require('~/assets/images/profile/profile.svg')" size="12rem"></b-avatar>
              </b-col>
              <b-col md="8">
                <b-card-body :title="item.konsumen">
                  <h6>{{item.profesi}}</h6>
                  <b-card-text v-html="item.testimoni">
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-container>
        </b-card>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import DefaultProfile from "~/assets/images/profile/user-profile.svg";

export default {
  props: ["lists"],
  data() {
    return {
      profile_default: DefaultProfile,
      null_foto: null,
    };
  },

  mounted() {
    console.log("Welcome !!");
  },
};
</script>