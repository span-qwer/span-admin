export const detection_ = (item: any) => {
  if (Object.prototype.toString.call(item) === '[object Undefined]')
    return 'Undefined'
  if (Object.prototype.toString.call(item) === '[object Null]') return 'Null'
  if (Object.prototype.toString.call(item) === '[object Boolean]')
    return 'Boolean'
  if (Object.prototype.toString.call(item) === '[object String]')
    return 'String'
  if (Object.prototype.toString.call(item) === '[object Number]')
    return 'Number'
  if (Object.prototype.toString.call(item) === '[object Array]') return 'Array'
  if (Object.prototype.toString.call(item) === '[object Object]')
    return 'Object'
  if (Object.prototype.toString.call(item) === '[object Function]')
    return 'Function'
}
