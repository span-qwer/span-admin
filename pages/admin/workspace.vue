<template>
  <div class="flex justify-between">
    <h1>{{ timestr }}</h1>
    <div class="w-[600px] border-[1px] border-solid border-tx1">
      <el-calendar :value="new Date()" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({})
const { timestr } = useClock()
</script>

<style scoped></style>
