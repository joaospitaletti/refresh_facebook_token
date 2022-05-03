
/*!

=========================================================
* Nuxt Argon Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nuxt-argon-dashboard-pro
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com and www.binarcode.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

const pkg = require('./package')
console.log('ENV', process.env.NODE_ENV)

module.exports = {
  mode: 'universal',
  router: {
    base: '/',
    linkExactActiveClass: 'active'
  },
  server: {
    port: 8003, // default: 3000
    host: "0.0.0.0", // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'DeuBom Influencers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mídia Kit de Influencers DeuBom' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,600,700,800'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css', integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/", crossorigin: "anonymous"}
    ]
  },
  gtm: {
    id: "GTM-K9Z5DSV",
    enabled: true
  },
  publicRuntimeConfig: {
    gtm: {
      id: "GTM-TC9NGVP",
      enabled: true, //// Always send real GTM events (also when using `nuxt dev`)
      debug: true,

      layer: "dataLayer",
      variables: {},

      pageTracking: true,
      pageViewEventName: "nuxtRoute",

      autoInit: true,
      respectDoNotTrack: true,

      scriptId: "gtm-script",
      scriptDefer: false,
      scriptURL: "https://www.googletagmanager.com/gtm.js",

      noscript: true,
      noscriptId: "gtm-noscript",
      noscriptURL: "https://www.googletagmanager.com/ns.html",
    },
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'assets/css/nucleo/css/nucleo.css',
    'assets/sass/argon.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/dashboard/dashboard-plugin',
    {src: '~/plugins/dashboard/full-calendar', ssr: false },
    {src: '~/plugins/dashboard/world-map', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-clipboard',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true
    // See https://github.com/nuxt-community/axios-module#options
  },

  proxy: {
    '/api/': { target: 'https://api.deubom.app/v1/', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    },
    extractCSS: process.env.NODE_ENV === 'production',
    babel: {
      plugins: [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }
  }
}
