// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@nuxtjs/i18n', '@nuxt/content', '@nuxt/image'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
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
    defaultLocale: 'de'
  },
  image: {
    providers: {
      tenor: {
        name: 'tenor',
        provider: '~/providers/tenor.ts',
        options: {
          baseURL: 'https://media.tenor.com'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      URL: process.env.PUBLIC_URL || 'http://localhost:3000',
      NAME: process.env.PUBLIC_NAME || 'Max Mustermann',
      BIRTHDAY: process.env.PUBLIC_BIRTHDAY || '1990-01-01',
      GITHUB_USER: process.env.PUBLIC_GITHUB_USER || 'Maximuster',
      GITHUB_NONE_SHOW_REPOS: process.env.PUBLIC_GITHUB_NONE_SHOW_REPOS || 'Maximuster,test'
    },
    private: {
      TENOR_API_KEY: process.env.TENOR_API_KEY || 'KEY'
    }
  }
})
