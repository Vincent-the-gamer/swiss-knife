// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Swiss Knife",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
    },
  },
  css: [
    '~/assets/css/main.scss'
  ],
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode'
  ],
  compatibilityDate: '2024-11-16',
  logLevel: "info",
  devServer: {
    port: 8080
  },
  devtools: { 
    enabled: true
  },
  // Cross Origin
  routeRules: {
    '/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Method': 'PUT,POST,GET,DELETE,OPTIONS',
      },
    },
  },
})
