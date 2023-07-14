import { ref } from 'vue'
import { defineStore } from 'pinia'
import { setLang } from '@/main'

export const useLangStore = defineStore('lang', () => {
  const lang = ref('de-DE')
  function changeLang() {
    if (lang.value === 'de-DE') {
      lang.value = 'en-US'
    } else {
      lang.value = 'de-DE'
    }
    setLang(lang.value)
  }
  function isDE() {
    return lang.value === 'de-DE'
  }

  return { lang, changeLang, isDE }
})
