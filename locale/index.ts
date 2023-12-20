import en from './en.js'
import cn from './cn.js'
import { useStorage } from '@vueuse/core'

export default defineI18nConfig(() => {
  const locale: any = useStorage('locale', 'cn')
  return {
    legacy: false,
    locale: locale.value,
    messages: {
      cn: { ...cn },
      en: { ...en }
    }
  }
})
