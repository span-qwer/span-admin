<template>
  <div class="min-h-screen min-w-screen bg-bg1">
    <LazyPcHeader />
    <main class="p-[30px]">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { appStore } from '../stores/app'
const store = appStore()
</script>

<style></style>
