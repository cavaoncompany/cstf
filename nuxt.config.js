const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/jquery.min.js' },
      { src: '/js/plugins.js' },
      { src: '/js//tether.js' },
      { src: '/js/bootstrap.min.js' },
      { src: '/js/animsition.js' },
      { src: '/js/owl.carousel.min.js' },
      { src: '/js/countto.js"' },
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

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],

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
