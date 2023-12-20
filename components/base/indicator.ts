import { computed, defineComponent, h, onBeforeUnmount, ref } from 'vue'
import type { RouteLocationNormalized } from '#vue-router'
// @ts-expect-error virtual file
import { globalMiddleware } from '#build/middleware'

function generateRouteKey(route: RouteLocationNormalized) {
  const source =
    route?.meta.key ??
    route.path
      .replace(/(:\w+)\([^)]+\)/g, '$1')
      .replace(/(:\w+)[?+*]/g, '$1')
      .replace(/:\w+/g, r => route.params[r.slice(1)]?.toString() || '')
  return typeof source === 'function' ? source(route) : source
}

function isChangingPage(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) {
  if (to === from) {
    return false
  }

  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true
  }

  const areComponentsSame = to.matched.every(
    (comp, index) =>
      comp.components &&
      comp.components.default === from.matched[index]?.components?.default
  )
  if (areComponentsSame) {
    return false
  }
  return true
}

export default defineComponent({
  name: 'base-indicator',
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2000
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default:
        'repeating-linear-gradient(to right,#25371c 0%,#4e8e2f 50%,#67C23A 100%)'
    }
  },
  setup(props, { slots }) {
    const progress = ref(0)
    const isLoading = ref(false)
    const step = computed(() => 10000 / props.duration)

    let _timer: any = null
    let _throttle: any = null
    function clear() {
      clearInterval(_timer)
      clearTimeout(_throttle)
      _timer = null
      _throttle = null
    }

    function _startTimer() {
      if (import.meta.client) {
        _timer = setInterval(() => {
          progress.value = Math.min(100, progress.value + step.value)
        }, 100)
      }
    }

    function start() {
      clear()
      progress.value = 0
      isLoading.value = true
      _startTimer()
    }

    function finish() {
      progress.value = 100
      clear()
      if (import.meta.client) {
        setTimeout(() => {
          isLoading.value = false
          progress.value = 0
        }, 300)
      }
    }

    if (import.meta.client) {
      const nuxtApp = useNuxtApp()
      const router = useRouter()

      globalMiddleware.unshift(start)
      router.onError(() => {
        finish()
      })
      router.beforeResolve((to, from) => {
        if (!isChangingPage(to, from)) {
          finish()
        }
      })

      router.afterEach((_to, _from, failure) => {
        if (failure) {
          finish()
        }
      })

      const unsubPage = nuxtApp.hook('page:finish', finish)
      const unsubError = nuxtApp.hook('vue:error', finish)

      onBeforeUnmount(() => {
        const index = globalMiddleware.indexOf(start)
        if (index >= 0) {
          globalMiddleware.splice(index, 1)
        }
        unsubPage()
        unsubError()
        clear()
      })
    }

    return () =>
      h(
        'div',
        {
          style: {
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            width: `${progress.value}%`, //'auto',
            height: isLoading.value ? `${props.height}px` : 0,
            opacity: isLoading.value ? 1 : 0,
            background: props.color || undefined,
            transition: 'width .3s',
            zIndex: 999999
          }
        },
        slots
      )
  }
})
