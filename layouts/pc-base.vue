<template>
  <div class="base">
    <div>this is pc {{ store.appId }}</div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const store = appStore()
</script>

<style></style>
