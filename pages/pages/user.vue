<template>
  <div id="user">
    <div v-if="review && notAccepted === false" id="tal"
      class="header position-relative d-flex align-items-center profile-header bg-gradient-primary"
         :style="review ? 'height: 100vh' : ''"
    >
      <!-- Mask -->
      <span
            class="mask opacity-7"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center col-md-6 col-lg-6 col-xl-4">
        <div class="col mt-5 text-center">
          <card>
            <div slot="header" class="text-center">
              <img src="img/icons/802.svg" width="50px"/>
              <h1 class="mb-0 mt-2">Analisando seu Perfil</h1>
            </div>
            <div class="w-100 text-center">
              <img src="img/icons/review.svg" width="200px"/>
            </div>
          </card>
        </div>
      </div>
    </div>
    <div v-if="review && notAccepted === true"
         class="header position-relative d-flex align-items-center profile-header bg-gradient-primary"
         :style="review ? 'height: 100vh' : ''"
    >
      <!-- Mask -->
      <span
        class="mask opacity-7"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center col-md-6 col-lg-6 col-xl-4">
        <div class="col mt-5 text-center">
          <card>
            <div slot="header" class="text-center">
              <h1 class="mb-0 mt-2">Perfil ainda não aceito</h1>
            </div>
            <div class="w-100 text-center">
              <img src="img/icons/in_progress.svg" width="200px"/>
              <h3 class=" text-left mt-4">Infelizmente seu perfil ainda não tem 10 mil seguidores, o mínimo necessário (por enquanto) para ser aceito no cadastro.</h3>
              <h3 class="text-black-50 text-left">Mas não desista! Volte quando chegar lá e tente de novo, vai ser um prazer lhe ter!</h3>
            </div>
            <div slot="footer" class="d-flex flex-column align-items-center">
              <small class="text-black-50">Tente novamente com outro perfil</small>
              <base-button class="mt-3" @click="$router.push('/')">Voltar</base-button>
            </div>
          </card>
        </div>
      </div>
    </div>
    <div v-if="review === false" style="background-size: cover; background-position: center" :style="getImg(userMedia[0].media_type === 'VIDEO' ? userMedia[0].thumbnail_url : userMedia[0].media_url)"
          class="header position-relative d-flex align-items-center profile-header flex-column">
      <div style="background: rgba(0,0,0,0.4)" class="position-absolute w-100 h-100"></div>

      <!-- Mask -->
      <span
        class="mask opacity-8"></span>
      <div class="d-flex w-100 justify-content-between align-items-center mt-3">
        <img style="z-index: 4" width="150px" class="ml-3" src="img/brand/deubom.png"/>
        <base-button @click="$router.push('/')" class="mr-3" type="white" outline>Logout</base-button>
      </div>
      <!-- Header container -->
      <div v-if="content === false" class="container-fluid d-flex flex-column align-items-center col-12 col-xl-4 order-xl-2 mx-auto mt-5">
        <div class="">
          <div class="col-12 user-title">
            <h1 class="display-2 text-white">Parabéns, {{ userData.username}}!</h1>
            <div class="d-flex align-items-center">
              <img width="30px" height="30px" src="img/icons/verified.png"/>
              <p class="text-white font-weight-bold mt-0 ml-2 mb-0 w-100">O seu perfil é qualificado para a DeuBom Influencers.</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div v-if="review === false" class="container-fluid mt--6">
      <div class="row">
        <vue-slick-carousel v-if="content === false" :initialSlide="slide" :infinite="false" :arrows="false" :dots="true" class="col-md-6 col-lg-6 col-xl-4 order-xl-2 px-0 m-auto">
          <div class="w-100">
            <user-card @next="slide = 1" class="pt-4 custom-carousel-item" :userData="userData"></user-card>
          </div>
          <div class="w-100">
            <card class="custom-carousel-item">
              <div slot="header">
                <h2 class=" mb-0">É uma honra ter você aqui na DeuBom!</h2>
              </div>
              <div class="text-center">
                <img class="m-auto py-3" width="220px" src="img/icons/welcome.svg"/>
                <h3>Vamos falar sobre próximos passos?</h3>
              </div>
              <div class="text-center d-flex flex-column" slot="footer">
                <div class="d-md-none text-muted text-center"><small>Arraste para o lado</small></div>
                <base-button class="d-none d-md-block align-self-end pt3" @click="slide = 2">Próximo</base-button>
              </div>
            </card>
          </div>
          <div class="w-100">
            <card class="custom-carousel-item">
              <div slot="header">
                <h1 class="mb-0 text-center">Primeiras Campanhas</h1>
              </div>
              <div class="text-center">
                <img class="m-auto pb-3" width="130px" src="img/icons/campaigns.svg"/>
                <h3 class="text-black-50 text-left mb-0">Enquanto nosso app sai do forno (sim, teremos um app só pra você!), vamos selecionando alguns perfis para participarem das primeiras campanhas dos nossos clientes.</h3>
              </div>
              <div class="text-center d-flex flex-column" slot="footer">
                <div class="d-md-none text-muted text-center"><small>Arraste para o lado</small></div>
                <base-button class="d-none d-md-block align-self-end pt3" @click="slide = 3">Próximo</base-button>
              </div>
            </card>
          </div>
          <div class="w-100">
            <card class="custom-carousel-item">
              <div slot="header">
                <h1 class="mb-0 text-center">Critério de Seleção</h1>
              </div>
              <div class="text-center">
                <img class="m-auto pb-3" width="180px" src="img/icons/selection.svg"/>
                <h3 class="text-black-50 text-left mb-0">Sabe qual é nosso maior parâmetro de escolha? ENGAJAMENTO! Não importa o número de seguidores, vamos selecionar quem tiver um bom engajamento com sua audiência.</h3>
              </div>
              <div class="text-center d-flex flex-column" slot="footer">
                <div class="d-md-none text-muted text-center "><small>Arraste para o lado</small></div>
                <base-button class="d-none d-md-block align-self-end pt3" @click="slide = 4">Próximo</base-button>
              </div>
            </card>
          </div>
          <div class="w-100">
            <card class="custom-carousel-item">
              <div slot="header">
                <h1 class="mb-0 text-center">Como ter vantagem?</h1>
              </div>
              <div class="text-center">
                <img class="m-auto pb-3" width="170px" src="img/icons/highlight.svg"/>
                <h3 class="text-black-50 text-left mb-0">Além de um bom engajamento, só tem uma maneira de você se destacar na nossa seleção. <span class="text-primary">Mostrando sua influência na prática.</span></h3>
              </div>
              <div class="text-center d-flex flex-column" slot="footer">
                <div class="d-md-none text-muted text-center"><small>Arraste para o lado</small></div>
                <base-button class="d-none d-md-block align-self-end pt3" @click="slide = 5">Próximo</base-button>
              </div>
            </card>
          </div>

          <div class="w-100">
            <card class="custom-carousel-item">
              <div slot="header">
                <h1 class="mb-0 text-center">Mostre sua influência</h1>
              </div>
              <div class="text-center">
                <h3 class="text-black-50 text-left mb-0">Fizemos uma imagem com algumas informações bem legais sobre o seu perfil, <span class="text-primary">poste ela no stories usando #MeuPerfilDeuBom e com o seu link único.</span> <br /><br />Nós vamos metrificar todo seu engajamento com esse post e isso vai ajudar bastante para que você seja selecionado para as campanhas.</h3>
                <base-button @click="lastPic()" class="mt-4">Ver Material</base-button>
              </div>
            </card>
          </div>
<!--          <card v-if="$store.state.loading" class="shine w-100 custom-carousel-item">-->
<!--            <div style="height: 260px"></div>-->
<!--          </card>-->

        </vue-slick-carousel>
        <div class="col-md-6 col-lg-6 col-xl-4 col-12 m-auto" v-if="content === true">
          <card class="mt--9">
            <div slot="header" class="text-center">
              <h2 class="mb-0">Seu Perfil DeuBom!</h2>
            </div>
            <div>
              <div class="text-center">
                <h3>Seu card resumo</h3>
               <div style="height: 214px" class="d-flex flex-column justify-content-center align-items-center">
                 <img v-if="!loadingPic" @click="openCard" class="" style="border-radius: 10px" width="120px" :src="cardUrl ? cardUrl : ''"/>
                 <div v-else class="text-center">
                   <img src="img/icons/802.svg" width="40px"/>
                   <p class="mb-0 mt-2">Gerando imagem...</p>
                 </div>
               </div>
<!--                <base-button @click="lastPic">Gerar Imagem</base-button>-->
                <small class="text-black-50 d-block pt-2">Pressione e segure para salvar</small>
              </div>
              <div class="text-center pt-4">
                <h3>Seu link único</h3>
                <h5 class="text-black-50">https://meuperfil.deubom.com.br?referral={{userData.username}}</h5>
                <el-popover
                  placement="top"
                  width="80"
                  trigger="click"
                >
                  <div class="d-flex justify-content-center align-items-center">
                    <i style="color: #2dce89" class="fas fa-check mr-2"></i>
                    <h5 class="mb-0">Copiado</h5>
                  </div>
                  <base-button slot="reference" size="sm" @click="copySomething(`https://meuperfil.deubom.com.br?referral=${userData.username}`)">Copiar Link</base-button>
                </el-popover>
              </div>
              <h4 class="pt-5">Compartilhe com a hashtag #MeuPerfilDeuBom e mostre seu potencial de engajamento!</h4>
              <div class="d-flex flex-column align-items-center">
                <img src="img/icons/welcome.svg" width="200px"/>
                <h1 class="pt-3">Boa sorte!</h1>
                <small class="text-black-50 pt-4 text-underline" @click="backToSlider">Voltar</small>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
    <export :class="loadingPic === false  ? 'd-none' : ''" class="position-fixed" v-if="!$store.state.loading" :userData="userData" :userMedia="userMedia" :impressions="impressions" :userAudience="userAudience"></export>
  </div>
</template>
<script>
  import domtoimage from 'dom-to-image-more';
  import EditProfileForm from '~/components/pages/UserProfile/EditProfileForm.vue';
  import UserCard from '~/components/pages/UserProfile/UserCard.vue';
  import ProgressTrackList from '~/components/widgets/ProgressTrackList.vue';
  import BarChart from "../../components/argon-core/Charts/BarChart";
  import Export from "../../components/Export";
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import { saveAs } from 'file-saver';

  export default {
    layout: 'DashboardLayout',
    data () {
      return  {
        review: true,
        share: '',
        content: false,
        cardUrl: null,
        slide: 0,
        accepted: false,
        notAccepted: false,
        loadingPic: false
      }
    },
    methods: {
      openCard () {
        window.open(this.cardUrl, '_blank')
      },
      backToSlider () {
        this.content = false
        this.slide = 5
      },
      getImg(url) {
        return `background-image: url('` + url + `')`
      },
      followersVerification () {
        if (this.userData.followers_count > 1000) {
          this.accepted = true
          this.review = false
          this.slide = 0
        } else {
          this.notAccepted = true
        }
      },
      async copySomething(text) {
        try {
          await this.$copyText(text);
        } catch (e) {
          console.error(e);
        }
      },
      async firstPic() {
        this.loadingPic = true
        await this.shotPic()
        this.accepted = true
        this.review = false
        this.loadingPic = false
        console.log('deu bom')
      },
      async lastPic() {
        this.loadingPic = true
        this.content = true
        let dataUrl = await this.shotPic()
        const cloudinaryPayload = {file: dataUrl,username:this.userData.username}
        this.cardUrl = await this.$store.dispatch('uploadCloudinary', cloudinaryPayload)
        this.review = false
        this.loadingPic = false
      },
      async shotPic() {
        let node = document.getElementById('userCard');
        let res = domtoimage.toJpeg(node)
          .then(async (dataUrl) => {
            return dataUrl
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
        return res
      }
    },
    computed: {
      userData: function () {
        return !this.$store.state.loading ? this.$store.state.insights.UserData : {}
      },
      impressions: function () {
        return !this.$store.state.loading ? this.$store.state.insights.Impressions : {}
      },
      userMedia: function () {
        return !this.$store.state.loading ? this.$store.state.insights.UserMedia : []
      },
      userAudience: function () {
        return !this.$store.state.loading ? this.$store.state.insights.AudienceLocal[0].values[0].value : null
      },
      headerBg: function () {
        return this.userMedia.length > 0 ? `background-image: url('` + this.userMedia[0].media_type === 'IMAGE' ? this.userMedia[0].media_url : this.userMedia[0].thumbnail_url + `')` : ''
      },
      cityChart() {
        if (this.userAudience) {
          let r = Object.entries(this.userAudience).sort((a, b) => b[1] - a[1])
          let result = {
            chartData: {
              labels: [r[0][0], r[1][0], r[2][0], r[3][0], r[4][0], r[5][0], r[6][0]],
              datasets: [{
                label: 'Cidades',
                data: [r[0][1], r[1][1], r[2][1], r[3][1], r[4][1], r[5][1], r[6][1]]
              }]
            }
          }
          console.log(result)
          return result
        }
      },
    },
    components: {
      domtoimage,
      Export,
      BarChart,
      EditProfileForm,
      UserCard,
      ProgressTrackList,
      VueSlickCarousel,
      saveAs
    },
    async mounted() {
      await this.$store.dispatch('Insights', {referral: this.$route.query.referral ? this.$route.query.referral : null})

      if (this.userData.followers_count > 1000) {
        await this.firstPic()
      } else {
        this.notAccepted = true
      }
    },
    beforeCreate() {
      this.$store.commit('SET_LOADING', true)
    }
  };
</script>
<style>
  .profile-header {
    background-size: cover;
    background-position: center top;
    min-height:330px;
  }
</style>
