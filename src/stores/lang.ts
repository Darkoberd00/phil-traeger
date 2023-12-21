import { ref } from 'vue'
import { defineStore } from 'pinia'
import { setLang } from '@/main'

export const useLangStore = defineStore('lang', () => {
  /**
   * Stored language
   */
  const lang = ref('de-DE')

  /**
   * Change Language
   *
   * Toggles between two language options, switching the current language between 'de-DE' and 'en-US'.
   * After changing the language, it also updates the application's language setting.
   */
  function changeLang() {
    if (lang.value === 'de-DE') {
      lang.value = 'en-US'
    } else {
      lang.value = 'de-DE'
    }
    setLang(lang.value)
  }

  /**
   * Check if the Current Language is German ('de-DE')
   *
   * @returns {boolean} - True if the current language is 'de-DE', otherwise false.
   */
  function isDE(): boolean {
    return lang.value === 'de-DE'
  }

  return { changeLang, isDE }
})
