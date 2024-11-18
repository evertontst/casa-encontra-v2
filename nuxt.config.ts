// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',
  hub: {
    database: true
  },
  colorMode: {
    preference: 'light'
  },
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  },
  hub: {
    database: true,
    kv: true,
  },
  modules: [
    '@nuxthub/core',
    '@nuxt/ui',
    'nuxt-auth-utils',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    '@nuxtjs/tailwindcss'
  ],
   runtimeConfig: {
    public: {
      auth: {
        redirectUserTo: '/user',
        redirectGuestTo: '/',
      },
    },
  },
   dir: {
    app: 'app'
  },
  css: [
    '@/assets/css/app.css',
  ]
})