import dayjs from 'dayjs'
import cnDayjs from 'dayjs/locale/zh-cn'
import enDayjs from 'dayjs/locale/en'
import useLocales from './useLocales'

export default function () {
  const { locale }: any = useLocales()
  const dayjs_: any = { cn: cnDayjs, en: enDayjs }
  dayjs.locale(dayjs_[locale.value])

  return { dayjs }
}
