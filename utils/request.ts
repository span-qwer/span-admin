import { ElMessage } from 'element-plus'

export const $http = (opts: any) => {
  if (Object.prototype.toString.call(opts) === '[object String]') {
    return $fetch(`/api${opts}`)
  }

  const target = `/api${opts.url}`
  const options = {
    ...opts,
    // query: { b: 2 },
    // body: { hello: 'world '},
    // method: 'POST',

    // async onResponseError({ error }) {
    //   console.log('response 出错啦,error信息是=========', error)
    // },
    async onRequest({ options }: any) {
      const store = appStore()
      if (store.authToken) {
        options.headers = {
          ...options.headers,
          token: store.authToken
        }
      }
    },
    // async onRequestError({ error }) {
    //   console.log('request 出错啦,error信息是=========', error)
    // },
    async onResponse({ response }: any) {
      const { status, statusText } = response
      if (status !== 200) return ElMessage.error(statusText)
    }
  }
  options.url && delete options.url

  return $fetch(target, options)
}
