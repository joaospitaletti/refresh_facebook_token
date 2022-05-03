<template>
<div>
  <!-- Header -->
  <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
    <div class="container">
      <div class="header-body text-center mb-7">
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-6 col-md-8 px-5">
            <img width="250" src="../static/img/brand/deubom.png"/>
<!--            <h1 class="text-white mt-4 ">Olá!</h1>-->
<!--            <p class="text-lead text-white">Use these awesome forms to login or create new account in your project for-->
<!--              free.</p>-->
          </div>
        </div>
      </div>
    </div>
    <div class="separator separator-bottom separator-skew zindex-100">
      <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </div>
  <!-- Page content -->
  <div class="container mt--8 pb-5">
    <div class="row justify-content-center">
      <div class="col-lg-5 col-md-7">
        <div v-if="$store.state.listPages.length === 0" class="card bg-secondary border-0 mb-0">
          <div>
            <div class="card-header bg-transparent pb-5 text-center">
              <h2>Olá!</h2>
              <h3 class="text-black-50">Para ver seu Mídia Kit basta conectar uma conta do Facebook e escolher o perfil do Instagram desejado.</h3>
            </div>
            <div class="card-body px-lg-5 pb-lg-5 pt-lg-3">
              <div class="text-muted text-center mt-2 mb-3"><small>Conecte sua conta</small></div>
              <div class="btn-wrapper text-center">
                <a href="#" @click.prevent="loginWithFacebook" class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#3578E5">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg></span>
                  <span class="btn-inner--text">Entrar com Facebook</span>
                </a>

              </div>
          </div>
        </div>
        </div>
        <div v-else-if="$store.state.listPages.length > 0" class="card bg-secondary border-0 mb-0">
          <div>
            <div class="card-header bg-transparent text-center">
              <h2>Selecione a página do Facebook</h2>
              <small>Escolha a página associada à conta do Instagram que você quer ver o Mídia Kit.</small>
            </div>
            <div class="card-body">
              <div class="page-select">
                <div class="d-flex justify-content-center align-items-center w-75 page-box"
                     v-for="item in $store.state.listPages"
                     :key="item.id"
                     @click="listInstagram(item.id, item.access_token)"
                >
                  <div class="picture" :style="'background-image:' + 'url(' + item.picture.data.url + ')'"></div>
                  <h4 class="mb-0 ml-2">{{ item.name }}</h4>
                </div>
              </div>
              <base-button @click="$store.commit('SET_LIST_PAGES', [])" type="primary" outline class="mb-4 mt-6">Voltar</base-button>
              <base-button @click="$router.push('/pages/user')" type="primary" outline class="mb-4 mt-6">Voltar</base-button>
            </div>
          </div>
        </div>
<!--        <div class="row mt-3">-->
<!--          <div class="col-6">-->
<!--            <router-link to="/dashboard" class="text-light"><small>Forgot password?</small></router-link>-->
<!--          </div>-->
<!--          <div class="col-6 text-right">-->
<!--            <router-link to="/register" class="text-light"><small>Create new account</small></router-link>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { initFbsdk } from '@/util/fb.js'
export default {
  layout: 'AuthLayout',
  data() {
    return {
      step: 0,
      model: {
        email: '',
        password: '',
        rememberMe: false
      }
    };
  },
  computed: {
    selectPages: function () {
      return true
    }
  },
  methods: {
    async listInstagram (pageId, accessToken) {
      localStorage.setItem('pageId', pageId)
      localStorage.setItem('pageIdToken', accessToken)
      await this.$store.dispatch('ListInstagram')
    },
    async loginWithFacebook() {
      await this.$store.dispatch("Login")
    },
    onSubmit() {
      // this will be called only after form is valid. You can do api call here to login
    }
  },
  mounted() {
    initFbsdk();
  },
  beforeCreate(){
    this.$store.commit('SET_LOADING_DETAILS', true)
  }
};
</script>
