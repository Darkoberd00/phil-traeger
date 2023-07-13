import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createI18n } from 'vue-i18n'
import type { MessageSchema } from './i18n/schema'
import en from './i18n/en.json'
import de from './i18n/de.json'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import * as ViIcons from 'oh-vue-icons/icons/vi'
import { BiThreeDots, PiEevee, HiMenuAlt2, BiGithub, BiTwitter, BiInstagram, BiLinkedin, CoKoFi } from 'oh-vue-icons/icons'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n<[MessageSchema], 'en-US' | 'de-DE'>({
  legacy: false,
  locale: 'de-DE',
  globalInjection: true,
  messages: {
    'en-US': en,
    'de-DE': de
  }
})

const Vi = Object.values({ ...ViIcons })

addIcons(...Vi, BiThreeDots, PiEevee, HiMenuAlt2, BiGithub, BiTwitter, BiInstagram, BiLinkedin, CoKoFi)

app.component('v-icon', OhVueIcon)
app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
