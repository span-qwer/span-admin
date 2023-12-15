// import { ref, reactive } from 'vue'

// export default function (funs) {
//   if (!funs || !funs.length) return

//   const fLoadingCounter = reactive({})
//   const fLoading = reactive({})
//   const f = reactive({})

//   funs.map(fun => {
//     const fnName = fun.name
//     fLoadingCounter[fnName] = 0
//     fLoading[fnName] = false
//     const newFun = function (...args) {
//       let r = fun.apply(this, args)
//       if (r && typeof r.finally === 'function') {
//         fLoadingCounter[fnName] += 1
//         fLoading[fnName] = !!fLoadingCounter[fnName]

//         r = r.finally(() => {
//           fLoadingCounter[fnName] -= 1
//           fLoading[fnName] = !!fLoadingCounter[fnName]
//         })
//       }
//       return r
//     }
//     f[fnName] = newFun
//     fun.loading = fLoading[fnName]
//   })

//   return { f, fLoading, fLoadingCounter }
// }

import { reactive } from 'vue'

interface FLoadingCounter {
  [key: string]: number
}

interface FLoading {
  [key: string]: boolean
}

interface F {
  [key: string]: (...args: any[]) => Promise<any>
}

export default function (funs: Array<Function> | null | undefined) {
  if (!funs || !funs.length) return

  const fLoadingCounter: FLoadingCounter = reactive({})
  const fLoading: FLoading = reactive({})
  const f: F = reactive({})

  funs.map(fun => {
    const fnName = fun.name
    fLoadingCounter[fnName] = 0
    fLoading[fnName] = false

    const newFun = function (...args: any[]) {
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
    ;(fun as any).loading = fLoading[fnName]
  })

  return { f, fLoading, fLoadingCounter }
}
