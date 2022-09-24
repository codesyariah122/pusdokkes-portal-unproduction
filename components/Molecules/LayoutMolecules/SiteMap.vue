<template>
  <div>
    <mdb-row class="d-flex justify-content-center">
      <div class="col-lg-3 col-md-6 col-sm-12 col-6 p-0 float-left mb-3 kontak-footer">
        <h5 class="mb-4 font-weight-bold text-uppercase">Kontak</h5>
        <ul class="list-group">
          <li class="list-group-item bg-transparent border-0 p-0 mb-2">
            <a href="tel:+62246580019">
              Telepon 021-3101870
            </a>
          </li>
          <li class="list-group-item bg-transparent border-0 p-0 mb-2">
            <a href="">
              Fax 021-3101870
            </a>
          </li>
          <li class="list-group-item bg-transparent border-0 p-0 mb-2">
            <a href="tel:+6282111552424">
              Hotline 021-3904441
            </a>
          </li>
          <li class="list-group-item bg-transparent border-0 p-0 mb-2">
            <a href="tel:62246593452">
              Call Center 021-3904441 ext 2437
            </a>
          </li>
          <li class="list-group-item bg-transparent border-0 p-0 mb-2">
            <a href="mailto:rs@ppkcsultanagung.co.id">
              Email ppkcaroulus@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div v-if="$device.isDesktop" class="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left"></div>

      <div class="col-lg-3 col-md-6 col-sm-12 col-6 p-0 mb-3 float-left social-media">
        <h5 class="mb-4 font-weight-bold text-uppercase">Social Media</h5>
        <ul class="list-group">
          <li class="list-group-item bg-transparent border-0 p-0 mb-3">
            <a href="https://id-id.facebook.com/people/Pusat-Pengembangan-Kesehatan-Carolus-PPKC/100063841689266/">
             <img :src="require('~/assets/icons/socials/facebook.svg')">&nbsp;PPKC carolus
            </a>
          </li>
          <li class="list-group-item bg-transparent border-0 p-0 mb-3">
            <a href="http://ppkcarolus.com/">
              <img :src="require('~/assets/icons/socials/twitter.svg')">&nbsp;@ppkc_carolus
            </a>
          </li>
          <li class="list-group-item bg-transparent border-0 p-0 mb-3">
            <a href="https://www.instagram.com/ppkc_carolus/?hl=id">
              <img :src="require('~/assets/icons/socials/instagram.svg')">&nbsp;@ppkc_carolus
            </a>
          </li>
        </ul>
      </div>

      <div class="col-md-4 col-sm-12 col-6 mb-3 p-0 float-right link-menu">
        <h5 class="mb-4 font-weight-bold text-uppercase">Menu</h5>
        <div class="row">
          <div class="col-sm-3">
            <ul class="list-group">
              <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                <a href="/"></i>
                  Home
                </a>
              </li>
              <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                <a href="/events"></i> 
                  Katalog Kelas
                </a>
              </li>
              <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                <a href="/auth/registrasi"></i> 
                  Daftar
                </a>
              </li>
            </ul>
          </div>
          <div :class="`col-sm-3 ${$device.isDesktop ? 'ml-5' : ''}`">
            <ul class="list-group">
               <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                <a href="/auth/login"></i>
                  Login
                </a>
              </li>
              <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                <a href="/ppkc/berita"></i> 
                  Berita
                </a>
              </li>
              <li class="list-group-item bg-transparent border-0 p-0 mb-3">
                <a href="/ppkc/testimoni"></i> 
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
              <a href="http://ppkcarolus.com/"></i>
                  Situs Resmi PPKC Carolus <mdb-icon icon="external-link-alt" size="sm" />
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </mdb-row>
  </div>
</template>
