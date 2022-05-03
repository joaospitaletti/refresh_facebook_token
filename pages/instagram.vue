<template>
<div>
  <!-- Header -->
  <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
    <div class="container">
      <div class="header-body text-center mb-7">
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-6 col-md-8 px-5">
            <h1 class="text-white">Welcome!</h1>
            <p class="text-lead text-white">Use these awesome forms to login or create new account in your project for
              free.</p>
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
        <div class="card bg-secondary border-0 mb-0">
          <div class="card-header bg-transparent pb-5">
            <div class="text-muted text-center mt-2 mb-3"><small>Selecione sua página</small></div>
            <list-instagram></list-instagram>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import ListInstagram from '@/components/pages/facebook/ListInstagram.vue';


export default {
  layout: 'AuthLayout',
  components: {
      ListInstagram,
    },
  data() {
    return {
      model: {
        email: '',
        password: '',
        rememberMe: false
      }
    };
  },
  methods: {

    onSubmit() {
      // this will be called only after form is valid. You can do api call here to login
    }
  },
   mounted() {
    this.$store.dispatch("UserMedia")
  },
  computed: {
    page() {
      return this.$store.state.userMedia
    }
  },
    beforeCreate() {
    this.loading = true;
    this.$store.commit('SET_LOADING', false)

  }
};
</script>

<!-- Impressoes dos ultimos 28 dias
alcance dos ultimos 28 dias
listar cidade as 10 maiores somente as primeiras 10
qtd posts
qtd seguidores
numero de pessoas que seguidores
localidade
bio

listar os posts dos ultimos 28 dias
ou todos os posts -->
