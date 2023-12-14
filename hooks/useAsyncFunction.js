import { ref, reactive } from 'vue'

export default function (fun) {
  const fLoadingCounter = ref(0)
  const fLoading = ref(false)
  return new Proxy(fun, {
    get: function (tar, prop, reactive) {
      if (prop === 'Loading') return fLoading.value
      if (prop === 'LoadingCounter') return fLoadingCounter.value
      return Reflect.get(...arguments)
    },
    apply: function (tar, _this, args) {
      let r = tar.apply(_this, args)
      if (r && typeof r.finally === 'function') {
        fLoadingCounter.value += 1
        fLoading.value = !!fLoadingCounter.value

        r = r.finally(() => {
          fLoadingCounter.value -= 1
          fLoading.value = !!fLoadingCounter.value
        })
      }
      return r
    }
  })
}
