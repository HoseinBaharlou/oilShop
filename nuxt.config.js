import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {     
    port: 3000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },
  head: {
    titleTemplate: '%s - oilApp',
    title: 'oilApp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src : '~/plugins/vue-apexchart.js', ssr : false},
    {src : '~/plugins/vue2-google-maps.js', ssr : false},
    {src : '~/plugins/dropzone.js', ssr : false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-sweetalert2',
    'cookie-universal-nuxt'
  ],
  axios: {
    baseURL: 'http://127.0.0.1:8000/api', 
    Headers:{
      Accept:'application/json'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    rtl:true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor : [
       'vue-apexchart','vue2-google-maps'
    ]
  }
}
