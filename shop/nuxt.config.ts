// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: {enabled: true},

  app: {

      head: {
          link: [
              {rel: 'stylesheet', href: 'https://unpkg.com/primeflex@latest/primeflex.css'},
              {rel: 'stylesheet', href: 'https://unpkg.com/primevue/resources/themes/lara-light-indigo/theme.css'}
          ],
          title: 'Интернет магазин',
          meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ],

      },

      pageTransition: {name: 'page', mode: 'out-in'},
      spaLoadingTemplate: true,
  },

  modules: [
      '@pinia/nuxt',
      '@pinia-plugin-persistedstate/nuxt',
  ],

  compatibilityDate: '2024-07-03',
})