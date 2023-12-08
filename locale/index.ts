import en from './en.js'
import cn from './cn.js'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'cn',
  messages: {
    cn: { ...cn },
    en: { ...en }
  }
}))
