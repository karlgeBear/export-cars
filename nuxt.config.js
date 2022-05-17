export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'export-cars',
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
    'element-ui/lib/theme-chalk/index.css',
    {src: '~assets/css/global.scss', lang: 'scss'},
    '~assets/css/fontawesome.min.css',
    '~assets/css/reset.css',
    '~assets/css/muli.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources' // 在所有样式文件中共享变量、mixin、函数（@import不需要），配合styleResources来使用
  ],
  styleResources: {
    scss: [
      'assets/css/global.scss' // 全局 scss 变量
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
      /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push(...[{
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        }
    //  {
    //    loader: 'image-webpack-loader',
    //    options: {
    //      bypassOnDebug: true,
    //      mozjpeg: {
    //        progressive: true,
    //        quality: 65
    //      },
    //      // optipng.enabled: false will disable optipng
    //      optipng: {
    //        enabled: true,
    //      },
    //      pngquant: {
    //        quality: '65-90',
    //        speed: 4
    //      },
    //      gifsicle: {
    //        interlaced: false,
    //      },
    //      // the webp option will enable WEBP
    //      webp: {
    //        quality: 75
    //      }
    //    },
    //  },
        ])
      }
    }
  },

  // 这使您可以为 Nuxt 服务器实例指定主机和端口
  server: {
    port: 8888, // default: 3000
    // host: '0.0.0.0', // default: localhost,
    timing: false
  }
}
