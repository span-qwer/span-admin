import { ElMessage } from 'element-plus'

export const $http = (url: string, opts?: any) => {
  const target = `/api${url}`

  return $fetch(target, {
    query: { b: 2 },
    body: { hello: 'world '},
    method: 'POST',
    ...opts,
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
    // async onResponseError({ error }) {
    //   console.log('response 出错啦,error信息是=========', error)
    // },
  })
}
