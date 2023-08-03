import '@/assets/main.css'
import '@/../env.d.ts'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createI18n } from 'vue-i18n'
import type { MessageSchema } from '@/i18n/schema'
import en from '@/i18n/en.json'
import de from '@/i18n/de.json'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import * as Icons from '@/utils/icons'

import App from '@/App.vue'
import router from '@/router'
import type { IconType } from 'oh-vue-icons/types/icons'

const app = createApp(App)
app.use(createPinia())

const i18n = createI18n<[MessageSchema], 'en-US' | 'de-DE'>({
  legacy: false,
  locale: 'de-DE',
  messages: {
    'en-US': en,
    'de-DE': de
  }
})

app.use(i18n)

const locale: any = i18n.global.locale
export function setLang(lang: string) {
  if (lang === 'en-US' || lang === 'de-DE') {
    locale.value = lang
  } else {
    locale.value = 'de-DE'
  }
}

const Vi: IconType[] = Object.values({ ...Icons })

addIcons(...Vi)

app.component('v-icon', OhVueIcon)

app.use(router)

app.mount('#app')
