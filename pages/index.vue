<template>
  <div>
    <!-- Header -->
    <div>
      <div class="header bg-gradient-primary pt-4 pb-5 pt-lg-9">
        <div class="container">
          <div class="header-body text-center mb-7">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-6 col-md-8 px-3">
                <img width="180px" src="../static/img/brand/deubom.png"/>
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
          <div v-if="show === true" class="col-lg-5 col-md-7 px-0">
            <VueSlickCarousel :initialSlide="slide" :infinite="false" :arrows="false" :dots="true">



              <div class="w-100">
                <div class="card bg-secondary border-0 mb-0">
                  <div>
                    <div class="card-header bg-transparent pb-3 text-center">
                      <img class="m-auto py-3" width="220px" src="img/icons/superwoman.svg"/>
                      <h2 class="text-black-50">Vamos renovar seu token de acesso?</h2>
                      <h3 class="">Sempre que você altera sua senha ou algum dado sensível em sua conta do Facebook, precisamos que você renove seu token</h3>
                    </div>
                    <div class="card-body px-lg-5 pb-lg-5 pt-lg-3">

                      <div class="btn-wrapper text-center">
<!--                        <div @click.prevent="loginWithFacebook" class="d-flex justify-content-center m-auto align-items-center font-weight-bold fb-button" ><img width="20px" height="20px" src="../static/img/brand/fb.png" class="fab fa-facebook mr-2"/>Login com Facebook</div>-->
                        <a href="https://www.facebook.com/dialog/oauth/?client_id=921406831677703&response_type=token&redirect_uri=https://app.deubom.com.br/&state=123&scope=public_profile,email,instagram_basic,instagram_manage_insights,business_management,pages_read_engagement,pages_show_list" class="d-flex justify-content-center m-auto align-items-center font-weight-bold fb-button" ><img width="20px" height="20px" src="../static/img/brand/fb.png" class="fab fa-facebook mr-2"/>Login com Facebook</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="$store.state.listPages.length > 0" class="w-100">
                <div class="card bg-secondary border-0 mb-0">
                  <div>
                    <div class="card-header bg-transparent pb-5 text-center">
                      <h2>Token renovado com sucesso</h2>
                      <small>Parabéns, Token renovado com sucesso</small>
                    </div>
                   
                  </div>
                </div>
              </div>
              
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { initFbsdk } from '@/util/fb.js'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  layout: 'AuthLayout',
  components: {VueSlickCarousel},
  data() {
    return {
      show: false,
      step: 0,
      slide: 0,
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
    },
  },
  methods: {
    async listInstagram (pageId, accessToken) {
      console.log(accessToken)
      localStorage.setItem('pageId', pageId)
      localStorage.setItem('pageIdToken', accessToken)
      const response = await this.$store.dispatch('ListInstagram')
      console.log(response)
      response ? this.$router.push({path: '/pages/user', query: {referral: this.$route.query.referral}}) : alert('Essa página não possui Instagram vinculado')
    },
    async loginWithFacebook() {
      await this.$store.dispatch("Login")
      this.slide = 4
    },
    onSubmit() {
      // this will be called only after form is valid. You can do api call here to login
    }
  },
  async mounted() {
    initFbsdk();
    // console.log('query de retorno', this.$route.query)
    // console.log('hash de retorno', this.$route.hash)
    this.$store.commit('SET_LOADING_DETAILS', true)

    if (this.$route.hash) {
      let hash = this.$route.hash.substr(1)
      console.log('hash1', this.$route.hash.substr(1))
      let result = hash.split('&').reduce(function (res, item) {
        let parts = item.split('=');
        res[parts[0]] = parts[1];
        // console.log('res hash', res)
        return res;
      }, {});
      // console.log('result hash', result)
      if (result.access_token) {
        await this.$store.dispatch('Login', {token: result.access_token})
        this.slide = 4
        this.show = true
      }
    } else {
      this.show = true
      // console.log(this.show)
    }
  },
  async beforeCreate(){
    // console.log('query de retorno', this.$route.query)
    // console.log('hash de retorno', this.$route.hash)
    // this.$store.commit('SET_LOADING_DETAILS', true)
    //
    // if (this.$route.hash) {
    //   let hash = this.$route.hash.substr(1)
    //   console.log('hash1', this.$route.hash.substr(1))
    //   let result = hash.split('&').reduce(function (res, item) {
    //     let parts = item.split('=');
    //     res[parts[0]] = parts[1];
    //     console.log('res hash', res)
    //     return res;
    //   }, {});
    //   console.log('result hash', result)
    //   if (result.access_token) {
    //     await this.$store.dispatch('Login', {token: result.access_token})
    //     this.slide = 4
    //     this.show = true
    //   }
    // } else {
    //   this.show = true
    //   console.log(this.show)
    // }
  }
};
</script>
