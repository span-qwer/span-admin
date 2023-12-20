<template>
  <NuxtLayout name="base-admin">
    <NuxtPage
      :transition="{
        name: 'slide',
        mode: 'in-out', //  'in-out' | 'out-in' | 'default'
        appear: true
      }"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})
</script>

<style>
.slide-enter-active,
.fade-enter-active,
.blur-enter-active,
.scale-enter-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translate(-30px);
  filter: blur(0.5rem);
  /* transform: scale(0.9); */
}

.fade-enter-from {
  opacity: 0;
}

.blur-enter-from {
  opacity: 0;
  filter: blur(0.5rem);
}

.scale-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
</style>
