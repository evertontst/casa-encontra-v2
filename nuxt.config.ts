// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxthub/core',
    '@nuxt/ui',
    'nuxt-auth-utils',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    '@nuxtjs/tailwindcss'
  ],
  devtools: {
    enabled: true
  },
  css: [
    '@/assets/css/app.css'
  ],
  colorMode: {
    preference: 'light'
  },
  runtimeConfig: {
    public: {
      auth: {
        redirectUserTo: '/user',
        redirectGuestTo: '/login'
      }
    }
  },
  dir: {
    app: 'app'
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',
  hub: {
    database: true,
    kv: true
  },
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  }
})
