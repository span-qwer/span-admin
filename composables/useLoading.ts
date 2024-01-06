import { ref } from 'vue'

export default function (fun) {
  const LoadingCounter = ref(0)
  const Loading = ref(false)
  const show = ref(false)

  // return new Proxy(fun, {
  //   get: function (tar, prop, reactive) {
  //     if (prop === 'show') return show.value
  //     if (prop === 'Loading') return Loading.value
  //     if (prop === 'LoadingCounter') return LoadingCounter.value
  //     return Reflect.get(tar, prop, reactive)
  //   },
  //   apply: function (tar, _this, args) {
  //     let r = tar.apply(_this, args)
  //     if (r && typeof r.finally === 'function') {
  //       LoadingCounter.value += 1
  //       Loading.value = !!LoadingCounter.value

  //       r = r.finally(() => {
  //         show.value = true
  //         LoadingCounter.value -= 1
  //         Loading.value = !!LoadingCounter.value
  //       })
  //     }
  //     return r
  //   }
  // })
  function newfn(...args) {
    let r = fun.apply(this, args)
    if (r && typeof r.finally === 'function') {
      LoadingCounter.value += 1
      Loading.value = !!LoadingCounter.value

      r = r.finally(() => {
        show.value = true
        LoadingCounter.value -= 1
        Loading.value = !!LoadingCounter.value
      })
    }
    return r
  }
  newfn.LoadingCounter = LoadingCounter
  newfn.Loading = Loading
  newfn.show = show
  return newfn
}
