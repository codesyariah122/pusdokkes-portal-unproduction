<template>
  <mdb-card class="card__registrasi">
    <mdb-card-body class="form__auth">
      <!-- Material form login -->
      <img :src="require('~/assets/images/logo/brand.svg')" width="250" />
      <!-- Material form login -->
      <form @submit.prevent="RegistrasiProfile" class="mt-3">
        
        <p class="text-left">
          Buat akun baru untuk mengakses seluruh layanan dan informasi pelatihan
          PPKC
        </p>

        <!-- Input login -->
        <div class="form-group has-input">
          <mdb-icon far icon="user-circle" class="form-control-feedback" />
          <input
          type="text"
          class="form-control"
          placeholder="Nama"
          v-model="fields.nama"
          autofocus
          />
        </div>
        <div class="form-group has-input">
          <mdb-icon far icon="envelope" class="form-control-feedback" />
          <input
          type="text"
          class="form-control"
          placeholder="Email"
          v-model="fields.email"
          />
        </div>
        <div class="form-group has-input">
          <mdb-icon icon="lock" class="form-control-feedback" />
          <input
          id="password1"
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="fields.password"
          />
        </div>
        <div class="form-group has-input">
          <mdb-icon icon="lock" class="form-control-feedback" />
          <input
          id="password2"
          type="password"
          class="form-control"
          placeholder="Ulangi Password"
          v-model="fields.confirm_password"
          v-on:keyup="CheckPassword"
          />
        </div>

        <div v-if="showCheckPassword && fields.confirm_password">
          <span :class="classStatus">
            {{passwordStatus}} <i v-if="iconStatus" :class="iconStatus"></i>
          </span>
        </div>

        <div class="form-group mt-3">
          <div @click="showPassword">
            <span v-if="showing_pass === false" style="cursor: pointer">
              <mdb-icon far icon="eye" /> Check Password
            </span>
            <span v-else style="cursor: pointer">
              <mdb-icon far icon="eye-slash" /> Sembunyikan
            </span>
          </div>
        </div>

        <div class="form-group mt-5">
          <mdb-btn
          type="submit"
          block
          color="white"
          size="md"
          class="text-white rounded-pill shadow-none"
          >
          <div v-if="loading">
            <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
            ></span>
            Loading...
          </div>
          <div v-else>
            <mdb-icon icon="user-plus" size="md" /> Daftar
          </div>
        </mdb-btn>
      </div>
    </form>

    <mdb-row class="row justify-content-center white-text mb-3 mt-5">
      <mdb-col v-if="show_alert" lg="12" xs="12" sm="12" class="text-center">
        <mdb-alert color="danger">
          <strong>Ooops!</strong> {{ validation }}
        </mdb-alert>
      </mdb-col>
    </mdb-row>

    <mdb-row
    :class="`${
      $device.isMobile
      ? 'justify-content-center black-text form__daftar-link'
      : 'justify-content-center black-text'
    }`"
    >
    <mdb-col md="12" xs="12" sm="12" lg="12">
      <h6
      :class="`${
        $device.isMobile
        ? 'text-center mt-1 mb-5'
        : 'text-center  mb-5'
      }`"
      >
      Sudah punya Akun ?
      <nuxt-link to="/auth/login">Masuk Sekarang</nuxt-link>
    </h6>
  </mdb-col>
</mdb-row>
</mdb-card-body>
</mdb-card>
</template>

<script>
  export default {
    props: ["event_data", "validation", "show_alert", "loading"],
    data() {
      return {
        fields: {},
        showing_pass: false,
        showCheckPassword: null,
        passwordStatus: null,
        classStatus: null,
        iconStatus: null
      };
    },
    methods: {
      RegistrasiProfile() {
        this.showCheckPassword=false
        const params = {
          nama: this.fields.nama,
          email: this.fields.email,
          password: this.fields.password,
          confirm_password: this.fields.confirm_password,
        };
        this.$emit("registrasi-profile", params);
      },
      CheckPassword(){
        this.showCheckPassword=true
        console.log(this.fields.passwords)
        if(this.fields.password !== this.fields.confirm_password){
          this.passwordStatus = "Password Tidak Sama"
          this.classStatus = 'text-danger'
          this.iconStatus = "fas fa-exclamation-triangle"
        }else{
          this.passwordStatus = "Ok lanjutkan pendaftaran"
          this.iconStatus = "fas fa-check"
          this.classStatus = 'text-success'
        }
      },
      showPassword() {
        this.showCheckPassword=false
        const password1 = document.querySelector("#password1");
        const password2 = document.querySelector("#password2");
        if (password1.type === "password" && password2.type === "password") {
          password1.type = "text";
          password2.type = "text";
          this.showing_pass = true;
        } else {
          password1.type = "password";
          password2.type = "password";
          this.showing_pass = false;
        }
      },
    },
  };
</script>
