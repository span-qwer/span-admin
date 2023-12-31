import { type Ref, ref } from 'vue'

export default function (fun: Function): any {
  const LoadingCounter: Ref<number> = ref(0)
  const Loading: Ref<boolean> = ref(false)
  const show = ref(false)

  return new Proxy(fun, {
    get: function (tar, prop, reactive) {
      if (prop === 'show') return show.value
      if (prop === 'Loading') return Loading.value
      if (prop === 'LoadingCounter') return LoadingCounter.value
      return Reflect.get(tar, prop, reactive)
    },
    apply: function (tar, _this, args) {
      let r = tar.apply(_this, args) as Promise<any>
      if (r && typeof r.finally === 'function') {
        LoadingCounter.value += 1
        Loading.value = !!LoadingCounter.value

        r = r.finally(() => {
          show.value = true
          LoadingCounter.value -= 1
          Loading.value = !!LoadingCounter.value
        }) as Promise<any>
      }
      return r
    }
  })

  // function newfn(...args: any[]) {
  //   let r = fun.apply(this, args)
  //   if (r && typeof r.finally === 'function') {
  //     LoadingCounter.value += 1
  //     Loading.value = !!LoadingCounter.value

  //     r = r.finally(() => {
  //       show.value = true
  //       LoadingCounter.value -= 1
  //       Loading.value = !!LoadingCounter.value
  //     })
  //   }
  //   return r
  // }
  // newfn.LoadingCounter = LoadingCounter
  // newfn.Loading = Loading
  // newfn.show = show
  // return newfn
}
