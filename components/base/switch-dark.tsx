import { Sunny, Moon } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'switch-dark',

  setup(props: any, { slots, attrs }: any) {
    const dark = useDark({ disableTransition: false })
    const toggleDark = useToggle(dark)

    const show = ref(false)
    onMounted(async () => {
      await nextTick()
      show.value = true
    })

    return () =>
      show.value && (
        <el-button
          circle
          class={'!text-base-sz4'}
          icon={dark.value ? Sunny : Moon}
          type={dark.value ? 'primary' : 'info'}
          onClick={() => {
            toggleDark()
          }}
          {...attrs}
        />
      )
  }
})
