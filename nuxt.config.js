require('dotenv').config()
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  mode: 'spa',
  target: 'static',
  loading: {
    color: '#00923f',
    height: '15px'
  },
  generate: {
    cache: {
      ignore: [
        // When something changed in the docs folder, do not re-build via webpack
        'docs'
        ]
      }
    },
    body: true,
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pusdokkes - Portal',
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Kedokteran dan Kesehatan Polri | PUSDOKKES - PORTAL' },
    { name: 'format-detection', content: 'telephone=no' },
    { hid: 'og:image', property: 'og:image', content: 'http://ppkcarolus.com/upload/tampak_luar-min.jpg' },
    { httpEquiv: "X-Frame-Options",  content:"deny"}
    ],
    link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: "https://pusdokkes.halomedika.com/",
    },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Open+Sans'
    },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/glightbox/glightbox.min.css'},
    { rel: 'stylesheet', type: 'text/css', href: '/assets/venobox/dev/venobox.min.css'}
    ],
    script: [
    {
      src: 'https://polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver',
      body: true
    },
    {
      src: 'https://cdn.ampproject.org/v0/amp-ad-0.1.js',
      async: 'true',
      'custom-element': 'amp-ad'
    },

    { src: '/assets/js/jquery.min.js'},
    { src: '/assets/js/bootstrap.bundle.min.js'},
    { src: '/assets/js/slick.js'},
    { src: '/assets/js/hs.core.js'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'bootstrap-css-only/css/bootstrap.min.css',
    'mdbvue/lib/mdbvue.css',
    'mdbvue/lib/css/mdb.min.css',
    '@assets/css/slick.css',
    '@assets/css/theme.css',
    ],
    
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  {src: '~/plugins/format-currency', ssr: false},
  {src: '~/plugins/format-slug', ssr: false},
  {src: '~/plugins/mdb-vue', ssr: false},
  {src: '~/plugins/vue2-leaflet', mode: 'client', ssr: false },
  { src: '~/plugins/sweetalert', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  '@nuxtjs/device',
  '@nuxtjs/style-resources',
  '@nuxtjs/svg',
  '@nuxtjs/moment'
  ],

  styleResources: {
    scss: [
    '~assets/scss/variables.scss',
    '~assets/scss/mixins.scss',
    '~assets/scss/layout.scss',
    '~assets/scss/global.scss',
    '~assets/scss/main.scss',
    '~assets/scss/event.scss',
    '~assets/scss/berita.scss',
    '~assets/scss/auth.scss',
    '~assets/scss/profile.scss',
    '~assets/scss/event-detail-login.scss',
    '~assets/scss/event-test.scss',
    '~assets/scss/docs-event.scss',
    '~assets/scss/keranjang.scss',
    '~assets/scss/pembayaran.scss'
    ]
  },

  device: {
    refreshOnResize: true
  },

  moment: {
    timezone: true,
    defaultTimezone: 'Asias/Jakarta',
    locales: ['id']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'mdbvue/nuxt'
    ],
    mdbvue: {
    icons: true, // FA5
    roboto: false, // font Roboto
    css: false, // MDB CSS
    bootstrap: false // Bootstrap CSS
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // Process Env Basse url
    proxy: false,
    baseURL: process.env.NUXT_ENV_API_URL,
  },

  // workbox
  workbox: {
    workboxOptions: {
      skipWaiting: true
    },
    // offline: true,
    // offlineStrategy: 'NetworkFirst',
    // offlinePage: null,
    // offlineAssets: [],
    runtimeCaching: [
    {
      urlPattern: '/assets/css/.*',
      handler: 'cacheFirst',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    },
    {
      urlPattern: '/assets/fonts/.*',
      handler: 'cacheFirst',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    },
    {
      urlPattern: '/assets/img/.*',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    },
    {
      urlPattern: '/assets/js/.*',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    },
    {
      urlPattern: '/assets/scss/.*',
      method: 'GET',
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    }
    ]
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'PUSDOKKES PORTAL',
      author: 'Pusdokkes',
      icon: true,
      canonical: 'https://pusdokkes.halomedika.com/',
      description: 'Kedokteran Dan Kesehatan - Polri | PUSDOKKES - PORTAL',
      keywords: 'PUSDOKKES PORTAL',
      ogUrl: 'https://pusdokkes.halomedika.com/',
      ogType: 'website',
      ogSiteName: 'Pusdokkes Portal- Kedokteran Dan Kesehatan - Polri',
      ogTitle: 'Pusdokkes Portal - Kedokteran Dan Kesehatan - Polri',
      ogImage: 'icon-512x512.png',
      ogImageWidth: '600',
      ogImageHeight: '400'
    },
    manifest: {
      lang: 'en',
      name: 'PUSDOKKES PORTAL',
      short_name: 'PUSDOKKES PORTAL',
      description : "Kedokteran Dan Kesehatan - Polri",
      start_url: '/',
      lang: 'en',
      display: 'standalone',
      theme_color: '#2f80ed',
      background_color: '#4f46e5',
      icons: [
      {
        "src": "/icon-48x48.png",
        "sizes": "48x48",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-152x152.png",
        "sizes": "152x152",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable any"
      }
      ]
    },
  },
  robots: {
    UserAgent: '*',
    Disallow: '/'
  },
  moment: {
    timezone: true,
    defaultTimezone: 'Asias/Jakarta',
    locales: ['id']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}