const getData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ appId: '19910909' })
    }, 1000)
  })
}

export default defineEventHandler(async event => {
  const { appId } = await getData()
  return {
    appId
  }
})
