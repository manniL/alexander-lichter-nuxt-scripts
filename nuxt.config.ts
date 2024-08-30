export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        style: 'background-color: #111; color: #f0f0f0'
      }
    }
  },
  future: {
    compatibilityVersion: 4
  },
  modules: ['@nuxt/scripts'],
  devtools: { enabled: true },
  compatibilityDate: '2024-07-19'
})