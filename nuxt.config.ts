// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  gtag: {
    id: 'G-YL6HE1XPXP'
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-gtag", "@nuxt/icon"],
  app: {
    head: {
      title: 'Ranner', // Cambia el título según lo desees
      meta: [
        { name: 'description', content: 'Tu espacio de aprendizaje interactivo' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/ranners1500.png' } // Referencia al favicon
      ],
    },
  },
});
