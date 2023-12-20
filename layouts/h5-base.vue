<template>
  <div class="base">
    <div>this is h5 {{ store.appId }}</div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const store = appStore()
</script>

<style></style>
