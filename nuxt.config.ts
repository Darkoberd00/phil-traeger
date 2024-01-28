// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon','@nuxtjs/i18n','@nuxt/content','@nuxt/image',],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    locales: [
      {
        code: 'de',
        file: 'de.json'
      },
      {
        code: 'en',
        file: 'en.json'
      }
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'de',
  },
  image: {
    providers:{
      tenor: {
        name: "tenor",
        provider: "~/providers/tenor.ts",
        options: {
          baseURL: "https://media.tenor.com"
        }
      }
    }
  }
})
