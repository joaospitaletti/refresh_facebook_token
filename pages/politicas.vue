<template>
  <div>
    <!-- Header -->
    <div>
      <div class="header bg-gradient-primary pt-4 pb-5 pt-lg-12">
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
      <div class="container mt--8 pb-12">
        <div class="row justify-content-center">
          <div v-if="show === true" class="col-lg-12 col-md-12 px-0">
            <VueSlickCarousel :initialSlide="slide" :infinite="false" :arrows="false" :dots="true">
              <div class="w-100">
                <div class="custom-carousel-item card bg-secondary border-0 mb-0">
                  <div>
                    <div class="card-header bg-transparent pb-2 text-center">
                      <h2>Políticas de Privacidade</h2>
                      <h3 class="text-black-50 font-weight-normal text-left">No DEUBOM estamos comprometidos em proteger sua privacidade e publicamos uma política geral sobre como coletamos, usamos e divulgamos suas informações pessoais.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>A finalidade desta política de privacidade é informá-lo sobre as práticas do Deubom relativas à coleta, uso e divulgação de informações pessoais que podem ser fornecidas através do acesso ou uso de nosso site e aplicativo. Ao utilizar nossos Serviços, aplicativo
mobile ou website, você concorda com a coleta, uso e divulgação de suas informações pessoais (conforme definido abaixo) de acordo com os seguintes termos e condições.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Esta Política de Privacidade também explica como pode entrar em contato conosco se tiver alguma dúvida sobre, pretender alterar ou eliminar qualquer informação pessoal que o Deubom possa ter sobre si. Recomendamos que tome o tempo necessário para ler esta Política de Privacidade e mantê-la para futura referência.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>SUAS INFORMAÇÕES PESSOAIS PODEM SER PROCESSADAS PELO DEUBOM, UMA DE NOSSAS AFILIADAS OU UM FORNECEDOR DE SERVIÇO DE TERCEIROS NÃO AFILIADO, NO PAÍS ONDE ESTÁ SITUADO E OUTROS PAÍSES (INCLUINDO OS ESTADOS UNIDOS) ONDE AS LEIS RELACIONADAS COM O PROCESSAMENTO DE INFORMAÇÕES PESSOAIS PODEM SER MENOS RIGOROSO DO QUE AS LEIS EM SEU PAÍS. AO UTILIZAR O WEBSITE, APLICATIVO E / OU OS SERVIÇOS, VOCÊ CONCORDA COM A TRANSFERÊNCIA DE DADOS, INCLUINDO INFORMAÇÕES PESSOAIS, DE SEU PAÍS A UM PAÍS QUE TENHA LEIS MENOS RIGOROSAS, E O PROCESSAMENTO DE SUAS INFORMAÇÕES PESSOAIS EM CONFORMIDADE COM ESTA
POLÍTICA.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Informação pessoal<br>
Para os fins desta Política de Privacidade, ”informações pessoais” significa informações sobre um indivíduo identificável.
Quais informações pessoais coletamos:</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>As informações pessoais que podemos recolher no decorrer de seu acesso ou uso do Site, Aplicativo ou dos Serviços podem incluir, mas não se limitando ao seguinte:</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Informações de perfil de mídia social. (Facebook: id, email, name, first_name, middle_name, last_name, picture.type – large. Instagram: id, name, username, followers_count, follows_count, media_count, website, biography, profile_picture_url. Dos Insights do Instagram: impressions, reach, audience_city, audience_gender_age. Das mídias do Instagram: id, caption, comments_count, like_count).</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Informações financeiras (como conta bancária); <br><br>Informações demográficas (como sexo, idade e ocupação) e
informações sobre preferências individuais; e quaisquer outras informações que você possa nos transmitir ou nos autorizar a obter de você ou de um terceiro em conexão com os Serviços.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Como usamos suas informações pessoais<br>Usamos suas informações pessoais para:</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Fornecer serviços personalizados e uma experiência personalizada no nosso site / aplicativo e comunicação interativa;</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Fornecer serviços oportunos e confiáveis.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Fazer tudo que for necessário para administrar esses serviços, o aplicativo e o Website;</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Pesquisar, desenvolver, gerenciar, proteger e melhorar esses Serviços, o aplicativo e o Website;</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Avisá-lo sobre novos produtos e serviços que possam ser do seu interesse;</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Desenvolver e manter nosso relacionamento e comunicação;</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Efetuar pagamentos pelos nossos serviços prestados.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Não obstante qualquer outra coisa nesta Política de Privacidade, não analisaremos, compartilharemos, distribuiremos ou referenciaremos quaisquer Dados do Cliente, exceto conforme previsto nos termos de uso do nosso Site/Aplicativo e Serviços, ou conforme exigido por lei.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Quando divulgaremos suas informações pessoais<br>Exceto com o seu consentimento, não iremos vender, licenciar, comercializar ou alugar suas informações pessoais para ou com outras pessoas.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>O Deubom reserva-se ao direito de divulgar informações pessoais a terceiros se uma lei, regulamento, mandado de busca, intimação ou ordem judicial nos obrigar legalmente ou nos autorizar a fazê-lo. O Deubom também se reserva ao direito de divulgar e / ou transferir informações pessoais a terceiros em caso de uma proposta ou compra, venda (incluindo liquidação, realização, encerramento ou reintegração de posse), arrendamento, fusão ou qualquer outro tipo de alienação, transferência, transmissão ou financiamento de toda ou qualquer parte do Deubom para que você continue a receber os mesmos produtos e serviços do terceiro.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Conhecimento e Consentimento<br>O Deubom coleta informações pessoais sobre você, de você, ou de terceiros que você nos autoriza a coletar essas informações, somente quando você voluntariamente o fornecer ou autorizar a coleta. Normalmente, solicitaremos o consentimento para o uso ou divulgação de suas informações pessoais no momento da coleta. Em certas circunstâncias, o consentimento pode ser solicitado após a informação ter sido coletada, mas antes do uso (por exemplo, quando queremos usar informações para uma finalidade não identificada anteriormente).</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>A forma de consentimento que buscamos, inclusive se ela é expressa ou implícita, dependerá em grande parte da sensibilidade das informações pessoais e as expectativas razoáveis do indivíduo nas circunstâncias.<br>Você pode retirar seu consentimento a qualquer momento, sujeito a restrições legais ou contratuais e aviso razoável. Se você deseja retirar seu consentimento a qualquer momento, entre em contato conosco usando as informações de contato fornecidas na seção “Fale Conosco” desta Política de Privacidade. Nós o informaremos sobre as implicações da retirada do consentimento. Como condição para o fornecimento de um produto ou serviço, não exigimos que você consinta na coleta, uso ou divulgação de informações além das exigidas para cumprir os objetivos explicitamente especificados e legítimos para os quais a informação está sendo fornecida.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Uso ou Divulgação para Propósitos de Marketing<br>Se você não optou por não receber materiais de marketing, também poderemos usar (mas não divulgaremos) suas informações pessoais para promover e comercializar produtos, serviços e ofertas especiais de nossa parte, de nossas afiliadas e / ou de nossos parceiros de negócios, inclusive por meio de marketing direto. Podemos também divulgar seu nome e endereço postal para essas afiliadas e / ou parceiros de negócios de terceiros para que eles possam enviar materiais promocionais diretamente.<br>Você pode optar por não nos permitir usar ou divulgar suas informações pessoais para fins de marketing direto, indicando sua preferência na página de configurações do usuário ou entrando em contato conosco conforme descrito abaixo (consulte “Como entrar em contato conosco”).</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Cookies<br>Quando você visita o nosso site, colocamos “cookie” no navegador do seu computador. Um cookie é um pequeno pedaço de informação que um site pode armazenar em seu navegador da web e mais tarde recuperar. O cookie não pode ser lido por qualquer site que não seja aquele que gerou os cookies. Alguns navegadores podem ser configurados para rejeitar todos os cookies. Se você optar por modificar seu navegador desta maneira, algumas páginas deste site/aplicativo podem não funcionar corretamente.<br>Também usamos cookies e trabalhamos com provedores de serviços terceirizados que usam cookies para coletar dados de tráfego e outras informações sobre o uso do nosso site. Nós e nossos provedores de serviços usamos essas informações de forma agregada e anônima para analisar o uso do nosso site e melhorar o funcionamento de nosso site, serviços e negócios em geral.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Como Protegemos Suas Informações Pessoais<br>O Deubom empregará esforços comercialmente razoáveis para garantir que as informações pessoais coletadas no curso de seu acesso ou uso do Website, Aplicativo ou dos Serviços sejam protegidas contra perda, roubo e acesso não autorizado. Esta proteção aplica-se em relação a informações armazenadas em forma eletrônica e impressa. O acesso a tais informações pessoais é restrito a funcionários ou representantes selecionados.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Links para Sites de Terceiros<br>Este site pode oferecer links para outros sites de terceiros. Você deve estar ciente de que os operadores de sites vinculados também podem coletar suas informações pessoais (incluindo informações geradas através do uso de cookies) quando você acessa o link para seus sites. O Deubom não é responsável pela forma como tais terceiros coletam, usam ou divulgam suas informações pessoais, por isso é importante se familiarizar com suas políticas de privacidade antes de fornecer suas informações pessoais.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Retenção e armazenamento de suas informações pessoais<br>O Deubom mantém suas informações pessoais durante o tempo necessário para cumprir o propósito para o qual foi coletado e para cumprir com as leis aplicáveis, e seu consentimento para tais propósitos permanecerá válido após o término de nosso relacionamento com você.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Alterações nesta Política de Privacidade<br>O Deubom reserva-se o direito de modificar esta Política de Privacidade a qualquer momento, sem aviso prévio, para refletir mudanças em obrigações legais ou regulamentares ou mudanças na maneira como lidamos com informações pessoais. A Política de Privacidade publicada a qualquer momento ou de vez em quando através deste website / aplicativo será considerada a Política de Privacidade então em vigor.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Corrigindo ou atualizando suas informações<br>Você pode nos ajudar a manter a precisão de suas informações pessoais, notificando-nos de quaisquer alterações sobre essas informações. Você pode entrar em contato com o Deubom para solicitar acesso ou correção ou atualização de suas informações pessoais usando as informações de contato fornecidas na seção “Fale Conosco” desta Política de Privacidade.</h3>
                      <h3 class="text-black-50 font-weight-normal text-left"><br>Fale Conosco<br>No caso de você ter alguma dúvida sobre a Política de Privacidade do Deubom ou se você tiver motivos para acreditar que o Deubom pode ter falhado em aderir a esta Política de Privacidade, você pode entrar em contato conosco em:<br>E-mail: sac@deubom.com.br</h3>
                      <h3 class="text-black-50 font-weight-normal text-left">Somos a </h3>
                      <h3 class="text-black-50 font-weight-normal text-left">Somos a </h3>
                      <h3 class="text-black-50 font-weight-normal text-left">Somos a </h3>
                      <h3 class="text-black-50 font-weight-normal text-left">Somos a </h3>
                      <h3 class="text-black-50 font-weight-normal text-left">Somos a </h3>
                      <h3 class="text-black-50 font-weight-normal text-left">Somos a </h3>
                      <h3 class="text-black-50 font-weight-normal text-left">Somos a </h3>
                    </div>
                    <div class="card-body px-lg-5 py-lg-4 d-flex flex-column">
                      <a href="https://meuperfil.deubom.com.br" class="d-flex justify-content-center m-auto align-items-center font-weight-bold fb-button" >Voltar</a>
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
    console.log('query de retorno', this.$route.query)
    console.log('hash de retorno', this.$route.hash)
    this.$store.commit('SET_LOADING_DETAILS', true)

    if (this.$route.hash) {
      let hash = this.$route.hash.substr(1)
      console.log('hash1', this.$route.hash.substr(1))
      let result = hash.split('&').reduce(function (res, item) {
        let parts = item.split('=');
        res[parts[0]] = parts[1];
        console.log('res hash', res)
        return res;
      }, {});
      console.log('result hash', result)
      if (result.access_token) {
        await this.$store.dispatch('Login', {token: result.access_token})
        this.slide = 4
        this.show = true
      }
    } else {
      this.show = true
      console.log(this.show)
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
