import en from './en.js'
import cn from './cn.js'
import { useStorage } from '@vueuse/core'

export default defineI18nConfig(() => {
  const locale = useStorage('locale').value
  return {
    legacy: false,
    locale: locale || 'cn',
    messages: {
      cn: { ...cn },
      en: { ...en }
    }
  }
})
