export const typeof_ = (any: any) => {
  return Object.prototype.toString.call(any).slice(8, -1)
}

const baseDateFormat = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false
})
export const dateFormat = (date: Date) => {
  if (typeof_(date) !== 'Date') return date
  return baseDateFormat.format(date)
}

const baseNumberFormatCNY = new Intl.NumberFormat('zh-CN', {
  style: 'currency',
  currency: 'CNY'
})
export const moneyFormatCNY = (num: number) => {
  if (typeof_(num) !== 'Number') return num
  return baseNumberFormatCNY.format(num)
}
