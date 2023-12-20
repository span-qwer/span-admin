<template>
  <div class="w-[200px] bg-blue-3 flex flex-col h-[auto] dark:bg-blue-9">
    <BaseLink
      v-for="item in store.menu"
      :eky="item.path"
      :to="item.path"
      :class="{ '!bg-blue-5': route.path == item.path }"
      class="py-[10px] px-[20px] animation300 text-base-sz4 bg-blue-4 dark:bg-blue-7 hover:bg-blue-5"
    >
      {{ item.name }}
    </BaseLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const store: any = appStore()
</script>
