export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  eslint: {
    config: {
      stylistic: true,
    },
  },

  image: {
    quality: 70,
  },

  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/image',
  ],
})
