import colors from 'vuetify/es5/util/colors'
import { meta } from './utils/meta'

export default {
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  router: {
    middleware: ['auth'],
  },
  publicRuntimeConfig: {},
  manifest: {
    crossorigin: 'use-credentials',
    runtimeCaching: [
      {
        urlPattern: process.env.URL + '/api/profile/',
        strategyOptions: {
          cacheName: 'profile',
          cacheExpiration: {
            maxEntries: 10,
            maxAgeSeconds: 300,
          },
        },
        method: 'GET',
      },
    ],
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + 'MangaMark',
    // title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/bevietnam.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    'plugins/nuxt-client-clipboard2',
    'plugins/nuxt-client-dialog',
    'plugins/nuxt-client-capitalize',
    'plugins/nuxt-client-apexcharts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/recaptcha',
    [
      'vue-warehouse/nuxt',
      {
        vuex: true,
      },
    ],
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  recaptcha: {
    siteKey: '6LdA47AUAAAAAHgoSOBrxHt_gpgtvodDhBs9Atl4', // Site key for requests
    version: 2, // Version
  },
  sitemap: {
    hostname: process.env.URL,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true,
    },
  },
  pwa: {
    icon: {
      source: '/favicon.png',
      fileName: 'favicon.png',
    },
    manifest: {
      icons: [
        {
          src: '/favicon.png',
          sizes: '1024x1024',
          type: 'image/png',
        },
      ],
    },
    meta: {
      ogType: false,
      ogTitle: false,
      ogDescription: false,
      description: false,
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  env: {
    baseUrl: process.env.API_URL,
  },
  axios: {
    // baseURL: 'https://api.qtserver.dynu.net/api'
    baseURL: process.env.API_URL,
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: process.env.URL + '/sitemap.xml',
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'token' },
          user: { url: 'profile', method: 'get', propertyName: 'data' },
          logout: { url: 'logout', method: 'post' },
        },
      },
    },
    redirect: {
      login: '/guest/login',
      logout: '/guest/login',
      home: '/',
    },
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        sameSite: true,
        secure: true,
      },
    },
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  generate: {
    subFolders: false,
  },
  hooks: {
    'generate:page': (page) => {
      page.html = meta(page)
    },
  },
  /*
   ** Build configuration
   */
  build: {
    // filenames: {
    //   app: ({ isDev }) => isDev ? '[name].js' : '[name].js',
    //   chunk: ({ isDev }) => isDev ? '[name].js' : '[name].js',
    //   css: ({ isDev }) => isDev ? '[name].css' : '[name].css',
    //   img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]',
    //   font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[ext]',
    //   video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[ext]'
    // },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
