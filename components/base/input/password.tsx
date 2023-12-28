export default defineComponent({
  name: 'input-password',
  inheritAttrs: false,
  setup(props: any, { slots, attrs, emit }: any) {
    let zifuji: any = []

    const password = computed({
      get: () => {
        return attrs.modelValue
      },
      set: val => {
        const stringArr = Array.from(val + '')
        const strLength = stringArr.length
        const lastString = stringArr[strLength - 1]
        const { len = 8, reg = /^[A-Za-z0-9]+$/g } = attrs

        if (strLength > len) {
          emit('update:modelValue', zifuji.join(''))
          return
        }

        if (!reg.test(lastString)) {
          emit('update:modelValue', zifuji.join(''))
          return
        }

        if (!strLength) {
          zifuji = []
        } else if (strLength === 1) {
          zifuji = [lastString]
        } else if (strLength < zifuji.length) {
          zifuji.pop()
        } else {
          zifuji.push(lastString)
        }

        emit('update:modelValue', zifuji.join(''))
      }
    })

    const hiddenpw = computed(() => {
      return Array.from(password.value + '')
        .map(() => '•')
        .join('')
    })

    const attrs_ = {
      ...attrs,
      onInput(e: any) {
        password.value = e
      }
    }

    return () => (
      <el-input
        {...attrs_}
        v-slots={slots}
        modelValue={hiddenpw.value}
        type={'text'}
      />
    )
  }
})
