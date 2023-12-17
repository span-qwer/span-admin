<template>
  <div class="h-[100vh] w-[100vw]">
    <div>this is h5 {{ store.appId }}</div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { appStore } from '@/store/appStore'
const store = appStore()
</script>

<style></style>