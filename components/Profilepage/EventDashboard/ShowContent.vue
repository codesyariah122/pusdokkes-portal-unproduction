<template>
  <div v-if="type == 1" class="embed__file">
    <MoleculesEventDashboardShowContentTypeVideo :detailed="detailed" :detailed_data="detailed_data" :type_name="type_name"/>
  </div>

  <div v-else-if="type == 2 || type == 5" class="embed__file">
    <MoleculesEventDashboardShowContentTypePdfFile :detailed="detailed" :detailed_data="detailed_data" :type_name="type_name" :pdfdata="pdfdata" :numPages="numPages" :loading="loading"/>
  </div>

  <div v-else-if="type == 3" class="embed__file">
    <header class="docs-header">
      <section class="docs-intro">
        <h5 class="type__name">{{ type_name }}</h5>
        <h2>{{ detailed_data.title }}</h2>
      </section>
    </header>
    <section class="docs-section" id="item-1-1">
      <EventTestPreTest
      :id_test="id_test"
      :type_name="type_name"
      :token="token"
      :api_url="api_url"
      :pelatihans="pelatihans"
      :details="details"
      :username="username"
      />
    </section>
  </div>

  <div v-else-if="type == 4" class="embed__file">
    <header class="docs-header">
      <section class="docs-intro">
        <h5 class="type__name">{{ type_name }}</h5>
        <h2>{{ detailed_data.title }}</h2>
      </section>
    </header>
    <section class="docs-section" id="item-1-1">
      <EventTestPostTest
      :id_test="id_test"
      :type_name="type_name"
      :token="token"
      :api_url="api_url"
      :pelatihans="pelatihans"
      :username="username"
      :kegiatan_id="kegiatan_id"
      :pelatihan_id="pelatihan_id"
      :details="details"
      :evaluasi="evaluasi"
      />
    </section>
  </div>


  <div v-else-if="type == 6" class="embed__file">
    <header class="docs-header">
      <section class="docs-intro">
        <h5 class="type__name">{{ type_name }}</h5>
        <h2>{{ detailed_data.title }}</h2>
      </section>
    </header>
    <section class="docs-section mt-2" id="item-1-1">
      <EventWebinar
      :id_webinar="id_webinar"
      :token="token"
      :api_url="api_url"
      :profiles="profiles"
      :details="details"
      />
    </section>
  </div>

  <div v-else-if="type == 7" class="embed__file">
    <header class="docs-header">
      <section class="docs-intro">
        <h5 class="type__name">Evaluasi</h5>
        <h2>Evaluasi Fasilitator</h2>
      </section>
    </header>
    <section class="docs-section" id="item-1-1">
      <EvaluasiFasilitator
      :id_test="id_test"
      :type_name="type_name"
      :token="token"
      :api_url="api_url"
      :pelatihans="pelatihans"
      :username="username"
      :kegiatan_id="kegiatan_id"
      :pelatihan_id="pelatihan_id"
      :details="details"
      :evaluasi="evaluasi"
      />
    </section>
  </div>

  <div v-else-if="type == 8" class="embed__file">
    <header class="docs-header">
      <section class="docs-intro">
        <h5 class="type__name">Evaluasi</h5>
        <h2>Evaluasi Penyelenggaraan</h2>
      </section>
    </header>
    <section class="docs-section" id="item-1-1">
      <EvaluasiPenyelenggaraan
      :id_test="id_test"
      :type_name="type_name"
      :token="token"
      :api_url="api_url"
      :pelatihans="pelatihans"
      :username="username"
      :kegiatan_id="kegiatan_id"
      :pelatihan_id="pelatihan_id"
      :details="details"
      :evaluasi="evaluasi"
      />
    </section>
  </div>

  <div v-else-if="type == 9" class="embed__file">
    <header class="docs-header">
      <section class="docs-intro">
        <h5 class="type__name">Evaluasi</h5>
        <h2>Evaluasi Pasca Kegiatan</h2>
      </section>
    </header>
    <section class="docs-section" id="item-1-1">
      <EvaluasiPascaKegiatan
      :id_test="id_test"
      :type_name="type_name"
      :token="token"
      :api_url="api_url"
      :pelatihans="pelatihans"
      :username="username"
      :kegiatan_id="kegiatan_id"
      :pelatihan_id="pelatihan_id"
      :details="details"
      :evaluasi="evaluasi"
      />
    </section>
  </div>
  <div v-else-if="type == 10" class="embed__file">
    <header class="docs-header">
      <section class="docs-intro">
        <h5 class="type__name">Evaluasi</h5>
        <h2>Rencana Tindak Lanjut</h2>
      </section>
    </header>
    <section class="docs-section" id="item-1-1">
      <EventTestTableRTL
      :token="token"
      :api_url="api_url"
      :kegiatan_id="kegiatan_id"
      :pelatihan_id="pelatihan_id"
      :tests="tests"
      :evaluasi="evaluasi"
      />
    </section>
  </div>
  <div v-else-if="type == 11" class="embed__file">
    <header class="docs-header">
      <section class="docs-intro">
        <h5 class="type__name">Absensi</h5>
        <h2>Absensi Pelatihan</h2>
      </section>
    </header>
    <section class="docs-section" id="item-1-1">
      <EventTestAbsensi
      :token="token"
      :api_url="api_url"
      :kegiatan_id="kegiatan_id"
      :pelatihan_id="pelatihan_id"
      :tests="tests"
      :evaluasi="evaluasi"
      :max="max"
      :value="value"
      />
    </section>
  </div>
</template>

<script>
  import pdf from "pdfvuer";

  export default {
    components: {
      pdf,
    },
    data() {
      return {
        page: 1,
        numPages: 0,
        pdfdata: undefined,
        errors: [],
        scale: "page-width",
        loading: null
      };
    },
    mounted() {
      if (this.type == 2 || this.type == 5) {
        this.getPdf();
      }
    },

    methods: {
      getPdf() {
        var self = this;
        self.pdfdata = pdf.createLoadingTask(this.detailed.file_pdf);
        self.pdfdata
        .then((pdf) => {
          this.loading = true;
          console.log("load page 1");
          self.numPages = pdf.numPages;
        })
        .catch(err => console.log(err))
        .finally(() => {
          setTimeout(() => {
            this.loading = false
          }, 500)
        });
      },
      findPos(obj) {
        if (obj) return obj.offsetTop;
        else return null;
      },
    },
    props: [
    "type",
    "type_name",
    "detailed",
    "detailed_data",
    "details",
    "profiles",
    "pelatihans",
    "api_url",
    "token",
    "value",
    "max",
    "id_test",
    "id_webinar",
    "username",
    "link_yt",
    "kegiatan_id",
    "pelatihan_id",
    "evaluasi",
    ],
  };
</script>
