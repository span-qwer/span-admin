<template>
  <div class="w-[200px] bg-blue-3 flex flex-col h-[auto] dark:bg-blue-9">
    <BaseLink
      class="flex justify-center p-[10px] animation300 text-base-sz4 bg-blue-4 dark:bg-blue-7 hover:bg-blue-5"
      :class="{ '!bg-blue-5': route.path == '/admin/workspace' }"
      to="/admin/workspace"
    >
      workspace
    </BaseLink>
    <BaseLink
      class="flex justify-center p-[10px] animation300 text-base-sz4 bg-blue-4 dark:bg-blue-7 hover:bg-blue-5"
      :class="{ '!bg-blue-5': route.path == '/admin/list' }"
      to="/admin/list"
    >
      list
    </BaseLink>
  </div>
</template>

<script setup lang="ts">
const active = ref(true)
const route = useRoute()
onMounted(() => {
  // console.log('%cmenu.vue line:23 route', 'color: #007acc;', route)
})
</script>
