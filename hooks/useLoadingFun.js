import { ref, reactive } from 'vue'

export const useLoadingFun = funs => {
  if (!funs || !funs.length) return

  const fLoadingCounter = reactive({})
  const fLoading = reactive({})
  const f = reactive({})

  funs.map(fun => {
    const fnName = fun.name
    fLoadingCounter[fnName] = 0
    fLoading[fnName] = false
    const newFun = function (...args) {
      let r = fun.apply(this, args)
      if (r && typeof r.finally === 'function') {
        fLoadingCounter[fnName] += 1
        fLoading[fnName] = !!fLoadingCounter[fnName]

        r = r.finally(() => {
          fLoadingCounter[fnName] -= 1
          fLoading[fnName] = !!fLoadingCounter[fnName]
        })
      }
      return r
    }
    f[fnName] = newFun
    fun.loading = fLoading[fnName]
  })

  // loading.value = true
  // fun().finally(() => {
  //   loading.value = false
  // })

  return { f, fLoading, fLoadingCounter }
}
