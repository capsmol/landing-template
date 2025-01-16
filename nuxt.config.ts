// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
  ],
  // components: {
  //   dirs: [],
  // },
  devtools: { enabled: true },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  compatibilityDate: '2024-04-03',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  shadcn: {
    prefix: '',
  },
})