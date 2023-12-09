<template>
  <header
    class="h-[--header-height] bg-base-bg2 flex items-center justify-between px-[15px] fixed top-0 left-0 right-0 gap-[20px]"
  >
    <div
      class="h-[--header-height] flex items-center justify-between gap-[20px] w-[1280px] mx-auto"
    >
      <LazyPcCompLogo />
      <LazyPcMenuHeader />
      <div class="flex-x gap-[20px] justify-end">
        <el-button
          :type="isDark ? 'primary' : 'info'"
          circle
          @click="toggleDark()"
          class="!text-base-sz4"
          :icon="isDark ? Sunny : Moon"
        />
        <LazyPcCompLocale />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Moon, Sunny } from '@element-plus/icons-vue'
const dark = useDark({ disableTransition: false })
const toggleDark = useToggle(dark)
const isDark = ref(dark)
onMounted(() => {
  isDark.value = !dark.value
})
</script>

<style lang="scss" scoped></style>
