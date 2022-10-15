<template>
  <div>
    <div
      class="parallax overlay mt-5"
      :style="`background-image: url(${parallax.data.bg});`"
    >
      <div class="caption">
        <b-container class="mt-5">
          <b-row class="justify-content-between">
            <b-col md="7">
              <h2>{{ parallax.data.context.heading }}</h2>
              <blockquote class="text-justify">
                {{ parallax.data.context.text }}
              </blockquote>
            </b-col>
            <b-col md="5" class="d-flex mt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.online.elearningppkc"
                target="_blank"
                style="cursor: pointer"
              >
                <img
                  :src="
                    require('~/assets/images/homepage/download_play_store.png')
                  "
                  class="img-fluid w-100"
                />
              </a>
              <a
                href="https://apps.apple.com/id/app/e-learning-ppkc/id1629167438?platform=iphone"
                target="_blank"
                style="cursor: pointer"
                class="pl-3"
              >
                <img
                  :src="
                    require('~/assets/images/homepage/download_app_store.png')
                  "
                  class="img-fluid w-100"
                />
              </a>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import ParallaxImage from "~/assets/images/homepage/parallax.svg";

export default {
  data() {
    return {
      parallax: {
        data: {
          context: {
            heading: "Unduh Aplikasi PPKC",
            text: "Dapatkan informasi pelatihan aktual dan berdiskusi sesama peserta pelatihan",
          },
          bg: ParallaxImage,
        },
      },
    };
  },
};
</script>
