<template>
  <!-- Footer -->
  <mdb-footer class="footer__layout font-small bg-dark">
    <mdb-container class="text-left footer__sitemap">
      <mdb-row
        :class="`${$device.isMobile ? 'd-flex justify-content-center' : ''}`"
      >
        <!-- footer branding content -->
        <mdb-col col="12" sm="12" md="3" lg="3" class="mt-5 col-1">
          <img
            :src="brand"
            :style="`${$device.isMobile ? 'width:150px;' : 'width: 150px;'}`"
            class="img-fluid"
          />

          <p class="mb-1 mt-3 mb-5" style="width: 200px;">
            PUSDOKKES POLRI - Kedokteran Dan Kesehatan
          </p>
          <address>
            Jl. Trunojoyo No. 3 Kebayoran Baru
           Jakarta Selatan 12110
          </address>
        </mdb-col>

        <mdb-col col="12" sm="12" md="6" lg="3" class="mt-5 ml-5">
          <h5
            class="mb-4 font-weight-bold text-uppercase"
          >
            Kontak
          </h5>
          <ul class="list-group">
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="tel:+62246580019">
                Telepon (021) 7218142 | (021) 7258869
              </a>
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href=""> Fax (021) 7218142 </a>
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="tel:+6282111552424">
                Hotline (021) 7218142
              </a>
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="tel:62246593452">
                Call Center (021) 7218142
              </a>
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a
                href="mailto:pusdokkes@polri.go.id"
              >
                Email pusdokkes@polri.go.id
              </a>
            </li>
          </ul>
        </mdb-col>

        <mdb-col col="12" sm="12" md="6" lg="3" class="mt-5 col-social">
          <h5
            class="mb-4 font-weight-bold text-uppercase"
          >
            Social Media
          </h5>
          <ul class="list-group">
            <li class="list-group-item bg-transparent border-0 p-0 mb-3">
              <a
                href="https://id-id.facebook.com/people/Pusat-Pengembangan-Kesehatan-Carolus-PPKC/100063841689266/"
              >
                <img
                  :src="require('~/assets/icons/socials/facebook.svg')"
                />&nbsp;pusdokkes_polri
              </a>
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-3">
              <a
                href="http://ppkcarolus.com/"
              >
                <img
                  :src="require('~/assets/icons/socials/twitter.svg')"
                />&nbsp;@pusdokkes_polri
              </a>
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-3">
              <a
                href="https://www.instagram.com/ppkc_carolus/?hl=id"
              >
                <img
                  :src="require('~/assets/icons/socials/instagram.svg')"
                />&nbsp;@pusdokkes_polri
              </a>
            </li>
          </ul>
        </mdb-col>
        <mdb-col col="12" sm="12" md="6" lg="3" class="mt-5 col-menu">
          <h5
            class="mb-4 font-weight-bold text-uppercase"
          >
            Menu
          </h5>
          <div class="row">
            <div class="col-12 col-md-6">
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                  <a href="/"> Home </a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                  <a href="/events">
                    Katalog Kelas
                  </a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                  <a href="/auth/registrasi">
                    Daftar
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-6">
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                  <a href="/auth/login">
                    Login
                  </a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                  <a href="/ppkc/berita">
                    Berita
                  </a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                  <a href="/ppkc/testimoni">
                    Testimoni
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row mt-2">
            <div class="col-sm-12">
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                  <a
                    href="https://pusdokkes.halomedika.com/"
                  
                  >
                    Situs Resmi PUSDOKKES
                    <mdb-icon icon="external-link-alt" size="sm" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </mdb-col>
      </mdb-row>

      <!-- Bonus Map -->
      <!-- <mdb-row>
        <mdb-col col="12" lg="12" class="col-3">
          <LayoutsMap />
        </mdb-col>
      </mdb-row> -->
      <!-- end map -->
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
       &copy;Copyright {{ $moment(year).year() }}
        <a target="_blank" href="https://pusdokkes.halomedika.com/">PUSDOKKES</a>. All
        Rights Reserved
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import LogoBrand from "~/assets/images/logo/icon.png";
export default {
  data() {
    return {
      brand: LogoBrand,
      year: new Date(),
    };
  },
};
</script>