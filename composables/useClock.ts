import { ref, onMounted, onUnmounted } from 'vue'

export default function () {
  const { dayjs } = useDayjs()
  const time = ref(new Date())
  const timer = ref()
  const timestr = computed(() => {
    return dayjs(time.value).format('YYYY/MM/DD hh:mm:ss')
  })

  onMounted(() => {
    timer.value = setInterval(() => {
      time.value = new Date()
    }, 1000)
  })

  onUnmounted(() => {
    timer.value && clearInterval(timer.value)
    timer.value = null
  })

  return { timestr }
}
