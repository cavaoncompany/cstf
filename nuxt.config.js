const env = require('dotenv').config()
const pkg = require('./package')
const sitedata = require('./content/sitedata.json')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'CSTF',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'site_name', name: 'site_name', content: sitedata.homepageTitle },
      { hid: 'description', name: 'description', content: sitedata.homepageDescription }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/jquery.min.js' },
      { src: '/js/plugins.js' },
      { src: '/js/tether.min.js' },
      { src: '/js/bootstrap.min.js' },
      { src: '/js/animsition.js' },
      { src: '/js/owl.carousel.min.js' },
      { src: '/js/countto.js' },
      { src: '/js/equalize.min.js' },
      { src: '/js/jquery.isotope.min.js' },
      { src: '/js/owl.carousel2.thumbs.js' },
      { src: '/js/jquery.cookie.js' },
      { src: '/js/gmap3.min.js' },
      { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAIEU6OT3xqCksCetQeNLIPps6-AYrhq-s&region=GB' },
      { src: '/js/shortcodes.js' },
      { src: '/js/main.js' },
      { src: '/js/jquery.themepunch.tools.min.js' },
      { src: '/js/jquery.themepunch.revolution.min.js' },
      { src: '/js/rev-slider.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  env: env.parsed,
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.css',
    '~/assets/css/colors/color1.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  serverMiddleware: [
    '~/api/nodemailer'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-leaflet',
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    '@nuxtjs/toast'
  ],
  toast: {
    position: 'top-center',
    goaway: 1500
  },
  router: {
    scrollBehavior(to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },
  recaptcha: {
    hideBadge: true,
    siteKey: process.env.recaptchasitekey,
    version: 3
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
