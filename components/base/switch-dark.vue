<template>
  <el-button
    v-if="show"
    ref="btn"
    circle
    class="!text-base-sz4"
    :icon="dark ? Sunny : Moon"
    :type="dark ? 'primary' : 'info'"
    @click="toggleDark()"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { Moon, Sunny } from '@element-plus/icons-vue'
const dark = useDark({ disableTransition: false })
const toggleDark = useToggle(dark)
const show = ref(false)
onMounted(async () => {
  await nextTick()
  show.value = true
})
</script>

<style scoped></style>
