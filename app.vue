<template>
  <NuxtLayout :name="layout">
    <!-- <NuxtWelcome /> -->
    <div class="flex flex-col gap-4">
      <div
        class="text-tx1 flex justify-center items-center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing
      </div>
      <div
        class="text-tx2 flex justify-center items-center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing
      </div>
      <div
        class="text-tx3 flex justify-center items-center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing
      </div>
    </div>
    <div>
      {{ $t('title') }}
    </div>
    <el-button @click="sortAsc" type="success">
      sortAsc
    </el-button>
    <el-button @click="sortDesc" type="success">
      sortDesc
    </el-button>
    <ul v-auto-animate>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
  </NuxtLayout>
</template>
<script setup lang="ts">
const { isMobile } = useDevice()

const layout = computed(() => {
  return !!isMobile ? 'h5-base' : 'pc-base'
})

const items = ref(['React', 'Vue', 'Svelte', 'Angular'])

function sortAsc() {
  items.value.sort()
}
function sortDesc() {
  items.value.sort().reverse()
}
</script>
<style></style>
