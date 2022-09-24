<template>
  <!-- Footer -->
  <mdb-footer class="footer__layout font-small">
    <mdb-container class="text-left footer__sitemap">
      <mdb-row
        :class="`${$device.isMobile ? 'd-flex justify-content-center' : ''}`"
      >
        <!-- footer branding content -->
        <mdb-col col="12" sm="12" md="6" lg="3" class="mt-5">
          <img
            :src="brand"
            :style="`${$device.isMobile ? 'width:450px;' : ''}`"
            class="img-fluid"
          />

          <p class="mb-1 mt-3" style="color: #4b5563 !important">
            Pusat Pengembangan Kesehatan Carolus (PPKC) sebagai Lembaga
            pelatihan yang mampu memberikan solusi setiap permasalahan di Bidang
            kesehatan.
          </p>
          <br />

          <address style="color: #4b5563 !important; font-weight: bold">
            Jl. Salemba Tengah 30-32, Jakarta Pusat 10440
          </address>
        </mdb-col>

        <mdb-col col="12" sm="12" md="6" lg="3" class="mt-5">
          <h5
            class="mb-4 font-weight-bold text-uppercase"
            style="color: #374151 !important"
          >
            Kontak
          </h5>
          <ul class="list-group">
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a style="color: #374151 !important" href="tel:+62246580019">
                Telepon 021-3101870
              </a>
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a style="color: #374151 !important" href=""> Fax 021-3101870 </a>
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a style="color: #374151 !important" href="tel:+6282111552424">
                Hotline 021-3904441
              </a>
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a style="color: #374151 !important" href="tel:62246593452">
                Call Center 021-3904441 ext 2437
              </a>
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a
                style="color: #374151 !important"
                href="mailto:rs@ppkcsultanagung.co.id"
              >
                Email ppkcaroulus@gmail.com
              </a>
            </li>
          </ul>
        </mdb-col>

        <mdb-col col="12" sm="12" md="6" lg="3" class="mt-5">
          <h5
            class="mb-4 font-weight-bold text-uppercase"
            style="color: #374151 !important"
          >
            Social Media
          </h5>
          <ul class="list-group">
            <li class="list-group-item bg-transparent border-0 p-0 mb-3">
              <a
                style="color: #374151 !important"
                href="https://id-id.facebook.com/people/Pusat-Pengembangan-Kesehatan-Carolus-PPKC/100063841689266/"
              >
                <img
                  :src="require('~/assets/icons/socials/facebook.svg')"
                />&nbsp;PPKC carolus
              </a>
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-3">
              <a
                style="color: #374151 !important"
                href="http://ppkcarolus.com/"
              >
                <img
                  :src="require('~/assets/icons/socials/twitter.svg')"
                />&nbsp;@ppkc_carolus
              </a>
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-3">
              <a
                style="color: #374151 !important"
                href="https://www.instagram.com/ppkc_carolus/?hl=id"
              >
                <img
                  :src="require('~/assets/icons/socials/instagram.svg')"
                />&nbsp;@ppkc_carolus
              </a>
            </li>
          </ul>
        </mdb-col>
        <mdb-col col="12" sm="12" md="6" lg="3" class="mt-5">
          <h5
            class="mb-4 font-weight-bold text-uppercase"
            style="color: #374151 !important"
          >
            Menu
          </h5>
          <div class="row">
            <div class="col-12 col-md-6">
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                  <a href="/" style="color: #374151 !important"> Home </a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                  <a href="/events" style="color: #374151 !important">
                    Katalog Kelas
                  </a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                  <a href="/auth/registrasi" style="color: #374151 !important">
                    Daftar
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-6">
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                  <a href="/auth/login" style="color: #374151 !important">
                    Login
                  </a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                  <a href="/ppkc/berita" style="color: #374151 !important">
                    Berita
                  </a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                  <a href="/ppkc/testimoni" style="color: #374151 !important">
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
                    href="http://ppkcarolus.com/"
                    style="color: #374151 !important"
                  >
                    Situs Resmi PPKC Carolus
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
        <a target="_blank" href="https://ppkc-online.com">PPKC Carolus</a>. All
        Rights Reserved
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import LogoBrand from "~/assets/images/logo/brand.svg";
export default {
  data() {
    return {
      brand: LogoBrand,
      year: new Date(),
    };
  },
};
</script>