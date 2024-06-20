// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  imports: {
    dirs: [
      "stores"
    ]
  },  

  modules: [["@pinia/nuxt", {
    autoImports: ["defineStore", "acceptHMRUpdate"]
  }], "@nuxt/image"],

  alias: {
    "pinia": "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },

  image: {
    domains: ["m.media-amazon.com"]
  },

  routeRules: {
    "/spa": {ssr: false},
    "/static": {static: true},
    "/swr": { swr: true },
  }
})