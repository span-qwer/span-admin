import { type Ref, ref } from 'vue'

export default function (fun: Function): any {
  const fLoadingCounter: Ref<number> = ref(0)
  const fLoading: Ref<boolean> = ref(false)

  return new Proxy(fun, {
    get: function (tar, prop, reactive) {
      if (prop === 'Loading') return fLoading.value
      if (prop === 'LoadingCounter') return fLoadingCounter.value
      return Reflect.get(tar, prop, reactive)
    },
    apply: function (tar, _this, args) {
      let r = tar.apply(_this, args) as Promise<any>
      if (r && typeof r.finally === 'function') {
        fLoadingCounter.value += 1
        fLoading.value = !!fLoadingCounter.value

        r = r.finally(() => {
          fLoadingCounter.value -= 1
          fLoading.value = !!fLoadingCounter.value
        }) as Promise<any>
      }
      return r
    }
  })
}
