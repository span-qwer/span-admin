// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    // '@': './'
  },
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/device',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@formkit/auto-animate/nuxt'
  ],
  i18n: {
    vueI18n: './locale/index.ts'
  },
  css: ['@/assets/style.css', '@unocss/reset/normalize.css']
})
