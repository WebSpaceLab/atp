// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },
  typescript: { shim: false, },
  srcDir: 'app',
  ssr: true,
  modules: [
    '@nuxthub/core',
    "@nuxt/eslint",
    "@nuxt/ui",
    "nuxt-auth-utils",
    '@pinia/nuxt',
    "@nuxt/content",
    "@nuxt/image"
  ],
  hub: {
    database: true,
    kv: true,
    blob: true,
    cache: true,
  },
  nitro: {
    experimental: {
      // Enable Server API documentation within NuxtHub
      openAPI: true
    }
  },
  css: ['~/assets/styles/app.css'],

  // runtimeConfig: {
  //   // oauth: {
  //   //   // ts-ignore
  //   //   Google: {
  //   //     // @ts-ignore
  //   //     clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
  //   //     // @ts-ignore
  //   //     clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET
  //   //   }
  //   // }

  // },

})