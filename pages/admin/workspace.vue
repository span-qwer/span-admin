<template>
  <div>
    <div class="w-[600px]">
      <el-calendar :value="new Date()" />
    </div>
    <h1>{{ timestr }}</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({})
const { dayjs } = useDayjs()
const time = ref(new Date())
const timer = ref()
const timestr = computed(() => {
  return dayjs(time.value).format('YYYY-MM-DD hh:mm:ss')
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
</script>

<style scoped></style>
