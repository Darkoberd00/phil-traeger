import './assets/main.css'

import { createApp, ref } from 'vue'
import { createPinia } from 'pinia'

import { createI18n } from 'vue-i18n'
import type { MessageSchema } from './i18n/schema'
import en from './i18n/en.json'
import de from './i18n/de.json'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import * as Icons from '@/utils'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())

const i18n = ref(
  createI18n<[MessageSchema], 'en-US' | 'de-DE'>({
    legacy: false,
    locale: 'de-DE',
    messages: {
      'en-US': en,
      'de-DE': de
    }
  })
)

// TODO: fix me
export function setLang(lang: string) {
  if (lang === 'en-US' || lang === 'de-DE') {
    i18n.value.global.locale = lang
  } else {
    i18n.value.global.locale = 'de-DE'
  }
}

const Vi = Object.values({ ...Icons })

addIcons(...Vi)

app.component('v-icon', OhVueIcon)
app.use(i18n.value)

app.use(router)

app.mount('#app')
