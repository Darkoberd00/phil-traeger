// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  imports: {
    dirs: [
      "stores"
    ]
  },  

  modules: [
    ["@pinia/nuxt", {
      autoImports: ["defineStore", "acceptHMRUpdate"]
    }]
  ],

  alias: {
    "pinia": "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },

  routeRules: {
    "/spa": {ssr: false},
    "/static": {static: true},
    "/swr": { swr: true },
  }
})
