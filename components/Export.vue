<template>
  <div>
    <div class="export-container d-flex" id="userCard">
      <svg height="1900" width="1000" class="position-absolute bg-circle">
        <circle cx="-120" cy="640" r="1010" fill="white" />
      </svg>
      <div class="brand">
        <img width="350px" src="img/brand/deubom.png"/>
      </div>
      <div class="export-inner w-100">
        <div class="posts-section d-flex flex-column">
          <div class="post-item d-flex align-items-center align-self-start mt-7">
            <div class="post-lettering-profile mr-4 text-right">
              <h2 class="mb-0">@{{ userData.username }}</h2>
            </div>
            <div class="post-picture profile" :style="`background-image: url('` + userData.profile_picture_url + `')` ">
            </div>
          </div>
          <div class="mt-3 d-flex flex-column">
            <div class="post-item d-flex align-items-center w-100">
              <div class="post-picture post-1" :style="getImg(medias[0].media_type === 'VIDEO' ? medias[0].thumbnail_url : medias[0].media_url)">
              </div>
              <div style="max-width: 500px;" class="post-lettering mb-3 ml-4 w-50">
                <h4 class="mb-0">{{ cities[0] }} e<br />{{ cities[1] }}</h4>
                <h4 class="font-weight-light mb-0">são as cidades que<br />mais me seguem</h4>
              </div>
            </div>
            <div class="post-item d-flex align-items-center w-100 justify-content-end align-self-end mt--5">
              <div class="post-lettering mb-3 mr-4 text-right w-50">
                <h4 class="mb-0"> {{impressions[0].values[0].value.toLocaleString('pt-BR')}}</h4>
                <h4 class="font-weight-light mb-0">é minha média de<br />impressões semanais</h4>
              </div>
              <div class="post-picture post-2" :style="getImg(medias[2].media_type === 'VIDEO' ? medias[2].thumbnail_url : medias[2].media_url)">
              </div>
            </div>
            <div class="post-item d-flex align-items-center mt--5 w-100">
              <div class="post-picture post-3" :style="getImg(medias[4].media_type === 'VIDEO' ? medias[4].thumbnail_url : medias[4].media_url)">
              </div>
              <div class="post-lettering mb-3 ml-4 w-50">
                <h4 class="mb-0">Segunda, 17h</h4>
                <h4 class="font-weight-light mb-0">é meu melhor dia e<br />hora para postar</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="verified-tag d-flex w-100 justify-content-end mt-5 pr-5 mb-3">
          <div class="d-flex align-items-center">
            <img width="100px" height="100px" src="img/icons/verified.png"/>
            <p class="text-white mb-0 ml-5">Meu perfil está<br />qualificado para o<br /><b class="font-weight-bolder">DeuBom Influencers</b></p>
          </div>
        </div>
        <div class="swipe-up-container w-100 text-center pt-6">
          <div class="px-3 py-4">
            <h4 class="pb-0 mb-0 align-self-end text-white">Arraste pra cima e confira o seu</h4>
          </div>
<!--          <p class="text-white small pt-2 font-weight-light">ou acesse meuperfil.deubom.com.br</p>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Export",
  props: {
    userData: Object,
    impressions: Array,
    userMedia: Array,
    userAudience: Object
  },
  methods: {
    getImg(url) {
      return `background-image: url('` + url + `')`
    },
  },
  computed: {
    medias: function () {
      if (!this.$store.state.loading) {
        console.log('medias', this.userMedia.slice(0, 6))
        return this.userMedia.slice(0, 6)
      }
    },
    cities: function () {
      let r = Object.entries(this.userAudience).sort((a, b) => b[1] - a[1])
      let city1Index = r[0][0].indexOf(',')
      let city1 = r[0][0].slice(0,city1Index)
      let city2Index = r[1][0].indexOf(',')
      let city2 = r[1][0].slice(0,city2Index)

      return [city1,city2]
    }
  }
}
</script>

<style scoped>

</style>
