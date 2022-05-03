<template>
  <div class="mt-5 card card-profile">

    <div class="row justify-content-center">
      <div class="col-lg-3 order-lg-2">
        <div class="card-profile-image">
          <a href="#">
            <img :src="userData.profile_picture_url" class="rounded-circle">
          </a>
        </div>
      </div>
    </div>

    <div class="card-header pt-5">
      <div class="row">
        <div class="col">
          <div class="col-12 px-0 card-profile-stats d-flex justify-content-center">
            <div class="col-4 px-0">
              <span class="heading">{{ userData.media_count.toLocaleString('pt-BR') }}</span>
              <span class="description">Posts</span>
            </div>
            <div class="col-4 px-0">
              <span class="heading">{{ userData.followers_count.toLocaleString('pt-BR') }}</span>
              <span class="description">Seguidores</span>
            </div>
            <div class="col-4 px-0">
              <span class="heading">{{ userData.follows_count.toLocaleString('pt-BR') }}</span>
              <span class="description">Seguindo</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <h5 class="h3">
          {{ userData.name }}
<!--          <span class="font-weight-light">, 27</span>-->
        </h5>
        <div class="h5 font-weight-300">
          <i class="ni location_pin mr-2"></i>{{ userData.website }}
        </div>
        <div class="h5 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i>{{ userData.biography }}
        </div>
      </div>
    </div>
    <div class="card-body d-flex flex-column">
      <div class="d-md-none text-muted text-center"><small>Arraste para o lado</small></div>
      <base-button class="d-none d-md-block align-self-end pt3" @click="next">Próximo</base-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    userData: {
      type: Object
    }
  },
  methods: {
    next () {
      this.$emit('next')
    }
  }
};
</script>
<style></style>
