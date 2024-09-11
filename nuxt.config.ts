// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  gtag: {
    id: 'G-YL6HE1XPXP'
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-gtag", "@nuxt/icon"]
})