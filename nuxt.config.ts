// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {},
  alias: {},
  devtools: { enabled: true },
  // ssr: false,
  modules: [
    '@nuxt/image',
    '@unocss/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/device',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@formkit/auto-animate/nuxt',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }]
  ],
  i18n: {
    vueI18n: './locale/index.ts'
  },
  css: ['@/assets/style.css', 'element-plus/theme-chalk/dark/css-vars.css'],
  devServer: {
    port: 5173
  }
})
